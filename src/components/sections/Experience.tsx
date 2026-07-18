
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Rocket, Briefcase, Code, GraduationCap, Users, MapPin, Building, ExternalLink } from 'lucide-react';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import ReactMarkdown from 'react-markdown';
import Highlight from '@/components/ui/Highlight';
import { useSearch } from '@/context/SearchContext';

const getIconByType = (type: string) => {
  switch (type) {
    case 'senior':
      return <Rocket size={20} className="text-ide-text-active" />;
    case 'mid':
      return <Briefcase size={20} className="text-ide-text-active" />;
    case 'junior':
      return <Code size={20} className="text-ide-text-active" />;
    case 'intern':
      return <GraduationCap size={20} className="text-ide-text-active" />;
    default:
      return <Briefcase size={20} className="text-ide-text-active" />;
  }
};

const getIconBackground = (type: string) => {
  switch (type) {
    case 'senior':
      return 'bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]';
    case 'mid':
      return 'bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]';
    case 'junior':
      return 'bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)]';
    case 'intern':
      return 'bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.5)]';
    default:
      return 'bg-gray-500';
  }
};

const getRoleColor = (type: string) => {
  switch (type) {
    case 'senior': return 'text-purple-400 [.light-theme_&]:text-purple-700';
    case 'mid': return 'text-blue-400 [.light-theme_&]:text-blue-700';
    case 'junior': return 'text-green-400 [.light-theme_&]:text-green-700';
    case 'intern': return 'text-orange-400 [.light-theme_&]:text-orange-700';
    default: return 'text-blue-400 [.light-theme_&]:text-blue-700';
  }
};

import { ChevronDown, ChevronUp } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

import { useLanguage } from '@/context/LanguageContext';

import * as mockDataEn from '@/data/mockData';
type JobType = typeof mockDataEn.experience[number];

