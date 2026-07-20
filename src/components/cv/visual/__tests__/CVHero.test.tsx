import React from 'react';
import { render, screen } from '@testing-library/react';
import CVHero from '../CVHero';
import { LinkedInProfile, AboutData } from '@/types/data';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (
    props: React.ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean; priority?: boolean }
  ) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { fill, priority, ...rest } = props;
    return <img {...rest} />;
  },
}));

describe('CVHero Component', () => {
  const mockLinkedInProfile: LinkedInProfile = {
    name: 'John Doe',
    headline: 'Senior Developer | Tech Lead',
    location: 'Berlin, Germany',
    phone: '+49 123 456',
    address: 'Alexanderplatz 1, Berlin',
    email: 'john.doe@example.com',
    connections: '500+',
    about: 'Short about text for testing.',
    fullBio: 'Full bio for testing.',
    avatarUrl: '/avatar.jpg',
    skills: [],
    certifications: [],
    languages: [],
  };

  const mockAbout: AboutData = {
    greeting: 'Hello',
    name: 'John',
    suffix: '',
    lastName: 'Doe',
    description: 'Detailed description with **Markdown**',
    fullBio: 'Full bio',
    ctaPrimary: 'Primary',
    ctaSecondary: 'Secondary',
  };

  it('renders correctly with detailed level', () => {
    render(
      <CVHero
        linkedInProfile={mockLinkedInProfile}
        about={mockAbout}
        theme="light"
        detailLevel="detailed"
      />
    );

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText(/Senior Developer/i)).toBeInTheDocument();
    expect(screen.getByText(/Tech Lead/i)).toBeInTheDocument();
    expect(screen.getByText(/Detailed description with \*\*Markdown\*\*/i)).toBeInTheDocument();
    expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
  });

  it('renders correctly with summary level', () => {
    render(
      <CVHero
        linkedInProfile={mockLinkedInProfile}
        about={mockAbout}
        theme="ide"
        detailLevel="summary"
      />
    );

    expect(screen.getByText('Short about text for testing.')).toBeInTheDocument();
    expect(screen.getByText('+49 123 456')).toBeInTheDocument();
  });
});
