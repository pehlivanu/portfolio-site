'use client';

import React from 'react';
import { LinkedInProfile } from '@/types/data';

interface ATSLanguagesProps {
  linkedInProfile: LinkedInProfile;
  t: (key: string) => string;
}

export default function ATSLanguages({ linkedInProfile, t }: ATSLanguagesProps) {
  if (!linkedInProfile.languages || linkedInProfile.languages.length === 0) return null;

  return (
    <section className="print-break-inside-avoid mb-8">
      <h2 className="mb-4 border-b border-gray-400 pb-1 text-xl font-bold uppercase">
        {t('cvLanguages')}
      </h2>
      <div className="grid grid-cols-2 gap-x-8 gap-y-2">
        {linkedInProfile.languages.map((lang, idx) => (
          <div key={idx} className="flex items-baseline justify-between">
            <span className="font-bold">{lang.language}</span>
            <span className="text-sm text-gray-700">{lang.proficiency}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
