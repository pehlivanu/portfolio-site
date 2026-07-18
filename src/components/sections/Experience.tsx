'use client';

import React from 'react';
import { m } from 'framer-motion';
import {
  LuCalendar,
  LuRocket,
  LuBriefcase,
  LuCode,
  LuGraduationCap,
  LuUsers,
  LuMapPin,
  LuBuilding,
  LuExternalLink,
} from 'react-icons/lu';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import ReactMarkdown from 'react-markdown';
import Highlight from '@/components/ui/Highlight';
import { useSearch } from '@/context/SearchContext';

const getIconByType = (type: string) => {
  switch (type) {
    case 'senior':
      return <LuRocket size={20} className="text-ide-text-active" />;
    case 'mid':
      return <LuBriefcase size={20} className="text-ide-text-active" />;
    case 'junior':
      return <LuCode size={20} className="text-ide-text-active" />;
    case 'intern':
      return <LuGraduationCap size={20} className="text-ide-text-active" />;
    default:
      return <LuBriefcase size={20} className="text-ide-text-active" />;
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
    case 'senior':
      return 'text-purple-400 [.light-theme_&]:text-purple-700';
    case 'mid':
      return 'text-blue-400 [.light-theme_&]:text-blue-700';
    case 'junior':
      return 'text-green-400 [.light-theme_&]:text-green-700';
    case 'intern':
      return 'text-orange-400 [.light-theme_&]:text-orange-700';
    default:
      return 'text-blue-400 [.light-theme_&]:text-blue-700';
  }
};

import { LuChevronDown, LuChevronUp } from 'react-icons/lu';
import { AnimatePresence } from 'framer-motion';

import { useLanguage } from '@/context/LanguageContext';

import * as mockDataEn from '@/data/locales/en';
type JobType = (typeof mockDataEn.experience)[number];

