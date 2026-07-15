"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, School, Calendar, MapPin, Code } from 'lucide-react';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { useSearch } from '@/context/SearchContext';
import Highlight from '@/components/ui/Highlight';

const getIconByType = (type: string) => {
  switch (type) {
    case 'dual-study':
      return <Code size={20} className="text-ide-text-active" />;
    case 'master':
      return <Award size={20} className="text-ide-text-active" />;
    case 'bachelor':
      return <GraduationCap size={20} className="text-ide-text-active" />;
    case 'high-school':
      return <School size={20} className="text-ide-text-active" />;
    default:
      return <BookOpen size={20} className="text-ide-text-active" />;
  }
};

const getIconBackground = (type: string) => {
  switch (type) {
    case 'dual-study':
      return 'bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]';
    case 'master':
      return 'bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]';
    case 'bachelor':
      return 'bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)]';
    case 'high-school':
      return 'bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.5)]';
    default:
      return 'bg-gray-500';
  }
};

const getRoleColor = (type: string) => {
  switch (type) {
    case 'dual-study': return 'text-blue-400 [.light-theme_&]:text-blue-700';
    case 'master': return 'text-purple-400 [.light-theme_&]:text-purple-700';
    case 'bachelor': return 'text-green-400 [.light-theme_&]:text-green-700';
    case 'high-school': return 'text-orange-400 [.light-theme_&]:text-orange-700';
    default: return 'text-blue-400 [.light-theme_&]:text-blue-700';
  }
};

import { useLanguage } from '@/context/LanguageContext';

const EducationCard = ({ edu, isActive }: { edu: any, isActive: boolean }) => {
  const { t } = useLanguage();
  const roleColor = getRoleColor(edu.type || '');
  // Use full name without stripping spaces
  const tagContent = edu.studyField ? edu.studyField : edu.degree;

  return (
    <motion.div
      key={edu.id}
      id={`education-${edu.id}`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`relative pl-0 md:pl-16 transition-all duration-500 ${isActive ? 'bg-orange-500/10 -mx-4 px-4 py-4 rounded-lg border-l-4 border-orange-500' : ''}`}
    >
      {/* Timeline Icon */}
      <div className={`hidden md:flex absolute -left-[19px] top-0 w-10 h-10 rounded-full items-center justify-center border-4 border-ide-bg z-10 ${getIconBackground(edu.type || '')}`}>
        {getIconByType(edu.type || '')}
      </div>

      <div className="bg-ide-card-bg p-6 rounded-lg border border-ide-border hover:border-ide-accent/50 transition-colors group relative overflow-hidden">
         {/* Subtle gradient overlay based on role type */}
         <div className={`absolute top-0 left-0 w-1 h-full opacity-50 ${
            edu.type === 'master' ? 'bg-purple-500' : 
            edu.type === 'dual-study' ? 'bg-blue-500' : 
            edu.type === 'bachelor' ? 'bg-green-500' : 'bg-orange-500'
        }`} />

        <div className="flex flex-col mb-4">
           {/* Row 1: Study Field (Tag Style) */}
           <div className="flex flex-col mb-2">
              <h3 className="text-lg md:text-2xl font-mono font-bold text-ide-text-active transition-colors flex flex-wrap items-center gap-1">
                <span className="text-gray-500 opacity-100 font-bold">&lt;</span>
                <span className={`${roleColor}`}><Highlight text={tagContent} /></span>
                <span className="text-gray-500 opacity-100 font-bold">/&gt;</span>
              </h3>
          </div>

          {/* Row 2: Metadata Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm pl-4 font-mono">
              {/* 1. Institution */}
              <div className="flex items-center gap-1 text-ide-text transition-colors w-full truncate">
                  <School size={12} className="mr-1 shrink-0 text-ide-text/50"/>
                  <span className="text-ide-keyword">{t('institutionLabel')}</span>
                  {edu.url ? (
                    <a 
                      href={edu.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="truncate hover:text-ide-accent hover:underline decoration-ide-accent/50 underline-offset-2 transition-all cursor-pointer"
                    >
                      "<Highlight text={edu.school} />"
                    </a>
                  ) : (
                    <span className="truncate">"<Highlight text={edu.school} />"</span>
                  )}
              </div>

               {/* 2. Degree Name */}
                <div className="flex items-center gap-1 text-ide-text transition-colors w-full truncate">
                   <Award size={12} className="mr-1 shrink-0 text-ide-text/50"/>
                   <span className="text-ide-keyword">{t('degreeLabel')}</span>
                   <span className="truncate">"{edu.degree}"</span>
              </div>

               {/* 3. Duration */}
                <span className="flex items-center gap-1 text-ide-text/90 hover:text-ide-text transition-colors cursor-default" title="Period">
                   <Calendar size={12} className="mr-1 shrink-0 text-ide-text/50"/>
                   <span className="text-ide-keyword">{t('yearLabel')}</span>"<Highlight text={edu.year} />"
              </span>

              {/* 4. Location */}
               {edu.location && (
                 <span className="flex items-center gap-1 text-ide-text/90 hover:text-ide-text transition-colors cursor-default" title="Location">
                    <MapPin size={12} className="mr-1 shrink-0 text-ide-text/50"/>
                    <span className="text-ide-keyword">{t('locationLabel')}</span>"<Highlight text={edu.location} />"
                </span>
              )}
          </div>
        </div>

        <div className="text-ide-text mb-0 leading-relaxed text-sm">
             {/* Summary Section - Always Visible */}
             {edu.summary && (
                <div className="mb-4 text-base md:text-lg italic font-normal px-4 py-3 bg-ide-bg rounded-lg border-l-2 border-ide-accent/20">
                  <Highlight text={edu.summary} />
                </div>
              )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Education() {
  useScrollSpy('education');
  const { activeMatch } = useSearch();
  const { data, t } = useLanguage();
  const { education } = data;

  return (
    <section id="education" className="py-20 px-8 max-w-7xl mx-auto w-full">
      <div className="flex items-center gap-2 mb-12">
        <span className="text-ide-accent font-mono text-xl">03.</span>
        <h2 className="text-3xl font-bold text-ide-text-active">{t('education')}</h2>
        <div className="h-[1px] bg-ide-border flex-1 ml-4"></div>
      </div>

      <div className="relative md:border-l-2 md:border-ide-border ml-0 md:ml-6 space-y-8 md:space-y-16">
        {education.map((edu, index) => {
          const isActive = activeMatch?.id === `education-${edu.id}`;
          return <EducationCard key={edu.id} edu={edu} isActive={isActive} />;
        })}
      </div>
    </section>
  );
}
