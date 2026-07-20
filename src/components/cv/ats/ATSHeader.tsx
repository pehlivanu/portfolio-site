'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import { LinkedInProfile, AboutData } from '@/types/data';

interface ATSHeaderProps {
  linkedInProfile: LinkedInProfile;
  about: AboutData;
  detailLevel: string;
  t: (key: string) => string;
}

export default function ATSHeader({ linkedInProfile, about, detailLevel, t }: ATSHeaderProps) {
  return (
    <>
      {/* 1. HEADER / CONTACT INFO */}
      <header className="mb-8 border-b-2 border-black pb-4 text-center">
        <h1 className="mb-2 text-3xl font-bold tracking-wider uppercase">{linkedInProfile.name}</h1>
        <h2 className="mb-4 text-xl font-semibold">
          {linkedInProfile.headline.split(' | ').slice(0, -1).join(' | ')}
          <br />
          {linkedInProfile.headline.split(' | ').slice(-1)}
        </h2>
        <address className="text-sm leading-relaxed not-italic">
          <p className="mb-1">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(linkedInProfile.address || linkedInProfile.location)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap hover:text-blue-600 hover:underline"
            >
              {linkedInProfile.address || linkedInProfile.location}
            </a>
            {' | '}
            <a
              href="https://www.liviuionesi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap hover:text-blue-600 hover:underline"
            >
              www.liviuionesi.com
            </a>
          </p>
          <p className="mb-1">
            {t('email')}:{' '}
            <a
              href={`mailto:${linkedInProfile.email || 'ionesiliviu@yahoo.com'}`}
              className="whitespace-nowrap hover:text-blue-600 hover:underline"
            >
              {linkedInProfile.email || 'ionesiliviu@yahoo.com'}
            </a>
            {' | '}
            {t('phone')}:{' '}
            <a
              href={`tel:${linkedInProfile.phone?.replace(/\s+/g, '')}`}
              className="whitespace-nowrap hover:text-blue-600 hover:underline"
            >
              {linkedInProfile.phone}
            </a>
          </p>
          <p>
            {t('linkedin')}:{' '}
            <a
              href="https://linkedin.com/in/liviu-ionesi"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap hover:text-blue-600 hover:underline"
            >
              linkedin.com/in/liviu-ionesi
            </a>
            {' | '}
            {t('github')}:{' '}
            <a
              href="https://github.com/pehlivanu"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap hover:text-blue-600 hover:underline"
            >
              github.com/pehlivanu
            </a>
          </p>
        </address>
      </header>

      {/* 2. PROFESSIONAL SUMMARY */}
      <section className="mb-8">
        <h2 className="mb-4 border-b border-gray-400 pb-1 text-xl font-bold uppercase">
          {t('cvProfessionalSummary')}
        </h2>
        <div className="text-justify text-sm leading-relaxed">
          {detailLevel === 'detailed' ? (
            <div className="prose prose-sm max-w-none text-black">
              <ReactMarkdown>{about.description}</ReactMarkdown>
            </div>
          ) : (
            <p>{linkedInProfile.about}</p>
          )}
        </div>
      </section>
    </>
  );
}
