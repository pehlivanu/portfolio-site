import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    act(() => {
      jest.runOnlyPendingTimers();
    });
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    render(<TitleBar />);
    expect(screen.getByText('portfolioTitle')).toBeInTheDocument();
  });

  it('handles fullscreen toggle correctly', async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    render(<TitleBar />);

    const requestFullscreenMock = jest.fn().mockResolvedValue(undefined);
    const exitFullscreenMock = jest.fn().mockResolvedValue(undefined);

    Object.defineProperty(document.documentElement, 'requestFullscreen', {
      value: requestFullscreenMock,
      writable: true,
    });
    Object.defineProperty(document, 'exitFullscreen', {
      value: exitFullscreenMock,
      writable: true,
    });

    // Mock that we are not in fullscreen
    Object.defineProperty(document, 'fullscreenElement', { value: null, writable: true });

    const enterBtn = screen.getByTitle('enterFullscreen');
    await user.click(enterBtn);
    expect(requestFullscreenMock).toHaveBeenCalled();

    // Mock that we are in fullscreen
    Object.defineProperty(document, 'fullscreenElement', {
      value: document.documentElement,
      writable: true,
    });

    const exitBtn = screen.getByTitle('exitFullscreen');
    await user.click(exitBtn);
    expect(exitFullscreenMock).toHaveBeenCalled();
  });

  it('handles exit sequence and reboot correctly', async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    render(<TitleBar />);

    const exitBtn = screen.getByTitle('exit');
    await user.click(exitBtn);

    // Initial state immediately after click
    expect(screen.getByText('systemShutdown')).toBeInTheDocument();

    // Advance by 2000ms: showErrorText(true)
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    expect(screen.getByText('errorNoSleep')).toBeInTheDocument();

    // Advance by 2000ms (total 4000ms): showRebootButton(true)
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    expect(screen.getByText('rebootSystem')).toBeInTheDocument();

    // Advance by 1000ms (total 5000ms): showShutdownText(false)
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    // Click Reboot
    const rebootBtn = screen.getByText('rebootSystem');
    await user.click(rebootBtn);

    // Shutdown screen should disappear
    expect(screen.queryByText('rebootSystem')).not.toBeInTheDocument();
  });
});
