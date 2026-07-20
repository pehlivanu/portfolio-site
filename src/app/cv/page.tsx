'use client';

import React, { useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import * as mockDataEn from '@/data/locales/en';
import * as mockDataRo from '@/data/locales/ro';
import * as mockDataDe from '@/data/locales/de';
import * as mockDataFr from '@/data/locales/fr';
import { translations } from '@/context/LanguageContext';
import { Language } from '@/types/context';
import clsx from 'clsx';
import './cv.css';

import CVHero from '@/components/cv/visual/CVHero';
import CVExperience from '@/components/cv/visual/CVExperience';
import CVEducation from '@/components/cv/visual/CVEducation';
import CVProjects from '@/components/cv/visual/CVProjects';
import CVLanguages from '@/components/cv/visual/CVLanguages';
import CVCertifications from '@/components/cv/visual/CVCertifications';

function CVContent() {
  const searchParams = useSearchParams();
  const langParam = searchParams.get('lang');
  const detailLevel = searchParams.get('detail') || 'brief'; // 'brief' | 'detailed'
  const showProjects = searchParams.get('projects') !== 'false'; // Default to true
  const showLanguages = searchParams.get('languages') !== 'false';
  const showCertifications = searchParams.get('certifications') !== 'false';
  const theme = searchParams.get('theme') || 'print'; // 'print' | 'ide'

  // Determine language from URL param or default to 'en'
  const language: Language =
    langParam === 'ro' || langParam === 'de' || langParam === 'fr' || langParam === 'en'
      ? langParam
      : 'en';

  // Select Data
  const data = useMemo(() => {
    switch (language) {
      case 'ro':
        return mockDataRo;
      case 'de':
        return mockDataDe;
      case 'fr':
        return mockDataFr;
      default:
        return mockDataEn;
    }
  }, [language]);

  // Translation Helper
  const t = (key: string) => {
    return translations[language]?.[key] || key;
  };

  const { linkedInProfile, experience, education, projects, about } = data;

  return (
    <div
      className={clsx(
        'cv-page-container mx-auto min-h-screen max-w-[210mm] print:mx-0 print:min-h-0 print:max-w-none',
        `theme-${theme}`
      )}
    >
      {/* HERO SECTION */}
      <CVHero
        linkedInProfile={linkedInProfile}
        about={about}
        theme={theme}
        detailLevel={detailLevel}
      />

      <div className="space-y-8 p-8 print:px-[15mm] print:py-4">
        {/* EXPERIENCE SECTION */}
        <CVExperience experience={experience} theme={theme} detailLevel={detailLevel} t={t} />

        <div className="space-y-8">
          {/* EDUCATION SECTION */}
          <CVEducation education={education} theme={theme} detailLevel={detailLevel} t={t} />
        </div>

        {showLanguages && <CVLanguages linkedInProfile={linkedInProfile} theme={theme} t={t} />}

        {showCertifications && (
          <CVCertifications linkedInProfile={linkedInProfile} theme={theme} t={t} />
        )}

        {/* PROJECTS SECTION */}
        {showProjects && <CVProjects projects={projects} theme={theme} t={t} />}
      </div>

      {/* Print Button Overlay */}
      <div className="print-hidden fixed top-8 right-8 z-50">
        <button
          onClick={() => window.print()}
          className="flex transform items-center gap-2 rounded-md bg-blue-600 px-6 py-3 font-bold text-white shadow-xl transition-all hover:-translate-y-0.5 hover:bg-blue-700"
        >
          <span className="text-lg">🖨️</span> {t('downloadResume')}
        </button>
      </div>
    </div>
  );
}

export default function PrintableCVPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-gray-500">Loading CV...</div>}>
      <CVContent />
    </Suspense>
  );
}
