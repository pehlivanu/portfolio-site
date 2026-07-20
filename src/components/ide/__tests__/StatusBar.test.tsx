import React from 'react';
import { render } from '@testing-library/react';
import StatusBar from '../StatusBar';

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

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('StatusBar Component', () => {
  it('renders correctly', () => {
    const { container } = render(<StatusBar />);
    expect(container).toBeInTheDocument();
  });
});
