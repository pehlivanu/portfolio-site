'use client';

import React, { useState, useEffect } from 'react';
import { m } from 'framer-motion';
import { LuSend, LuCheck, LuX, LuMapPin, LuGlobe, LuCar } from 'react-icons/lu';
import { FaTrain, FaExclamationCircle } from 'react-icons/fa';
import { useNavigation } from '@/context/NavigationContext';
import { useLanguage } from '@/context/LanguageContext';
import Highlight from '@/components/ui/Highlight';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is too short'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  purpose: z.enum(['recruiting_company', 'recruiting_client', 'personal_project', 'buy_template']),
  location: z.enum(['remote', 'hybrid', 'onsite']).optional(),
  address: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const { setContactStatus } = useNavigation();
  const { t } = useLanguage();

  const {
    register,
    handleSubmit: hookFormSubmit,
    control,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      purpose: 'recruiting_company',
      location: 'remote',
      name: '',
      email: '',
      phone: '',
      address: '',
      message: '',
    },
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
  const [travelStats, setTravelStats] = useState<{ car: string; publicTransport: string } | null>(
    null
  );
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
        setCooldown((prev) => {
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

    if (forbiddenTech.some((ft) => tech.includes(ft))) {
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
    setTechnologies(technologies.filter((t) => t !== techToRemove));
  };

  const checkLocation = async (address: string) => {
    if (!address) return;
    setIsCheckingLocation(true);
    setAddressError('');
    setDistanceValue(null);
    setTravelStats(null);

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&addressdetails=1`,
        {
          headers: {
            'User-Agent': 'PortfolioSite/1.0',
          },
        }
      );
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
              const minTime = Math.min(travelStats.carMinutes || 999, travelStats.ptMinutes || 999);

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

    if (
      (data.location === 'onsite' || data.location === 'hybrid') &&
      (addressError || !data.address)
    ) {
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
          address: data.location === 'onsite' || data.location === 'hybrid' ? data.address : 'N/A',
          technologies: technologies,
          message: data.message,
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
        <h3 className="text-ide-text-active group-hover:text-ide-accent mb-2 text-xl font-bold transition-colors">
          <Highlight text={t('getInTouch')} />
        </h3>
        <p className="text-ide-text text-sm leading-relaxed">
          <Highlight text={t('contactIntro')} />
        </p>
      </div>

      <form onSubmit={hookFormSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-ide-text text-xs font-bold uppercase">{t('name')}</label>
            <input
              type="text"
              className={`bg-ide-bg w-full border ${errors.name ? 'border-red-500' : 'border-ide-border'} text-ide-text focus:border-ide-accent rounded p-2 transition-colors outline-none`}
              {...register('name')}
              disabled={submitted}
            />
            {errors.name && (
              <span className="mt-1 block text-xs text-red-400">
                <FaExclamationCircle size={10} className="mr-1 inline" />
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="space-y-1">
            <label className="text-ide-text text-xs font-bold uppercase">{t('email')}</label>
            <input
              type="email"
              className={`bg-ide-bg w-full border ${errors.email ? 'border-red-500' : 'border-ide-border'} text-ide-text focus:border-ide-accent rounded p-2 transition-colors outline-none`}
              {...register('email')}
              disabled={submitted}
            />
            {errors.email && (
              <span className="mt-1 block text-xs text-red-400">
                <FaExclamationCircle size={10} className="mr-1 inline" />
                {errors.email.message}
              </span>
            )}
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-ide-text text-xs font-bold uppercase">{t('phoneOptional')}</label>
          <input
            type="tel"
            placeholder="+49..."
            className={`bg-ide-bg w-full border ${errors.phone ? 'border-red-500' : 'border-ide-border'} text-ide-text focus:border-ide-accent rounded p-2 transition-colors outline-none`}
            {...register('phone')}
            disabled={submitted}
          />
        </div>

        <div className="space-y-1">
          <label className="text-ide-text text-xs font-bold uppercase">{t('purpose')}</label>
          <select
            className={`bg-ide-bg w-full border ${errors.purpose ? 'border-red-500' : 'border-ide-border'} text-ide-text focus:border-ide-accent rounded p-2 transition-colors outline-none`}
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
              <label className="text-ide-text text-xs font-bold uppercase">
                {t('locationPreference')}
              </label>
              <div className="mt-1 flex gap-4">
                <label className="text-ide-text flex cursor-pointer items-center gap-2 text-sm">
                  <input
                    type="radio"
                    value="remote"
                    {...register('location')}
                    className="accent-ide-accent"
                    disabled={submitted}
                  />
                  <LuGlobe size={14} /> {t('remote')}
                </label>
                <label className="text-ide-text flex cursor-pointer items-center gap-2 text-sm">
                  <input
                    type="radio"
                    value="hybrid"
                    {...register('location')}
                    className="accent-ide-accent"
                    disabled={submitted}
                  />
                  <LuGlobe size={14} /> {t('hybrid')}
                </label>
                <label className="text-ide-text flex cursor-pointer items-center gap-2 text-sm">
                  <input
                    type="radio"
                    value="onsite"
                    {...register('location')}
                    className="accent-ide-accent"
                    disabled={submitted}
                  />
                  <LuMapPin size={14} /> {t('onsite')}
                </label>
              </div>

              {(locationWatch === 'onsite' || locationWatch === 'hybrid') && (
                <div className="mt-2">
                  <div className="mb-1 flex flex-wrap items-end justify-between gap-2 px-1">
                    <span className="text-ide-text/50 text-xs">{t('addressLabel')}</span>
                    {distanceValue !== null && (
                      <div className="flex flex-col items-end gap-1">
                        <span
                          className={`font-mono text-xs ${addressError ? 'text-red-400' : 'text-green-400'}`}
                        >
                          {distanceValue}km
                        </span>
                        {travelStats && !addressError && (
                          <div className="text-ide-text/70 flex gap-3 text-[10px]">
                            <span className="flex items-center gap-1">
                              <LuCar size={10} /> {travelStats.car}
                            </span>
                            <span className="flex items-center gap-1">
                              <FaTrain size={10} /> {travelStats.publicTransport}
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  <input
                    type="text"
                    placeholder={t('officeAddressPlaceholder')}
                    className={`bg-ide-bg w-full border ${addressError || errors.address ? 'border-red-500' : 'border-ide-border'} text-ide-text focus:border-ide-accent rounded p-2 text-sm transition-colors outline-none`}
                    {...register('address', {
                      onBlur: (e) => checkLocation(e.target.value),
                    })}
                    disabled={submitted}
                  />
                  {isCheckingLocation && (
                    <div className="text-ide-text mt-1 text-xs">{t('checkingDistance')}</div>
                  )}
                  {addressError && (
                    <div className="mt-1 flex items-center gap-1 text-xs text-red-400 [.light-theme_&]:text-red-600">
                      <FaExclamationCircle size={12} /> {addressError}
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="space-y-1">
              <label className="text-ide-text text-xs font-bold uppercase">
                {t('technologies')}
              </label>
              <div className="bg-ide-bg border-ide-border focus-within:border-ide-accent rounded border p-2 transition-colors">
                <div className="mb-2 flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-ide-activity-bar text-ide-accent flex items-center gap-1 rounded px-2 py-1 text-xs"
                    >
                      {tech}
                      {!submitted && (
                        <LuX
                          size={12}
                          className="cursor-pointer hover:text-red-400"
                          onClick={() => removeTech(tech)}
                        />
                      )}
                    </span>
                  ))}
                </div>
                <input
                  type="text"
                  placeholder={t('techPlaceholder')}
                  className="text-ide-text w-full bg-transparent text-sm outline-none"
                  value={techInput}
                  onChange={(e) => {
                    setTechInput(e.target.value);
                    setTechError('');
                  }}
                  onKeyDown={handleTechKeyDown}
                  disabled={submitted}
                />
              </div>
              {techError && (
                <div className="mt-1 flex items-center gap-1 text-xs text-red-400 [.light-theme_&]:text-red-600">
                  <FaExclamationCircle size={12} /> {techError}
                </div>
              )}
            </div>
          </>
        )}

        {purposeWatch === 'buy_template' && (
          <div className="rounded border border-blue-500/30 bg-blue-500/10 p-3 text-sm text-blue-200 [.light-theme_&]:text-blue-800">
            {t('buyTemplateMessage')}
          </div>
        )}

        <div className="space-y-1">
          <label className="text-ide-text text-xs font-bold uppercase">{t('message')}</label>
          <textarea
            rows={4}
            className={`bg-ide-bg w-full border ${errors.message ? 'border-red-500' : 'border-ide-border'} text-ide-text focus:border-ide-accent resize-none rounded p-2 transition-colors outline-none`}
            {...register('message')}
            disabled={submitted}
          />
          {errors.message && (
            <span className="mt-1 block text-xs text-red-400">
              <FaExclamationCircle size={10} className="mr-1 inline" />
              {errors.message.message}
            </span>
          )}
        </div>

        {submitted ? (
          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-ide-bg/50 rounded-lg border border-green-500/30 p-8 text-center"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
              <LuCheck size={32} className="text-green-400 [.light-theme_&]:text-green-600" />
            </div>
            <h3 className="text-ide-text-active mb-2 text-2xl font-bold">{t('successMessage')}</h3>
            {cooldown > 0 ? (
              <p className="text-ide-text/50 font-mono text-sm">
                {t('cooldownMessage')} {Math.floor(cooldown / 60)}:
                {(cooldown % 60).toString().padStart(2, '0')}
              </p>
            ) : (
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-ide-text decoration-ide-accent/50 hover:decoration-ide-accent text-sm underline transition-all hover:text-white"
              >
                {t('sendAnother')}
              </button>
            )}
          </m.div>
        ) : (
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded bg-blue-600 py-2 font-medium text-white transition-colors hover:bg-blue-700"
          >
            <LuSend size={18} /> {t('sendMessage')}
          </button>
        )}
      </form>
    </>
  );
}
