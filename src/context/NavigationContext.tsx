"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Section = 'hero' | 'experience' | 'education' | 'projects' | 'contact';

interface NavigationContextType {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
  scrollToSection: (section: Section) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<Section>('hero');

  const scrollToSection = (section: Section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <NavigationContext.Provider value={{ activeSection, setActiveSection, scrollToSection }}>
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
