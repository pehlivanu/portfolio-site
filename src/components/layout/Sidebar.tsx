"use client";

import React from 'react';
import { Files, Search, Play, LayoutGrid, Settings, Github, Linkedin, Sun, Moon } from 'lucide-react';

import { useTheme } from '@/context/ThemeContext';
import { useNavigation } from '@/context/NavigationContext';
import Link from 'next/link';

interface SidebarProps {
  activeView: 'explorer' | 'search' | 'github' | 'linkedin' | null;
  setActiveView: (view: 'explorer' | 'search' | 'github' | 'linkedin' | null) => void;
}

export default function Sidebar({ activeView, setActiveView }: SidebarProps) {
  const { theme, toggleTheme } = useTheme();
  const { isContactVisible, setContactVisible, scrollToSection } = useNavigation();

  const handleContactClick = () => {
    if (isContactVisible) {
      setContactVisible(false);
    } else {
      scrollToSection('contact');
    }
  };

  return (
    <div className="w-12 bg-ide-activity-bar flex flex-col items-center py-2 justify-between h-full border-r border-ide-border/30 z-20">
      <div className="flex flex-col gap-4">
        <button 
          className={`p-2 cursor-pointer ${activeView === 'explorer' ? 'border-l-2 border-ide-accent text-ide-text-active' : 'text-ide-text hover:text-ide-text-active opacity-90 hover:opacity-100'}`}
          title="Explorer"
          aria-label="Explorer"
          onClick={() => setActiveView(activeView === 'explorer' ? null : 'explorer')}
        >
          <Files size={24} strokeWidth={1.5} />
        </button>
        <button 
          className={`p-2 cursor-pointer ${activeView === 'search' ? 'border-l-2 border-ide-accent text-ide-text-active' : 'text-ide-text hover:text-ide-text-active opacity-90 hover:opacity-100'}`}
          title="Search"
          aria-label="Search"
          onClick={() => setActiveView(activeView === 'search' ? null : 'search')}
        >
          <Search size={24} strokeWidth={1.5} />
        </button>
        <button 
          className={`p-2 cursor-pointer ${activeView === 'github' ? 'border-l-2 border-ide-accent text-ide-text-active' : 'text-ide-text hover:text-ide-text-active opacity-90 hover:opacity-100'}`}
          title="GitHub Stats"
          aria-label="GitHub Stats"
          onClick={() => setActiveView(activeView === 'github' ? null : 'github')}
        >
          <Github size={24} strokeWidth={1.5} />
        </button>
        <button 
          className={`p-2 cursor-pointer ${activeView === 'linkedin' ? 'border-l-2 border-ide-accent text-ide-text-active' : 'text-ide-text hover:text-ide-text-active opacity-90 hover:opacity-100'}`}
          title="LinkedIn Profile"
          aria-label="LinkedIn Profile"
          onClick={() => setActiveView(activeView === 'linkedin' ? null : 'linkedin')}
        >
          <Linkedin size={24} strokeWidth={1.5} />
        </button>
        <button 
          className={`p-2 cursor-pointer ${isContactVisible ? 'border-l-2 border-ide-accent text-ide-text-active' : 'text-ide-text hover:text-ide-text-active opacity-90 hover:opacity-100'}`}
          title="Contact Me"
          aria-label="Contact Me"
          onClick={handleContactClick}
        >
          <LayoutGrid size={24} strokeWidth={1.5} />
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <button 
          className="p-2 cursor-pointer text-ide-text hover:text-ide-text-active opacity-90 hover:opacity-100" 
          onClick={toggleTheme}
          title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Theme`}
          aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Theme`}
        >
          {theme === 'dark' ? <Sun size={24} strokeWidth={1.5} /> : <Moon size={24} strokeWidth={1.5} />}
        </button>
        <button 
          className="p-2 cursor-pointer text-ide-text hover:text-ide-text-active opacity-90 hover:opacity-100" 
          title="Settings"
          aria-label="Settings"
        >
          <Settings size={24} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
