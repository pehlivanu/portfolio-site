"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Folder, Github, ExternalLink, Code, Leaf, Triangle, Atom, Coffee, Terminal } from 'lucide-react';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { useSearch } from '@/context/SearchContext';
import { useLanguage } from '@/context/LanguageContext';
import Highlight from '@/components/ui/Highlight';

const getProjectIcon = (tech: string[]) => {
  if (tech.some(t => t.includes('Spring Boot'))) return <Leaf size={40} className="text-green-500" />;
  if (tech.some(t => t.includes('Java'))) return <Coffee size={40} className="text-orange-500" />;
  if (tech.some(t => t.includes('Python'))) return <Terminal size={40} className="text-blue-500" />;
  if (tech.some(t => t.includes('Next.js'))) return <Triangle size={40} className="text-white invert rotate-180" />; // Triangle for Vercel/Next.js vibe
  if (tech.some(t => t.includes('React'))) return <Atom size={40} className="text-blue-400" />;
  return <Folder size={40} className="text-ide-accent" />;
};

export default function Projects() {
  useScrollSpy('projects');
  const { data, t } = useLanguage();
  const { projects } = data;
  const { activeMatch } = useSearch();

  return (
    <section id="projects" className="py-20 px-8 max-w-6xl mx-auto">
      <div className="flex items-center gap-2 mb-12">
        <span className="text-ide-accent font-mono text-xl">04.</span>
        <h2 className="text-3xl font-bold text-ide-text-active">{t('projects')}</h2>
        <div className="h-[1px] bg-ide-border flex-1 ml-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, index) => {
           const isActive = activeMatch?.id === `projects-${project.id}`;
           return (
            <motion.div
              key={project.id}
              id={`projects-${project.id}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group bg-ide-card-bg rounded-lg border border-ide-border hover:border-ide-accent/50 transition-all hover:-translate-y-1 flex flex-col ${isActive ? 'bg-orange-500/10 border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.2)]' : ''}`}
            >
               {/* Top Gradient Line to match Experience card colorfulness */}
               <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-50`} />

              <div className="p-6 flex flex-col h-full">
                {/* Header: Project Icon + Links */}
                <div className="flex justify-between items-start mb-6">
                    <div className="p-2 bg-ide-bg rounded-lg border border-ide-border/50">
                        {getProjectIcon(project.tech)}
                    </div>
                    
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" title={t('viewCode')} aria-label={t('viewCode')}>
                          <Github 
                            size={20} 
                            className="text-ide-text opacity-90 hover:text-ide-text-active hover:opacity-100 cursor-pointer animate-pulse-glow" 
                            style={{ animationDelay: `${index * 1}s` }}
                          />
                        </a>
                      )}
                      {project.deployUrl && (
                        <a href={project.deployUrl} target="_blank" rel="noopener noreferrer" title={t('liveDemo')} aria-label={t('liveDemo')}>
                          <ExternalLink 
                            size={20} 
                            className="text-ide-text opacity-90 hover:text-ide-text-active hover:opacity-100 cursor-pointer animate-pulse-glow" 
                            style={{ animationDelay: `${index * 1}s` }}
                          />
                        </a>
                      )}
                    </div>
                </div>

                {/* Title in Tag Style */}
                <div className="mb-4">
                     <h3 className="text-lg md:text-2xl font-mono font-bold text-ide-text-active transition-colors flex flex-wrap items-center gap-1">
                        <span className="text-gray-500 opacity-100 font-bold">&lt;</span>
                        <span className="text-blue-400 [.light-theme_&]:text-blue-700"><Highlight text={project.title} /></span>
                        <span className="text-gray-500 opacity-100 font-bold">/&gt;</span>
                     </h3>
                </div>

                {/* Description */}
                <div className="text-ide-text mb-6 text-sm leading-relaxed flex-1 font-mono bg-ide-bg p-4 rounded-md border border-ide-border/50">
                   <p className="text-ide-text/90"><Highlight text={project.description} /></p>
                </div>

                {/* Tech Stack Metadata Style */}
                <div className="mt-6 pt-4 border-t border-ide-border/50">
                     <div className="font-mono text-xs text-ide-text flex flex-col gap-2 bg-ide-bg p-3 rounded-md border border-ide-border/50">
                        {/* Stack: Styled as an array */}
                        <div className="flex flex-wrap items-center gap-1">
                            <Code size={14} className="mr-1 text-ide-accent shrink-0" />
                             <span className="text-ide-keyword">{t('stackLabel')}</span>
                             <span className="text-ide-text-active">[</span>
                             {project.tech.map((t, i) => (
                                 <span key={t}>
                                     <span className="hover:text-ide-text-active transition-colors">
                                         "<Highlight text={t} />"
                                     </span>
                                     {i < project.tech.length - 1 && <span className="text-ide-text-active">, </span>}
                                 </span>
                             ))}
                             <span className="text-ide-text-active">]</span>
                        </div>
                     </div>
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
