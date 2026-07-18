/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { useLanguage } from '@/context/LanguageContext';
import ReactMarkdown from 'react-markdown';
import Highlight from '@/components/ui/Highlight';
import CVConfigPanel from '@/components/layout/CVConfigPanel';

export default function IDELayout({ children }: { children: React.ReactNode }) {
  const [activeSidebarView, setActiveSidebarView] = useState<'explorer' | 'search' | 'github' | 'linkedin' | 'contact' | 'cv-config' | null>('explorer');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setZoomLevel, activeRightPanel, closeRightPanel } = useNavigation();
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

  useEffect(() => {
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
      <div className="flex flex-col h-full w-full bg-ide-bg text-ide-text overflow-hidden relative">
        
        {/* Mobile Floating Menu Button - Only show when no sidebar view is active */}
        {!activeSidebarView && (
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden fixed top-4 left-4 z-50 p-2 bg-ide-activity-bar rounded-md shadow-lg border border-ide-border text-ide-text hover:text-ide-text-active"
            aria-label="Toggle Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        )}

        {/* TitleBar - Hidden on Mobile */}
        <div className="hidden md:block">
          <TitleBar onMenuClick={() => setIsMobileMenuOpen(true)} />
        </div>

        <div className="flex flex-1 overflow-hidden relative">
          <Sidebar 
            activeView={activeSidebarView} 
            setActiveView={setActiveSidebarView} 
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Main Content Area */}
          <div className="flex flex-col flex-1 min-w-0 overflow-hidden transition-all duration-300 ease-in-out">
            <div className="flex flex-1 overflow-hidden">
              {activeSidebarView === 'explorer' && <Explorer onClose={() => setActiveSidebarView(null)} isMobile={isMobile} />}
              {activeSidebarView === 'search' && <Search onClose={() => setActiveSidebarView(null)} isMobile={isMobile} />}
              {activeSidebarView === 'github' && <GitHubStats onClose={() => setActiveSidebarView(null)} />}
              {activeSidebarView === 'linkedin' && <LinkedInStats onClose={() => setActiveSidebarView(null)} />}
              {activeSidebarView === 'cv-config' && <CVConfigPanel onClose={() => setActiveSidebarView(null)} />}
              {/* ContactPanel removed from left sidebar views */}
              
              <div className={`flex-col flex-1 min-w-0 bg-ide-bg ${activeSidebarView ? 'hidden md:flex' : 'flex'}`}>
                
                    <>
                        <Tabs />
                        <main className="flex-1 overflow-y-auto p-0 scrollbar-hide relative">
                        <div className="h-full w-full">
                            {children}
                        </div>
                        </main>
                    </>
              </div>

              {/* Right Sidebar (Generic: Contact Me / Bio) */}
              <div 
                className={`
                  fixed inset-y-0 right-0 z-40 bg-ide-sidebar border-l border-ide-border shadow-xl 
                  transition-all duration-300 ease-in-out transform
                  ${activeRightPanel ? 'translate-x-0' : 'translate-x-full'}
                  md:relative md:translate-x-0 md:shadow-none md:inset-auto
                  ${activeRightPanel ? 'w-full md:w-[450px]' : 'w-0 border-none'}
                `}
              >
                <div className="h-full w-full overflow-hidden flex flex-col">
                   {activeRightPanel && (
                     <>
                       {/* Header - Height 36px (h-9) to match Tabs and Left Sidebar Header */}
                       <div className="h-9 flex items-center justify-between px-3 bg-ide-sidebar border-b border-ide-border/30">
                          <span className="text-xs font-bold text-ide-text tracking-wider uppercase">
                            {activeRightPanel === 'contact' ? t('contactMe') : t('biography')}
                          </span>
                          <button 
                            onClick={closeRightPanel}
                            className="text-ide-text hover:text-ide-text-active p-1 hover:bg-ide-activity-bar rounded"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
                          </button>
                       </div>
                       
                       <div className="flex-1 overflow-y-auto bg-ide-sidebar">
                         {activeRightPanel === 'contact' ? (
                           <ContactPanel />
                         ) : (
                           <div className="p-6 prose prose-invert max-w-none text-sm">
                              <BioPanel />
                           </div>
                         )}
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

function BioPanel() {
  const { data } = useLanguage();
  const { linkedInProfile } = data;

  return (
    <ReactMarkdown
        components={{
            h3: ({children, node: _node, ...props}) => (
                <h3 className="text-lg font-bold text-ide-text-active mt-8 mb-6 leading-relaxed" {...props}>
                    {React.Children.map(children, child => typeof child === 'string' ? <Highlight text={child} /> : child)}
                </h3>
            ),
            p: ({children, node: _node, ...props}) => (
                <p className="text-ide-text mb-4 leading-relaxed" {...props}>
                    {React.Children.map(children, child => typeof child === 'string' ? <Highlight text={child} /> : child)}
                </p>
            ),
            ul: ({node: _node, ...props}) => <ul className="list-disc pl-5 mb-4 text-ide-text space-y-2" {...props} />,
            li: ({children, node: _node, ...props}) => (
                <li className="pl-1 leading-relaxed" {...props}>
                    {React.Children.map(children, child => typeof child === 'string' ? <Highlight text={child} /> : child)}
                </li>
            ),
            strong: ({children, node: _node, ...props}) => (
                <strong className="text-ide-text-active font-semibold" {...props}>
                    {React.Children.map(children, child => typeof child === 'string' ? <Highlight text={child} /> : child)}
                </strong>
            ),
            hr: ({node: _node, ...props}) => <hr className="border-ide-border my-8" {...props} />,
            em: ({children, node: _node, ...props}) => (
                <em className="text-ide-text opacity-90 italic block mt-4" {...props}>
                    {React.Children.map(children, child => typeof child === 'string' ? <Highlight text={child} /> : child)}
                </em>
            ),
        }}
    >
        {linkedInProfile.fullBio}
    </ReactMarkdown>
  );
}
