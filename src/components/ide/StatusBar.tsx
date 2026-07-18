'use client';

import React from 'react';
import { LuGitBranch, LuRefreshCw, LuBell, LuCheck, LuMail } from 'react-icons/lu';
import { FaTimesCircle, FaExclamationTriangle } from 'react-icons/fa';
import { useNavigation } from '@/context/NavigationContext';
import { useLanguage } from '@/context/LanguageContext';

export default function StatusBar() {
  const { contactStatus, zoomLevel, activeSection } = useNavigation();
  const { t } = useLanguage();

  const getLanguageForSection = (section: string) => {
    switch (section) {
      case 'hero':
        return 'TypeScript';
      case 'experience':
        return 'Java';
      case 'education':
        return 'TypeScript';
      case 'projects':
        return 'JSON';
      case 'contact':
        return 'TypeScript';
      default:
        return 'TypeScript';
    }
  };

  return (
    <div className="bg-ide-status-bar text-ide-status-bar-foreground border-ide-border z-30 hidden h-8 items-center justify-between border-t px-3 text-xs select-none md:flex">
      <div className="flex items-center gap-4">
        <div className="hover:bg-ide-status-bar-hover flex cursor-pointer items-center gap-1 rounded px-1 transition-colors">
          <LuGitBranch size={12} />
          <span>{t('mainBranch')}</span>
        </div>
        <div className="hover:bg-ide-status-bar-hover flex cursor-pointer items-center gap-1 rounded px-1 transition-colors">
          <LuRefreshCw size={12} />
        </div>
        <div className="flex items-center gap-3">
          <div className="hover:bg-ide-status-bar-hover flex cursor-pointer items-center gap-1 rounded px-1 transition-colors">
            <FaTimesCircle size={12} />
            <span>0</span>
          </div>
          <div className="hover:bg-ide-status-bar-hover flex cursor-pointer items-center gap-1 rounded px-1 transition-colors">
            <FaExclamationTriangle size={12} />
            <span>0</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hover:bg-ide-status-bar-hover flex cursor-pointer items-center gap-1 rounded px-1 transition-colors">
          {contactStatus === 'sent' ? (
            <>
              <LuCheck size={12} />
              <span>{t('emailSent')}</span>
            </>
          ) : (
            <>
              <LuMail size={12} />
              <span>{t('notContacted')}</span>
            </>
          )}
        </div>

        <div className="hover:bg-ide-status-bar-hover flex cursor-pointer items-center gap-1 rounded px-1 transition-colors">
          <span>{t('lnCol')}</span>
        </div>
        <div className="hover:bg-ide-status-bar-hover flex cursor-pointer items-center gap-1 rounded px-1 transition-colors">
          <span>{t('utf8')}</span>
        </div>
        <div className="hover:bg-ide-status-bar-hover flex min-w-[80px] cursor-pointer items-center justify-center gap-1 rounded px-1 transition-colors">
          <span>{getLanguageForSection(activeSection)}</span>
        </div>
        <div className="hover:bg-ide-status-bar-hover flex cursor-pointer items-center gap-1 rounded px-1 transition-colors">
          <span>{zoomLevel}%</span>
        </div>
        <div className="hover:bg-ide-status-bar-hover flex cursor-pointer items-center gap-1 rounded px-1 transition-colors">
          <LuBell size={12} />
        </div>
      </div>
    </div>
  );
}