const JobCard = ({ job, isActive }: { job: JobType; isActive: boolean }) => {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = React.useState(false);
  const roleColor = getRoleColor(job.type || '');

  return (
    <m.div
      key={job.id}
      id={`experience-${job.id}`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`relative pl-0 transition-all duration-500 md:pl-16 ${isActive ? '-mx-4 rounded-lg border-l-4 border-orange-500 bg-orange-500/10 px-4 py-4' : ''}`}
    >
      {/* Timeline Icon */}
      <div
        className={`border-ide-bg absolute top-0 -left-[19px] z-10 hidden h-10 w-10 items-center justify-center rounded-full border-4 md:flex ${getIconBackground(job.type || '')}`}
      >
        {getIconByType(job.type || '')}
      </div>

      <div className="bg-ide-card-bg border-ide-border hover:border-ide-accent/50 group relative overflow-hidden rounded-lg border p-6 transition-colors">
        {/* Subtle gradient overlay based on role type */}
        <div
          className={`absolute top-0 left-0 h-full w-1 opacity-50 ${
            job.type === 'senior'
              ? 'bg-purple-500'
              : job.type === 'mid'
                ? 'bg-blue-500'
                : job.type === 'junior'
                  ? 'bg-green-500'
                  : 'bg-orange-500'
          }`}
        />

        <div className="mb-6 flex flex-col">
          {/* Row 1: Role (Tag Style) */}
          <div className="mb-2 flex flex-col">
            <h3 className="text-ide-text-active flex flex-wrap items-center gap-1 font-mono text-lg font-bold transition-colors md:text-2xl">
              <span className="font-bold text-gray-500 opacity-100">&lt;</span>
              <span className={`${roleColor}`}>
                <Highlight text={job.role} />
              </span>
              <span className="font-bold text-gray-500 opacity-100">/&gt;</span>
            </h3>
          </div>

          {/* Row 2: Company and Details (Grid Layout) */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-2 pl-4 font-mono text-sm md:grid-cols-2">
            {/* 1. Company Name */}
            <a
              href={job.websiteUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ide-text hover:text-ide-accent group/link flex w-full items-center gap-1 truncate transition-colors"
            >
              <LuBriefcase size={12} className="text-ide-text/50 mr-1 shrink-0" />
              <span className="text-ide-keyword">{t('companyLabel')}</span>
              <span className="decoration-ide-accent truncate underline-offset-4 group-hover/link:underline">
                &quot;
                <Highlight text={job.company} />
                &quot;
              </span>
              <LuExternalLink
                size={10}
                className="ml-1 shrink-0 opacity-0 transition-opacity group-hover/link:opacity-100"
              />
            </a>

            {/* 2. Duration */}
            <span
              className="text-ide-text/90 hover:text-ide-text flex cursor-default items-center gap-1 transition-colors"
              title="Period"
            >
              <LuCalendar size={12} className="text-ide-text/50 mr-1 shrink-0" />
              <span className="text-ide-keyword">{t('timeLabel')}</span>&quot;
              <Highlight text={job.period} />
              &quot;
            </span>

            {/* 3. Industry */}
            {job.industry && (
              <span
                className="text-ide-text/90 hover:text-ide-text flex cursor-default items-center gap-1 transition-colors"
                title="Industry"
              >
                <LuBuilding size={12} className="text-ide-text/50 mr-1 shrink-0" />
                <span className="text-ide-keyword">{t('typeLabel')}</span>&quot;
                <Highlight text={job.industry} />
                &quot;
              </span>
            )}

            {/* 4. Location */}
            {job.locationType && (
              <span
                className="text-ide-text/90 hover:text-ide-text flex cursor-default items-center gap-1 transition-colors"
                title="Location"
              >
                <LuMapPin size={12} className="text-ide-text/50 mr-1 shrink-0" />
                <span className="text-ide-keyword">{t('locationLabel')}</span>&quot;
                <Highlight text={job.locationType} />
                &quot;
              </span>
            )}

            {/* 5. Size */}
            {job.companySize && (
              <span
                className="text-ide-text/90 hover:text-ide-text flex cursor-default items-center gap-1 transition-colors"
                title="Company Size"
              >
                <LuUsers size={12} className="text-ide-text/50 mr-1 shrink-0" />
                <span className="text-ide-keyword">{t('sizeLabel')}</span>&quot;
                <Highlight text={job.companySize} />
                &quot;
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
                    setTimeout(
                      () => educationElement.classList.remove('ring-2', 'ring-ide-accent'),
                      2000
                    );
                  }
                }}
                className="text-ide-text/90 hover:text-ide-accent group/edu focus:ring-ide-accent -ml-1 flex cursor-pointer items-center gap-1 rounded px-1 transition-all hover:opacity-100 focus:ring-1 focus:outline-none"
                title="Click to view Education details"
              >
                <LuGraduationCap
                  size={12}
                  className="text-ide-text/50 mr-1 shrink-0 transition-transform group-hover/edu:scale-110"
                />
                <span className="text-ide-keyword group-hover/edu:text-ide-accent">
                  {t('educationLabel')}
                </span>
                <span className="decoration-ide-accent underline-offset-4 group-hover/edu:underline">
                  &quot;
                  <Highlight text={job.dualStudy} />
                  &quot;
                </span>
                <LuExternalLink
                  size={10}
                  className="ml-1 shrink-0 opacity-0 transition-opacity group-hover/edu:opacity-100"
                />
              </button>
            )}
          </div>
        </div>

        <div className="text-ide-text mb-2 text-sm leading-relaxed">
          {/* Summary Section - Always Visible */}
          {job.summary && (
            <div className="bg-ide-bg border-ide-accent/20 mb-4 rounded-lg border-l-2 px-4 py-3 text-base font-normal italic md:text-lg">
              <Highlight text={job.summary} />
            </div>
          )}

          {/* Expandable Content: Detailed Description & Tech Stack */}
          <AnimatePresence initial={false}>
            {isExpanded && (
              <m.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="pt-2 pb-4">
                  {/* Markdown Description */}
                  <ReactMarkdown
                    components={{
                      p: ({ children, ...props }) => (
                        <p className="mb-4 last:mb-0" {...props}>
                          {React.Children.map(children, (child) =>
                            typeof child === 'string' ? <Highlight text={child} /> : child
                          )}
                        </p>
                      ),
                      ul: ({ children, ...props }) => (
                        <ul className="mb-4 ml-4 list-outside list-disc space-y-1" {...props}>
                          {children}
                        </ul>
                      ),
                      li: ({ children, ...props }) => (
                        <li className="pl-1" {...props}>
                          {React.Children.map(children, (child) =>
                            typeof child === 'string' ? <Highlight text={child} /> : child
                          )}
                        </li>
                      ),
                      strong: ({ children, ...props }) => (
                        <strong className="text-ide-text-active font-semibold" {...props}>
                          {React.Children.map(children, (child) =>
                            typeof child === 'string' ? <Highlight text={child} /> : child
                          )}
                        </strong>
                      ),
                    }}
                  >
                    {job.description}
                  </ReactMarkdown>

                  {/* Tech Stack */}
                  <div className="border-ide-border/30 mt-5 flex flex-col gap-2.5 border-t pt-4">
                    {job.tech.map((techGroup: { category: string; skills: string[] }) => (
                      <div key={techGroup.category} className="flex flex-wrap items-baseline gap-2">
                        <h4 className="text-ide-text-active mr-1 text-sm font-semibold">
                          {techGroup.category}:
                        </h4>
                        {techGroup.skills.map((tech: string) => (
                          <span
                            key={tech}
                            className="bg-ide-bg text-ide-accent border-ide-border hover:bg-ide-accent/10 cursor-default rounded-full border px-2 py-0.5 text-xs font-medium transition-colors"
                          >
                            <Highlight text={tech} />
                          </span>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </m.div>
            )}
          </AnimatePresence>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-ide-accent hover:text-ide-text-active group/toggle border-ide-border/30 mt-2 flex w-full items-center justify-center gap-2 border-t py-2 text-sm font-medium transition-colors focus:outline-none md:justify-start md:border-t-0 md:py-0"
        >
          {isExpanded ? (
            <>
              <span className="group-hover/toggle:underline">{t('showLess')}</span>
              <LuChevronUp size={16} />
            </>
          ) : (
            <>
              <span className="group-hover/toggle:underline">{t('showDetails')}</span>
              <LuChevronDown size={16} />
            </>
          )}
        </button>
      </div>
    </m.div>
  );
};

export default function Experience() {
  useScrollSpy('experience');
  const { activeMatch } = useSearch();
  const { data, t } = useLanguage();
  const { experience } = data;

  return (
    <section id="experience" className="mx-auto w-full max-w-7xl px-8 py-20">
      <div className="mb-12 flex items-center gap-2">
        <span className="text-ide-accent font-mono text-xl">02.</span>
        <h2 className="text-ide-text-active text-3xl font-bold">{t('experience')}</h2>
        <div className="bg-ide-border ml-4 h-[1px] flex-1"></div>
      </div>

      <div className="md:border-ide-border relative ml-0 space-y-8 md:ml-6 md:space-y-16 md:border-l-2">
        {experience.map((job) => {
          const isActive = activeMatch?.id === `experience-${job.id}`;
          return <JobCard key={job.id} job={job} isActive={isActive} />;
        })}
      </div>
    </section>
  );
}
