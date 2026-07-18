'use client';

import React from 'react';
import Image from 'next/image';
import { Linkedin, Users, Briefcase, Award, ExternalLink } from 'lucide-react';
import { useNavigation } from '@/context/NavigationContext';
import { useLanguage } from '@/context/LanguageContext';

export default function LinkedInStats({ onClose }: { onClose?: () => void }) {
  const { openRightPanel } = useNavigation();
  const { data, t } = useLanguage();
  const profile = data.linkedInProfile;

  return (
    <div className="bg-ide-sidebar border-ide-border/30 flex h-full w-full flex-col overflow-y-auto border-r md:w-80">
      <div className="text-ide-text border-ide-border/30 flex items-center justify-between border-b p-3 text-xs font-bold tracking-wider uppercase">
        <span>{t('linkedinProfile')}</span>
        <button onClick={onClose} className="text-ide-text hover:text-ide-text-active md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" x2="6" y1="6" y2="18" />
            <line x1="6" x2="18" y1="6" y2="18" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col items-center p-6 text-center">
        <div className="relative mb-4 h-24 w-24">
          <Image
            src={profile.avatarUrl}
            alt={profile.name}
            fill
            sizes="96px"
            className="border-ide-bg rounded-full border-4 object-cover shadow-lg"
          />
          <div className="bg-ide-bg absolute right-1 bottom-1 rounded-full p-1">
            <Linkedin size={20} className="text-ide-text-active" />
          </div>
        </div>

        <h2 className="text-ide-text-active mb-1 text-xl font-bold">{profile.name}</h2>
        <p className="text-ide-text mb-4 max-w-[200px] text-xs">{profile.headline}</p>

        <a
          href="https://www.linkedin.com/in/liviuionesi"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-6 flex items-center gap-2 rounded-md bg-[#0077b5] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#006396]"
        >
          <span>{t('viewProfile')}</span>
          <ExternalLink size={14} />
        </a>

        <div className="w-full space-y-4">
          <div className="text-ide-text flex items-center gap-3 text-sm">
            <Users size={16} className="text-ide-accent" />
            <span>
              {profile.connections} {t('connections')}
            </span>
          </div>

          <div className="bg-ide-bg border-ide-border mt-4 rounded-lg border p-4 text-left">
            <h3 className="text-ide-text mb-2 flex items-center gap-2 text-xs font-bold uppercase">
              <Briefcase size={14} /> {t('about')}
            </h3>
            <p className="text-ide-text line-clamp-4 text-sm leading-relaxed">{profile.about}</p>
            <button
              onClick={() => openRightPanel('bio')}
              className="text-ide-accent mt-2 text-xs font-medium hover:underline"
            >
              {t('readMore')}
            </button>
          </div>

          <div className="mt-6 w-full">
            <h3 className="text-ide-text mb-3 text-left text-xs font-bold uppercase">
              {t('topSkills')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.skills.slice(0, 8).map((skill) => (
                <span
                  key={skill}
                  className="bg-ide-bg border-ide-border text-ide-text rounded border px-2 py-1 text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 w-full">
            <h3 className="text-ide-text mb-3 text-left text-xs font-bold uppercase">
              {t('certificationsLabel')}
            </h3>
            <div className="custom-scrollbar max-h-60 space-y-2 overflow-y-auto pr-1">
              {profile.certifications?.map((cert, index) => {
                const isClickable = !!cert.url;
                const Wrapper = isClickable ? 'a' : 'div';
                const wrapperProps = isClickable
                  ? {
                      href: cert.url,
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      className:
                        'bg-ide-bg p-2 rounded border border-ide-border flex items-center gap-3 text-left hover:border-ide-accent/50 hover:bg-ide-activity-bar/30 transition-all cursor-pointer group block',
                    }
                  : {
                      className:
                        'bg-ide-bg p-2 rounded border border-ide-border flex items-center gap-3 text-left hover:border-ide-accent/50 transition-colors cursor-default',
                    };

                return (
                  <Wrapper key={index} {...wrapperProps}>
                    <Award
                      size={20}
                      className="shrink-0 text-yellow-500 transition-transform group-hover:scale-110 [.light-theme_&]:text-yellow-700"
                    />
                    <div className="min-w-0 flex-1">
                      <div
                        className="text-ide-text-active truncate text-sm font-bold"
                        title={cert.name}
                      >
                        {cert.name}
                      </div>
                      <div className="text-xs text-gray-500 [.light-theme_&]:text-gray-600">
                        {cert.authority}
                      </div>
                    </div>
                    {isClickable && (
                      <ExternalLink
                        size={14}
                        className="text-ide-text shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                      />
                    )}
                  </Wrapper>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
