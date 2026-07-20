'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

import { Section, NavigationContextType } from '@/types/context';

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<Section>('about');
  const [activeRightPanel, setActiveRightPanel] = useState<'contact' | 'bio' | null>(null);
  const [contactStatus, setContactStatus] = useState<'pending' | 'sent'>('pending');
  const [zoomLevel, setZoomLevel] = useState(100);

  const openRightPanel = (view: 'contact' | 'bio') => setActiveRightPanel(view);
  const closeRightPanel = () => setActiveRightPanel(null);

  const scrollToSection = (section: Section, itemId?: string) => {
    if (section === 'contact') {
      openRightPanel('contact');
      // Small delay to allow render before scrolling
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      setActiveSection(section);
      // Small delay to ensure section is active/rendered
      setTimeout(() => {
        if (itemId) {
          const element = document.getElementById(itemId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return;
          }
        }

        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <NavigationContext.Provider
      value={{
        activeSection,
        setActiveSection,
        scrollToSection,
        activeRightPanel,
        openRightPanel,
        closeRightPanel,
        contactStatus,
        setContactStatus,
        zoomLevel,
        setZoomLevel,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
