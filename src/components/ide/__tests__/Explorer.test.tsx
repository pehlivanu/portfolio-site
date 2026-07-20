import React from 'react';
import { render } from '@testing-library/react';
import Explorer from '../Explorer';

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

describe('Explorer Component', () => {
  it('renders correctly', () => {
    const { container } = render(<Explorer />);
    expect(container).toBeInTheDocument();
  });
});
