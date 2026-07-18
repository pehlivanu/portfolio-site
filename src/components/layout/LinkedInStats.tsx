"use client";
/* eslint-disable @next/next/no-img-element */

import React from 'react';
import { Linkedin, Users, Briefcase, Award, ExternalLink } from 'lucide-react';
import { useNavigation } from '@/context/NavigationContext';
import { useLanguage } from '@/context/LanguageContext';

export default function LinkedInStats({ onClose }: { onClose?: () => void }) {
  const { openRightPanel } = useNavigation();
  const { data, t } = useLanguage();
  const profile = data.linkedInProfile;

  return (
    <div className="w-full md:w-80 bg-ide-sidebar flex flex-col h-full border-r border-ide-border/30 flex overflow-y-auto">
      <div className="p-3 text-xs font-bold text-ide-text tracking-wider uppercase border-b border-ide-border/30 flex justify-between items-center">
        <span>{t('linkedinProfile')}</span>
        <button onClick={onClose} className="md:hidden text-ide-text hover:text-ide-text-active">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
        </button>
      </div>
      
      <div className="p-6 flex flex-col items-center text-center">
        <div className="relative mb-4">
          <img 
            src={profile.avatarUrl} 
            alt={profile.name} 
            className="w-24 h-24 rounded-full border-4 border-ide-bg shadow-lg"
          />
          <div className="absolute bottom-1 right-1 bg-ide-bg p-1 rounded-full">
            <Linkedin size={20} className="text-ide-text-active" />
          </div>
        </div>
        
        <h2 className="text-xl font-bold text-ide-text-active mb-1">{profile.name}</h2>
        <p className="text-xs text-ide-text mb-4 max-w-[200px]">{profile.headline}</p>
        
        <a 
          href="https://www.linkedin.com/in/liviuionesi"
          target="_blank" 
          rel="noopener noreferrer"
          className="px-4 py-2 bg-[#0077b5] hover:bg-[#006396] text-white text-sm rounded-md font-medium transition-colors flex items-center gap-2 mb-6"
        >
          <span>{t('viewProfile')}</span>
          <ExternalLink size={14} />
        </a>
        
        <div className="w-full space-y-4">

          
          <div className="flex items-center gap-3 text-sm text-ide-text">
            <Users size={16} className="text-ide-accent" />
            <span>{profile.connections} {t('connections')}</span>
          </div>

          <div className="bg-ide-bg p-4 rounded-lg border border-ide-border text-left mt-4">
            <h3 className="text-xs font-bold text-ide-text uppercase mb-2 flex items-center gap-2">
              <Briefcase size={14} /> {t('about')}
            </h3>
            <p className="text-sm text-ide-text leading-relaxed line-clamp-4">
              {profile.about}
            </p>
            <button 
                onClick={() => openRightPanel('bio')}
                className="text-ide-accent text-xs hover:underline mt-2 font-medium"
            >
                {t('readMore')}
            </button>
          </div>
          
          <div className="mt-6 w-full">
            <h3 className="text-xs font-bold text-ide-text uppercase mb-3 text-left">{t('topSkills')}</h3>
            <div className="flex flex-wrap gap-2">
              {profile.skills.slice(0, 8).map((skill) => (
                <span key={skill} className="px-2 py-1 bg-ide-bg border border-ide-border rounded text-xs text-ide-text">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 w-full">
            <h3 className="text-xs font-bold text-ide-text uppercase mb-3 text-left">{t('certificationsLabel')}</h3>
            <div className="space-y-2 max-h-60 overflow-y-auto pr-1 custom-scrollbar">
              {profile.certifications?.map((cert, index) => {
                 const isClickable = !!cert.url;
                 const Wrapper = isClickable ? 'a' : 'div';
                 const wrapperProps = isClickable ? {
                    href: cert.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "bg-ide-bg p-2 rounded border border-ide-border flex items-center gap-3 text-left hover:border-ide-accent/50 hover:bg-ide-activity-bar/30 transition-all cursor-pointer group block"
                 } : {
                    className: "bg-ide-bg p-2 rounded border border-ide-border flex items-center gap-3 text-left hover:border-ide-accent/50 transition-colors cursor-default"
                 };

                 return (
                    <Wrapper key={index} {...wrapperProps}>
                      <Award size={20} className="text-yellow-500 [.light-theme_&]:text-yellow-700 shrink-0 group-hover:scale-110 transition-transform" />
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-bold text-ide-text-active truncate" title={cert.name}>
                            {cert.name}
                        </div>
                        <div className="text-xs text-gray-500 [.light-theme_&]:text-gray-600">{cert.authority}</div>
                      </div>
                      {isClickable && <ExternalLink size={14} className="text-ide-text opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />}
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
