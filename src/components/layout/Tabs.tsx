"use client";

import React from 'react';
import { X, FileCode, FileJson, FileType } from 'lucide-react';
import { useNavigation } from '@/context/NavigationContext';
import clsx from 'clsx';

export default function Tabs() {
  const { activeSection, scrollToSection } = useNavigation();

  const getTabClass = (section: string) => clsx(
    "flex items-center px-3 py-2 min-w-fit cursor-pointer border-r border-ide-border/30 group pr-2 transition-colors",
    activeSection === section 
      ? "bg-ide-bg border-t-2 border-t-ide-accent text-ide-text-active" 
      : "bg-ide-tab-inactive text-ide-text hover:bg-ide-bg"
  );

  return (
    <div className="flex bg-ide-title-bar h-9 overflow-x-auto scrollbar-hide">
      <div 
        className={getTabClass('hero')}
        onClick={() => scrollToSection('hero')}
      >
        <FileCode size={14} className="text-yellow-400 mr-2" />
        <span className="text-sm mr-2">Hero.tsx</span>
        <X size={14} className="opacity-0 group-hover:opacity-100 hover:bg-ide-activity-bar rounded" />
      </div>
      <div 
        className={getTabClass('experience')}
        onClick={() => scrollToSection('experience')}
      >
        <FileCode size={14} className="text-orange-400 mr-2" />
        <span className="text-sm mr-2">Experience.java</span>
        <X size={14} className="opacity-0 group-hover:opacity-100 hover:bg-ide-activity-bar rounded" />
      </div>
      <div 
        className={getTabClass('education')}
        onClick={() => scrollToSection('education')}
      >
        <FileType size={14} className="text-blue-400 mr-2" />
        <span className="text-sm mr-2">Education.tsx</span>
        <X size={14} className="opacity-0 group-hover:opacity-100 hover:bg-ide-activity-bar rounded" />
      </div>
      <div 
        className={getTabClass('projects')}
        onClick={() => scrollToSection('projects')}
      >
        <FileJson size={14} className="text-green-400 mr-2" />
        <span className="text-sm mr-2">Projects.json</span>
        <X size={14} className="opacity-0 group-hover:opacity-100 hover:bg-ide-activity-bar rounded" />
      </div>
    </div>
  );
}
