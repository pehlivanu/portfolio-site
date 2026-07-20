'use client';

import React from 'react';

import {
  LuGraduationCap,
  LuAward,
  LuBookOpen,
  LuSchool,
  LuCalendar,
  LuMapPin,
  LuCode,
} from 'react-icons/lu';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { useSearch } from '@/context/SearchContext';
import Highlight from '@/components/ui/Highlight';

const getIconById = (id: number) => {
  switch (id) {
    case 1:
      return <LuCode size={20} className="text-ide-text-active" />;
    case 2:
      return <LuAward size={20} className="text-ide-text-active" />;
    case 3:
      return <LuGraduationCap size={20} className="text-ide-text-active" />;
    case 4:
      return <LuSchool size={20} className="text-ide-text-active" />;
    default:
      return <LuBookOpen size={20} className="text-ide-text-active" />;
  }
};

const getIconBackground = (id: number) => {
  switch (id) {
    case 1:
      return 'bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]';
    case 2:
      return 'bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]';
    case 3:
      return 'bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)]';
    case 4:
      return 'bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.5)]';
    default:
      return 'bg-gray-500';
  }
};

const getRoleColor = (id: number) => {
  switch (id) {
    case 1:
      return 'text-blue-400 [.light-theme_&]:text-blue-700';
    case 2:
      return 'text-purple-400 [.light-theme_&]:text-purple-700';
    case 3:
      return 'text-green-400 [.light-theme_&]:text-green-700';
    case 4:
      return 'text-orange-400 [.light-theme_&]:text-orange-700';
    default:
      return 'text-blue-400 [.light-theme_&]:text-blue-700';
  }
};

import { useLanguage } from '@/context/LanguageContext';
import { Education as EducationType } from '@/types/data';

const EducationCard = ({ edu, isActive }: { edu: EducationType; isActive: boolean }) => {
  const { t } = useLanguage();
  const roleColor = getRoleColor(edu.id);
  // Use localized type without hyphens
  const tagContent = edu.type ? edu.type.replace(/-/g, ' ') : edu.degree;

  return (
    <div
      key={edu.id}
      id={`education-${edu.id}`}
      className={`relative pl-0 transition-all duration-500 md:pl-16 ${isActive ? '-mx-4 rounded-lg border-l-4 border-orange-500 bg-orange-500/10 px-4 py-4' : ''}`}
    >
      {/* Timeline Icon */}
      <div
        className={`border-ide-bg absolute top-0 -left-[19px] z-10 hidden h-10 w-10 items-center justify-center rounded-full border-4 md:flex ${getIconBackground(edu.id)}`}
      >
        {getIconById(edu.id)}
      </div>

      <div className="bg-ide-card-bg border-ide-border hover:border-ide-accent/50 group relative overflow-hidden rounded-lg border p-6 transition-colors">
        {/* Subtle gradient overlay based on role type */}
        <div
          className={`absolute top-0 left-0 h-full w-1 opacity-50 ${
            edu.id === 2
              ? 'bg-purple-500'
              : edu.id === 1
                ? 'bg-blue-500'
                : edu.id === 3
                  ? 'bg-green-500'
                  : 'bg-orange-500'
          }`}
        />

        <div className="mb-4 flex flex-col">
          {/* Row 1: Study Field (Tag Style) */}
          <div className="mb-2 flex flex-col">
            <h3 className="text-ide-text-active flex flex-wrap items-center gap-1 font-mono text-lg font-bold transition-colors md:text-2xl">
              <span className="font-bold text-gray-500 opacity-100">&lt;</span>
              <span className={`${roleColor} capitalize`}>
                <Highlight text={tagContent} />
              </span>
              <span className="font-bold text-gray-500 opacity-100">/&gt;</span>
            </h3>
          </div>

          {/* Row 2: Metadata Grid */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-2 pl-4 font-mono text-sm md:grid-cols-2">
            {/* 1. Institution */}
            <div className="text-ide-text flex w-full items-center gap-1 truncate transition-colors">
              <LuSchool size={12} className="text-ide-text/50 mr-1 shrink-0" />
              <span className="text-ide-keyword">{t('institutionLabel')}</span>
              {edu.url ? (
                <a
                  href={edu.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ide-accent decoration-ide-accent/50 cursor-pointer truncate underline-offset-2 transition-all hover:underline"
                >
                  &quot;
                  <Highlight text={edu.school} />
                  &quot;
                </a>
              ) : (
                <span className="truncate">
                  &quot;
                  <Highlight text={edu.school} />
                  &quot;
                </span>
              )}
            </div>

            {/* 2. Degree Name */}
            <div className="text-ide-text flex w-full items-center gap-1 truncate transition-colors">
              <LuAward size={12} className="text-ide-text/50 mr-1 shrink-0" />
              <span className="text-ide-keyword">{t('degreeLabel')}</span>
              <span className="truncate">&quot;{edu.degree}&quot;</span>
            </div>

            {/* 3. Duration */}
            <span
              className="text-ide-text/90 hover:text-ide-text flex cursor-default items-center gap-1 transition-colors"
              title="Period"
            >
              <LuCalendar size={12} className="text-ide-text/50 mr-1 shrink-0" />
              <span className="text-ide-keyword">{t('yearLabel')}</span>&quot;
              <Highlight text={edu.year} />
              &quot;
            </span>

            {/* 4. Location */}
            {edu.location && (
              <span
                className="text-ide-text/90 hover:text-ide-text flex cursor-default items-center gap-1 transition-colors"
                title="Location"
              >
                <LuMapPin size={12} className="text-ide-text/50 mr-1 shrink-0" />
                <span className="text-ide-keyword">{t('locationLabel')}</span>&quot;
                <Highlight text={edu.location} />
                &quot;
              </span>
            )}
          </div>
        </div>

        <div className="text-ide-text mb-2 text-justify text-sm leading-relaxed">
          {edu.description && (
            <div className="bg-ide-bg border-ide-accent/20 mb-4 rounded-lg border-l-2 px-4 py-3 text-base font-normal italic md:text-lg">
              <Highlight text={edu.description} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Education() {
  useScrollSpy('education');
  const { activeMatch } = useSearch();
  const { data, t } = useLanguage();
  const { education } = data;

  return (
    <section id="education" className="mx-auto w-full max-w-7xl px-8 py-20">
      <div className="mb-12 flex items-center gap-2">
        <span className="text-ide-accent font-mono text-xl">03.</span>
        <h2 className="text-ide-text-active text-3xl font-bold">{t('education')}</h2>
        <div className="bg-ide-border ml-4 h-[1px] flex-1"></div>
      </div>

      <div className="md:border-ide-border relative ml-0 space-y-8 md:ml-6 md:space-y-16 md:border-l-2">
        {education.map((edu) => {
          const isActive = activeMatch?.id === `education-${edu.id}`;
          return <EducationCard key={edu.id} edu={edu} isActive={isActive} />;
        })}
      </div>
    </section>
  );
}