const JobCard = ({ job, isActive }: { job: JobType, isActive: boolean }) => {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = React.useState(false);
  const roleColor = getRoleColor(job.type || '');

  return (
    <motion.div 
      key={job.id}
      id={`experience-${job.id}`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`relative pl-0 md:pl-16 transition-all duration-500 ${isActive ? 'bg-orange-500/10 -mx-4 px-4 py-4 rounded-lg border-l-4 border-orange-500' : ''}`}
    >
      {/* Timeline Icon */}
      <div className={`hidden md:flex absolute -left-[19px] top-0 w-10 h-10 rounded-full items-center justify-center border-4 border-ide-bg z-10 ${getIconBackground(job.type || '')}`}>
        {getIconByType(job.type || '')}
      </div>
      
      <div className="bg-ide-card-bg p-6 rounded-lg border border-ide-border hover:border-ide-accent/50 transition-colors group relative overflow-hidden">
        {/* Subtle gradient overlay based on role type */}
        <div className={`absolute top-0 left-0 w-1 h-full opacity-50 ${
            job.type === 'senior' ? 'bg-purple-500' : 
            job.type === 'mid' ? 'bg-blue-500' : 
            job.type === 'junior' ? 'bg-green-500' : 'bg-orange-500'
        }`} />

        <div className="flex flex-col mb-6">
          {/* Row 1: Role (Tag Style) */}
          <div className="flex flex-col mb-2">
              <h3 className="text-lg md:text-2xl font-mono font-bold text-ide-text-active transition-colors flex flex-wrap items-center gap-1">
                <span className="text-gray-500 opacity-100 font-bold">&lt;</span>
                <span className={`${roleColor}`}><Highlight text={job.role} /></span>
                <span className="text-gray-500 opacity-100 font-bold">/&gt;</span>
              </h3>
          </div>

          {/* Row 2: Company and Details (Grid Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm pl-4 font-mono">
              {/* 1. Company Name */}
              <a 
                href={job.websiteUrl || '#'} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1 text-ide-text hover:text-ide-accent transition-colors group/link w-full truncate"
              >
                  <Briefcase size={12} className="mr-1 shrink-0 text-ide-text/50"/>
                  <span className="text-ide-keyword">{t('companyLabel')}</span>
                  <span className="group-hover/link:underline decoration-ide-accent underline-offset-4 truncate">&quot;<Highlight text={job.company} />&quot;</span>
                  <ExternalLink size={10} className="opacity-0 group-hover/link:opacity-100 transition-opacity ml-1 shrink-0" />
              </a>

              {/* 2. Duration */}
              <span className="flex items-center gap-1 text-ide-text/90 hover:text-ide-text transition-colors cursor-default" title="Period">
                  <Calendar size={12} className="mr-1 shrink-0 text-ide-text/50"/>
                  <span className="text-ide-keyword">{t('timeLabel')}</span>&quot;<Highlight text={job.period} />&quot;
              </span>
              
              {/* 3. Industry */}
              {job.industry && (
                <span className="flex items-center gap-1 text-ide-text/90 hover:text-ide-text transition-colors cursor-default" title="Industry">
                   <Building size={12} className="mr-1 shrink-0 text-ide-text/50"/>
                   <span className="text-ide-keyword">{t('typeLabel')}</span>&quot;<Highlight text={job.industry} />&quot;
                </span>
              )}

              {/* 4. Location */}
               {job.locationType && (
                <span className="flex items-center gap-1 text-ide-text/90 hover:text-ide-text transition-colors cursor-default" title="Location">
                   <MapPin size={12} className="mr-1 shrink-0 text-ide-text/50"/>
                   <span className="text-ide-keyword">{t('locationLabel')}</span>&quot;<Highlight text={job.locationType} />&quot;
                </span>
              )}

              {/* 5. Size */}
              {job.companySize && (
                <span className="flex items-center gap-1 text-ide-text/90 hover:text-ide-text transition-colors cursor-default" title="Company Size">
                  <Users size={12} className="mr-1 shrink-0 text-ide-text/50"/>
                  <span className="text-ide-keyword">{t('sizeLabel')}</span>&quot;<Highlight text={job.companySize} />&quot;
                </span>
              )}


              {/* 6. Dual Study (if applicable) */}
              {job.dualStudy && (
                <button 
                  onClick={() => {
                    const educationElement = document.getElementById('education-1');
                    if (educationElement) {
                      educationElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      // Optional: Add a temporary highlight effect
                      educationElement.classList.add('ring-2', 'ring-ide-accent');
                      setTimeout(() => educationElement.classList.remove('ring-2', 'ring-ide-accent'), 2000);
                    }
                  }}
                  className="flex items-center gap-1 text-ide-text/90 hover:opacity-100 hover:text-ide-accent transition-all cursor-pointer group/edu focus:outline-none focus:ring-1 focus:ring-ide-accent rounded px-1 -ml-1" 
                  title="Click to view Education details"
                >
                  <GraduationCap size={12} className="mr-1 shrink-0 group-hover/edu:scale-110 transition-transform text-ide-text/50"/>
                  <span className="text-ide-keyword group-hover/edu:text-ide-accent">{t('educationLabel')}</span>
                  <span className="group-hover/edu:underline decoration-ide-accent underline-offset-4">&quot;<Highlight text={job.dualStudy} />&quot;</span>
                  <ExternalLink size={10} className="opacity-0 group-hover/edu:opacity-100 transition-opacity ml-1 shrink-0" />
                </button>
              )}
          </div>
        </div>
        
        <div className="text-ide-text mb-2 leading-relaxed text-sm">
          {/* Summary Section - Always Visible */}
          {job.summary && (
            <div className="mb-4 text-base md:text-lg italic font-normal px-4 py-3 bg-ide-bg rounded-lg border-l-2 border-ide-accent/20">
              <Highlight text={job.summary} />
            </div>
          )}

           {/* Expandable Content: Detailed Description & Tech Stack */}
            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pt-2 pb-4">
                     {/* Markdown Description */}
                     <ReactMarkdown
                        components={{
                          p: ({children, ...props}) => (
                            <p className="mb-4 last:mb-0" {...props}>
                              {React.Children.map(children, child => 
                                typeof child === 'string' ? <Highlight text={child} /> : child
                              )}
                            </p>
                          ),
                          ul: ({children, ...props}) => <ul className="list-disc list-outside ml-4 mb-4 space-y-1" {...props}>{children}</ul>,
                          li: ({children, ...props}) => (
                            <li className="pl-1" {...props}>
                               {React.Children.map(children, child => 
                                typeof child === 'string' ? <Highlight text={child} /> : child
                              )}
                            </li>
                          ),
                          strong: ({children, ...props}) => (
                            <strong className="text-ide-text-active font-semibold" {...props}>
                               {React.Children.map(children, child => 
                                typeof child === 'string' ? <Highlight text={child} /> : child
                              )}
                            </strong>
                          ),
                        }}
                      >
                        {job.description}
                      </ReactMarkdown>

                      {/* Tech Stack */}
                      <div className="flex flex-col gap-2.5 mt-5 pt-4 border-t border-ide-border/30">
                        {job.tech.map((techGroup: { category: string, skills: string[] }) => (
                          <div key={techGroup.category} className="flex flex-wrap items-baseline gap-2">
                            <h4 className="text-sm font-semibold text-ide-text-active mr-1">{techGroup.category}:</h4>
                            {techGroup.skills.map((tech: string) => (
                              <span key={tech} className="px-2 py-0.5 text-xs font-medium rounded-full bg-ide-bg text-ide-accent border border-ide-border hover:bg-ide-accent/10 transition-colors cursor-default">
                                <Highlight text={tech} />
                              </span>
                            ))}
                          </div>
                        ))}
                      </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
        </div>

        {/* Toggle Button */}
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-sm font-medium text-ide-accent hover:text-ide-text-active transition-colors mt-2 focus:outline-none group/toggle w-full justify-center md:justify-start py-2 md:py-0 border-t md:border-t-0 border-ide-border/30"
        >
          {isExpanded ? (
            <>
              <span className="group-hover/toggle:underline">{t('showLess')}</span>
              <ChevronUp size={16} />
            </>
          ) : (
            <>
              <span className="group-hover/toggle:underline">{t('showDetails')}</span>
              <ChevronDown size={16} />
            </>
          )}
        </button>

      </div>
    </motion.div>
  );
};

export default function Experience() {
  useScrollSpy('experience');
  const { activeMatch } = useSearch();
  const { data, t } = useLanguage();
  const { experience } = data;

  return (
    <section id="experience" className="py-20 px-8 max-w-7xl mx-auto w-full">
      <div className="flex items-center gap-2 mb-12">
        <span className="text-ide-accent font-mono text-xl">02.</span>
        <h2 className="text-3xl font-bold text-ide-text-active">{t('experience')}</h2>
        <div className="h-[1px] bg-ide-border flex-1 ml-4"></div>
      </div>

      <div className="relative md:border-l-2 md:border-ide-border ml-0 md:ml-6 space-y-8 md:space-y-16">
        {experience.map((job) => {
          const isActive = activeMatch?.id === `experience-${job.id}`;
          return <JobCard key={job.id} job={job} isActive={isActive} />;
        })}
      </div>
    </section>
  );
}
