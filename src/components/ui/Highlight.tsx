"use client";

import React from 'react';
import { useSearch } from '@/context/SearchContext';

interface HighlightProps {
  text: string;
  className?: string;
}

export default function Highlight({ text, className = '' }: HighlightProps) {
  const { searchTerm } = useSearch();

  if (!searchTerm || !text) {
    return <span className={className}>{text}</span>;
  }

  const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));

  return (
    <span className={className}>
      {parts.map((part, i) => 
        part.toLowerCase() === searchTerm.toLowerCase() ? (
          <span key={i} className="text-ide-accent font-bold drop-shadow-[0_4px_3px_rgba(0,122,204,0.5)]">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </span>
  );
}
