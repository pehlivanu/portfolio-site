"use client";

import React, { useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import * as mockDataEn from '@/data/mockData';
import * as mockDataRo from '@/data/mockDataRo';
import * as mockDataDe from '@/data/mockDataDe';
import * as mockDataFr from '@/data/mockDataFr';
import { translations, Language } from '@/context/LanguageContext';
import { Terminal, Code, MapPin, Phone, Mail, Linkedin, Globe, Calendar, Award, BookOpen, Layers, Github, ExternalLink, FileText } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import clsx from 'clsx';

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
        <div className="bg-white text-black min-h-screen max-w-[210mm] mx-auto print:max-w-none print:mx-0">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap');
                
                body { 
                    font-family: 'Inter', sans-serif;
                }
                .font-mono {
                    font-family: 'JetBrains Mono', monospace;
                }
                
                @media print {
                    @page { margin: 0; size: auto; }
                    body { background: white; color: black; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                    .print-break-inside-avoid { break-inside: avoid; }
                }
            `}</style>
            
            <div className={clsx(
                "min-h-screen transition-colors p-0",
                theme === 'ide' ? "bg-ide-bg text-ide-text" : "bg-white text-black"
            )}>
            
            {/* HERO SECTION - Matching Site Design */}
            <div className={clsx(
                "border-b p-8 print:p-[10mm]",
                theme === 'ide' 
                    ? "bg-ide-bg border-ide-border" 
                    : "bg-[#f8f9fa] border-gray-200 print:bg-[#f8f9fa]"
            )}>
                <div className="flex justify-between items-start gap-8">
                    <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-2 text-blue-600 mb-2">
                            <Terminal size={18} />
                            <span className="font-mono text-sm font-semibold">
                                {(() => {
                                    const rawTitle = t('portfolioTitle');
                                    const cleanTitle = rawTitle.replace(/^(portfolio|portofoliu)\s*-\s*/i, '');
                                    const urlPart = 'liviuionesi.com';
                                    
                                    if (cleanTitle.toLowerCase().includes(urlPart)) {
                                        const textPart = cleanTitle.replace(new RegExp(urlPart, 'i'), '');
                                        return (
                                            <>
                                                {textPart}
                                                <a 
                                                    href="https://liviuionesi.vercel.app" 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="font-bold hover:underline"
                                                >
                                                    {urlPart}
                                                </a>
                                            </>
                                        );
                                    }
                                    return cleanTitle;
                                })()}
                            </span>
                        </div>
                        
                        <div>
                            <h1 className={clsx(
                                "text-4xl font-bold tracking-tight mb-1",
                                theme === 'ide' ? "text-ide-text" : "text-gray-900"
                            )}>
                                {linkedInProfile.name}
                            </h1>
                            <p className="text-xl text-blue-600 font-medium">{linkedInProfile.headline}</p>
                        </div>

                        <div className={clsx(
                            "leading-relaxed max-w-2xl text-sm",
                             theme === 'ide' ? "text-ide-text opacity-90" : "text-gray-700"
                        )}>
                            {detailLevel === 'detailed' ? (
                                <div className="prose prose-sm prose-blue max-w-none dark:prose-invert">
                                    <ReactMarkdown>{about.description}</ReactMarkdown>
                                </div>
                            ) : (
                                linkedInProfile.about
                            )}
                        </div>

                        {/* Contact Grid */}
                        <div className="grid grid-cols-2 gap-y-2 gap-x-6 text-sm mt-4 text-gray-600">
                            {(linkedInProfile.address || linkedInProfile.location) && (
                                <div className="flex items-center gap-2 col-span-2">
                                    <MapPin size={14} className="text-blue-500 print:hidden" aria-hidden="true" />
                                    <span className="hidden print:inline font-semibold">Location:</span>
                                    <span>{linkedInProfile.address || linkedInProfile.location}</span>
                                </div>
                            )}
                             {linkedInProfile.phone && (
                                <div className="flex items-center gap-2">
                                    <Phone size={14} className="text-blue-500 print:hidden" aria-hidden="true" />
                                    <span className="hidden print:inline font-semibold">Phone:</span>
                                    <a href={`tel:${linkedInProfile.phone.replace(/\s+/g, '')}`} className="text-gray-600 hover:text-blue-600 hover:underline">
                                        {linkedInProfile.phone}
                                    </a>
                                </div>
                            )}
                            <div className="flex items-center gap-2">
                                <Mail size={14} className="text-blue-500 print:hidden" aria-hidden="true" />
                                <span className="hidden print:inline font-semibold">Email:</span>
                                <a href={`mailto:${linkedInProfile.email || "ionesiliviu@yahoo.com"}`} className="text-gray-600 hover:text-blue-600 hover:underline">
                                    {linkedInProfile.email || "ionesiliviu@yahoo.com"}
                                </a>
                            </div>
                             <div className="flex items-center gap-2">
                                <Linkedin size={14} className="text-blue-500 print:hidden" aria-hidden="true" />
                                <span className="hidden print:inline font-semibold">LinkedIn:</span>
                                <a href="https://linkedin.com/in/liviu-ionesi" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 hover:underline">
                                    linkedin.com/in/liviu-ionesi
                                </a>
                            </div>
                             <div className="flex items-center gap-2">
                                <Github size={14} className="text-blue-500 print:hidden" aria-hidden="true" />
                                <span className="hidden print:inline font-semibold">GitHub:</span>
                                <a href="https://github.com/pehlivanu" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 hover:underline">
                                    github.com/pehlivanu
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Profile Image (Replaces Animation) */}
                    <div className="flex-shrink-0">
                        <div className="w-32 h-32 rounded-lg overflow-hidden border-2 border-white shadow-lg">
                            <img 
                                src={linkedInProfile.avatarUrl} 
                                alt={linkedInProfile.name} 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-8 print:p-[10mm] space-y-8">
                {/* EXPERIENCE SECTION */}
                <section>
                    <div className={clsx(
                        "flex items-center gap-2 mb-4 border-b pb-2",
                         theme === 'ide' ? "border-ide-border" : "border-gray-200"
                    )}>
                        <Layers className="text-blue-600" size={20} />
                        <h2 className={clsx("text-lg font-bold uppercase tracking-wide", theme === 'ide' ? "text-ide-text" : "text-gray-900")}>{t('experience')}</h2>
                    </div>
                    
                    <div className="space-y-6">
                        {experience.map((job: any) => (
                            <div key={job.id} className={clsx(
                                "print-break-inside-avoid relative pl-4 border-l-2",
                                theme === 'ide' ? "border-ide-border" : "border-gray-200"
                            )}>
                                <div className={clsx(
                                    "absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border-2",
                                    theme === 'ide' ? "bg-blue-600 border-ide-bg" : "bg-blue-600 border-white"
                                )}></div>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className={clsx("font-bold text-base", theme === 'ide' ? "text-ide-text" : "text-gray-900")}>{job.role}</h3>
                                    <span className={clsx("font-mono text-xs px-2 py-0.5 rounded", theme === 'ide' ? "bg-ide-activity-bar text-gray-400" : "bg-gray-100 text-gray-500")}>{job.period}</span>
                                </div>
                                <div className="text-sm font-semibold text-blue-700 mb-2">
                                    {job.websiteUrl ? (
                                        <a href={job.websiteUrl} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1 w-fit">
                                            {job.company}
                                            <ExternalLink size={10} className="inline opacity-50" />
                                        </a>
                                    ) : (
                                        job.company
                                    )}
                                </div>
                                <div className={clsx(
                                    "text-sm leading-relaxed text-justify",
                                    theme === 'ide' ? "text-gray-300" : "text-gray-700"
                                )}>
                                    {detailLevel === 'detailed' ? (
                                        <div className="prose prose-sm prose-blue max-w-none dark:prose-invert">
                                            <p className="mb-2">{job.summary}</p>
                                            <ReactMarkdown 
                                                components={{
                                                    ul: ({node, ...props}) => <ul className="list-disc pl-5 my-2 space-y-1" {...props} />,
                                                    li: ({node, ...props}) => <li className="pl-1" {...props} />
                                                }}
                                            >
                                                {job.description}
                                            </ReactMarkdown>
                                        </div>
                                    ) : (
                                        job.summary
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* PROJECTS SECTION */}
                {showProjects && (
                <section>
                    <div className={clsx(
                        "flex items-center gap-2 mb-4 border-b pb-2",
                        theme === 'ide' ? "border-ide-border" : "border-gray-200"
                    )}>
                        <Code className="text-blue-600" size={20} />
                        <h2 className={clsx("text-lg font-bold uppercase tracking-wide", theme === 'ide' ? "text-ide-text" : "text-gray-900")}>{t('projects')}</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-4">
                        {projects.map((proj: any) => (
                            <div key={proj.id} className={clsx(
                                "print-break-inside-avoid p-4 rounded-lg border",
                                theme === 'ide' ? "bg-ide-activity-bar border-ide-border" : "bg-gray-50 border-gray-200"
                            )}>
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className={clsx("font-bold text-base", theme === 'ide' ? "text-ide-text" : "text-gray-900")}>{proj.title}</h3>
                                    <div className="flex gap-2">
                                        {proj.githubUrl && (
                                            <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className={clsx("hover:text-blue-600", theme === 'ide' ? "text-gray-400" : "text-gray-500")} title="View Source">
                                                <Github size={16} />
                                            </a>
                                        )}
                                        {proj.deployUrl && (
                                            <a href={proj.deployUrl} target="_blank" rel="noopener noreferrer" className={clsx("hover:text-blue-600", theme === 'ide' ? "text-gray-400" : "text-gray-500")} title="View Live">
                                                <ExternalLink size={16} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <p className={clsx(
                                    "text-sm leading-relaxed mb-3 text-justify",
                                    theme === 'ide' ? "text-gray-300" : "text-gray-700"
                                )}>
                                    {proj.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {proj.tech.map((tech: string, i: number) => (
                                        <span key={i} className={clsx(
                                            "text-xs px-2 py-0.5 rounded border font-medium",
                                            theme === 'ide' ? "bg-ide-bg text-blue-400 border-ide-border" : "bg-white text-blue-700 border-blue-100"
                                        )}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                )}

                <div className="grid grid-cols-2 gap-8">
                     {/* SKILLS */}
                    <section className="print-break-inside-avoid">
                        <div className={clsx(
                            "flex items-center gap-2 mb-4 border-b pb-2",
                            theme === 'ide' ? "border-ide-border" : "border-gray-200"
                        )}>
                            <Terminal className="text-blue-600" size={20} />
                            <h2 className={clsx("text-lg font-bold uppercase tracking-wide", theme === 'ide' ? "text-ide-text" : "text-gray-900")}>{t('skills')}</h2>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {linkedInProfile.skills.map((skill: string, index: number) => (
                                <span key={index} className={clsx(
                                    "text-sm px-2 py-1 rounded border font-medium",
                                    theme === 'ide' ? "bg-ide-activity-bar text-gray-300 border-ide-border" : "bg-gray-100 text-gray-800 border-gray-200"
                                )}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* EDUCATION */}
                    <section className="print-break-inside-avoid">
                        <div className={clsx(
                            "flex items-center gap-2 mb-4 border-b pb-2",
                            theme === 'ide' ? "border-ide-border" : "border-gray-200"
                        )}>
                            <BookOpen className="text-blue-600" size={20} />
                            <h2 className={clsx("text-lg font-bold uppercase tracking-wide", theme === 'ide' ? "text-ide-text" : "text-gray-900")}>{t('education')}</h2>
                        </div>
                        <div className="space-y-4">
                            {education.map((edu: any) => (
                                <div key={edu.id}>
                                    <h3 className={clsx("font-bold text-sm", theme === 'ide' ? "text-ide-text" : "text-gray-900")}>{edu.degree}</h3>
                                    <div className="text-sm text-blue-700 font-medium flex items-center gap-2">
                                        {edu.url ? (
                                            <a href={edu.url} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1 w-fit">
                                                {edu.school}
                                                <ExternalLink size={10} className="inline opacity-50" />
                                            </a>
                                        ) : (
                                            edu.school
                                        )}
                                    </div>
                                    <div className="text-xs text-gray-500 font-mono mt-0.5">{edu.year}</div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
            
            </div>

             {/* Print Button Overlay */}
             <div className="fixed top-8 right-8 print:hidden z-50">
                <button 
                    onClick={() => window.print()}
                    className="flex items-center gap-2 bg-ide-accent text-white px-6 py-3 rounded-md shadow-xl hover:bg-blue-600 font-bold transition-all transform hover:-translate-y-0.5"
                >
                    <span className="text-lg">🖨️</span> {t('downloadResume') || "Print CV"}
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
