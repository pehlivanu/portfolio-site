"use client";

import React from 'react';
import ReactMarkdown from 'react-markdown';

interface ATSExperienceProps {
    experience: any[];
    detailLevel: string;
    t: (key: string) => string;
}

export default function ATSExperience({ experience, detailLevel, t }: ATSExperienceProps) {
    return (
        <section className="mb-8">
            <h2 className="text-xl font-bold uppercase border-b border-gray-400 mb-4 pb-1">
                {t('cvProfessionalExperience')}
            </h2>
            <div className="space-y-6">
                {experience.map((job) => (
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
                                            <strong>{t('techLabel')}</strong> {job.tech.flatMap((t: { skills: string[] }) => t.skills).join(', ')}
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
    );
}
