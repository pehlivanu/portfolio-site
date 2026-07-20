'use client';
import React, { useState, useEffect } from 'react';
import TitleBar from './TitleBar';
import Sidebar from './Sidebar';
import dynamic from 'next/dynamic';
import { useNavigation } from '@/context/NavigationContext';
import { useLanguage } from '@/context/LanguageContext';

const Explorer = dynamic(() => import('./Explorer'));
const Search = dynamic(() => import('./Search'));
const GitHubStats = dynamic(() => import('@/components/features').then((m) => m.GitHubStats));
const LinkedInStats = dynamic(() => import('@/components/features').then((m) => m.LinkedInStats));
const ContactPanel = dynamic(() => import('@/components/sections').then((m) => m.ContactPanel));
const CVConfigPanel = dynamic(() => import('@/components/cv/CVConfigPanel'));
const BioPanel = dynamic(() => import('@/components/sections/BioPanel'));
import Tabs from './Tabs';
import StatusBar from './StatusBar';

export default function IDELayout({ children }: { children: React.ReactNode }) {
  const [activeSidebarView, setActiveSidebarView] = useState<
    'explorer' | 'search' | 'github' | 'linkedin' | 'contact' | 'cv-config' | null
  >(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { activeRightPanel, closeRightPanel } = useNavigation();
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setActiveSidebarView(null);
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="bg-ide-bg h-screen w-screen overflow-hidden">
      <div className="bg-ide-bg text-ide-text relative flex h-full w-full flex-col overflow-hidden">
        {/* Mobile Floating Menu Button - Only show when no sidebar view is active */}
        {!activeSidebarView && (
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="bg-ide-activity-bar border-ide-border text-ide-text hover:text-ide-text-active fixed top-4 left-4 z-50 rounded-md border p-2 shadow-lg md:hidden"
            aria-label="Toggle Menu"
          >
            <svg
              role="img"
              aria-label="Toggle Menu"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>Toggle Menu</title>
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        )}

        {/* TitleBar - Hidden on Mobile */}
        <div className="hidden md:block">
          <TitleBar onMenuClick={() => setIsMobileMenuOpen(true)} />
        </div>

        <div className="relative flex flex-1 overflow-hidden">
          <Sidebar
            activeView={activeSidebarView}
            setActiveView={setActiveSidebarView}
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          />

          {/* Main Content Area */}
          <div className="flex min-w-0 flex-1 flex-col overflow-hidden transition-all duration-300 ease-in-out">
            <div className="flex flex-1 overflow-hidden">
              {activeSidebarView === 'explorer' && (
                <Explorer onClose={() => setActiveSidebarView(null)} isMobile={isMobile} />
              )}
              {activeSidebarView === 'search' && (
                <Search onClose={() => setActiveSidebarView(null)} isMobile={isMobile} />
              )}
              {activeSidebarView === 'github' && (
                <GitHubStats onClose={() => setActiveSidebarView(null)} />
              )}
              {activeSidebarView === 'linkedin' && (
                <LinkedInStats onClose={() => setActiveSidebarView(null)} />
              )}
              {activeSidebarView === 'cv-config' && (
                <CVConfigPanel onClose={() => setActiveSidebarView(null)} />
              )}
              {/* ContactPanel removed from left sidebar views */}

              <div
                className={`bg-ide-bg min-w-0 flex-1 flex-col ${activeSidebarView ? 'hidden md:flex' : 'flex'}`}
              >
                <>
                  <Tabs />
                  <main className="scrollbar-hide relative flex-1 overflow-y-auto p-0">
                    <div className="h-full w-full">{children}</div>
                  </main>
                </>
              </div>

              {/* Right Sidebar (Generic: Contact Me / Bio) */}
              <div
                className={`bg-ide-sidebar border-ide-border fixed inset-y-0 right-0 z-40 transform border-l shadow-xl transition-all duration-300 ease-in-out ${activeRightPanel ? 'translate-x-0' : 'translate-x-full'} md:relative md:inset-auto md:translate-x-0 md:shadow-none ${activeRightPanel ? 'w-full md:w-[450px]' : 'w-0 border-none'} `}
              >
                <div className="flex h-full w-full flex-col overflow-hidden">
                  {activeRightPanel && (
                    <>
                      {/* Header - Height 36px (h-9) to match Tabs and Left Sidebar Header */}
                      <div className="bg-ide-sidebar border-ide-border/30 flex h-9 items-center justify-between border-b px-3">
                        <span className="text-ide-text text-xs font-bold tracking-wider uppercase">
                          {activeRightPanel === 'contact' ? t('contactMe') : t('biography')}
                        </span>
                        <button
                          onClick={closeRightPanel}
                          className="text-ide-text hover:text-ide-text-active hover:bg-ide-activity-bar rounded p-1"
                        >
                          <svg
                            role="img"
                            aria-label="Close Panel"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <title>Close Panel</title>
                            <line x1="18" x2="6" y1="6" y2="18" />
                            <line x1="6" x2="18" y1="6" y2="18" />
                          </svg>
                        </button>
                      </div>

                      <div className="bg-ide-sidebar flex-1 overflow-y-auto">
                        {activeRightPanel === 'contact' ? <ContactPanel /> : <BioPanel />}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <StatusBar />
          </div>
        </div>
      </div>
    </div>
  );
}
