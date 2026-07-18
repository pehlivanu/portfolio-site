'use client';

import React from 'react';
import clsx from 'clsx';
import { LuLayers, LuExternalLink } from 'react-icons/lu';
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
      <div
        className={clsx(
          'mb-4 flex items-center gap-2 border-b pb-2',
          theme === 'ide' ? 'border-ide-border' : 'border-gray-200'
        )}
      >
        <LuLayers className="text-blue-600" size={20} />
        <h2
          className={clsx(
            'text-lg font-bold tracking-wide uppercase',
            theme === 'ide' ? 'text-ide-text' : 'text-gray-900'
          )}
        >
          {t('experience')}
        </h2>
      </div>

      <div className="space-y-6">
        {experience.map((job) => (
          <div
            key={job.id}
            className={clsx(
              'cv-item relative border-l-2 pl-4',
              theme === 'ide' ? 'border-ide-border' : 'border-gray-200'
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
                {job.role}
              </h3>
              <span
                className={clsx(
                  'rounded px-2 py-0.5 font-mono text-xs',
                  theme === 'ide'
                    ? 'bg-ide-activity-bar text-gray-400'
                    : 'bg-gray-100 text-gray-500'
                )}
              >
                {job.period}
              </span>
            </div>
            <div className="mb-2 text-sm font-semibold text-blue-700">
              {job.websiteUrl ? (
                <a
                  href={job.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-fit items-center gap-1 hover:underline"
                >
                  {job.company}
                  <LuExternalLink size={10} className="inline opacity-50" />
                </a>
              ) : (
                job.company
              )}
            </div>
            <div
              className={clsx(
                'text-justify text-sm leading-relaxed',
                theme === 'ide' ? 'text-gray-300' : 'text-gray-700'
              )}
            >
              {detailLevel === 'detailed' ? (
                <div className="prose prose-sm prose-blue dark:prose-invert max-w-none">
                  <p className="mb-2">{job.summary}</p>
                  <ReactMarkdown
                    components={{
                      ul: ({ ...props }) => (
                        <ul className="my-2 list-disc space-y-1 pl-5" {...props} />
                      ),
                      li: ({ ...props }) => <li className="pl-1" {...props} />,
                    }}
                  >
                    {job.description}
                  </ReactMarkdown>

                  {job.tech && job.tech.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1">
                      {job.tech
                        .flatMap((t: { skills: string[] }) => t.skills)
                        .map((skill: string, i: number) => (
                          <span
                            key={i}
                            className={clsx(
                              'rounded-full border px-2 py-0.5 text-[10px]',
                              theme === 'ide'
                                ? 'bg-ide-bg border-ide-line text-ide-text opacity-80'
                                : 'border-gray-200 bg-gray-50 text-gray-600'
                            )}
                          >
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
