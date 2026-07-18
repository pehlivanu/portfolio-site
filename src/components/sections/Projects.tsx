'use client';
import { FaGithub, FaJava } from 'react-icons/fa';

import React from 'react';
import { m } from 'framer-motion';
import { LuFolder, LuExternalLink, LuCode } from 'react-icons/lu';
import { SiSpringboot, SiPython, SiNextdotjs, SiReact, SiJenkins } from 'react-icons/si';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { useSearch } from '@/context/SearchContext';
import { useLanguage } from '@/context/LanguageContext';
import Highlight from '@/components/ui/Highlight';

const getProjectIcon = (tech: string[], size = 40) => {
  if (tech.some((t) => t.includes('Spring Boot')))
    return <SiSpringboot size={size} className="text-green-500" />;
  if (tech.some((t) => t.includes('Java')))
    return <FaJava size={size} className="text-orange-500" />;
  if (tech.some((t) => t.includes('Python')))
    return <SiPython size={size} className="text-blue-500" />;
  if (tech.some((t) => t.includes('Next.js')))
    return <SiNextdotjs size={size} className="text-white [.light-theme_&]:text-black" />;
  if (tech.some((t) => t.includes('React')))
    return <SiReact size={size} className="text-blue-400" />;
  if (tech.some((t) => t.includes('Jenkins')))
    return <SiJenkins size={size} className="text-red-500" />;
  return <LuFolder size={size} className="text-ide-accent" />;
};

export default function Projects() {
  useScrollSpy('projects');
  const { data, t } = useLanguage();
  const { projects } = data;
  const { activeMatch } = useSearch();

  return (
    <section id="projects" className="mx-auto w-full max-w-7xl px-8 py-20">
      <div className="mb-12 flex items-center gap-2">
        <span className="text-ide-accent font-mono text-xl">04.</span>
        <h2 className="text-ide-text-active text-3xl font-bold">{t('projects')}</h2>
        <div className="bg-ide-border ml-4 h-[1px] flex-1"></div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {projects.map((project, index) => {
          const isActive = activeMatch?.id === `projects-${project.id}`;
          return (
            <m.div
              key={project.id}
              id={`projects-${project.id}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group bg-ide-card-bg border-ide-border hover:border-ide-accent/50 relative flex flex-col rounded-lg border transition-all hover:-translate-y-1 ${isActive ? 'border-orange-500 bg-orange-500/10 shadow-[0_0_15px_rgba(249,115,22,0.2)]' : ''}`}
            >
              {/* Top Gradient Line to match Experience card colorfulness */}
              <div
                className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-50`}
              />

              <div className="flex h-full flex-col p-6">
                <div className="mb-4 flex flex-col">
                  {/* Row 1: Icon and Title (Tag Style) + Links */}
                  <div className="mb-2 flex items-start justify-between">
                    <h3 className="text-ide-text-active flex flex-wrap items-center gap-1 font-mono text-lg font-bold transition-colors md:text-2xl">
                      <div className="bg-ide-bg border-ide-border/50 mr-2 flex shrink-0 items-center justify-center rounded-lg border p-1">
                        {getProjectIcon(project.tech, 24)}
                      </div>
                      <span className="font-bold text-gray-500 opacity-100">&lt;</span>
                      <span className="text-blue-400 [.light-theme_&]:text-blue-700">
                        <Highlight text={project.title} />
                      </span>
                      <span className="font-bold text-gray-500 opacity-100">/&gt;</span>
                    </h3>

                    <div className="mt-1 ml-4 flex shrink-0 gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={t('viewCode')}
                          aria-label={t('viewCode')}
                        >
                          <FaGithub
                            size={20}
                            className="text-ide-text hover:text-ide-text-active animate-pulse-glow cursor-pointer opacity-90 hover:opacity-100"
                            style={{ animationDelay: `${index * 1}s` }}
                          />
                        </a>
                      )}
                      {project.deployUrl && (
                        <a
                          href={project.deployUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={t('liveDemo')}
                          aria-label={t('liveDemo')}
                        >
                          <LuExternalLink
                            size={20}
                            className="text-ide-text hover:text-ide-text-active animate-pulse-glow cursor-pointer opacity-90 hover:opacity-100"
                            style={{ animationDelay: `${index * 1}s` }}
                          />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Metadata Grid (Tech Stack) */}
                  <div className="grid grid-cols-1 gap-x-8 gap-y-2 pl-4 font-mono text-sm">
                    <div className="text-ide-text flex w-full flex-wrap items-center gap-1 transition-colors">
                      <LuCode size={12} className="text-ide-text/50 mr-1 shrink-0" />
                      <span className="text-ide-keyword">{t('stackLabel')}</span>
                      <span className="text-ide-text-active">[</span>
                      {project.tech.map((t: string, i: number) => (
                        <span key={t}>
                          <span className="hover:text-ide-text-active transition-colors">
                            &quot;
                            <Highlight text={t} />
                            &quot;
                          </span>
                          {i < project.tech.length - 1 && (
                            <span className="text-ide-text-active">, </span>
                          )}
                        </span>
                      ))}
                      <span className="text-ide-text-active">]</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="text-ide-text mb-0 flex flex-1 flex-col text-sm leading-relaxed">
                  <div className="bg-ide-bg border-ide-accent/20 flex-1 rounded-lg border-l-2 px-4 py-3 text-base font-normal italic md:text-lg">
                    <p className="text-ide-text">
                      <Highlight text={project.description} />
                    </p>
                  </div>
                </div>
              </div>
            </m.div>
          );
        })}
      </div>
    </section>
  );
}
