"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, AlertCircle, Check, X, MapPin, Globe, Car, Train } from 'lucide-react';
import { useNavigation } from '@/context/NavigationContext';
import Highlight from '@/components/ui/Highlight';

export default function ContactForm() {
  const { setContactStatus } = useNavigation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: 'recruiting_company',
    location: 'remote',
    address: '',
    message: ''
  });

  const [techInput, setTechInput] = useState('');
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [techError, setTechError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [addressError, setAddressError] = useState('');
  const [isCheckingLocation, setIsCheckingLocation] = useState(false);
  const [distanceValue, setDistanceValue] = useState<number | null>(null);
  const [travelStats, setTravelStats] = useState<{ car: string, publicTransport: string } | null>(null);
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    const cooldownUntil = localStorage.getItem('contactCooldown');
    if (cooldownUntil) {
      const remaining = Math.ceil((parseInt(cooldownUntil) - Date.now()) / 1000);
      if (remaining > 0) {
        setSubmitted(true);
        setCooldown(remaining);
      } else {
        localStorage.removeItem('contactCooldown');
      }
    }
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (submitted && cooldown > 0) {
      interval = setInterval(() => {
        setCooldown(prev => {
          if (prev <= 1) {
            localStorage.removeItem('contactCooldown');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [submitted, cooldown]);

  const forbiddenTech = ['net', '.net', 'sharepoint', 'azure', 'pega', 'c#'];

  const handleTechKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addTech();
    }
  };

  const addTech = () => {
    const tech = techInput.trim().toLowerCase();
    if (!tech) return;

    if (forbiddenTech.some(ft => tech.includes(ft))) {
      setTechError(`I do not accept projects involving ${techInput.trim()}. I specialize in Java/Spring & JS/React ecosystems.`);
      return;
    }

    if (!technologies.includes(techInput.trim())) {
      setTechnologies([...technologies, techInput.trim()]);
    }
    setTechInput('');
    setTechError('');
  };

  const removeTech = (techToRemove: string) => {
    setTechnologies(technologies.filter(t => t !== techToRemove));
  };

  const checkLocation = async (address: string) => {
    if (!address) return;
    setIsCheckingLocation(true);
    setAddressError('');
    setDistanceValue(null);
    setTravelStats(null);

    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&addressdetails=1`, {
        headers: {
          'User-Agent': 'PortfolioSite/1.0'
        }
      });
      const data = await response.json();

      if (data && data.length > 0) {
        const result = data[0];
        const countryCode = result.address?.country_code;

        const lat = parseFloat(result.lat);
        const lon = parseFloat(result.lon);
        
        try {
          const apiResponse = await fetch('/api/distance', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ lat, lon }),
          });
          
          if (apiResponse.ok) {
            const { distance, travelStats } = await apiResponse.json();
            setDistanceValue(Math.round(distance));
            setTravelStats(travelStats);

            if (distance > 25 && countryCode !== 'ch') {
              setAddressError(`Distance is ${Math.round(distance)}km. I only accept on-site offers within 25km of my location, Relocation is not an option, inside Germany.`);
            }
          } else {
             console.error('API Error');
          }
        } catch (error) {
          console.error('Error calling distance API', error);
        }
      } else {
        setAddressError('Could not find this address. Please try to be more specific.');
      }
    } catch (error) {
      setAddressError('Error checking location. Please try again.');
    } finally {
      setIsCheckingLocation(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitted) return;

    if ((formData.location === 'onsite' || formData.location === 'hybrid') && (addressError || !formData.address)) {
      if (!formData.address) setAddressError('Address is required for on-site/hybrid offers.');
      return;
    }

    const subject = `Portfolio Contact: ${formData.purpose} - ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Purpose: ${formData.purpose}
Location Preference: ${formData.location}
Address: ${(formData.location === 'onsite' || formData.location === 'hybrid') ? formData.address : 'N/A'}
Technologies: ${technologies.join(', ')}

Message:
${formData.message}
    `;

    console.log('[ContactForm] Sending email via API');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          purpose: formData.purpose,
          location: formData.location,
          address: (formData.location === 'onsite' || formData.location === 'hybrid') ? formData.address : 'N/A',
          technologies: technologies,
          message: formData.message
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const cooldownTime = Date.now() + 10 * 60 * 1000; // 10 minutes
      localStorage.setItem('contactCooldown', cooldownTime.toString());
      setCooldown(600);
      setSubmitted(true);
      setContactStatus('sent');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again later or contact me directly via email.');
    }
  };

  return (
    <>
      <div className="mb-6">
        <h3 className="text-xl font-bold text-ide-text-active group-hover:text-ide-accent transition-colors mb-2">
          <Highlight text="Get In Touch" />
        </h3>
        <p className="text-ide-text text-sm leading-relaxed">
          <Highlight text="Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!" />
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs text-ide-text uppercase font-bold">Name</label>
            <input 
              type="text" 
              required
              className="w-full bg-ide-bg border border-ide-border rounded p-2 text-ide-text focus:border-ide-accent outline-none transition-colors"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
              disabled={submitted}
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs text-ide-text uppercase font-bold">Email</label>
            <input 
              type="email" 
              required
              className="w-full bg-ide-bg border border-ide-border rounded p-2 text-ide-text focus:border-ide-accent outline-none transition-colors"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
              disabled={submitted}
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs text-ide-text uppercase font-bold">Phone (Optional)</label>
          <input 
            type="tel" 
            placeholder="+49..."
            className="w-full bg-ide-bg border border-ide-border rounded p-2 text-ide-text focus:border-ide-accent outline-none transition-colors"
            value={formData.phone}
            onChange={e => setFormData({...formData, phone: e.target.value})}
            disabled={submitted}
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs text-ide-text uppercase font-bold">Purpose</label>
          <select 
            className="w-full bg-ide-bg border border-ide-border rounded p-2 text-ide-text focus:border-ide-accent outline-none transition-colors"
            value={formData.purpose}
            onChange={e => setFormData({...formData, purpose: e.target.value})}
            disabled={submitted}
          >
            <option value="recruiting_company">Recruiting (My Company)</option>
            <option value="recruiting_client">Recruiting (For a Client)</option>
            <option value="personal_project">Personal Project / Freelance</option>
            <option value="buy_template">Buy This Website Template</option>
          </select>
        </div>

        {formData.purpose !== 'buy_template' && (
          <>
            <div className="space-y-1">
              <label className="text-xs text-ide-text uppercase font-bold">Location Preference</label>
              <div className="flex gap-4 mt-1">
                <label className="flex items-center gap-2 text-sm text-ide-text cursor-pointer">
                  <input 
                    type="radio" 
                    name="location" 
                    value="remote"
                    checked={formData.location === 'remote'}
                    onChange={e => setFormData({...formData, location: e.target.value})}
                    className="accent-ide-accent"
                    disabled={submitted}
                  />
                  <Globe size={14} /> Remote
                </label>
                <label className="flex items-center gap-2 text-sm text-ide-text cursor-pointer">
                  <input 
                    type="radio" 
                    name="location" 
                    value="hybrid"
                    checked={formData.location === 'hybrid'}
                    onChange={e => setFormData({...formData, location: e.target.value})}
                    className="accent-ide-accent"
                    disabled={submitted}
                  />
                  <Globe size={14} /> Hybrid
                </label>
                <label className="flex items-center gap-2 text-sm text-ide-text cursor-pointer">
                  <input 
                    type="radio" 
                    name="location" 
                    value="onsite"
                    checked={formData.location === 'onsite'}
                    onChange={e => setFormData({...formData, location: e.target.value})}
                    className="accent-ide-accent"
                    disabled={submitted}
                  />
                  <MapPin size={14} /> On-site
                </label>
              </div>
              
              {(formData.location === 'onsite' || formData.location === 'hybrid') && (
                <div className="mt-2">
                   <div className="flex justify-between items-end mb-1 px-1 flex-wrap gap-2">
                       <span className="text-xs text-ide-text/50">Address for distance calculation</span>
                       {distanceValue !== null && (
                          <div className="flex flex-col items-end gap-1">
                            <span className={`text-xs font-mono ${addressError ? 'text-red-400' : 'text-green-400'}`}>
                                {distanceValue}km from Kirchheim
                            </span>
                            {travelStats && !addressError && (
                              <div className="flex gap-3 text-[10px] text-ide-text/70">
                                <span className="flex items-center gap-1"><Car size={10} /> {travelStats.car}</span>
                                <span className="flex items-center gap-1"><Train size={10} /> {travelStats.publicTransport}</span>
                              </div>
                            )}
                          </div>
                       )}
                   </div>
                   <input 
                      type="text" 
                      placeholder="Office Address (Street, City, Country)"
                      className={`w-full bg-ide-bg border ${addressError ? 'border-red-500' : 'border-ide-border'} rounded p-2 text-ide-text focus:border-ide-accent outline-none transition-colors text-sm`}
                      value={formData.address}
                      onChange={e => setFormData({...formData, address: e.target.value})}
                      onBlur={(e) => checkLocation(e.target.value)}
                      disabled={submitted}
                    />
                    {isCheckingLocation && <div className="text-xs text-ide-text mt-1">Checking distance...</div>}
                    {addressError && (
                      <div className="text-red-400 [.light-theme_&]:text-red-600 text-xs flex items-center gap-1 mt-1">
                          <AlertCircle size={12} /> {addressError}
                      </div>
                    )}
                </div>
              )}
            </div>

            <div className="space-y-1">
              <label className="text-xs text-ide-text uppercase font-bold">Technologies</label>
              <div className="bg-ide-bg border border-ide-border rounded p-2 focus-within:border-ide-accent transition-colors">
                <div className="flex flex-wrap gap-2 mb-2">
                  {technologies.map(tech => (
                    <span key={tech} className="bg-ide-activity-bar text-ide-accent text-xs px-2 py-1 rounded flex items-center gap-1">
                      {tech}
                      {!submitted && <X size={12} className="cursor-pointer hover:text-red-400" onClick={() => removeTech(tech)} />}
                    </span>
                  ))}
                </div>
                <input 
                  type="text" 
                  placeholder="Type tech and press Enter (e.g. Java, React)"
                  className="w-full bg-transparent outline-none text-sm text-ide-text"
                  value={techInput}
                  onChange={e => {
                    setTechInput(e.target.value);
                    setTechError('');
                  }}
                  onKeyDown={handleTechKeyDown}
                  disabled={submitted}
                />
              </div>
              {techError && (
                <div className="text-red-400 [.light-theme_&]:text-red-600 text-xs flex items-center gap-1 mt-1">
                  <AlertCircle size={12} /> {techError}
                </div>
              )}
            </div>
          </>
        )}

        {formData.purpose === 'buy_template' && (
          <div className="bg-blue-500/10 border border-blue-500/30 p-3 rounded text-sm text-blue-200 [.light-theme_&]:text-blue-800">
            This template is designed to easily import your LinkedIn data. I'll send you the setup instructions!
          </div>
        )}

        <div className="space-y-1">
          <label className="text-xs text-ide-text uppercase font-bold">Message</label>
          <textarea 
            required
            rows={4}
            className="w-full bg-ide-bg border border-ide-border rounded p-2 text-ide-text focus:border-ide-accent outline-none transition-colors resize-none"
            value={formData.message}
            onChange={e => setFormData({...formData, message: e.target.value})}
            disabled={submitted}
          />
        </div>

        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-ide-bg/50 border border-green-500/30 p-8 rounded-lg text-center"
          >
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check size={32} className="text-green-400 [.light-theme_&]:text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-ide-text-active mb-2">Thank you!</h3>
            {cooldown > 0 ? (
              <p className="text-sm text-ide-text/50 font-mono">
                You can send another message in {Math.floor(cooldown / 60)}:{(cooldown % 60).toString().padStart(2, '0')}
              </p>
            ) : (
              <button 
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-sm text-ide-text hover:text-white underline decoration-ide-accent/50 hover:decoration-ide-accent transition-all"
              >
                Send another message
              </button>
            )}
          </motion.div>
        ) : (
          <button 
            type="submit"
            className="w-full bg-ide-accent hover:bg-blue-600 text-white font-medium py-2 rounded transition-colors flex items-center justify-center gap-2"
          >
            <Send size={18} /> Send Message
          </button>
        )}
      </form>
    </>
  );
}
