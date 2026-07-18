'use client';
import { FaGithub } from 'react-icons/fa';

import React from 'react';
import clsx from 'clsx';
import { LuCode, LuExternalLink } from 'react-icons/lu';
import { Project } from '@/types/data';

interface CVProjectsProps {
  projects: Project[];
  theme: string;
  t: (key: string) => string;
}

export default function CVProjects({ projects, theme, t }: CVProjectsProps) {
  return (
    <section className="cv-section">
      <div
        className={clsx(
          'mb-4 flex items-center gap-2 border-b pb-2',
          theme === 'ide' ? 'border-ide-border' : 'border-gray-200'
        )}
      >
        <LuCode className="text-blue-600" size={20} />
        <h2
          className={clsx(
            'text-lg font-bold tracking-wide uppercase',
            theme === 'ide' ? 'text-ide-text' : 'text-gray-900'
          )}
        >
          {t('projects')}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className={clsx(
              'cv-item print-break-inside-avoid rounded-lg border p-4',
              theme === 'ide'
                ? 'bg-ide-activity-bar border-ide-border'
                : 'border-gray-200 bg-gray-50'
            )}
          >
            <div className="mb-1 flex items-start justify-between">
              <h3
                className={clsx(
                  'text-base font-bold',
                  theme === 'ide' ? 'text-ide-text' : 'text-gray-900'
                )}
              >
                {proj.title}
              </h3>
              <div className="flex gap-2">
                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={clsx(
                      'hover:text-blue-600',
                      theme === 'ide' ? 'text-gray-400' : 'text-gray-500'
                    )}
                    title={t('viewSource')}
                  >
                    <FaGithub size={16} />
                  </a>
                )}
                {proj.deployUrl && (
                  <a
                    href={proj.deployUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={clsx(
                      'hover:text-blue-600',
                      theme === 'ide' ? 'text-gray-400' : 'text-gray-500'
                    )}
                    title={t('viewLive')}
                  >
                    <LuExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
            <p
              className={clsx(
                'mb-3 text-justify text-sm leading-relaxed',
                theme === 'ide' ? 'text-gray-300' : 'text-gray-700'
              )}
            >
              {proj.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {proj.tech.map((tech: string, i: number) => (
                <span
                  key={i}
                  className={clsx(
                    'rounded border px-2 py-0.5 text-xs font-medium',
                    theme === 'ide'
                      ? 'bg-ide-bg border-ide-border text-blue-400'
                      : 'border-blue-100 bg-white text-blue-700'
                  )}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
