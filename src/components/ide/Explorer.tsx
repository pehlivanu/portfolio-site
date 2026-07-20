'use client';

import React from 'react';
import { LuChevronDown, LuFileCode, LuFileJson, LuFileType, LuMail } from 'react-icons/lu';
import { useNavigation } from '@/context/NavigationContext';
import { useLanguage } from '@/context/LanguageContext';
import clsx from 'clsx';

export default function Explorer({
  onClose,
  isMobile,
}: {
  onClose?: () => void;
  isMobile?: boolean;
}) {
  const { activeSection, scrollToSection } = useNavigation();
  const { t } = useLanguage();

  const handleItemClick = (
    section: 'about' | 'experience' | 'education' | 'projects' | 'contact'
  ) => {
    scrollToSection(section);
    if (isMobile && onClose) {
      onClose();
    }
  };

  const getFileClass = (section: string) =>
    clsx(
      'flex items-center px-2 py-1 cursor-pointer text-ide-text group transition-colors',
      activeSection === section
        ? 'bg-ide-selection-bg text-ide-selection-text'
        : 'hover:bg-ide-hover-bg'
    );

  return (
    <div className="bg-ide-sidebar border-ide-border/30 flex h-full w-full flex-col border-r md:w-80">
      <div className="text-ide-text flex items-center justify-between p-3 text-xs font-bold tracking-wider uppercase">
        <span>{t('explorer')}</span>
        <button onClick={onClose} className="text-ide-text hover:text-ide-text-active md:hidden">
          <svg
            role="img"
            aria-label="Close Explorer"
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
            <title>Close Explorer</title>
            <line x1="18" x2="6" y1="6" y2="18" />
            <line x1="6" x2="18" y1="6" y2="18" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="hover:bg-ide-hover-bg text-ide-text flex cursor-pointer items-center px-1 py-1">
          <LuChevronDown size={16} />
          <span className="ml-1 text-sm font-bold">{t('portfolioLabel')}</span>
        </div>

        <div className="ml-4 flex flex-col">
          <div className="hover:bg-ide-hover-bg text-ide-text flex cursor-pointer items-center px-2 py-1">
            <LuChevronDown size={16} />
            <span className="ml-1 text-sm">{t('srcFolder')}</span>
          </div>

          <div className="ml-4 flex flex-col">
            <div className={getFileClass('about')} onClick={() => handleItemClick('about')}>
              <LuFileCode size={14} className="text-yellow-400" />
              <span className="group-hover:text-ide-text-active ml-2 text-sm">
                {t('aboutFile')}
              </span>
            </div>
            <div
              className={getFileClass('experience')}
              onClick={() => handleItemClick('experience')}
            >
              <LuFileCode size={14} className="text-orange-400" />
              <span className="group-hover:text-ide-text-active ml-2 text-sm">
                {t('experienceFile')}
              </span>
            </div>
            <div className={getFileClass('education')} onClick={() => handleItemClick('education')}>
              <LuFileType size={14} className="text-blue-400" title="Education File" />
              <span className="group-hover:text-ide-text-active ml-2 text-sm">
                {t('educationFile')}
              </span>
            </div>
            <div className={getFileClass('projects')} onClick={() => handleItemClick('projects')}>
              <LuFileJson size={14} className="text-green-400" />
              <span className="group-hover:text-ide-text-active ml-2 text-sm">
                {t('projectsFile')}
              </span>
            </div>
            <div className={getFileClass('contact')} onClick={() => handleItemClick('contact')}>
              <LuMail size={14} className="text-red-400" />
              <span className="group-hover:text-ide-text-active ml-2 text-sm">
                {t('contactFile')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
