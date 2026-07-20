import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Sidebar from '../Sidebar';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useTheme } from '@/context/ThemeContext';
import { useNavigation } from '@/context/NavigationContext';
import { useLanguage } from '@/context/LanguageContext';

jest.mock('@/context/ThemeContext', () => ({
  useTheme: jest.fn(),
}));

jest.mock('next-auth/react', () => ({
  useSession: jest.fn(),
  signIn: jest.fn(),
  signOut: jest.fn(),
}));

jest.mock('@/context/NavigationContext', () => ({
  useNavigation: jest.fn(),
}));

jest.mock('@/context/LanguageContext', () => ({
  useLanguage: jest.fn(),
}));

describe('Sidebar Component', () => {
  const mockSetActiveView = jest.fn();
  const mockOnClose = jest.fn();

  const mockToggleTheme = jest.fn();
  const mockSetActiveTab = jest.fn();
  const mockSetOpenedFiles = jest.fn();
  const mockCloseFile = jest.fn();
  const mockOpenRightPanel = jest.fn();
  const mockCloseRightPanel = jest.fn();
  const mockSetLanguage = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    (useTheme as jest.Mock).mockReturnValue({ theme: 'ide', toggleTheme: mockToggleTheme });
    (useSession as jest.Mock).mockReturnValue({ data: null, status: 'unauthenticated' });
    (useNavigation as jest.Mock).mockReturnValue({
      activeTab: 'experience',
      setActiveTab: mockSetActiveTab,
      openedFiles: ['experience', 'projects'],
      setOpenedFiles: mockSetOpenedFiles,
      closeFile: mockCloseFile,
      activeRightPanel: null,
      openRightPanel: mockOpenRightPanel,
      closeRightPanel: mockCloseRightPanel,
    });
    (useLanguage as jest.Mock).mockReturnValue({
      language: 'en',
      setLanguage: mockSetLanguage,
      t: (key: string) => key,
    });
  });

  it('renders correctly', () => {
    const { container } = render(
      <Sidebar activeView="explorer" setActiveView={mockSetActiveView} />
    );
    expect(container).toBeInTheDocument();
  });

  it('calls setActiveView when view buttons are clicked', async () => {
    const user = userEvent.setup();
    render(
      <Sidebar activeView="explorer" setActiveView={mockSetActiveView} onClose={mockOnClose} />
    );

    const searchBtn = screen.getByLabelText('search');
    await user.click(searchBtn);
    expect(mockSetActiveView).toHaveBeenCalledWith('search');
    expect(mockOnClose).toHaveBeenCalled();

    const explorerBtn = screen.getByLabelText('explorer');
    await user.click(explorerBtn);
    expect(mockSetActiveView).toHaveBeenCalledWith(null);
  });

  it('toggles contact panel correctly', async () => {
    const user = userEvent.setup();
    const { rerender } = render(
      <Sidebar activeView="explorer" setActiveView={mockSetActiveView} />
    );

    const contactBtn = screen.getByLabelText('contactMe');
    await user.click(contactBtn);
    expect(mockOpenRightPanel).toHaveBeenCalledWith('contact');

    (useNavigation as jest.Mock).mockReturnValue({
      activeRightPanel: 'contact',
      openRightPanel: mockOpenRightPanel,
      closeRightPanel: mockCloseRightPanel,
    });

    rerender(<Sidebar activeView="explorer" setActiveView={mockSetActiveView} />);
    await user.click(contactBtn);
    expect(mockCloseRightPanel).toHaveBeenCalled();
  });

  it('toggles language correctly', async () => {
    const user = userEvent.setup();
    render(<Sidebar activeView="explorer" setActiveView={mockSetActiveView} />);

    const langBtn = screen.getByLabelText('switchLanguage');
    await user.click(langBtn);
    expect(mockSetLanguage).toHaveBeenCalledWith('de');
  });

  it('toggles theme correctly', async () => {
    const user = userEvent.setup();
    render(<Sidebar activeView="explorer" setActiveView={mockSetActiveView} />);

    const themeBtn = screen.getByLabelText('switchTheme');
    await user.click(themeBtn);
    expect(mockToggleTheme).toHaveBeenCalled();
  });

  it('handles auth sign in', async () => {
    const user = userEvent.setup();
    render(<Sidebar activeView="explorer" setActiveView={mockSetActiveView} />);

    const authBtn = screen.getByLabelText('Sign In');
    await user.click(authBtn);
    expect(signIn).toHaveBeenCalledWith('google');
  });

  it('handles auth sign out', async () => {
    (useSession as jest.Mock).mockReturnValue({ data: null, status: 'authenticated' });
    const user = userEvent.setup();
    render(<Sidebar activeView="explorer" setActiveView={mockSetActiveView} />);

    const authBtn = screen.getByLabelText('Sign Out');
    await user.click(authBtn);
    expect(signOut).toHaveBeenCalled();
  });
});
