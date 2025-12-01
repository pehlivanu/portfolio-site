"use client";
import React, { useState, useEffect } from 'react';
import TitleBar from './TitleBar';
import Sidebar from './Sidebar';
import Explorer from './Explorer';
import Search from './Search';
import GitHubStats from './GitHubStats';
import LinkedInStats from './LinkedInStats';
import Tabs from './Tabs';
import StatusBar from './StatusBar';
import { useNavigation } from '@/context/NavigationContext';

export default function IDELayout({ children }: { children: React.ReactNode }) {
  const [activeSidebarView, setActiveSidebarView] = useState<'explorer' | 'search' | 'github' | 'linkedin' | null>('explorer');
  const { zoomLevel, setZoomLevel } = useNavigation();

  useEffect(() => {
    // Function to update zoom level based on devicePixelRatio
    const updateZoomLevel = () => {
      // devicePixelRatio is usually 1.0 for 100%, 1.1 for 110%, etc.
      // We round it to the nearest integer percentage
      const level = Math.round(window.devicePixelRatio * 100);
      setZoomLevel(level);
    };

    // Initial check
    updateZoomLevel();

    // Listen for resize events (which trigger on zoom in most browsers)
    window.addEventListener('resize', updateZoomLevel);
    
    // Also try to listen to matchMedia for pixel density changes if possible
    // This is more robust for some browsers
    const mqString = `(resolution: ${window.devicePixelRatio}dppx)`;
    const mediaQueryList = window.matchMedia(mqString);
    
    const handleChange = () => {
        updateZoomLevel();
    };

    if (mediaQueryList.addEventListener) {
        mediaQueryList.addEventListener('change', handleChange);
    }

    return () => {
      window.removeEventListener('resize', updateZoomLevel);
      if (mediaQueryList.removeEventListener) {
          mediaQueryList.removeEventListener('change', handleChange);
      }
    };
  }, [setZoomLevel]);

  return (
    <div className="h-screen w-screen overflow-hidden bg-ide-bg">
      <div className="flex flex-col h-full w-full bg-ide-bg text-ide-text overflow-hidden">
        <TitleBar />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar activeView={activeSidebarView} setActiveView={setActiveSidebarView} />
          <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
            <div className="flex flex-1 overflow-hidden">
              {activeSidebarView === 'explorer' && <Explorer />}
              {activeSidebarView === 'search' && <Search />}
              {activeSidebarView === 'github' && <GitHubStats />}
              {activeSidebarView === 'linkedin' && <LinkedInStats />}
              <div className="flex flex-col flex-1 min-w-0 bg-ide-bg">
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
