'use client';

import React from 'react';
import { Project } from '@/types/data';

interface ATSProjectsProps {
  projects: Project[];
  t: (key: string) => string;
}

export default function ATSProjects({ projects, t }: ATSProjectsProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <section className="mb-8">
      <h2 className="mb-4 border-b border-gray-400 pb-1 text-xl font-bold uppercase">
        {t('projects') || 'Projects'}
      </h2>
      <div className="space-y-6">
        {projects.map((proj) => (
          <div key={proj.id} className="print-break-inside-avoid">
            <div className="mb-1 flex items-baseline justify-between">
              <h3 className="text-base font-bold">
                {proj.title}
                {proj.githubUrl && (
                  <span className="ml-2 text-sm font-normal">
                    |{' '}
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 hover:underline"
                    >
                      GitHub
                    </a>
                  </span>
                )}
                {proj.deployUrl && (
                  <span className="ml-2 text-sm font-normal">
                    |{' '}
                    <a
                      href={proj.deployUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 hover:underline"
                    >
                      Live
                    </a>
                  </span>
                )}
              </h3>
            </div>
            <p className="mb-2 text-justify text-sm leading-relaxed">{proj.description}</p>
            {proj.tech && proj.tech.length > 0 && (
              <div className="text-sm text-gray-800">
                <strong>{t('techLabel') || 'Tech:'}</strong> {proj.tech.join(', ')}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
