"use client";

import React, { useState } from 'react';
import TitleBar from './TitleBar';
import Sidebar from './Sidebar';
import Explorer from './Explorer';
import Search from './Search';
import Tabs from './Tabs';

export default function IDELayout({ children }: { children: React.ReactNode }) {
  const [activeSidebarView, setActiveSidebarView] = useState<'explorer' | 'search' | null>('explorer');

  return (
    <div className="flex flex-col h-screen w-full bg-ide-bg text-ide-text overflow-hidden">
      <TitleBar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeView={activeSidebarView} setActiveView={setActiveSidebarView} />
        {activeSidebarView === 'explorer' && <Explorer />}
        {activeSidebarView === 'search' && <Search />}
        <div className="flex flex-col flex-1 min-w-0 bg-ide-bg">
          <Tabs />
          <main className="flex-1 overflow-y-auto p-0 scrollbar-hide relative">
            {/* Line numbers column could go here if we want to be super detailed, but maybe overkill for the whole page */}
            <div className="h-full w-full">
               {children}
            </div>
          </main>
          {/* Status Bar */}
          <div className="h-6 bg-ide-status-bar flex items-center justify-between px-3 text-xs text-white select-none">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <span>main*</span>
              </div>
              <div className="flex items-center gap-1">
                <span>0 errors</span>
                <span>0 warnings</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span>Ln 1, Col 1</span>
              <span>UTF-8</span>
              <span>TypeScript React</span>
              <span>Prettier</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
