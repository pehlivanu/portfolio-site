'use client';

import React, { useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import * as mockDataEn from '@/data/locales/en';
import * as mockDataRo from '@/data/locales/ro';
import * as mockDataDe from '@/data/locales/de';
import * as mockDataFr from '@/data/locales/fr';
import { translations } from '@/context/LanguageContext';
import { Language } from '@/types/context';
import '../cv/cv.css';

import ATSHeader from '@/components/cv/ats/ATSHeader';
import ATSExperience from '@/components/cv/ats/ATSExperience';
import ATSProjects from '@/components/cv/ats/ATSProjects';
import ATSEducation from '@/components/cv/ats/ATSEducation';
import ATSLanguages from '@/components/cv/ats/ATSLanguages';
import ATSCertifications from '@/components/cv/ats/ATSCertifications';

function ATSContent() {
  const searchParams = useSearchParams();
  const langParam = searchParams.get('lang');
  const detailLevel = searchParams.get('detail') || 'detailed';

  const language: Language =
    langParam === 'ro' || langParam === 'de' || langParam === 'fr' || langParam === 'en'
      ? langParam
      : 'en';

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

  const showProjects = searchParams.get('projects') !== 'false';
  const showLanguages = searchParams.get('languages') !== 'false';
  const showCertifications = searchParams.get('certifications') !== 'false';

  const t = (key: string) => translations[language]?.[key] || key;

  const { linkedInProfile, experience, education, projects, about } = data;

  return (
    <div className="ats-page-container mx-auto min-h-screen max-w-[210mm] bg-white p-12 text-black print:mx-0 print:min-h-0 print:max-w-none print:p-0">
      {/* ATS FORMAT INSTRUCTIONS FOR USER (Hidden in print) */}
      <div className="print-hidden mb-8 rounded border border-yellow-200 bg-yellow-50 p-4 text-sm text-yellow-800">
        <strong>{t('atsFriendlyVersion') || 'ATS-Friendly CV.'}</strong>{' '}
        {t('atsFriendlyDesc') ||
          'This version is stripped of complex styling and icons to ensure perfect machine readability by Applicant Tracking Systems. It will still render perfectly as a standard PDF.'}
      </div>

      <ATSHeader linkedInProfile={linkedInProfile} about={about} detailLevel={detailLevel} t={t} />

      <ATSExperience experience={experience} detailLevel={detailLevel} t={t} />

      <ATSEducation education={education} detailLevel={detailLevel} t={t} />

      {showLanguages && <ATSLanguages linkedInProfile={linkedInProfile} t={t} />}

      {showCertifications && <ATSCertifications linkedInProfile={linkedInProfile} t={t} />}

      {showProjects && <ATSProjects projects={projects} t={t} />}

      {/* Print Button Overlay */}
      <div className="print-hidden fixed top-8 right-8 z-50">
        <button
          onClick={() => window.print()}
          className="flex transform items-center gap-2 rounded-md bg-black px-6 py-3 font-bold text-white shadow-xl transition-all hover:-translate-y-0.5 hover:bg-gray-800"
        >
          <span className="text-lg">🖨️</span> {t('downloadResume')}
        </button>
      </div>
    </div>
  );
}

export default function ATSPrintableCVPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-gray-500">Loading ATS CV...</div>}>
      <ATSContent />
    </Suspense>
  );
}
