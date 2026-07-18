
"use client";

import React, { useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import * as mockDataEn from '@/data/mockData';
import * as mockDataRo from '@/data/mockDataRo';
import * as mockDataDe from '@/data/mockDataDe';
import * as mockDataFr from '@/data/mockDataFr';
import { translations, Language } from '@/context/LanguageContext';
import ReactMarkdown from 'react-markdown';

import { Experience } from '@/types/data';

type Education = typeof mockDataEn.education[number];
type Project = typeof mockDataEn.projects[number];
type LanguageLevel = typeof mockDataEn.linkedInProfile.languages[number];

function AtsCvContent() {
    const searchParams = useSearchParams();
    const langParam = searchParams.get('lang');
    const showProjects = searchParams.get('projects') !== 'false';
    const detailLevel = searchParams.get('detail') || 'detailed'; // default detailed for ATS

    const language: Language = (langParam === 'ro' || langParam === 'de' || langParam === 'fr' || langParam === 'en')
        ? langParam
        : 'en';

    const data = useMemo(() => {
        switch (language) {
            case 'ro': return mockDataRo;
            case 'de': return mockDataDe;
            case 'fr': return mockDataFr;
            default: return mockDataEn;
        }
    }, [language]);

    const t = (key: string) => translations[language]?.[key] || key;
    const { linkedInProfile, experience, education, projects, about } = data;

    // Contact labels based on language
    const contactLabels = {
        en: { email: 'Email', phone: 'Phone', linkedin: 'LinkedIn', github: 'GitHub' },
        de: { email: 'E-Mail', phone: 'Telefon', linkedin: 'LinkedIn', github: 'GitHub' },
        fr: { email: 'E-mail', phone: 'Téléphone', linkedin: 'LinkedIn', github: 'GitHub' },
        ro: { email: 'Email', phone: 'Telefon', linkedin: 'LinkedIn', github: 'GitHub' },
    }[language];

    return (
        <div className="min-h-screen bg-white">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Arial:wght@400;700&display=swap');
                
                body { 
                    font-family: Arial, Helvetica, sans-serif;
                    background-color: white;
                    color: black;
                }

                @media print {
                    @page { margin: 15mm; size: A4 portrait; }
                    body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                    .print-break-inside-avoid { break-inside: avoid; }
                    .print-hidden { display: none !important; }
                }
            `}</style>
            
            <div className="max-w-[210mm] mx-auto bg-white p-8 print:p-0 text-black">
                {/* Print Button */}
                <div className="print-hidden mb-8 flex justify-end">
                    <button 
                        onClick={() => window.print()}
                        className="bg-blue-600 text-white px-6 py-2 rounded font-bold hover:bg-blue-700 transition-colors"
                    >
                        Print ATS Resume
                    </button>
                </div>

                {/* 1. HEADER / CONTACT INFO */}
                <header className="mb-8 border-b-2 border-black pb-4 text-center">
                    <h1 className="text-3xl font-bold uppercase tracking-wider mb-2">{linkedInProfile.name}</h1>
                    <h2 className="text-xl mb-4 font-semibold">{linkedInProfile.headline}</h2>
                    <address className="not-italic text-sm leading-relaxed">
                        <p className="mb-1">{linkedInProfile.address || linkedInProfile.location}</p>
                        <p>
                            {contactLabels.email}: {linkedInProfile.email || "ionesiliviu@yahoo.com"} | 
                            {' '} {contactLabels.phone}: {linkedInProfile.phone} | 
                            {' '} {contactLabels.linkedin}: linkedin.com/in/liviu-ionesi | 
                            {' '} {contactLabels.github}: github.com/pehlivanu
                        </p>
                    </address>
                </header>

                {/* 2. PROFESSIONAL SUMMARY */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold uppercase border-b border-gray-400 mb-4 pb-1">{t('cvProfessionalSummary') || 'Summary'}</h2>
                    <div className="text-sm leading-relaxed text-justify">
                        {detailLevel === 'detailed' ? (
                            <div className="prose prose-sm max-w-none text-black">
                                <ReactMarkdown>{about.description}</ReactMarkdown>
                            </div>
                        ) : (
                            <p>{linkedInProfile.about}</p>
                        )}
                    </div>
                </section>

                {/* 3. SKILLS (Redundant, skills are in jobs/projects)
                <section className="mb-8 print-break-inside-avoid">
                    <h2 className="text-xl font-bold uppercase border-b border-gray-400 mb-4 pb-1">{t('cvTechnicalSkills') || 'Skills'}</h2>
                    <p className="text-sm leading-relaxed">
                        {linkedInProfile.skills.join(', ')}
                    </p>
                </section>
                */}

                {/* 4. PROFESSIONAL EXPERIENCE */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold uppercase border-b border-gray-400 mb-4 pb-1">{t('cvProfessionalExperience') || 'Experience'}</h2>
                    <div className="space-y-6">
                        {experience.map((job: Experience) => (
                            <div key={job.id}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-bold text-base">{job.role}</h3>
                                    <span className="text-sm font-bold">{job.period}</span>
                                </div>
                                <div className="flex justify-between items-baseline mb-2">
                                    <p className="font-semibold text-sm">{job.company}</p>
                                    <span className="text-sm">{job.locationType}</span>
                                </div>
                                <div className="text-sm leading-relaxed text-justify">
                                    {detailLevel === 'detailed' ? (
                                        <div className="prose prose-sm max-w-none text-black">
                                            <p className="mb-2 italic">{job.summary}</p>
                                            <ReactMarkdown
                                                components={{
                                                    ul: ({...props}) => <ul className="list-disc pl-5 my-2 space-y-1" {...props} />,
                                                    li: ({...props}) => <li className="pl-1" {...props} />
                                                }}
                                            >
                                                {job.description}
                                            </ReactMarkdown>
                                            {job.tech && job.tech.length > 0 && (
                                                <div className="mt-2 text-sm text-gray-800">
                                                    <strong>Tech:</strong> {job.tech.flatMap((t: { skills: string[] }) => t.skills).join(', ')}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <p>{job.summary}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 5. EDUCATION */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold uppercase border-b border-gray-400 mb-4 pb-1">{t('cvEducation') || 'Education'}</h2>
                    <div className="space-y-6">
                        {education.map((edu: Education) => (
                            <div key={edu.id} className="print-break-inside-avoid">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-bold text-base">{edu.degree} - {edu.studyField}</h3>
                                    <span className="text-sm font-bold">{edu.year}</span>
                                </div>
                                <div className="flex justify-between items-baseline mb-2">
                                    <p className="font-semibold text-sm">{edu.school}</p>
                                    <span className="text-sm">{edu.location}</span>
                                </div>
                                <div className="text-sm leading-relaxed text-justify">
                                    {detailLevel === 'detailed' && edu.description ? (
                                        <div className="prose prose-sm max-w-none text-black">
                                            <ReactMarkdown
                                                components={{
                                                    ul: ({...props}) => <ul className="list-disc pl-5 my-1 space-y-1" {...props} />,
                                                    li: ({...props}) => <li className="pl-1" {...props} />
                                                }}
                                            >
                                                {edu.description}
                                            </ReactMarkdown>
                                            {edu.grade && <p className="mt-1 font-semibold text-black"><strong>{t('grade') || 'Grade'}:</strong> {edu.grade}</p>}
                                        </div>
                                    ) : (
                                        <p>{edu.summary}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 6. PROJECTS (Optional) */}
                {showProjects && (
                    <section className="mb-8">
                        <h2 className="text-xl font-bold uppercase border-b border-gray-400 mb-4 pb-1">{t('cvProjects') || 'Projects'}</h2>
                        <div className="space-y-4">
                            {projects.map((proj: Project) => (
                                <div key={proj.id} className="print-break-inside-avoid">
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h3 className="font-bold text-base">{proj.title}</h3>
                                        <span className="text-sm">{proj.tech.join(', ')}</span>
                                    </div>
                                    <p className="text-sm leading-relaxed text-justify">
                                        {proj.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
                
                {/* 7. LANGUAGES */}
                <section className="mb-8 print-break-inside-avoid">
                    <h2 className="text-xl font-bold uppercase border-b border-gray-400 mb-4 pb-1">{t('cvLanguages') || 'Languages'}</h2>
                    <ul className="list-disc pl-5 text-sm">
                        {linkedInProfile.languages.map((l: LanguageLevel, i: number) => (
                            <li key={i} className="mb-1">
                                <strong>{l.language}</strong>: {l.proficiency}
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default function AtsCvPage() {
    return (
        <Suspense fallback={<div className="p-8 text-center">Loading ATS CV...</div>}>
            <AtsCvContent />
        </Suspense>
    );
}
