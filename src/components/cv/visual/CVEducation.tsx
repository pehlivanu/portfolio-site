'use client';

import React from 'react';
import clsx from 'clsx';
import { LuBookOpen, LuExternalLink } from 'react-icons/lu';
import ReactMarkdown from 'react-markdown';
import { Education } from '@/types/data';

interface CVEducationProps {
  education: Education[];
  theme: string;
  detailLevel: string;
  t: (key: string) => string;
}

export default function CVEducation({ education, theme, detailLevel, t }: CVEducationProps) {
  return (
    <section className="cv-section">
      <div className="space-y-4">
        {education.map((edu, index) => {
          const content = (
            <div
              key={edu.id}
              className={clsx(
                'cv-item relative border-l-2 pl-4',
                theme === 'ide' ? 'border-ide-border' : 'border-gray-200',
                index !== 0 && 'print-break-inside-avoid'
              )}
            >
              <div
                className={clsx(
                  'absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full border-2',
                  theme === 'ide' ? 'border-ide-bg bg-blue-600' : 'border-white bg-blue-600'
                )}
              ></div>
              <div className="mb-1 flex items-baseline justify-between">
                <h3
                  className={clsx(
                    'text-base font-bold',
                    theme === 'ide' ? 'text-ide-text' : 'text-gray-900'
                  )}
                >
                  {edu.studyField}
                </h3>
                <span
                  className={clsx(
                    'rounded px-2 py-0.5 font-mono text-xs',
                    theme === 'ide'
                      ? 'bg-ide-activity-bar text-gray-400'
                      : 'bg-gray-100 text-gray-500'
                  )}
                >
                  {edu.year}
                </span>
              </div>
              <div className="mb-1 flex items-baseline justify-between">
                <div className="text-sm font-semibold text-blue-700">
                  {edu.url ? (
                    <a
                      href={edu.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-fit items-center gap-1 hover:underline"
                    >
                      {edu.school}
                      <LuExternalLink size={10} className="inline opacity-50" />
                    </a>
                  ) : (
                    edu.school
                  )}
                </div>
                {edu.location && (
                  <span
                    className={clsx(
                      'text-sm font-normal',
                      theme === 'ide' ? 'text-gray-400' : 'text-gray-500'
                    )}
                  >
                    {edu.location}
                  </span>
                )}
              </div>
              <div className="mb-2 flex items-baseline justify-between">
                <span
                  className={clsx(
                    'text-sm font-medium',
                    theme === 'ide' ? 'text-gray-300' : 'text-gray-800'
                  )}
                >
                  {edu.degree}
                </span>
                {edu.grade && detailLevel === 'detailed' && (
                  <span
                    className={clsx(
                      'text-sm font-medium',
                      theme === 'ide' ? 'text-gray-300' : 'text-gray-800'
                    )}
                  >
                    {t('grade')}: {edu.grade}
                  </span>
                )}
              </div>
              <div
                className={clsx(
                  'text-justify text-sm leading-relaxed',
                  theme === 'ide' ? 'text-gray-300' : 'text-gray-700'
                )}
              >
                {edu.description && detailLevel === 'detailed' && (
                  <div className="prose prose-sm prose-blue dark:prose-invert max-w-none">
                    <ReactMarkdown
                      components={{
                        ul: ({ ...props }) => (
                          <ul className="my-2 list-disc space-y-1 pl-5" {...props} />
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
                <div
                  className={clsx(
                    'mb-4 flex items-center gap-2 border-b pb-2',
                    theme === 'ide' ? 'border-ide-border' : 'border-gray-200'
                  )}
                >
                  <LuBookOpen className="text-blue-600" size={20} />
                  <h2
                    className={clsx(
                      'text-lg font-bold tracking-wide uppercase',
                      theme === 'ide' ? 'text-ide-text' : 'text-gray-900'
                    )}
                  >
                    {t('education')}
                  </h2>
                </div>
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
