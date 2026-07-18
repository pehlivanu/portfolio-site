"use client";

import React from 'react';
import clsx from 'clsx';
import { BookOpen, ExternalLink } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

// We import Education directly or define interface
// In page.tsx it was: type Education = typeof mockDataEn.education[number];
interface CVEducationProps {
    education: any[];
    theme: string;
    detailLevel: string;
    t: (key: string) => string;
}

export default function CVEducation({ education, theme, detailLevel, t }: CVEducationProps) {
    return (
        <section className="cv-section">
            <div className={clsx(
                "flex items-center gap-2 mb-4 border-b pb-2",
                theme === 'ide' ? "border-ide-border" : "border-gray-200"
            )}>
                <BookOpen className="text-blue-600" size={20} />
                <h2 className={clsx("text-lg font-bold uppercase tracking-wide", theme === 'ide' ? "text-ide-text" : "text-gray-900")}>
                    {t('education')}
                </h2>
            </div>
            <div className="space-y-4">
                {education.map((edu) => (
                    <div key={edu.id} className={clsx(
                        "cv-item print-break-inside-avoid relative pl-4 border-l-2",
                        theme === 'ide' ? "border-ide-border" : "border-gray-200"
                    )}>
                        <div className={clsx(
                            "absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border-2",
                            theme === 'ide' ? "bg-blue-600 border-ide-bg" : "bg-blue-600 border-white"
                        )}></div>
                        <div className="flex justify-between items-baseline mb-1">
                            <h3 className={clsx("font-bold text-base", theme === 'ide' ? "text-ide-text" : "text-gray-900")}>
                                {edu.degree}
                            </h3>
                            <span className={clsx("font-mono text-xs px-2 py-0.5 rounded", theme === 'ide' ? "bg-ide-activity-bar text-gray-400" : "bg-gray-100 text-gray-500")}>
                                {edu.year}
                            </span>
                        </div>
                        <div className="flex justify-between items-baseline mb-2">
                            <div className="text-sm font-semibold text-blue-700">
                                {edu.url ? (
                                    <a href={edu.url} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1 w-fit">
                                        {edu.school}
                                        <ExternalLink size={10} className="inline opacity-50" />
                                    </a>
                                ) : (
                                    edu.school
                                )}
                            </div>
                            {edu.location && (
                                <span className={clsx("text-sm font-normal", theme === 'ide' ? "text-gray-400" : "text-gray-500")}>
                                    {edu.location}
                                </span>
                            )}
                        </div>
                        <div className={clsx(
                            "text-sm leading-relaxed text-justify",
                            theme === 'ide' ? "text-gray-300" : "text-gray-700"
                        )}>
                            {detailLevel === 'detailed' ? (
                                <div className="prose prose-sm prose-blue max-w-none dark:prose-invert">
                                    {edu.description && (
                                        <ReactMarkdown 
                                            components={{
                                                ul: ({...props}) => <ul className="list-disc pl-5 my-2 space-y-1" {...props} />,
                                                li: ({...props}) => <li className="pl-1" {...props} />
                                            }}
                                        >
                                            {edu.description}
                                        </ReactMarkdown>
                                    )}
                                    {edu.grade && (
                                        <div className={clsx("mt-2 font-semibold", theme === 'ide' ? "text-ide-text" : "text-gray-800")}>
                                            {t('grade')}: {edu.grade}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <p>{edu.summary}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
