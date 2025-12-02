import React from 'react';
import { render, screen } from '@testing-library/react';
import Highlight from './Highlight';

// Mock the useSearch hook
jest.mock('@/context/SearchContext', () => ({
  useSearch: jest.fn(),
}));

import { useSearch } from '@/context/SearchContext';

describe('Highlight Component', () => {
  it('renders text normally when no search term is present', () => {
    (useSearch as jest.Mock).mockReturnValue({ searchTerm: '' });
    render(<Highlight text="Hello World" />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('highlights the search term when present', () => {
    (useSearch as jest.Mock).mockReturnValue({ searchTerm: 'World' });
    render(<Highlight text="Hello World" />);
    
    // Check if "World" is highlighted (has the accent class)
    const highlightedElement = screen.getByText('World');
    expect(highlightedElement).toHaveClass('text-ide-accent');
    
    // Check if "Hello " is also present (but not highlighted)
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('is case insensitive', () => {
    (useSearch as jest.Mock).mockReturnValue({ searchTerm: 'world' });
    render(<Highlight text="Hello World" />);
    
    const highlightedElement = screen.getByText('World');
    expect(highlightedElement).toHaveClass('text-ide-accent');
  });
});
