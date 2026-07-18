"use client";

import React, { useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import * as mockDataEn from '@/data/mockData';
import * as mockDataRo from '@/data/mockDataRo';
import * as mockDataDe from '@/data/mockDataDe';
import * as mockDataFr from '@/data/mockDataFr';
import { translations, Language } from '@/context/LanguageContext';
import clsx from 'clsx';
import './cv.css';

import CVHero from '@/components/cv/visual/CVHero';
import CVExperience from '@/components/cv/visual/CVExperience';
import CVEducation from '@/components/cv/visual/CVEducation';
import CVProjects from '@/components/cv/visual/CVProjects';

function CVContent() {
    const searchParams = useSearchParams();
    const langParam = searchParams.get('lang');
    const detailLevel = searchParams.get('detail') || 'brief'; // 'brief' | 'detailed'
    const showProjects = searchParams.get('projects') !== 'false'; // Default to true
    const theme = searchParams.get('theme') || 'print'; // 'print' | 'ide'
    
    // Determine language from URL param or default to 'en'
    const language: Language = (langParam === 'ro' || langParam === 'de' || langParam === 'fr' || langParam === 'en') 
        ? langParam 
        : 'en';

    // Select Data
    const data = useMemo(() => {
        switch (language) {
            case 'ro': return mockDataRo;
            case 'de': return mockDataDe;
            case 'fr': return mockDataFr;
            default: return mockDataEn;
        }
    }, [language]);

    // Translation Helper
    const t = (key: string) => {
        return translations[language]?.[key] || key;
    };

    const { linkedInProfile, experience, education, projects, about } = data;

    return (
        <div className={clsx("cv-page-container min-h-screen max-w-[210mm] mx-auto print:max-w-none print:mx-0", `theme-${theme}`)}>
            {/* HERO SECTION */}
            <CVHero 
                linkedInProfile={linkedInProfile} 
                about={about} 
                theme={theme} 
                detailLevel={detailLevel} 
                t={t} 
            />

            <div className="p-8 print:px-[15mm] print:py-4 space-y-8">
                {/* EXPERIENCE SECTION */}
                <CVExperience 
                    experience={experience} 
                    theme={theme} 
                    detailLevel={detailLevel} 
                    t={t} 
                />

                <div className="space-y-8">
                    {/* EDUCATION SECTION */}
                    <CVEducation 
                        education={education} 
                        theme={theme} 
                        detailLevel={detailLevel} 
                        t={t} 
                    />
                </div>

                {/* PROJECTS SECTION */}
                {showProjects && (
                    <CVProjects 
                        projects={projects} 
                        theme={theme} 
                        t={t} 
                    />
                )}
            </div>

             {/* Print Button Overlay */}
             <div className="fixed top-8 right-8 print-hidden z-50">
                <button 
                    onClick={() => window.print()}
                    className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md shadow-xl hover:bg-blue-700 font-bold transition-all transform hover:-translate-y-0.5"
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
