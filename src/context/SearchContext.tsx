'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

import { SearchContextType } from '@/types/context';

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeMatch, setActiveMatch] = useState<{ section: string; id: string } | null>(null);

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, activeMatch, setActiveMatch }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}
