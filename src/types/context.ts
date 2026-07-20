import type * as enData from '@/data/locales/en';

export type Section = 'about' | 'experience' | 'education' | 'projects' | 'contact';

export interface NavigationContextType {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
  scrollToSection: (section: Section, itemId?: string) => void;
  activeRightPanel: 'contact' | 'bio' | null;
  openRightPanel: (view: 'contact' | 'bio') => void;
  closeRightPanel: () => void;
  contactStatus: 'pending' | 'sent';
  setContactStatus: (status: 'pending' | 'sent') => void;
  zoomLevel: number;
  setZoomLevel: (level: number) => void;
}

export type Language = 'en' | 'de' | 'ro' | 'fr';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  data: typeof enData;
  t: (key: string) => string;
}

export type Theme = 'dark' | 'light';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export interface SearchContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  activeMatch: { section: string; id: string } | null;
  setActiveMatch: (match: { section: string; id: string } | null) => void;
}
