"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Folder, Github, ExternalLink, Code, Leaf, Triangle, Atom, Coffee } from 'lucide-react';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { useSearch } from '@/context/SearchContext';
import { useLanguage } from '@/context/LanguageContext';
import Highlight from '@/components/ui/Highlight';

const PythonIcon = ({ size = 40, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.97 0c-1.654 0-3.102.07-4.34.195C5.45.32 4.48.51 3.682.862c-2.112.927-2.235 2.31-2.235 4.815a20.23 20.23 0 0 0 .19 2.42c.123 1.566.25 2.44.57 3.295.32.855.77 1.516 1.346 2.013.576.497 1.226.755 1.956.88.73.126 1.33.125 1.81.012l.62-.12a2.03 2.03 0 0 1 1.96 1.41c.21.724.52 1.25.93 1.58.41.33.91.5 1.5.5h2.9c.77 0 1.4-.63 1.4-1.4v-3.75c0-.77.63-1.4 1.4-1.4h3.75c.77 0 1.4-.63 1.4-1.4v-2.9c0-2.5-.12-3.89-2.23-4.82-.8-.35-1.77-.54-2.95-.67-1.24-.12-2.69-.19-4.34-.19l-.3.01c-1.65.01-3.1.08-4.34.21-.61.06-1.12.15-1.54.26a1.43 1.43 0 0 1-1.07-.35 1.28 1.28 0 0 1-.36-.93V2.42c0-1.654 1.446-2.42 2.7-.26.27.46.38 6.47.38 6.47s-.03-.31.25-.57c.28-.26.85-.43 1.27-.43s3.1.03 3.1.03c.77 0 1.4-.63 1.4-1.4V2.55c0-1.65-.55-2.23-1.42-2.38C15.35.05 13.88 0 12.27 0h-.3zm-2.85 2c.38 0 .7.33.7.7 0 .38-.32.7-.7.7a.7.7 0 0 1-.7-.7c0-.37.32-.7.7-.7z"/>
    <path d="M12.03 24c1.654 0 3.102-.07 4.34-.195 1.18-.125 2.15-.315 2.948-.667 2.112-.927 2.235-2.31 2.235-4.815a20.23 20.23 0 0 0-.19-2.42c-.123-1.566-.25-2.44-.57-3.295-.32-.855-.77-1.516-1.346-2.013-.576-.497-1.226-.755-1.956-.88-.73-.126-1.33-.125-1.81-.012l-.624.12a2.03 2.03 0 0 1-1.96-1.41c-.21-.724-.52-1.25-.93-1.58-.41-.33-.91-.5-1.5-.5h-2.9c-.77 0-1.4.63-1.4 1.4v3.75c0 .77-.63 1.4-1.4 1.4H3.7c-.77 0-1.4.63-1.4 1.4v2.9c0 2.5.12 3.89 2.23 4.82.8.35 1.77.54 2.95.67 1.24.12 2.69.19 4.34.19l.3-.01c1.65-.01 3.1-.08 4.34-.21.61-.06 1.12-.15 1.54-.26a1.43 1.43 0 0 1 1.07.35c.29.28.36.63.36.93v2.13c0 1.65-1.45 2.42-2.7.26-.27-.46-.38-6.47-.38-6.47s.03.31-.25.57c-.28.26-.85.43-1.27.43s-3.1-.03-3.1-.03c-.77 0-1.4.63-1.4 1.4v3.75c0 1.65.55 2.23 1.42 2.38.82.12 2.29.17 3.9.17h.3zm2.82-3.4c-.38 0-.7-.33-.7-.7 0-.38.32-.7.7-.7a.7.7 0 0 1 .7.7c0 .37-.32.7-.7.7z"/>
  </svg>
);

const getProjectIcon = (tech: string[]) => {
  if (tech.some(t => t.includes('Spring Boot'))) return <Leaf size={40} className="text-green-500" />;
  if (tech.some(t => t.includes('Java'))) return <Coffee size={40} className="text-orange-500" />;
  if (tech.some(t => t.includes('Python'))) return <PythonIcon size={40} className="text-blue-500" />;
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
