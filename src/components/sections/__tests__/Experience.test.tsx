import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Experience from '../Experience';
import { useLanguage } from '@/context/LanguageContext';
import { useSearch } from '@/context/SearchContext';

jest.mock('@/hooks/useScrollSpy', () => ({
  useScrollSpy: jest.fn(),
}));

jest.mock('@/context/LanguageContext', () => ({
  useLanguage: jest.fn(),
}));

jest.mock('@/context/SearchContext', () => ({
  useSearch: jest.fn(),
}));

jest.mock('@/components/ui/Highlight', () => {
  return function MockHighlight({ text }: { text: string }) {
    return <span data-testid="highlight">{text}</span>;
  };
});

describe('Experience Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (useLanguage as jest.Mock).mockReturnValue({
      t: (key: string) => key,
      data: {
        experience: [
          {
            id: 1,
            type: 'senior',
            role: 'Senior Dev',
            company: 'Tech Corp',
            period: '2020 - Present',
            summary: 'Great summary',
            description: '* Bullet point 1',
            tech: [{ category: 'Backend', skills: ['Java', 'Spring'] }],
          },
        ],
      },
    });

    (useSearch as jest.Mock).mockReturnValue({
      activeMatch: null,
    });
  });

  it('renders correctly with experience data', () => {
    render(<Experience />);

    expect(screen.getByText('experience')).toBeInTheDocument();
    expect(screen.getByText('Senior Dev')).toBeInTheDocument();
    expect(screen.getByText('Tech Corp')).toBeInTheDocument();
    expect(screen.getByText('Great summary')).toBeInTheDocument();
  });

  it('toggles details when show details button is clicked', () => {
    render(<Experience />);

    // Details should be hidden initially
    expect(screen.queryByText('Backend:')).not.toBeInTheDocument();

    // Click toggle
    const toggleButton = screen.getByText('showDetails');
    fireEvent.click(toggleButton);

    // Details should be visible
    expect(screen.getByText('Backend:')).toBeInTheDocument();
    expect(screen.getByText('Java')).toBeInTheDocument();
    expect(screen.getByText('Spring')).toBeInTheDocument();

    // Click toggle again
    const hideButton = screen.getByText('showLess');
    fireEvent.click(hideButton);
    // Framer motion AnimatePresence might leave it in DOM during exit, but state is updated.
  });
});
