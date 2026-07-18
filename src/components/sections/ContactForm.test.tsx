import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactForm from './ContactForm';
import { useLanguage } from '@/context/LanguageContext';
import { useNavigation } from '@/context/NavigationContext';

jest.mock('@/context/LanguageContext', () => ({
  useLanguage: jest.fn(),
}));

jest.mock('@/context/NavigationContext', () => ({
  useNavigation: jest.fn(),
}));

jest.mock('@/components/ui/Highlight', () => {
  return function MockHighlight({ text }: { text: string }) {
    return <span data-testid="highlight">{text}</span>;
  };
});

describe('ContactForm Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (useLanguage as jest.Mock).mockReturnValue({
      t: (key: string) => key,
    });

    (useNavigation as jest.Mock).mockReturnValue({
      setContactStatus: jest.fn(),
    });
  });

  it('renders correctly', () => {
    render(<ContactForm />);
    
    expect(screen.getByText('getInTouch')).toBeInTheDocument();
    expect(screen.getByText('name')).toBeInTheDocument();
    expect(screen.getByText('email')).toBeInTheDocument();
    expect(screen.getByText('message')).toBeInTheDocument();
    expect(screen.getByText('sendMessage')).toBeInTheDocument();
  });
});
