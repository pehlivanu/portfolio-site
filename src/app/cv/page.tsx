"use client";

import React, { useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import * as mockDataEn from '@/data/mockData';
import * as mockDataRo from '@/data/mockDataRo';
import * as mockDataDe from '@/data/mockDataDe';
import * as mockDataFr from '@/data/mockDataFr';
import { translations, Language } from '@/context/LanguageContext';

// Import our dedicated print CSS
import './cv.css';

/* ─────────────────────────────────────────────
   UNIFIED ATS-OPTIMIZED CV PAGE

   This page represents the single, "Golden Path" CV:
   - Beautiful for humans: Colors, typography, spacing
   - Perfect for ATS: Single column, semantic HTML, standard keywords
   ───────────────────────────────────────────── */

function CVContent() {
    const searchParams = useSearchParams();

    // Read config
    const langParam = searchParams.get('lang');
    const showProjects = searchParams.get('projects') !== 'false';
    const detailLevel = searchParams.get('detail') === 'detailed' ? 'detailed' : 'brief';
    const theme = searchParams.get('theme') === 'ide' ? 'ide' : 'print';

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
    const { linkedInProfile, experience, education, projects } = data;

    const allSkills = linkedInProfile.skills;
    const isIde = theme === 'ide';
    const isDetailed = detailLevel === 'detailed';

    // Theme-based color tokens
    const colors = isIde ? {
        text: 'text-[#cdd6f4]',
        textMuted: 'text-[#a6adc8]',
        textBright: 'text-[#cdd6f4]',
        heading: 'text-[#89b4fa]',
        accent: 'text-[#89dceb]',
        border: 'border-[#45475a]',
        pillBg: 'bg-[#313244]',
        pillText: 'text-[#89b4fa]',
        pillBorder: 'border-[#45475a]',
        gradientFrom: 'from-[#1e1e2e]',
        gradientTo: 'to-[#181825]',
        sectionBorder: 'border-[#45475a]',
        sectionTitle: 'text-[#89b4fa]',
        bulletColor: 'before:text-[#89dceb]',
        linkColor: 'text-[#89dceb]',
        summaryColor: 'text-[#a6adc8] italic',
    } : {
        text: 'text-black',
        textMuted: 'text-gray-600',
        textBright: 'text-gray-900',
        heading: 'text-blue-700',
        accent: 'text-blue-600',
        border: 'border-gray-200',
        pillBg: 'bg-blue-50',
        pillText: 'text-blue-800',
        pillBorder: 'border-blue-200',
        gradientFrom: 'from-white',
        gradientTo: 'to-white',
        sectionBorder: 'border-gray-200',
        sectionTitle: 'text-gray-500',
        bulletColor: 'before:text-blue-400',
        linkColor: 'text-blue-600',
        summaryColor: 'text-gray-600 italic',
    };

    return (
        <div className={`cv-page-container min-h-screen theme-${theme}`}>
            {/* ═══════ PRINT BUTTON (screen only) ═══════ */}
            <div className="print-hidden fixed top-4 right-4 z-50 flex items-center gap-3">
                {isIde && (
                    <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1.5 rounded-full font-semibold border border-purple-200 shadow-sm">
                        IDE Theme
                    </span>
                )}
                <button
                    onClick={() => window.print()}
                    className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors shadow-lg"
                >
                    ↓ Save as PDF
                </button>
            </div>

            {/* ═══════ CV DOCUMENT ═══════ */}
            <article
                className="max-w-[210mm] mx-auto print:max-w-none print:mx-0 print:pt-0"
                itemScope
                itemType="https://schema.org/Person"
            >
                {/* ── HEADER: Name + Contact ── */}
                <header className={`px-8 py-10 print:px-0 print:py-0 ${isIde ? '' : `bg-gradient-to-b ${colors.gradientFrom} ${colors.gradientTo} print:!bg-none`} print:bg-transparent`}>
                    <h1
                        className={`font-extrabold tracking-tight mb-2 text-4xl ${colors.textBright}`}
                        itemProp="name"
                    >
                        {linkedInProfile.name}
                    </h1>
                    <p className={`font-semibold mb-4 text-base ${colors.heading}`} itemProp="jobTitle">
                        {linkedInProfile.headline}
                    </p>

                    {/* Contact — semantic <address> for ATS */}
                    <address
                        className={`not-italic text-sm leading-relaxed ${colors.textMuted} mt-6`}
                        itemProp="address"
                    >
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                            <span className="font-medium text-gray-800 print:text-black">{linkedInProfile.address || linkedInProfile.location}</span>
                            <span className={`${isIde ? 'text-[#45475a]' : 'text-gray-300'} print:text-gray-500`}>•</span>
                            <a href={`tel:${linkedInProfile.phone?.replace(/\s+/g, '')}`} className={`${colors.textMuted} hover:${colors.accent} ${isIde ? '' : 'print:text-black'}`}>
                                {linkedInProfile.phone}
                            </a>
                            <span className={`${isIde ? 'text-[#45475a]' : 'text-gray-300'} print:text-gray-500`}>•</span>
                            <a href={`mailto:${linkedInProfile.email || 'ionesiliviu@yahoo.com'}`} className={`${colors.textMuted} hover:${colors.accent} ${isIde ? '' : 'print:text-black'}`}>
                                {linkedInProfile.email || 'ionesiliviu@yahoo.com'}
                            </a>
                            <span className={`${isIde ? 'text-[#45475a]' : 'text-gray-300'} print:text-gray-500`}>•</span>
                            <a href="https://linkedin.com/in/liviuionesi" className={`${colors.textMuted} hover:${colors.accent} ${isIde ? '' : 'print:text-black'}`} target="_blank" rel="noopener noreferrer">
                                linkedin.com/in/liviuionesi
                            </a>
                            <span className={`${isIde ? 'text-[#45475a]' : 'text-gray-300'} print:text-gray-500`}>•</span>
                            <a href="https://github.com/pehlivanu" className={`${colors.textMuted} hover:${colors.accent} ${isIde ? '' : 'print:text-black'}`} target="_blank" rel="noopener noreferrer">
                                github.com/pehlivanu
                            </a>
                        </div>
                    </address>
                </header>

                <div className={`px-8 print:px-0 pb-8 print:pb-0`}>

                    {/* ── PROFESSIONAL SUMMARY ── */}
                    <Section title={translations[language].cvProfessionalSummary} colors={colors}>
                        <p className={`leading-relaxed text-sm ${colors.textMuted} cv-item`} itemProp="description">
                            {linkedInProfile.about}
                        </p>
                    </Section>

                    {/* ── TECHNICAL SKILLS ── */}
                    <Section title={translations[language].cvTechnicalSkills} colors={colors}>
                        <div className="flex flex-wrap gap-1.5 cv-item">
                            {allSkills.map((skill: string, i: number) => (
                                <span
                                    key={i}
                                    className={`text-xs px-2.5 py-1 rounded-md font-medium border ${colors.pillBg} ${colors.pillText} ${colors.pillBorder}`}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </Section>

                    {/* ── PROFESSIONAL EXPERIENCE ── */}
                    <Section title={translations[language].cvProfessionalExperience} colors={colors}>
                        <div className="space-y-0">
                            {experience.map((job: any) => (
                                <div key={job.id} className="cv-item">
                                    <div className="flex justify-between items-baseline gap-4 mb-1">
                                        <h3 className={`text-base font-bold ${colors.textBright}`}>{job.role}</h3>
                                        <span className={`text-sm ${colors.textMuted} font-semibold whitespace-nowrap tabular-nums`}>
                                            {job.period}
                                        </span>
                                    </div>
                                    <div className={`text-sm ${colors.heading} font-semibold mb-2`}>
                                        {job.websiteUrl ? (
                                            <a href={job.websiteUrl} target="_blank" rel="noopener noreferrer" className={`hover:underline ${isIde ? '' : 'print:text-black print:no-underline'}`}>
                                                {job.company}
                                            </a>
                                        ) : job.company}
                                    </div>

                                    {/* Summary line */}
                                    <p className={`text-sm mb-2 ${colors.summaryColor}`}>
                                        {job.summary}
                                    </p>

                                    {/* Bullet points */}
                                    {isDetailed && (
                                        <BulletList markdown={job.description} colors={colors} isIde={isIde} />
                                    )}
                                </div>
                            ))}
                        </div>
                    </Section>

                    {/* ── PROJECTS ── */}
                    {showProjects && (
                        <Section title={translations[language].cvProjects} colors={colors}>
                            <div className="space-y-0">
                                {projects.slice(0, 4).map((proj: any) => (
                                    <div key={proj.id} className="cv-item">
                                        <div className="flex items-baseline gap-2 mb-0.5">
                                            <h3 className={`text-sm font-bold ${colors.textBright}`}>{proj.title}</h3>
                                            {proj.githubUrl && (
                                                <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className={`text-xs ${colors.linkColor} hover:underline ${isIde ? '' : 'print:text-gray-600 print:no-underline'}`}>
                                                    GitHub ↗
                                                </a>
                                            )}
                                            {proj.deployUrl && (
                                                <a href={proj.deployUrl} target="_blank" rel="noopener noreferrer" className={`text-xs ${colors.linkColor} hover:underline ${isIde ? '' : 'print:text-gray-600 print:no-underline'}`}>
                                                    Live ↗
                                                </a>
                                            )}
                                        </div>
                                        {isDetailed && (
                                            <p className={`text-sm ${colors.textMuted} mb-1`}>{proj.description}</p>
                                        )}
                                        <div className="flex flex-wrap gap-1">
                                            {proj.tech.map((techItem: string, i: number) => (
                                                <span key={i} className={`text-[10px] px-2 py-0.5 rounded font-medium border ${
                                                    isIde
                                                        ? 'bg-[#313244] text-[#89dceb] border-[#45475a]'
                                                        : 'bg-blue-50 text-blue-800 border-blue-200'
                                                }`}>
                                                    {techItem}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Section>
                    )}

                    {/* ── EDUCATION ── */}
                    <Section title={translations[language].cvEducation} colors={colors}>
                        <div className="space-y-0">
                            {education.map((edu: any) => (
                                <div key={edu.id} className="cv-item">
                                    <div className="flex justify-between items-baseline gap-4 mb-1">
                                        <h3 className={`text-base font-bold ${colors.textBright}`}>{edu.degree}</h3>
                                        <span className={`text-sm ${colors.textMuted} font-semibold whitespace-nowrap tabular-nums`}>{edu.year}</span>
                                    </div>
                                    <div className={`text-sm ${colors.heading} font-semibold`}>
                                        {edu.url ? (
                                            <a href={edu.url} target="_blank" rel="noopener noreferrer" className={`hover:underline ${isIde ? '' : 'print:text-black print:no-underline'}`}>
                                                {edu.school}
                                            </a>
                                        ) : edu.school}
                                        {edu.location && <span className={`${colors.textMuted} font-normal`}>, {edu.location}</span>}
                                    </div>
                                    {edu.grade && (
                                        <div className="mt-1">
                                            <span className="text-xs font-bold text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                                                {edu.grade}
                                            </span>
                                        </div>
                                    )}
                                    {isDetailed && edu.summary && <p className={`text-sm ${colors.textMuted} mt-1.5`}>{edu.summary}</p>}
                                </div>
                            ))}
                        </div>
                    </Section>

                    {/* ── CERTIFICATIONS ── */}
                    <Section title={translations[language].cvCertifications} colors={colors}>
                        <div className="space-y-1.5 cv-item">
                            {linkedInProfile.certifications.map((cert: any, i: number) => (
                                <div key={i} className="flex items-baseline gap-2 text-sm">
                                    <span className={`font-medium ${colors.textBright}`}>{cert.name}</span>
                                    <span className={colors.textMuted}>—</span>
                                    <span className={colors.textMuted}>{cert.authority}</span>
                                    {cert.url && (
                                        <a href={cert.url} target="_blank" rel="noopener noreferrer" className={`text-xs ${colors.linkColor} hover:underline print-hidden`}>
                                            Verify ↗
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </Section>

                    {/* ── LANGUAGES ── */}
                    <Section title={translations[language].cvLanguages} colors={colors}>
                        <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm cv-item">
                            {linkedInProfile.languages.map((l: any, i: number) => (
                                <div key={i}>
                                    <span className={`font-medium ${colors.textBright}`}>{l.language}</span>
                                    <span className={`${colors.textMuted} ml-1.5`}>{l.proficiency}</span>
                                </div>
                            ))}
                        </div>
                    </Section>

                </div>
            </article>
        </div>
    );
}

/* ─── Theme Color Token Type ──────────────────────── */
interface ColorTokens {
    text: string;
    textMuted: string;
    textBright: string;
    heading: string;
    accent: string;
    border: string;
    pillBg: string;
    pillText: string;
    pillBorder: string;
    gradientFrom: string;
    gradientTo: string;
    sectionBorder: string;
    sectionTitle: string;
    bulletColor: string;
    linkColor: string;
    summaryColor: string;
}

/* ─── Reusable Section Component ──────────────────── */
function Section({ title, colors, children }: {
    title: string;
    colors: ColorTokens;
    children: React.ReactNode;
}) {
    return (
        <section className="cv-section">
            <h2 className={`font-extrabold pb-2 mb-4 border-b-2 text-xl tracking-tight uppercase ${colors.sectionTitle} ${colors.sectionBorder} ${colors.sectionBorder.includes('45475a') ? '' : 'print:text-gray-900 print:border-gray-800'}`}>
                {title}
            </h2>
            {children}
        </section>
    );
}

/* ─── Bullet List Parser ──────────────────────────── 
   Converts markdown bullet strings into clean <ul>/<li> 
   elements that ATS can parse.                         */
function BulletList({ markdown, colors, isIde }: {
    markdown: string;
    colors: ColorTokens;
    isIde: boolean;
}) {
    const bullets = markdown
        .split('\n')
        .map(line => line.replace(/^\s*\*\s+/, '').trim())
        .filter(line => line.length > 0);

    if (bullets.length === 0) return null;

    return (
        <ul className={`space-y-1 text-sm ${colors.textMuted}`}>
            {bullets.map((bullet, i) => {
                // Render bold parts with <strong>
                const parts = bullet.split(/(\*\*[^*]+\*\*)/g);
                return (
                    <li key={i} className={`pl-4 relative before:content-['▸'] before:absolute before:left-0 ${colors.bulletColor} before:text-xs before:top-[3px] ${isIde ? '' : "print:before:content-['•'] print:before:text-black"}`}>
                        {parts.map((part, j) => {
                            if (part.startsWith('**') && part.endsWith('**')) {
                                return <strong key={j} className={`${colors.textBright} font-semibold`}>{part.slice(2, -2)}</strong>;
                            }
                            return <span key={j}>{part}</span>;
                        })}
                    </li>
                );
            })}
        </ul>
    );
}

/* ─── Page Export ──────────────────────────────────── */
export default function PrintableCVPage() {
    return (
        <Suspense fallback={<div className="p-8 text-center text-gray-500">Loading CV...</div>}>
            <CVContent />
        </Suspense>
    );
}
