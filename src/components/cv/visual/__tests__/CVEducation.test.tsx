import React from 'react';
import { render, screen } from '@testing-library/react';
import CVEducation from '../CVEducation';
import { Education } from '@/types/data';

describe('CVEducation Component', () => {
  const mockEducation: Education[] = [
    {
      id: 1,
      type: 'bachelor',
      studyField: 'Computer Science',
      degree: 'BSc',
      school: 'Tech University',
      location: 'City',
      year: '2016 - 2020',
      description: 'Studied algorithms.',
      grade: 'A',
    },
  ];

  const mockT = (key: string) => key;

  it('renders correctly in detailed mode', () => {
    render(
      <CVEducation education={mockEducation} theme="light" detailLevel="detailed" t={mockT} />
    );

    expect(screen.getByText('education')).toBeInTheDocument();
    expect(screen.getByText('Computer Science')).toBeInTheDocument();
    expect(screen.getByText('Tech University')).toBeInTheDocument();
    expect(screen.getByText('2016 - 2020')).toBeInTheDocument();
    expect(screen.getByText(/Studied algorithms/i)).toBeInTheDocument();
  });

  it('hides description and grade in summary mode', () => {
    render(<CVEducation education={mockEducation} theme="ide" detailLevel="summary" t={mockT} />);

    expect(screen.getByText('Computer Science')).toBeInTheDocument();
    expect(screen.queryByText(/Studied algorithms/i)).not.toBeInTheDocument();
  });
});
