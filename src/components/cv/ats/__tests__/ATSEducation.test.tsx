import React from 'react';
import { render, screen } from '@testing-library/react';
import ATSEducation from '../ATSEducation';
import { Education } from '@/types/data';

describe('ATSEducation Component', () => {
  const mockEducation: Education[] = [
    {
      id: 1,
      type: 'master',
      studyField: 'Data Science',
      degree: 'MSc',
      school: 'Data University',
      location: 'City',
      url: 'https://data.univ.edu',
      year: '2018 - 2020',
      description: 'Studied ML and Big Data.',
      grade: 'Distinction',
    },
  ];

  const mockT = (key: string) => key;

  it('renders correctly in detailed mode', () => {
    render(<ATSEducation education={mockEducation} detailLevel="detailed" t={mockT} />);

    expect(screen.getByText('cvEducation')).toBeInTheDocument();
    expect(screen.getByText('Data Science')).toBeInTheDocument();
    expect(screen.getByText('Data University')).toBeInTheDocument();
    expect(screen.getByText('2018 - 2020')).toBeInTheDocument();
    expect(screen.getByText(/Studied ML and Big Data/)).toBeInTheDocument();
    expect(screen.getByText(/Distinction/)).toBeInTheDocument();
  });

  it('hides description and grade in summary mode', () => {
    render(<ATSEducation education={mockEducation} detailLevel="summary" t={mockT} />);

    expect(screen.getByText('Data Science')).toBeInTheDocument();
    expect(screen.queryByText(/Studied ML and Big Data/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Distinction/)).not.toBeInTheDocument();
  });
});
