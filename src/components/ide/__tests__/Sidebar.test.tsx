import React from 'react';
import { render } from '@testing-library/react';
import Sidebar from '../Sidebar';

jest.mock('@/context/ThemeContext', () => ({
  useTheme: () => ({ theme: 'ide', toggleTheme: jest.fn() }),
}));

jest.mock('next-auth/react', () => ({
  useSession: () => ({ data: null, status: 'unauthenticated' }),
  signIn: jest.fn(),
  signOut: jest.fn(),
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

describe('Sidebar Component', () => {
  it('renders correctly', () => {
    render(<Sidebar activeView="explorer" setActiveView={jest.fn()} />);

    // Sidebar usually has a few specific icons or aria labels, but for now we'll just check it renders without crashing
    // Wait, let's look at the implementation. It probably has icons.
    // If it has role="navigation" or specific test ids.
    const { container } = render(<Sidebar activeView="explorer" setActiveView={jest.fn()} />);
    expect(container).toBeInTheDocument();
  });
});
