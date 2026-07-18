'use client';

import React from 'react';
import clsx from 'clsx';
import { LuGlobe } from 'react-icons/lu';
import { LinkedInProfile } from '@/types/data';

interface CVLanguagesProps {
  linkedInProfile: LinkedInProfile;
  theme: string;
  t: (key: string) => string;
}

export default function CVLanguages({ linkedInProfile, theme, t }: CVLanguagesProps) {
  if (!linkedInProfile.languages || linkedInProfile.languages.length === 0) return null;

  return (
    <section className="cv-section print-break-inside-avoid">
      <div
        className={clsx(
          'mb-4 flex items-center gap-2 border-b pb-2',
          theme === 'ide' ? 'border-ide-border' : 'border-gray-200'
        )}
      >
        <LuGlobe className="text-blue-600" size={20} />
        <h2
          className={clsx(
            'text-lg font-bold tracking-wide uppercase',
            theme === 'ide' ? 'text-ide-text' : 'text-gray-900'
          )}
        >
          {t('cvLanguages')}
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {linkedInProfile.languages.map((lang, idx) => (
          <div
            key={idx}
            className={clsx(
              'flex items-baseline justify-between rounded px-3 py-2 text-sm',
              theme === 'ide' ? 'bg-ide-activity-bar' : 'bg-gray-50'
            )}
          >
            <span
              className={clsx('font-bold', theme === 'ide' ? 'text-ide-text' : 'text-gray-900')}
            >
              {lang.language}
            </span>
            <span className={clsx('text-xs', theme === 'ide' ? 'text-gray-400' : 'text-gray-600')}>
              {lang.proficiency}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
