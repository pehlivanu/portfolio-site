import React from 'react';
import { render, screen } from '@testing-library/react';
import Projects from '../Projects';
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

describe('Projects Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (useLanguage as jest.Mock).mockReturnValue({
      t: (key: string) => key,
      data: {
        projects: [
          {
            id: 1,
            title: 'Project One',
            description: 'First project description',
            tech: ['React', 'Next.js'],
            githubUrl: 'https://github.com/one',
            deployUrl: 'https://one.com',
          },
          {
            id: 2,
            title: 'Project Two',
            description: 'Second project description',
            tech: ['Java', 'Spring Boot'],
            githubUrl: '',
            deployUrl: '',
          },
        ],
      },
    });

    (useSearch as jest.Mock).mockReturnValue({
      activeMatch: null,
    });
  });

  it('renders correctly with projects data', () => {
    render(<Projects />);

    // Title
    expect(screen.getByText('projects')).toBeInTheDocument();

    // Project One
    expect(screen.getByText('Project One')).toBeInTheDocument();
    expect(screen.getByText('First project description')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();

    // Project Two
    expect(screen.getByText('Project Two')).toBeInTheDocument();
    expect(screen.getByText('Second project description')).toBeInTheDocument();
    expect(screen.getByText('Java')).toBeInTheDocument();
  });

  it('renders github and deploy links if provided', () => {
    render(<Projects />);

    const links = screen.getAllByRole('link');
    // 2 links for Project One (GitHub, Deploy)
    expect(links).toHaveLength(2);
    expect(links[0]).toHaveAttribute('href', 'https://github.com/one');
    expect(links[1]).toHaveAttribute('href', 'https://one.com');
  });

  it('applies active styles when a project is the active search match', () => {
    (useSearch as jest.Mock).mockReturnValue({
      activeMatch: { id: 'projects-1' },
    });

    const { container } = render(<Projects />);
    const activeProject = container.querySelector('#projects-1');
    expect(activeProject).toHaveClass('bg-orange-500/10');
  });
});
