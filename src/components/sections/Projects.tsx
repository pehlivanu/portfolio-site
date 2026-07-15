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
    viewBox="0 0 128 128" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
      <stop offset="0" stopColor="#5A9FD4"/>
      <stop offset="1" stopColor="#306998"/>
    </linearGradient>
    <linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
      <stop offset="0" stopColor="#FFD43B"/>
      <stop offset="1" stopColor="#FFE873"/>
    </linearGradient>
    <path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)"/>
    <path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)"/>
    <radialGradient id="python-original-c" cx="1825.678" cy="444.45" r="26.743" gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#B8B8B8" stopOpacity=".498"/>
      <stop offset="1" stopColor="#7F7F7F" stopOpacity="0"/>
    </radialGradient>
    <path opacity=".444" fill="url(#python-original-c)" d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"/>
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
    <section id="projects" className="py-20 px-8 max-w-7xl mx-auto w-full">
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
                <div className="mb-6 text-base md:text-lg italic font-normal px-4 py-3 bg-ide-bg rounded-lg border-l-2 border-ide-accent/20 flex-1">
                   <p className="text-ide-text"><Highlight text={project.description} /></p>
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
