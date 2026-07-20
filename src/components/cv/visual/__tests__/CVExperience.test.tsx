import React from 'react';
import { render, screen } from '@testing-library/react';
import CVExperience from '../CVExperience';
import { Experience } from '@/types/data';

describe('CVExperience Component', () => {
  const mockExperience: Experience[] = [
    {
      id: 1,
      type: 'senior',
      role: 'Senior Developer',
      company: 'Tech Corp',
      period: '2020 - Present',
      summary: 'Led frontend team.',
      description: 'Worked on React applications.',
      tech: [{ category: 'Frontend', skills: ['React', 'TypeScript'] }],
    },
  ];

  const mockT = (key: string) => key;

  it('renders correctly', () => {
    render(
      <CVExperience experience={mockExperience} theme="light" detailLevel="detailed" t={mockT} />
    );

    expect(screen.getByText('experience')).toBeInTheDocument();
    expect(screen.getByText('Senior Developer')).toBeInTheDocument();
    expect(screen.getByText('Tech Corp')).toBeInTheDocument();
    expect(screen.getByText('2020 - Present')).toBeInTheDocument();
    expect(screen.getByText('Led frontend team.')).toBeInTheDocument();
    expect(screen.getByText('Worked on React applications.')).toBeInTheDocument();
  });

  it('hides description and tech in summary mode', () => {
    render(
      <CVExperience experience={mockExperience} theme="ide" detailLevel="summary" t={mockT} />
    );

    expect(screen.getByText('Senior Developer')).toBeInTheDocument();
    expect(screen.getByText('Led frontend team.')).toBeInTheDocument();
    expect(screen.queryByText('Worked on React applications.')).not.toBeInTheDocument();
    expect(screen.queryByText('Frontend:')).not.toBeInTheDocument();
  });
});
