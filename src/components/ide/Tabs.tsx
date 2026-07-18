'use client';

import React from 'react';
import { LuX, LuFileCode, LuFileJson, LuFileType, LuMail } from 'react-icons/lu';
import { useLanguage } from '@/context/LanguageContext';
import clsx from 'clsx';
import { useNavigation } from '@/context/NavigationContext';

export default function Tabs() {
  const { activeSection, scrollToSection } = useNavigation();
  const { t } = useLanguage();

  const getTabClass = (section: string) =>
    clsx(
      'flex items-center px-3 py-2 min-w-fit cursor-pointer border-r border-ide-border/30 group pr-2 transition-colors',
      activeSection === section
        ? 'bg-ide-bg border-t-2 border-t-ide-accent text-ide-text-active'
        : 'bg-ide-tab-inactive text-ide-text hover:bg-ide-bg'
    );

  return (
    <div className="bg-ide-title-bar scrollbar-hide flex h-9 overflow-x-auto">
      <div className={getTabClass('about')} onClick={() => scrollToSection('about')}>
        <LuFileCode size={14} className="mr-2 text-yellow-400" />
        <span className="mr-2 text-sm">{t('aboutFile')}</span>
        <LuX
          size={14}
          className="hover:bg-ide-activity-bar rounded opacity-0 group-hover:opacity-100"
        />
      </div>
      <div className={getTabClass('experience')} onClick={() => scrollToSection('experience')}>
        <LuFileCode size={14} className="mr-2 text-orange-400" />
        <span className="mr-2 text-sm">{t('experienceFile')}</span>
        <LuX
          size={14}
          className="hover:bg-ide-activity-bar rounded opacity-0 group-hover:opacity-100"
        />
      </div>
      <div className={getTabClass('education')} onClick={() => scrollToSection('education')}>
        <LuFileType size={14} className="mr-2 text-blue-400" />
        <span className="mr-2 text-sm">{t('educationFile')}</span>
        <LuX
          size={14}
          className="hover:bg-ide-activity-bar rounded opacity-0 group-hover:opacity-100"
        />
      </div>
      <div className={getTabClass('projects')} onClick={() => scrollToSection('projects')}>
        <LuFileJson size={14} className="mr-2 text-green-400" />
        <span className="mr-2 text-sm">{t('projectsFile')}</span>
        <LuX
          size={14}
          className="hover:bg-ide-activity-bar rounded opacity-0 group-hover:opacity-100"
        />
      </div>
      <div className={getTabClass('contact')} onClick={() => scrollToSection('contact')}>
        <LuMail size={14} className="mr-2 text-red-400" />
        <span className="mr-2 text-sm">{t('contactFile')}</span>
        <LuX
          size={14}
          className="hover:bg-ide-activity-bar rounded opacity-0 group-hover:opacity-100"
        />
      </div>
    </div>
  );
}
