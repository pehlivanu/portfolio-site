'use client';

import React, { useEffect } from 'react';
import { LuChevronDown, LuX } from 'react-icons/lu';
import { useSearch } from '@/context/SearchContext';
import { useLanguage } from '@/context/LanguageContext';
import { useNavigation } from '@/context/NavigationContext';

export default function Search({
  onClose,
  isMobile,
}: {
  onClose?: () => void;
  isMobile?: boolean;
}) {
  const { searchTerm, setSearchTerm, setActiveMatch } = useSearch();
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

  const results = React.useMemo(() => {
    if (!searchTerm) {
      return [];
    }

    const term = searchTerm.toLowerCase();
    const newResults: SearchResult[] = [];

    // Search Experience
    experience.forEach((job) => {
      if (
        job.role.toLowerCase().includes(term) ||
        job.company.toLowerCase().includes(term) ||
        job.description.toLowerCase().includes(term) ||
        job.tech.some(
          (tGroup: { category: string; skills: string[] }) =>
            tGroup.category.toLowerCase().includes(term) ||
            tGroup.skills.some((skill: string) => skill.toLowerCase().includes(term))
        )
      ) {
        newResults.push({
          type: 'experience',
          title: job.role,
          subtitle: job.company,
          section: 'experience',
          id: `experience-${job.id}`,
        });
      }
    });

    // Search Projects
    projects.forEach((project) => {
      if (
        project.title.toLowerCase().includes(term) ||
        project.description.toLowerCase().includes(term) ||
        project.tech.some((t: string) => t.toLowerCase().includes(term))
      ) {
        newResults.push({
          type: 'project',
          title: project.title,
          subtitle: t('projects'),
          section: 'projects',
          id: `projects-${project.id}`,
        });
      }
    });

    // Search Education
    education.forEach((edu) => {
      if (
        edu.degree.toLowerCase().includes(term) ||
        edu.school.toLowerCase().includes(term) ||
        edu.description?.toLowerCase().includes(term)
      ) {
        newResults.push({
          type: 'education',
          title: edu.degree,
          subtitle: edu.school,
          section: 'education',
          id: `education-${edu.id}`,
        });
      }
    });

    // Search About
    if (
      about.name.toLowerCase().includes(term) ||
      about.lastName.toLowerCase().includes(term) ||
      about.description.toLowerCase().includes(term) ||
      about.greeting.toLowerCase().includes(term)
    ) {
      newResults.push({
        type: 'about',
        title: t('about'),
        subtitle: about.description.substring(0, 30) + '...',
        section: 'about',
        id: 'about',
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
        id: 'contact',
      });
    }

    return newResults;
  }, [searchTerm, experience, education, projects, about, t]);

  useEffect(() => {
    if (!searchTerm) {
      setActiveMatch(null);
    }
  }, [searchTerm, setActiveMatch]);

  const handleClose = () => {
    setActiveMatch(null);
    if (onClose) onClose();
  };

  const handleResultClick = (result: SearchResult) => {
    setActiveMatch({ section: result.section, id: result.id });
    scrollToSection(
      result.section as 'experience' | 'projects' | 'education' | 'contact' | 'about',
      result.id
    );
    if (isMobile && onClose) {
      onClose();
    }
  };

  // Helper to highlight text
  const HighlightMatch = ({ text, term }: { text: string; term: string }) => {
    if (!term.trim()) return <>{text}</>;

    // Create a regex to split by the term, capturing it to preserve case
    const parts = text.split(new RegExp(`(${term})`, 'gi'));

    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === term.toLowerCase() ? (
            <span
              key={i}
              className="bg-ide-accent/20 text-ide-accent rounded-sm px-0.5 font-semibold"
            >
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </>
    );
  };

  return (
    <div className="bg-ide-sidebar border-ide-border/30 flex h-full w-full flex-col border-r md:w-80">
      <div className="text-ide-text flex items-center justify-between p-3 text-xs font-bold tracking-wider uppercase">
        <span>{t('search')}</span>
        <button
          onClick={handleClose}
          className="text-ide-text hover:text-ide-text-active md:hidden"
        >
          <svg
            role="img"
            aria-label="Close Search"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <title>Close Search</title>
            <line x1="18" x2="6" y1="6" y2="18" />
            <line x1="6" x2="18" y1="6" y2="18" />
          </svg>
        </button>
      </div>

      <div className="mb-4 px-3">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={t('searchPlaceholder')}
            className="bg-ide-bg border-ide-border focus:border-ide-accent text-ide-text w-full border px-2 py-1 pr-8 text-sm outline-none placeholder:text-gray-500"
            autoFocus
          />
          {searchTerm && (
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveMatch(null);
              }}
              className="hover:text-ide-text absolute top-1/2 right-2 -translate-y-1/2 text-gray-500 transition-colors"
              title={t('clearSearch')}
            >
              <LuX size={14} />
            </button>
          )}
        </div>
      </div>

      {searchTerm && (
        <div className="flex flex-col overflow-y-auto">
          <div className="text-ide-text flex items-center gap-1 px-3 py-1 text-xs font-bold uppercase opacity-70">
            <LuChevronDown size={14} />
            <span>
              {results.length} {t('results')}
            </span>
          </div>

          {results.map((result, idx) => (
            <div
              key={idx}
              className="hover:bg-ide-hover-bg group cursor-pointer px-4 py-2"
              onClick={() => handleResultClick(result)}
            >
              <div className="text-ide-text group-hover:text-ide-text-active truncate text-sm font-medium">
                <HighlightMatch text={result.title} term={searchTerm} />
              </div>
              <div className="truncate text-xs text-gray-500">
                <HighlightMatch text={result.subtitle} term={searchTerm} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
