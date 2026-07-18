"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, AlertCircle, Check, X, MapPin, Globe, Car, Train } from 'lucide-react';
import { useNavigation } from '@/context/NavigationContext';
import { useLanguage } from '@/context/LanguageContext';
import Highlight from '@/components/ui/Highlight';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  purpose: z.enum(['recruiting_company', 'recruiting_client', 'personal_project', 'buy_template']),
  location: z.enum(['remote', 'hybrid', 'onsite']).optional(),
  address: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const { setContactStatus } = useNavigation();
  const { t } = useLanguage();
  
  const { register, handleSubmit: hookFormSubmit, control, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      purpose: 'recruiting_company',
      location: 'remote',
      name: '',
      email: '',
      phone: '',
      address: '',
      message: ''
    }
  });

  const purposeWatch = useWatch({ control, name: 'purpose' });
  const locationWatch = useWatch({ control, name: 'location' });

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
      const remaining = Math.ceil((parseInt(cooldownUntil) - new Date().getTime()) / 1000);
      if (remaining > 0) {
        requestAnimationFrame(() => {
          setSubmitted(true);
          setCooldown(remaining);
        });
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
      setTechError(t('techError').replace('{tech}', techInput.trim()));
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

            if (travelStats) {
                const minTime = Math.min(
                    travelStats.carMinutes || 999, 
                    travelStats.ptMinutes || 999
                );
                
                // 60 minutes limit
                if (minTime > 60 && countryCode !== 'ch') {
                     setAddressError(t('distanceError').replace('{time}', minTime.toString()));
                }
            } else if (distance > 50 && countryCode !== 'ch') {
                 // Fallback to distance if no travel stats (e.g. OSRM down), using rough 50km ~ 1h assumption or keep old 25km?
                 // User said "maximum travel distance ... is one hour". 
                 // If we have no time, we might want to be lenient or strict. 
                 // Let's stick to 50km as a proxy for 1h drive.
                 setAddressError(t('distanceError').replace('{time}', 'unknown')); 
            }
          } else {
             console.error('API Error');
          }
        } catch (error) {
          console.error('Error calling distance API', error);
        }
      } else {
        setAddressError(t('addressNotFound'));
      }
    } catch {
      setAddressError(t('addressError'));
    } finally {
      setIsCheckingLocation(false);
    }
  };

  const onSubmit = async (data: ContactFormData) => {
    if (submitted) return;

    if ((data.location === 'onsite' || data.location === 'hybrid') && (addressError || !data.address)) {
      if (!data.address) setAddressError(t('addressRequired'));
      return;
    }

    // Keep subject and body internal logic in English for the email recipient (Liviu)
    // or maybe translate them? Usually email content sent to owner is fine in English or mixed.
    // I will keep the email body construction as is, assuming Liviu reads it.
    
    console.log('[ContactForm] Sending email via API');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          purpose: data.purpose,
          location: data.location,
          address: (data.location === 'onsite' || data.location === 'hybrid') ? data.address : 'N/A',
          technologies: technologies,
          message: data.message
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }


      const currentTime = new Date().getTime();
      const cooldownTime = currentTime + 10 * 60 * 1000; // 10 minutes
      localStorage.setItem('contactCooldown', cooldownTime.toString());
      requestAnimationFrame(() => {
        setCooldown(600);
        setSubmitted(true);
        setContactStatus('sent');
      });
      setContactStatus('sent');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(t('errorMessage'));
    }
  };

  return (
    <>
      <div className="mb-6">
        <h3 className="text-xl font-bold text-ide-text-active group-hover:text-ide-accent transition-colors mb-2">
          <Highlight text={t('getInTouch')} />
        </h3>
        <p className="text-ide-text text-sm leading-relaxed">
          <Highlight text={t('contactIntro')} />
        </p>
      </div>

      <form onSubmit={hookFormSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs text-ide-text uppercase font-bold">{t('name')}</label>
            <input 
              type="text" 
              className={`w-full bg-ide-bg border ${errors.name ? 'border-red-500' : 'border-ide-border'} rounded p-2 text-ide-text focus:border-ide-accent outline-none transition-colors`}
              {...register('name')}
              disabled={submitted}
            />
            {errors.name && <span className="text-red-400 text-xs mt-1 block"><AlertCircle size={10} className="inline mr-1" />{errors.name.message}</span>}
          </div>
          <div className="space-y-1">
            <label className="text-xs text-ide-text uppercase font-bold">{t('email')}</label>
            <input 
              type="email" 
              className={`w-full bg-ide-bg border ${errors.email ? 'border-red-500' : 'border-ide-border'} rounded p-2 text-ide-text focus:border-ide-accent outline-none transition-colors`}
              {...register('email')}
              disabled={submitted}
            />
            {errors.email && <span className="text-red-400 text-xs mt-1 block"><AlertCircle size={10} className="inline mr-1" />{errors.email.message}</span>}
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs text-ide-text uppercase font-bold">{t('phoneOptional')}</label>
            <input 
            type="tel" 
            placeholder="+49..."
            className={`w-full bg-ide-bg border ${errors.phone ? 'border-red-500' : 'border-ide-border'} rounded p-2 text-ide-text focus:border-ide-accent outline-none transition-colors`}
            {...register('phone')}
            disabled={submitted}
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs text-ide-text uppercase font-bold">{t('purpose')}</label>
            <select 
            className={`w-full bg-ide-bg border ${errors.purpose ? 'border-red-500' : 'border-ide-border'} rounded p-2 text-ide-text focus:border-ide-accent outline-none transition-colors`}
            {...register('purpose')}
            disabled={submitted}
          >
            <option value="recruiting_company">{t('recruitingCompany')}</option>
            <option value="recruiting_client">{t('recruitingClient')}</option>
            <option value="personal_project">{t('personalProject')}</option>
            <option value="buy_template">{t('buyTemplate')}</option>
          </select>
        </div>

        {purposeWatch !== 'buy_template' && (
          <>
            <div className="space-y-1">
              <label className="text-xs text-ide-text uppercase font-bold">{t('locationPreference')}</label>
              <div className="flex gap-4 mt-1">
                <label className="flex items-center gap-2 text-sm text-ide-text cursor-pointer">
                  <input 
                    type="radio" 
                    value="remote"
                    {...register('location')}
                    className="accent-ide-accent"
                    disabled={submitted}
                  />
                  <Globe size={14} /> {t('remote')}
                </label>
                <label className="flex items-center gap-2 text-sm text-ide-text cursor-pointer">
                  <input 
                    type="radio" 
                    value="hybrid"
                    {...register('location')}
                    className="accent-ide-accent"
                    disabled={submitted}
                  />
                  <Globe size={14} /> {t('hybrid')}
                </label>
                <label className="flex items-center gap-2 text-sm text-ide-text cursor-pointer">
                  <input 
                    type="radio" 
                    value="onsite"
                    {...register('location')}
                    className="accent-ide-accent"
                    disabled={submitted}
                  />
                  <MapPin size={14} /> {t('onsite')}
                </label>
              </div>
              
              {(locationWatch === 'onsite' || locationWatch === 'hybrid') && (
                <div className="mt-2">
                   <div className="flex justify-between items-end mb-1 px-1 flex-wrap gap-2">
                       <span className="text-xs text-ide-text/50">{t('addressLabel')}</span>
                       {distanceValue !== null && (
                          <div className="flex flex-col items-end gap-1">
                            <span className={`text-xs font-mono ${addressError ? 'text-red-400' : 'text-green-400'}`}>
                                {distanceValue}km
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
                      placeholder={t('officeAddressPlaceholder')}
                      className={`w-full bg-ide-bg border ${addressError || errors.address ? 'border-red-500' : 'border-ide-border'} rounded p-2 text-ide-text focus:border-ide-accent outline-none transition-colors text-sm`}
                      {...register('address', {
                         onBlur: (e) => checkLocation(e.target.value)
                      })}
                      disabled={submitted}
                    />
                    {isCheckingLocation && <div className="text-xs text-ide-text mt-1">{t('checkingDistance')}</div>}
                    {addressError && (
                      <div className="text-red-400 [.light-theme_&]:text-red-600 text-xs flex items-center gap-1 mt-1">
                          <AlertCircle size={12} /> {addressError}
                      </div>
                    )}
                </div>
              )}
            </div>

            <div className="space-y-1">
              <label className="text-xs text-ide-text uppercase font-bold">{t('technologies')}</label>
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
                  placeholder={t('techPlaceholder')}
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

        {purposeWatch === 'buy_template' && (
          <div className="bg-blue-500/10 border border-blue-500/30 p-3 rounded text-sm text-blue-200 [.light-theme_&]:text-blue-800">
            {t('buyTemplateMessage')}
          </div>
        )}

        <div className="space-y-1">
          <label className="text-xs text-ide-text uppercase font-bold">{t('message')}</label>
          <textarea 
            rows={4}
            className={`w-full bg-ide-bg border ${errors.message ? 'border-red-500' : 'border-ide-border'} rounded p-2 text-ide-text focus:border-ide-accent outline-none transition-colors resize-none`}
            {...register('message')}
            disabled={submitted}
          />
          {errors.message && <span className="text-red-400 text-xs mt-1 block"><AlertCircle size={10} className="inline mr-1" />{errors.message.message}</span>}
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
            <h3 className="text-2xl font-bold text-ide-text-active mb-2">{t('successMessage')}</h3>
            {cooldown > 0 ? (
              <p className="text-sm text-ide-text/50 font-mono">
                {t('cooldownMessage')} {Math.floor(cooldown / 60)}:{(cooldown % 60).toString().padStart(2, '0')}
              </p>
            ) : (
              <button 
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-sm text-ide-text hover:text-white underline decoration-ide-accent/50 hover:decoration-ide-accent transition-all"
              >
                {t('sendAnother')}
              </button>
            )}
          </motion.div>
        ) : (
          <button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded transition-colors flex items-center justify-center gap-2"
          >
            <Send size={18} /> {t('sendMessage')}
          </button>
        )}
      </form>
    </>
  );
}
