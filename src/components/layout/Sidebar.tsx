'use client';

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import React from 'react';
import {
  LuFiles,
  LuSearch,
  LuLayoutGrid,
  LuSun,
  LuMoon,
  LuGlobe,
  LuLogIn,
  LuLogOut,
  LuPrinter,
} from 'react-icons/lu';
import { useSession, signIn, signOut } from 'next-auth/react';

import { useTheme } from '@/context/ThemeContext';
import { useNavigation } from '@/context/NavigationContext';
import { useLanguage, Language } from '@/context/LanguageContext';

interface SidebarProps {
  activeView: 'explorer' | 'search' | 'github' | 'linkedin' | 'contact' | 'cv-config' | null;
  setActiveView: (
    view: 'explorer' | 'search' | 'github' | 'linkedin' | 'contact' | 'cv-config' | null
  ) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({
  activeView,
  setActiveView,
  isOpen = false,
  onClose,
}: SidebarProps) {
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

  const handleViewClick = (
    view: 'explorer' | 'search' | 'github' | 'linkedin' | 'contact' | 'cv-config'
  ) => {
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
      {isOpen && <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={onClose} />}

      {/* Sidebar */}
      <div
        className={`bg-ide-activity-bar border-ide-border/30 fixed top-0 left-0 z-50 flex h-full w-12 flex-col items-center justify-between border-r pt-2 pb-10 transition-transform duration-300 ease-in-out md:relative ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} `}
      >
        <div className="flex flex-col gap-4">
          <button
            className={`cursor-pointer p-2 ${activeView === 'explorer' ? 'border-ide-accent text-ide-text-active border-l-2' : 'text-ide-text hover:text-ide-text-active opacity-90 hover:opacity-100'}`}
            title={t('explorer')}
            aria-label={t('explorer')}
            onClick={() => handleViewClick('explorer')}
          >
            <LuFiles size={24} strokeWidth={1.5} />
          </button>
          <button
            className={`cursor-pointer p-2 ${activeView === 'search' ? 'border-ide-accent text-ide-text-active border-l-2' : 'text-ide-text hover:text-ide-text-active opacity-90 hover:opacity-100'}`}
            title={t('search')}
            aria-label={t('search')}
            onClick={() => handleViewClick('search')}
          >
            <LuSearch size={24} strokeWidth={1.5} />
          </button>
          <button
            className={`cursor-pointer p-2 ${activeView === 'github' ? 'border-ide-accent text-ide-text-active border-l-2' : 'text-ide-text hover:text-ide-text-active opacity-90 hover:opacity-100'}`}
            title={t('githubStats')}
            aria-label={t('githubStats')}
            onClick={() => handleViewClick('github')}
          >
            <FaGithub size={24} strokeWidth={1.5} />
          </button>
          <button
            className={`cursor-pointer p-2 ${activeView === 'linkedin' ? 'border-ide-accent text-ide-text-active border-l-2' : 'text-ide-text hover:text-ide-text-active opacity-90 hover:opacity-100'}`}
            title={t('linkedinProfile')}
            aria-label={t('linkedinProfile')}
            onClick={() => handleViewClick('linkedin')}
          >
            <FaLinkedin size={24} strokeWidth={1.5} />
          </button>
          <button
            className={`cursor-pointer p-2 ${activeRightPanel === 'contact' ? 'border-ide-accent text-ide-text-active border-l-2' : 'text-ide-text hover:text-ide-text-active opacity-90 hover:opacity-100'}`}
            title={t('contactMe')}
            aria-label={t('contactMe')}
            onClick={handleContactClick}
          >
            <LuLayoutGrid size={24} strokeWidth={1.5} />
          </button>

          {/* Protected CV Generator Button */}
          {isAuthorized && (
            <button
              className={`cursor-pointer p-2 ${activeView === 'cv-config' ? 'border-ide-accent text-ide-text-active border-l-2' : 'text-ide-text hover:text-ide-text-active opacity-90 hover:opacity-100'}`}
              title="CV Configuration"
              aria-label="CV Configuration"
              onClick={() => handleViewClick('cv-config')}
            >
              <LuPrinter size={24} strokeWidth={1.5} />
            </button>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <button
            className="text-ide-text hover:text-ide-text-active relative cursor-pointer p-2 opacity-90 hover:opacity-100"
            onClick={toggleLanguage}
            title={`${t('switchLanguage')} (${language.toUpperCase()})`}
            aria-label={t('switchLanguage')}
          >
            <LuGlobe size={24} strokeWidth={1.5} />
            <span className="bg-ide-bg absolute right-0 bottom-0 rounded px-0.5 text-[10px] leading-none font-bold shadow-sm">
              {language.toUpperCase()}
            </span>
          </button>
          <button
            className="text-ide-text hover:text-ide-text-active cursor-pointer p-2 opacity-90 hover:opacity-100"
            onClick={toggleTheme}
            title={t('switchTheme')}
            aria-label={t('switchTheme')}
          >
            {theme === 'dark' ? (
              <LuSun size={24} strokeWidth={1.5} />
            ) : (
              <LuMoon size={24} strokeWidth={1.5} />
            )}
          </button>

          {/* Auth Button */}
          <button
            className="text-ide-text hover:text-ide-text-active cursor-pointer p-2 opacity-90 hover:opacity-100"
            onClick={handleAuth}
            title={status === 'authenticated' ? 'Sign Out' : 'Sign In'}
            aria-label={status === 'authenticated' ? 'Sign Out' : 'Sign In'}
          >
            {status === 'authenticated' ? (
              <LuLogOut size={24} strokeWidth={1.5} />
            ) : (
              <LuLogIn size={24} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>
    </>
  );
}
