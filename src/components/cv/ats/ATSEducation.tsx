'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Education } from '@/types/data';

interface ATSEducationProps {
  education: Education[];
  detailLevel: string;
  t: (key: string) => string;
}

export default function ATSEducation({ education, detailLevel, t }: ATSEducationProps) {
  return (
    <section className="mb-8">
      <div className="space-y-6">
        {education.map((edu, index) => {
          const content = (
            <div key={edu.id} className={index !== 0 ? 'print-break-inside-avoid' : ''}>
              <div className="mb-1 flex items-baseline justify-between">
                <h3 className="text-base font-bold">{edu.studyField}</h3>
                <span className="text-sm font-bold">{edu.year}</span>
              </div>
              <div className="mb-1 flex items-baseline justify-between">
                <p className="text-sm font-semibold">{edu.school}</p>
                <span className="text-sm">{edu.location}</span>
              </div>
              <div className="mb-2 flex items-baseline justify-between">
                <p className="text-sm font-medium">{edu.degree}</p>
                {edu.grade && detailLevel === 'detailed' && (
                  <span className="text-sm font-medium">
                    {t('grade')}: {edu.grade}
                  </span>
                )}
              </div>
              <div className="text-justify text-sm leading-relaxed">
                {edu.description && detailLevel === 'detailed' && (
                  <div className="prose prose-sm max-w-none text-black">
                    <ReactMarkdown
                      components={{
                        ul: ({ ...props }) => (
                          <ul className="my-1 list-disc space-y-1 pl-5" {...props} />
                        ),
                        li: ({ ...props }) => <li className="pl-1" {...props} />,
                      }}
                    >
                      {edu.description}
                    </ReactMarkdown>
                  </div>
                )}
              </div>
            </div>
          );

          if (index === 0) {
            return (
              <div key="header-and-first" className="print-break-inside-avoid">
                <h2 className="mb-4 border-b border-gray-400 pb-1 text-xl font-bold uppercase">
                  {t('cvEducation')}
                </h2>
                {content}
              </div>
            );
          }

          return content;
        })}
      </div>
    </section>
  );
}
