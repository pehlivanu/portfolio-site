"use client";

import React, { useState, useEffect } from 'react';
import { Search as SearchIcon, ChevronRight, ChevronDown } from 'lucide-react';
import { useSearch } from '@/context/SearchContext';
import { experience, education, projects } from '@/data/mockData';
import { useNavigation } from '@/context/NavigationContext';

export default function Search() {
  const { searchTerm, setSearchTerm } = useSearch();
  const { scrollToSection } = useNavigation();
  interface SearchResult {
    type: string;
    title: string;
    subtitle: string;
    section: string;
  }

  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (!searchTerm) {
      setResults([]);
      return;
    }

    const term = searchTerm.toLowerCase();
    const newResults: SearchResult[] = [];

    // Search Experience
    experience.forEach(job => {
      if (job.role.toLowerCase().includes(term) || 
          job.company.toLowerCase().includes(term) || 
          job.description.toLowerCase().includes(term) ||
          job.tech.some(t => t.toLowerCase().includes(term))) {
        newResults.push({ type: 'experience', title: job.role, subtitle: job.company, section: 'experience' });
      }
    });

    // Search Projects
    projects.forEach(project => {
      if (project.title.toLowerCase().includes(term) || 
          project.description.toLowerCase().includes(term) ||
          project.tech.some(t => t.toLowerCase().includes(term))) {
        newResults.push({ type: 'project', title: project.title, subtitle: 'Project', section: 'projects' });
      }
    });

    // Search Education
    education.forEach(edu => {
      if (edu.degree.toLowerCase().includes(term) || 
          edu.school.toLowerCase().includes(term) ||
          edu.description?.toLowerCase().includes(term)) {
        newResults.push({ type: 'education', title: edu.degree, subtitle: edu.school, section: 'education' });
      }
    });

    setResults(newResults);
  }, [searchTerm]);

  return (
    <div className="w-full md:w-80 bg-ide-sidebar flex flex-col h-full border-r border-ide-border/30 flex">
      <div className="p-3 text-xs font-bold text-ide-text tracking-wider uppercase">Search</div>
      
      <div className="px-3 mb-4">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search (Ctrl+Shift+F)"
            className="w-full bg-ide-bg border border-ide-border focus:border-ide-accent text-ide-text text-sm px-2 py-1 outline-none placeholder:text-gray-500"
            autoFocus
          />
        </div>
      </div>

      {searchTerm && (
        <div className="flex flex-col overflow-y-auto">
          <div className="px-3 py-1 text-xs font-bold text-ide-text opacity-70 uppercase flex items-center gap-1">
            <ChevronDown size={14} />
            <span>{results.length} results</span>
          </div>
          
          {results.map((result, idx) => (
            <div 
              key={idx}
              className="px-4 py-2 hover:bg-ide-hover-bg cursor-pointer group"
              onClick={() => scrollToSection(result.section as any)}
            >
              <div className="text-sm text-ide-text group-hover:text-ide-text-active font-medium truncate">
                {result.title}
              </div>
              <div className="text-xs text-gray-500 truncate">
                {result.subtitle}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
