"use client";

import React from 'react';
import { Files, Search, Play, LayoutGrid, Settings, Github, Linkedin, Sun, Moon } from 'lucide-react';

import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';

interface SidebarProps {
  activeView: 'explorer' | 'search' | 'github' | null;
  setActiveView: (view: 'explorer' | 'search' | 'github' | null) => void;
}

export default function Sidebar({ activeView, setActiveView }: SidebarProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="w-12 bg-ide-activity-bar flex flex-col items-center py-2 justify-between h-full border-r border-ide-border/30 z-20">
      <div className="flex flex-col gap-4">
        <div 
          className={`p-2 cursor-pointer ${activeView === 'explorer' ? 'border-l-2 border-ide-accent text-ide-text-active' : 'text-ide-text hover:text-ide-text-active opacity-70 hover:opacity-100'}`}
          title="Explorer"
          onClick={() => setActiveView(activeView === 'explorer' ? null : 'explorer')}
        >
          <Files size={24} strokeWidth={1.5} />
        </div>
        <div 
          className={`p-2 cursor-pointer ${activeView === 'search' ? 'border-l-2 border-ide-accent text-ide-text-active' : 'text-ide-text hover:text-ide-text-active opacity-70 hover:opacity-100'}`}
          title="Search"
          onClick={() => setActiveView(activeView === 'search' ? null : 'search')}
        >
          <Search size={24} strokeWidth={1.5} />
        </div>
        <div 
          className={`p-2 cursor-pointer ${activeView === 'github' ? 'border-l-2 border-ide-accent text-ide-text-active' : 'text-ide-text hover:text-ide-text-active opacity-70 hover:opacity-100'}`}
          title="GitHub Stats"
          onClick={() => setActiveView(activeView === 'github' ? null : 'github')}
        >
          <Github size={24} strokeWidth={1.5} />
        </div>
        <div className="p-2 cursor-pointer text-ide-text hover:text-ide-text-active opacity-70 hover:opacity-100" title="Run">
          <Play size={24} strokeWidth={1.5} />
        </div>
        <div className="p-2 cursor-pointer text-ide-text hover:text-ide-text-active opacity-70 hover:opacity-100" title="Extensions">
          <LayoutGrid size={24} strokeWidth={1.5} />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Link href="https://www.linkedin.com/in/liviuionesi" target="_blank" rel="noopener noreferrer">
          <div className="p-2 cursor-pointer text-ide-text hover:text-ide-text-active opacity-70 hover:opacity-100" title="LinkedIn Profile">
            <Linkedin size={24} strokeWidth={1.5} />
          </div>
        </Link>
        <div 
          className="p-2 cursor-pointer text-ide-text hover:text-ide-text-active opacity-70 hover:opacity-100" 
          onClick={toggleTheme}
          title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Theme`}
        >
          {theme === 'dark' ? <Sun size={24} strokeWidth={1.5} /> : <Moon size={24} strokeWidth={1.5} />}
        </div>
        <div className="p-2 cursor-pointer text-ide-text hover:text-ide-text-active opacity-70 hover:opacity-100" title="Settings">
          <Settings size={24} strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}
