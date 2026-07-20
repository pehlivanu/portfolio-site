import React from 'react';
import { render, screen } from '@testing-library/react';
import CVProjects from '../CVProjects';
import { Project } from '@/types/data';

describe('CVProjects Component', () => {
  const mockProjects: Project[] = [
    {
      id: 1,
      title: 'Cool App',
      description: 'A very cool application.',
      tech: ['React', 'Node'],
      githubUrl: 'https://github.com/cool-app',
      deployUrl: 'https://cool-app.com',
    },
  ];

  const mockT = (key: string) => key;

  it('renders correctly', () => {
    render(<CVProjects projects={mockProjects} theme="light" t={mockT} />);

    expect(screen.getByText('projects')).toBeInTheDocument();
    expect(screen.getByText('Cool App')).toBeInTheDocument();
    expect(screen.getByText('A very cool application.')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Node')).toBeInTheDocument();
  });
});
