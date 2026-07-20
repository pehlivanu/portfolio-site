import React from 'react';
import { render, screen } from '@testing-library/react';
import ATSHeader from '../ATSHeader';
import { LinkedInProfile } from '@/types/data';

describe('ATSHeader Component', () => {
  const mockLinkedInProfile: LinkedInProfile = {
    name: 'Jane Doe',
    headline: 'Backend Engineer | Tech Enthusiast',
    location: 'Munich, Germany',
    phone: '+49 987 654',
    address: '123 Fake St',
    email: 'jane.doe@example.com',
    connections: '100+',
    about: 'Backend dev.',
    fullBio: 'Full bio.',
    avatarUrl: '/avatar.jpg',
    skills: [],
    certifications: [],
    languages: [],
  };

  const mockT = (key: string) => key;

  const mockAbout = {
    greeting: 'Hello',
    name: 'Jane',
    suffix: '',
    lastName: 'Doe',
    description: 'Detailed description.',
    fullBio: 'Full bio.',
    ctaPrimary: 'Primary',
    ctaSecondary: 'Secondary',
  };

  it('renders correctly', () => {
    render(
      <ATSHeader
        linkedInProfile={mockLinkedInProfile}
        about={mockAbout}
        detailLevel="detailed"
        t={mockT}
      />
    );

    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    expect(screen.getByText(/Backend Engineer/i)).toBeInTheDocument();
    expect(screen.getByText(/Tech Enthusiast/i)).toBeInTheDocument();
    expect(screen.getByText(/jane\.doe@example\.com/)).toBeInTheDocument();
    expect(screen.getByText(/\+49 987 654/)).toBeInTheDocument();
  });
});
