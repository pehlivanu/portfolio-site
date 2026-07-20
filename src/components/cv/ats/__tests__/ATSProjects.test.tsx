import React from 'react';
import { render, screen } from '@testing-library/react';
import ATSProjects from '../ATSProjects';
import { Project } from '@/types/data';

describe('ATSProjects Component', () => {
  const mockProjects: Project[] = [
    {
      id: 1,
      title: 'Data Visualizer',
      description: 'Tool for visualizing data.',
      tech: ['Python', 'D3.js'],
    },
  ];

  const mockT = (key: string) => key;

  it('renders correctly', () => {
    render(<ATSProjects projects={mockProjects} t={mockT} />);

    expect(screen.getByText('projects')).toBeInTheDocument();
    expect(screen.getByText('Data Visualizer')).toBeInTheDocument();
    expect(screen.getByText('Tool for visualizing data.')).toBeInTheDocument();
    expect(screen.getByText('Python, D3.js')).toBeInTheDocument();
  });
});
