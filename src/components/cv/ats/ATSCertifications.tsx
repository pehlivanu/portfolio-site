'use client';

import React from 'react';
import { LinkedInProfile } from '@/types/data';

interface ATSCertificationsProps {
  linkedInProfile: LinkedInProfile;
  t: (key: string) => string;
}

export default function ATSCertifications({ linkedInProfile, t }: ATSCertificationsProps) {
  if (!linkedInProfile.certifications || linkedInProfile.certifications.length === 0) return null;

  return (
    <section className="print-break-inside-avoid mb-8">
      <h2 className="mb-4 border-b border-gray-400 pb-1 text-xl font-bold uppercase">
        {t('cvCertifications')}
      </h2>
      <div className="space-y-2">
        {linkedInProfile.certifications.map((cert, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-sm font-bold">
              {cert.name}
              {cert.url && (
                <span className="ml-2 font-normal">
                  |{' '}
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 hover:underline"
                  >
                    Credential
                  </a>
                </span>
              )}
            </h3>
            <span className="text-sm text-gray-700">{cert.authority}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
