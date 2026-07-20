import React from 'react';
import { render, screen } from '@testing-library/react';
import TitleBar from '../TitleBar';

jest.mock('@/context/ThemeContext', () => ({
  useTheme: () => ({ theme: 'ide', toggleTheme: jest.fn() }),
}));

jest.mock('@/context/NavigationContext', () => ({
  useNavigation: () => ({
    activeTab: 'experience',
    setActiveTab: jest.fn(),
    openedFiles: ['experience', 'projects'],
    setOpenedFiles: jest.fn(),
    closeFile: jest.fn(),
  }),
}));

jest.mock('@/context/LanguageContext', () => ({
  useLanguage: () => ({
    language: 'en',
    setLanguage: jest.fn(),
    t: (key: string) => key,
  }),
}));

describe('TitleBar Component', () => {
  it('renders correctly', () => {
    render(<TitleBar />);
    expect(screen.getByText('portfolioTitle')).toBeInTheDocument();
  });
});
