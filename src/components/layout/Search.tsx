"use client";

import React, { useState, useEffect } from 'react';
import { Search as SearchIcon, ChevronRight, ChevronDown, X } from 'lucide-react';
import { useSearch } from '@/context/SearchContext';
import { useLanguage } from '@/context/LanguageContext';
import { useNavigation } from '@/context/NavigationContext';

export default function Search({ onClose, isMobile }: { onClose?: () => void, isMobile?: boolean }) {
  const { searchTerm, setSearchTerm, activeMatch, setActiveMatch } = useSearch();
  const { scrollToSection } = useNavigation();
  const { data, t } = useLanguage();
  const { experience, education, projects, about } = data;
  interface SearchResult {
    type: string;
    title: string;
    subtitle: string;
    section: string;
    id: string;
  }

  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (!searchTerm) {
      setResults([]);
      setActiveMatch(null); // Clear active match when search is cleared
      return;
    }

    const term = searchTerm.toLowerCase();
    const newResults: SearchResult[] = [];

    // Search Experience
    experience.forEach(job => {
      if (job.role.toLowerCase().includes(term) || 
          job.company.toLowerCase().includes(term) || 
          job.description.toLowerCase().includes(term) ||
          job.tech.some((tGroup: any) => 
            tGroup.category.toLowerCase().includes(term) || 
            tGroup.skills.some((skill: string) => skill.toLowerCase().includes(term))
          )) {
        newResults.push({ 
          type: 'experience', 
          title: job.role, 
          subtitle: job.company, 
          section: 'experience',
          id: `experience-${job.id}`
        });
      }
    });

    // Search Projects
    projects.forEach(project => {
      if (project.title.toLowerCase().includes(term) || 
          project.description.toLowerCase().includes(term) ||
          project.tech.some(t => t.toLowerCase().includes(term))) {
        newResults.push({ 
          type: 'project', 
          title: project.title, 
          subtitle: t('projects'), 
          section: 'projects',
          id: `projects-${project.id}`
        });
      }
    });

    // Search Education
    education.forEach(edu => {
      if (edu.degree.toLowerCase().includes(term) || 
          edu.school.toLowerCase().includes(term) ||
          edu.description?.toLowerCase().includes(term)) {
        newResults.push({ 
          type: 'education', 
          title: edu.degree, 
          subtitle: edu.school, 
          section: 'education',
          id: `education-${edu.id}`
        });
      }
    });

    // Search About
    if (about.name.toLowerCase().includes(term) || 
        about.lastName.toLowerCase().includes(term) || 
        about.description.toLowerCase().includes(term) ||
        about.greeting.toLowerCase().includes(term)) {
      newResults.push({
        type: 'about',
        title: t('about'),
        subtitle: about.description.substring(0, 30) + '...',
        section: 'about',
        id: 'about'
      });
    }

    // Search Contact
    const contactText = t('contactIntro');
    if (contactText.toLowerCase().includes(term)) {
      newResults.push({
        type: 'contact',
        title: t('contact'),
        subtitle: t('getInTouch'),
        section: 'contact',
        id: 'contact'
      });
    }

    setResults(newResults);
  }, [searchTerm, setActiveMatch, experience, education, projects, about, t]);

  const handleClose = () => {
    setActiveMatch(null);
    if (onClose) onClose();
  };

  const handleResultClick = (result: SearchResult) => {
    setActiveMatch({ section: result.section, id: result.id });
    scrollToSection(result.section as any, result.id);
    if (isMobile && onClose) {
      onClose();
    }
  };

  // Helper to highlight text
  const HighlightMatch = ({ text, term }: { text: string, term: string }) => {
    if (!term.trim()) return <>{text}</>;
    
    // Create a regex to split by the term, capturing it to preserve case
    const parts = text.split(new RegExp(`(${term})`, 'gi'));
    
    return (
      <>
        {parts.map((part, i) => (
          part.toLowerCase() === term.toLowerCase() ? (
            <span key={i} className="bg-ide-accent/20 text-ide-accent font-semibold px-0.5 rounded-sm">
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        ))}
      </>
    );
  };

  return (
    <div className="w-full md:w-80 bg-ide-sidebar flex flex-col h-full border-r border-ide-border/30 flex">
      <div className="p-3 text-xs font-bold text-ide-text tracking-wider uppercase flex justify-between items-center">
        <span>{t('search')}</span>
        <button onClick={handleClose} className="md:hidden text-ide-text hover:text-ide-text-active">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
        </button>
      </div>
      
      <div className="px-3 mb-4">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={t('searchPlaceholder')}
            className="w-full bg-ide-bg border border-ide-border focus:border-ide-accent text-ide-text text-sm px-2 py-1 pr-8 outline-none placeholder:text-gray-500"
            autoFocus
          />
          {searchTerm && (
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveMatch(null); 
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-ide-text transition-colors"
              title={t('clearSearch')}
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {searchTerm && (
        <div className="flex flex-col overflow-y-auto">
          <div className="px-3 py-1 text-xs font-bold text-ide-text opacity-70 uppercase flex items-center gap-1">
            <ChevronDown size={14} />
            <span>{results.length} {t('results')}</span>
          </div>
          
          {results.map((result, idx) => (
            <div 
              key={idx}
              className="px-4 py-2 hover:bg-ide-hover-bg cursor-pointer group"
              onClick={() => handleResultClick(result)}
            >
              <div className="text-sm text-ide-text group-hover:text-ide-text-active font-medium truncate">
                <HighlightMatch text={result.title} term={searchTerm} />
              </div>
              <div className="text-xs text-gray-500 truncate">
                <HighlightMatch text={result.subtitle} term={searchTerm} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
