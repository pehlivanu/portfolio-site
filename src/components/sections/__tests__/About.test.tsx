import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import About from '../About';
import { useNavigation } from '@/context/NavigationContext';
import { useLanguage } from '@/context/LanguageContext';

// Mock hooks
jest.mock('@/hooks/useScrollSpy', () => ({
  useScrollSpy: jest.fn(),
}));

jest.mock('@/context/NavigationContext', () => ({
  useNavigation: jest.fn(),
}));

jest.mock('@/context/LanguageContext', () => ({
  useLanguage: jest.fn(),
}));

jest.mock('@/components/ui/Highlight', () => {
  return function MockHighlight({ text }: { text: string }) {
    return <span data-testid="highlight">{text}</span>;
  };
});

describe('About Component', () => {
  const mockOpenRightPanel = jest.fn();
  const mockScrollToSection = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    (useNavigation as jest.Mock).mockReturnValue({
      openRightPanel: mockOpenRightPanel,
      scrollToSection: mockScrollToSection,
    });

    (useLanguage as jest.Mock).mockReturnValue({
      t: (key: string) => key,
      data: {
        about: {
          greeting: 'Hello',
          name: 'John',
          suffix: 'Doe',
          lastName: 'Smith',
          description: 'A developer',
          ctaPrimary: 'Primary Action',
          ctaSecondary: 'Secondary Action',
        },
      },
    });
  });

  it('renders correctly with mocked data', () => {
    render(<About />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('Primary Action')).toBeInTheDocument();
  });

  it('calls scrollToSection when CTA is clicked', () => {
    render(<About />);
    const primaryCta = screen.getByText('Primary Action');
    fireEvent.click(primaryCta);
    expect(mockScrollToSection).toHaveBeenCalledWith('projects');

    const secondaryCta = screen.getByText('Secondary Action');
    fireEvent.click(secondaryCta);
    expect(mockScrollToSection).toHaveBeenCalledWith('contact');
  });

  it('calls openRightPanel when readMore is clicked', () => {
    render(<About />);
    const readMoreBtn = screen.getByText('readMore'); // Because t() just returns the key
    fireEvent.click(readMoreBtn);
    expect(mockOpenRightPanel).toHaveBeenCalledWith('bio');
  });
});
