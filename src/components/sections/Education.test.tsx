import React from 'react';
import { render, screen } from '@testing-library/react';
import Education from './Education';
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

describe('Education Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (useLanguage as jest.Mock).mockReturnValue({
      t: (key: string) => key,
      data: {
        education: [
          {
            id: 1,
            type: 'bachelor',
            studyField: 'Computer Science',
            degree: 'BSc',
            school: 'University',
            url: 'http://univ.edu',
            location: 'City',
            year: '2010 - 2014',
            summary: 'Good summary',
            description: 'Good description',
            grade: 'A',
          },
        ],
      },
    });

    (useSearch as jest.Mock).mockReturnValue({
      activeMatch: null,
    });
  });

  it('renders correctly with education data', () => {
    render(<Education />);
    
    expect(screen.getByText('education')).toBeInTheDocument();
    expect(screen.getByText('Computer Science')).toBeInTheDocument();
    expect(screen.getByText('University')).toBeInTheDocument();
    expect(screen.getByText('Good summary')).toBeInTheDocument();
  });
});
