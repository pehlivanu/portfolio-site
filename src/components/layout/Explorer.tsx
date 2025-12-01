"use client";

import React from 'react';
import { ChevronDown, FileCode, FileJson, FileType } from 'lucide-react';
import { useNavigation } from '@/context/NavigationContext';
import clsx from 'clsx';

export default function Explorer() {
  const { activeSection, scrollToSection } = useNavigation();

  const getFileClass = (section: string) => clsx(
    "flex items-center px-2 py-1 cursor-pointer text-ide-text group transition-colors",
    activeSection === section ? "bg-ide-selection-bg text-ide-selection-text" : "hover:bg-ide-hover-bg"
  );

  return (
    <div className="w-80 bg-ide-sidebar flex flex-col h-full border-r border-ide-border/30 hidden md:flex">
      <div className="p-3 text-xs font-bold text-ide-text tracking-wider uppercase">Explorer</div>
      
      <div className="flex flex-col">
        <div className="flex items-center px-1 py-1 cursor-pointer hover:bg-ide-hover-bg text-ide-text">
          <ChevronDown size={16} />
          <span className="ml-1 text-sm font-bold">PORTFOLIO</span>
        </div>
        
        <div className="flex flex-col ml-4">
          <div className="flex items-center px-2 py-1 cursor-pointer hover:bg-ide-hover-bg text-ide-text">
            <ChevronDown size={16} />
            <span className="ml-1 text-sm">src</span>
          </div>
          
          <div className="flex flex-col ml-4">
             <div 
               className={getFileClass('hero')}
               onClick={() => scrollToSection('hero')}
             >
               <FileCode size={14} className="text-yellow-400" />
               <span className="ml-2 text-sm group-hover:text-ide-text-active">Hero.tsx</span>
             </div>
             <div 
               className={getFileClass('experience')}
               onClick={() => scrollToSection('experience')}
             >
               <FileCode size={14} className="text-orange-400" />
               <span className="ml-2 text-sm group-hover:text-ide-text-active">Experience.java</span>
             </div>
             <div 
               className={getFileClass('education')}
               onClick={() => scrollToSection('education')}
             >
               <FileType size={14} className="text-blue-400" />
               <span className="ml-2 text-sm group-hover:text-ide-text-active">Education.tsx</span>
             </div>
             <div 
               className={getFileClass('projects')}
               onClick={() => scrollToSection('projects')}
             >
               <FileJson size={14} className="text-green-400" />
               <span className="ml-2 text-sm group-hover:text-ide-text-active">Projects.json</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
