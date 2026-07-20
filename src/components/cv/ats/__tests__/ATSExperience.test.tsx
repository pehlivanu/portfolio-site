import React from 'react';
import { render, screen } from '@testing-library/react';
import ATSExperience from '../ATSExperience';
import { Experience } from '@/types/data';

describe('ATSExperience Component', () => {
  const mockExperience: Experience[] = [
    {
      id: 1,
      type: 'senior',
      role: 'DevOps Engineer',
      company: 'Cloud Inc',
      period: '2021 - Present',
      summary: 'Managed cloud infra.',
      description: 'Used AWS and Terraform.',
      tech: [{ category: 'DevOps', skills: ['AWS', 'Docker'] }],
    },
  ];

  const mockT = (key: string) => key;

  it('renders correctly in detailed mode', () => {
    render(<ATSExperience experience={mockExperience} detailLevel="detailed" t={mockT} />);

    expect(screen.getByText('cvProfessionalExperience')).toBeInTheDocument();
    expect(screen.getByText('DevOps Engineer')).toBeInTheDocument();
    expect(screen.getByText('Cloud Inc')).toBeInTheDocument();
    expect(screen.getByText('2021 - Present')).toBeInTheDocument();
    expect(screen.getByText('Managed cloud infra.')).toBeInTheDocument();
    expect(screen.getByText('Used AWS and Terraform.')).toBeInTheDocument();
    expect(screen.getByText('techLabel')).toBeInTheDocument();
  });

  it('hides description and tech in summary mode', () => {
    render(<ATSExperience experience={mockExperience} detailLevel="summary" t={mockT} />);

    expect(screen.getByText('DevOps Engineer')).toBeInTheDocument();
    expect(screen.getByText('Cloud Inc')).toBeInTheDocument();
    expect(screen.getByText('Managed cloud infra.')).toBeInTheDocument();
    expect(screen.queryByText('Used AWS and Terraform.')).not.toBeInTheDocument();
    expect(screen.queryByText('DevOps:')).not.toBeInTheDocument();
  });
});
