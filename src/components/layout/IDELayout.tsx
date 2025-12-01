"use client";
import React, { useState, useEffect } from 'react';
import TitleBar from './TitleBar';
import Sidebar from './Sidebar';
import Explorer from './Explorer';
import Search from './Search';
import GitHubStats from './GitHubStats';
import LinkedInStats from './LinkedInStats';
import ContactPanel from './ContactPanel';
import Tabs from './Tabs';
import StatusBar from './StatusBar';
import { useNavigation } from '@/context/NavigationContext';

export default function IDELayout({ children }: { children: React.ReactNode }) {
  const [activeSidebarView, setActiveSidebarView] = useState<'explorer' | 'search' | 'github' | 'linkedin' | 'contact' | null>('explorer');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { zoomLevel, setZoomLevel } = useNavigation();

  useEffect(() => {
    // ... existing useEffect code ...
    const updateZoomLevel = () => {
      const level = Math.round(window.devicePixelRatio * 100);
      setZoomLevel(level);
    };
    updateZoomLevel();
    window.addEventListener('resize', updateZoomLevel);
    const mqString = `(resolution: ${window.devicePixelRatio}dppx)`;
    const mediaQueryList = window.matchMedia(mqString);
    const handleChange = () => updateZoomLevel();
    if (mediaQueryList.addEventListener) mediaQueryList.addEventListener('change', handleChange);
    return () => {
      window.removeEventListener('resize', updateZoomLevel);
      if (mediaQueryList.removeEventListener) mediaQueryList.removeEventListener('change', handleChange);
    };
  }, [setZoomLevel]);

  return (
    <div className="h-screen w-screen overflow-hidden bg-ide-bg">
      <div className="flex flex-col h-full w-full bg-ide-bg text-ide-text overflow-hidden">
        <TitleBar onMenuClick={() => setIsMobileMenuOpen(true)} />
        <div className="flex flex-1 overflow-hidden relative">
          <Sidebar 
            activeView={activeSidebarView} 
            setActiveView={setActiveSidebarView} 
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          />
          <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
            <div className="flex flex-1 overflow-hidden">
              {activeSidebarView === 'explorer' && <Explorer />}
              {activeSidebarView === 'search' && <Search />}
              {activeSidebarView === 'github' && <GitHubStats />}
              {activeSidebarView === 'linkedin' && <LinkedInStats />}
              {activeSidebarView === 'contact' && <ContactPanel />}
              <div className={`flex-col flex-1 min-w-0 bg-ide-bg ${activeSidebarView ? 'hidden md:flex' : 'flex'}`}>
                <Tabs />
                <main className="flex-1 overflow-y-auto p-0 scrollbar-hide relative">
                  {/* Line numbers column could go here if we want to be super detailed, but maybe overkill for the whole page */}
                  <div className="h-full w-full">
                    {children}
                  </div>
                </main>
              </div>
            </div>
            <StatusBar />
          </div>
        </div>
      </div>
    </div>
  );
}
