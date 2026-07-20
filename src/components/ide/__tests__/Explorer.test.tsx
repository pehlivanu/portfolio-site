import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Explorer from '../Explorer';
import { useNavigation } from '@/context/NavigationContext';

jest.mock('@/context/ThemeContext', () => ({
  useTheme: jest.fn().mockReturnValue({ theme: 'ide', toggleTheme: jest.fn() }),
}));

jest.mock('@/context/NavigationContext', () => ({
  useNavigation: jest.fn(),
}));

jest.mock('@/context/LanguageContext', () => ({
  useLanguage: jest.fn().mockReturnValue({
    language: 'en',
    setLanguage: jest.fn(),
    t: (key: string) => key,
  }),
}));

describe('Explorer Component', () => {
  const mockSetActiveTab = jest.fn();
  const mockSetOpenedFiles = jest.fn();
  const mockScrollToSection = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useNavigation as jest.Mock).mockReturnValue({
      activeTab: 'experience',
      setActiveTab: mockSetActiveTab,
      openedFiles: ['experience'],
      setOpenedFiles: mockSetOpenedFiles,
      closeFile: jest.fn(),
      scrollToSection: mockScrollToSection,
    });
  });

  it('renders correctly', () => {
    const { container } = render(<Explorer />);
    expect(container).toBeInTheDocument();
  });

  it('handles clicking a file that is not open', async () => {
    const user = userEvent.setup();
    render(<Explorer />);

    const aboutFile = screen.getByText('aboutFile');
    await user.click(aboutFile);

    expect(mockScrollToSection).toHaveBeenCalledWith('about');
  });

  it('handles clicking a file that is already open', async () => {
    (useNavigation as jest.Mock).mockReturnValue({
      activeTab: 'experience',
      setActiveTab: mockSetActiveTab,
      openedFiles: ['experience', 'projects'],
      setOpenedFiles: mockSetOpenedFiles,
      closeFile: jest.fn(),
      scrollToSection: mockScrollToSection,
    });

    const user = userEvent.setup();
    render(<Explorer />);

    const projectsFile = screen.getByText('projectsFile');
    await user.click(projectsFile);

    expect(mockScrollToSection).toHaveBeenCalledWith('projects');
  });
});
