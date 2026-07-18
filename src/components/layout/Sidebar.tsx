"use client";

import React from 'react';
import { Files, Search, LayoutGrid, Settings, Github, Linkedin, Sun, Moon, Globe, LogIn, LogOut, Printer } from 'lucide-react';
import { useSession, signIn, signOut } from "next-auth/react";

import { useTheme } from '@/context/ThemeContext';
import { useNavigation } from '@/context/NavigationContext';
import { useLanguage, Language } from '@/context/LanguageContext';

interface SidebarProps {
  activeView: 'explorer' | 'search' | 'github' | 'linkedin' | 'contact' | 'cv-config' | null;
  setActiveView: (view: 'explorer' | 'search' | 'github' | 'linkedin' | 'contact' | 'cv-config' | null) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ activeView, setActiveView, isOpen = false, onClose }: SidebarProps) {
  const { theme, toggleTheme } = useTheme();
  const { activeRightPanel, openRightPanel, closeRightPanel } = useNavigation();
  const { language, setLanguage, t } = useLanguage();
  const { data: session, status } = useSession();

  const handleContactClick = () => {
    if (activeRightPanel === 'contact') {
      closeRightPanel();
    } else {
      openRightPanel('contact');
    }
    if (onClose && window.innerWidth < 768) {
       onClose();
    }
  };

  const handleViewClick = (view: 'explorer' | 'search' | 'github' | 'linkedin' | 'contact' | 'cv-config') => {
    setActiveView(activeView === view ? null : view);
    if (onClose) onClose();
  };

  const toggleLanguage = () => {
    const langs: Language[] = ['en', 'de', 'ro', 'fr'];
    const nextIndex = (langs.indexOf(language) + 1) % langs.length;
    setLanguage(langs[nextIndex]);
  };

  const handleAuth = () => {
    if (status === 'authenticated') {
        signOut();
    } else {
        signIn('google');
    }
  };

  const isAuthorized = session?.user?.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL;

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        w-12 bg-ide-activity-bar flex flex-col items-center py-2 justify-between h-full border-r border-ide-border/30 z-50
        fixed md:relative top-0 left-0 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
      <div className="flex flex-col gap-4">
        <button 
          className={`p-2 cursor-pointer ${activeView === 'explorer' ? 'border-l-2 border-ide-accent text-ide-text-active' : 'text-ide-text hover:text-ide-text-active opacity-90 hover:opacity-100'}`}
          title={t('explorer')}
          aria-label={t('explorer')}
          onClick={() => handleViewClick('explorer')}
        >
          <Files size={24} strokeWidth={1.5} />
        </button>
        <button 
          className={`p-2 cursor-pointer ${activeView === 'search' ? 'border-l-2 border-ide-accent text-ide-text-active' : 'text-ide-text hover:text-ide-text-active opacity-90 hover:opacity-100'}`}
          title={t('search')}
          aria-label={t('search')}
          onClick={() => handleViewClick('search')}
        >
          <Search size={24} strokeWidth={1.5} />
        </button>
        <button 
          className={`p-2 cursor-pointer ${activeView === 'github' ? 'border-l-2 border-ide-accent text-ide-text-active' : 'text-ide-text hover:text-ide-text-active opacity-90 hover:opacity-100'}`}
          title={t('githubStats')}
          aria-label={t('githubStats')}
          onClick={() => handleViewClick('github')}
        >
          <Github size={24} strokeWidth={1.5} />
        </button>
        <button 
          className={`p-2 cursor-pointer ${activeView === 'linkedin' ? 'border-l-2 border-ide-accent text-ide-text-active' : 'text-ide-text hover:text-ide-text-active opacity-90 hover:opacity-100'}`}
          title={t('linkedinProfile')}
          aria-label={t('linkedinProfile')}
          onClick={() => handleViewClick('linkedin')}
        >
          <Linkedin size={24} strokeWidth={1.5} />
        </button>
        <button 
          className={`p-2 cursor-pointer ${activeRightPanel === 'contact' ? 'border-l-2 border-ide-accent text-ide-text-active' : 'text-ide-text hover:text-ide-text-active opacity-90 hover:opacity-100'}`}
          title={t('contactMe')}
          aria-label={t('contactMe')}
          onClick={handleContactClick}
        >
          <LayoutGrid size={24} strokeWidth={1.5} />
        </button>

        {/* Protected CV Generator Button */}
        {isAuthorized && (
            <button 
                className={`p-2 cursor-pointer ${activeView === 'cv-config' ? 'border-l-2 border-ide-accent text-ide-text-active' : 'text-ide-text hover:text-ide-text-active opacity-90 hover:opacity-100'}`}
                title="CV Configuration"
                aria-label="CV Configuration"
                onClick={() => handleViewClick('cv-config')}
            >
                <Printer size={24} strokeWidth={1.5} />
            </button>
        )}

      </div>
      <div className="flex flex-col gap-4">
        
        {/* Auth Button */}
        <button 
          className="p-2 cursor-pointer text-ide-text hover:text-ide-text-active opacity-90 hover:opacity-100" 
          onClick={handleAuth}
          title={status === 'authenticated' ? 'Sign Out' : 'Sign In'}
          aria-label={status === 'authenticated' ? 'Sign Out' : 'Sign In'}
        >
          {status === 'authenticated' ? (
              <LogOut size={24} strokeWidth={1.5} />
          ) : (
              <LogIn size={24} strokeWidth={1.5} />
          )}
        </button>

        <button 
          className="p-2 cursor-pointer text-ide-text hover:text-ide-text-active opacity-90 hover:opacity-100 relative" 
          onClick={toggleLanguage}
          title={`${t('switchLanguage')} (${language.toUpperCase()})`}
          aria-label={t('switchLanguage')}
        >
          <Globe size={24} strokeWidth={1.5} />
          <span className="absolute bottom-0 right-0 text-[10px] font-bold bg-ide-bg rounded px-0.5 leading-none shadow-sm">{language.toUpperCase()}</span>
        </button>
        <button 
          className="p-2 cursor-pointer text-ide-text hover:text-ide-text-active opacity-90 hover:opacity-100" 
          onClick={toggleTheme}
          title={t('switchTheme')}
          aria-label={t('switchTheme')}
        >
          {theme === 'dark' ? <Sun size={24} strokeWidth={1.5} /> : <Moon size={24} strokeWidth={1.5} />}
        </button>
        <button 
          className="p-2 cursor-pointer text-ide-text hover:text-ide-text-active opacity-90 hover:opacity-100" 
          title={t('settings')}
          aria-label={t('settings')}
        >
          <Settings size={24} strokeWidth={1.5} />
        </button>
      </div>
    </div>
    </>
  );
}
