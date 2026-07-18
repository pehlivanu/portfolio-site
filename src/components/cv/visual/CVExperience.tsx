"use client";

import React from 'react';
import clsx from 'clsx';
import { Layers, ExternalLink } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Experience } from '@/types/data';

interface CVExperienceProps {
    experience: Experience[];
    theme: string;
    detailLevel: string;
    t: (key: string) => string;
}

export default function CVExperience({ experience, theme, detailLevel, t }: CVExperienceProps) {
    return (
        <section className="cv-section">
            <div className={clsx(
                "flex items-center gap-2 mb-4 border-b pb-2",
                 theme === 'ide' ? "border-ide-border" : "border-gray-200"
            )}>
                <Layers className="text-blue-600" size={20} />
                <h2 className={clsx("text-lg font-bold uppercase tracking-wide", theme === 'ide' ? "text-ide-text" : "text-gray-900")}>
                    {t('experience')}
                </h2>
            </div>
            
            <div className="space-y-6">
                {experience.map((job) => (
                    <div key={job.id} className={clsx(
                        "cv-item relative pl-4 border-l-2",
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
                                            ul: ({...props}) => <ul className="list-disc pl-5 my-2 space-y-1" {...props} />,
                                            li: ({...props}) => <li className="pl-1" {...props} />
                                        }}
                                    >
                                        {job.description}
                                    </ReactMarkdown>
                                    
                                    {job.tech && job.tech.length > 0 && (
                                        <div className="mt-3 flex flex-wrap gap-1">
                                            {job.tech.flatMap((t: { skills: string[] }) => t.skills).map((skill: string, i: number) => (
                                                <span key={i} className={clsx(
                                                    "px-2 py-0.5 text-[10px] rounded-full border",
                                                    theme === 'ide' ? "bg-ide-bg border-ide-line text-ide-text opacity-80" : "bg-gray-50 border-gray-200 text-gray-600"
                                                )}>
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                job.summary
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
