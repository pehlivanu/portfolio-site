"use client";

import React from 'react';
import ReactMarkdown from 'react-markdown';

interface ATSEducationProps {
    education: any[];
    detailLevel: string;
    t: (key: string) => string;
}

export default function ATSEducation({ education, detailLevel, t }: ATSEducationProps) {
    return (
        <section className="mb-8">
            <h2 className="text-xl font-bold uppercase border-b border-gray-400 mb-4 pb-1">
                {t('cvEducation')}
            </h2>
            <div className="space-y-6">
                {education.map((edu) => (
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
                                    {edu.grade && (
                                        <p className="mt-1 font-semibold text-black">
                                            <strong>{t('grade')}:</strong> {edu.grade}
                                        </p>
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
