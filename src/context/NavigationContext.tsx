"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Section = 'about' | 'experience' | 'education' | 'projects' | 'contact';

interface NavigationContextType {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
  scrollToSection: (section: Section, itemId?: string) => void;
  isContactVisible: boolean;
  setContactVisible: (visible: boolean) => void;
  contactStatus: 'pending' | 'sent';
  setContactStatus: (status: 'pending' | 'sent') => void;
  zoomLevel: number;
  setZoomLevel: (level: number) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<Section>('about');
  const [isContactVisible, setContactVisible] = useState(false);
  const [contactStatus, setContactStatus] = useState<'pending' | 'sent'>('pending');
  const [zoomLevel, setZoomLevel] = useState(100);

  const scrollToSection = (section: Section, itemId?: string) => {
    if (section === 'contact') {
      setContactVisible(true);
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
    <NavigationContext.Provider value={{ activeSection, setActiveSection, scrollToSection, isContactVisible, setContactVisible, contactStatus, setContactStatus, zoomLevel, setZoomLevel }}>
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
