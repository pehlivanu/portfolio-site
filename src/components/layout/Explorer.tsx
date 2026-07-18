"use client";

import React from 'react';
import { ChevronDown, FileCode, FileJson, FileType, Mail } from 'lucide-react';
import { useNavigation } from '@/context/NavigationContext';
import { useLanguage } from '@/context/LanguageContext';
import clsx from 'clsx';

export default function Explorer({ onClose, isMobile }: { onClose?: () => void, isMobile?: boolean }) {
  const { activeSection, scrollToSection } = useNavigation();
  const { t } = useLanguage();

  const handleItemClick = (section: 'about' | 'experience' | 'education' | 'projects' | 'contact') => {
    scrollToSection(section);
    if (isMobile && onClose) {
      onClose();
    }
  };

  const getFileClass = (section: string) => clsx(
    "flex items-center px-2 py-1 cursor-pointer text-ide-text group transition-colors",
    activeSection === section ? "bg-ide-selection-bg text-ide-selection-text" : "hover:bg-ide-hover-bg"
  );

  return (
    <div className="w-full md:w-80 bg-ide-sidebar flex flex-col h-full border-r border-ide-border/30 flex">
      <div className="p-3 text-xs font-bold text-ide-text tracking-wider uppercase flex justify-between items-center">
        <span>{t('explorer')}</span>
        <button onClick={onClose} className="md:hidden text-ide-text hover:text-ide-text-active">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
        </button>
      </div>
      
      <div className="flex flex-col">
        <div className="flex items-center px-1 py-1 cursor-pointer hover:bg-ide-hover-bg text-ide-text">
          <ChevronDown size={16} />
          <span className="ml-1 text-sm font-bold">{t('portfolioLabel')}</span>
        </div>
        
        <div className="flex flex-col ml-4">
          <div className="flex items-center px-2 py-1 cursor-pointer hover:bg-ide-hover-bg text-ide-text">
            <ChevronDown size={16} />
            <span className="ml-1 text-sm">{t('srcFolder')}</span>
          </div>
          
          <div className="flex flex-col ml-4">
             <div 
               className={getFileClass('about')}
               onClick={() => handleItemClick('about')}
             >
               <FileCode size={14} className="text-yellow-400" />
               <span className="ml-2 text-sm group-hover:text-ide-text-active">{t('aboutFile')}</span>
             </div>
             <div 
               className={getFileClass('experience')}
               onClick={() => handleItemClick('experience')}
             >
               <FileCode size={14} className="text-orange-400" />
               <span className="ml-2 text-sm group-hover:text-ide-text-active">{t('experienceFile')}</span>
             </div>
             <div 
               className={getFileClass('education')}
               onClick={() => handleItemClick('education')}
             >
               <FileType size={14} className="text-blue-400" />
               <span className="ml-2 text-sm group-hover:text-ide-text-active">{t('educationFile')}</span>
             </div>
             <div 
               className={getFileClass('projects')}
               onClick={() => handleItemClick('projects')}
             >
               <FileJson size={14} className="text-green-400" />
               <span className="ml-2 text-sm group-hover:text-ide-text-active">{t('projectsFile')}</span>
             </div>
             <div 
               className={getFileClass('contact')}
               onClick={() => handleItemClick('contact')}
             >
               <Mail size={14} className="text-red-400" />
               <span className="ml-2 text-sm group-hover:text-ide-text-active">{t('contactFile')}</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
