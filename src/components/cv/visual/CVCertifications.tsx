'use client';

import React from 'react';
import clsx from 'clsx';
import { LuAward, LuExternalLink } from 'react-icons/lu';
import { LinkedInProfile } from '@/types/data';

interface CVCertificationsProps {
  linkedInProfile: LinkedInProfile;
  theme: string;
  t: (key: string) => string;
}

export default function CVCertifications({ linkedInProfile, theme, t }: CVCertificationsProps) {
  if (!linkedInProfile.certifications || linkedInProfile.certifications.length === 0) return null;

  return (
    <section className="cv-section print-break-inside-avoid">
      <div
        className={clsx(
          'mb-4 flex items-center gap-2 border-b pb-2',
          theme === 'ide' ? 'border-ide-border' : 'border-gray-200'
        )}
      >
        <LuAward className="text-blue-600" size={20} />
        <h2
          className={clsx(
            'text-lg font-bold tracking-wide uppercase',
            theme === 'ide' ? 'text-ide-text' : 'text-gray-900'
          )}
        >
          {t('cvCertifications')}
        </h2>
      </div>
      <div className="space-y-3">
        {linkedInProfile.certifications.map((cert, idx) => (
          <div
            key={idx}
            className={clsx(
              'flex flex-col rounded px-3 py-2 text-sm sm:flex-row sm:items-baseline sm:justify-between',
              theme === 'ide' ? 'bg-ide-activity-bar' : 'bg-gray-50'
            )}
          >
            <div className="flex items-center gap-2">
              <span
                className={clsx('font-bold', theme === 'ide' ? 'text-ide-text' : 'text-gray-900')}
              >
                {cert.name}
              </span>
              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx(
                    'hover:text-blue-600',
                    theme === 'ide' ? 'text-gray-400' : 'text-gray-500'
                  )}
                  title="View Credential"
                >
                  <LuExternalLink size={14} />
                </a>
              )}
            </div>
            <span
              className={clsx(
                'mt-1 text-xs sm:mt-0',
                theme === 'ide' ? 'text-gray-400' : 'text-gray-600'
              )}
            >
              {cert.authority}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
