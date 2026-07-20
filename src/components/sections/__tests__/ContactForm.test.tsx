import React from 'react';
import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from '../ContactForm';
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
  const mockSetContactStatus = jest.fn();

  beforeAll(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
    jest.useFakeTimers();
    (global.fetch as jest.Mock) = jest.fn();

    (useLanguage as jest.Mock).mockReturnValue({
      t: (key: string) => key,
    });

    (useNavigation as jest.Mock).mockReturnValue({
      setContactStatus: mockSetContactStatus,
    });
  });

  afterEach(() => {
    act(() => {
      jest.runOnlyPendingTimers();
    });
    jest.useRealTimers();
  });

  it('renders correctly', () => {
    render(<ContactForm />);
    expect(screen.getByText('getInTouch')).toBeInTheDocument();
  });

  it('validates form fields and shows errors', async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    render(<ContactForm />);

    const submitBtn = screen.getByText('sendMessage');
    await user.click(submitBtn);

    // Errors should appear for name, email, message
    await waitFor(() => {
      expect(screen.getByText('Name is too short')).toBeInTheDocument();
      expect(screen.getByText('Invalid email address')).toBeInTheDocument();
      expect(screen.getByText('Message must be at least 10 characters')).toBeInTheDocument();
    });
  });

  it('handles technology input and forbids specific tech', async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    render(<ContactForm />);

    const techInput = screen.getByPlaceholderText('techPlaceholder');

    // Add valid tech
    await user.type(techInput, 'React{enter}');
    expect(screen.getByText('React')).toBeInTheDocument();

    // Try to add forbidden tech
    await user.type(techInput, '.net{enter}');
    expect(screen.getByText('techError')).toBeInTheDocument(); // Since translation returns key

    // Remove valid tech
    render(<ContactForm />);
    const removeIcon = document.querySelector('svg.cursor-pointer');
    if (removeIcon) {
      await user.click(removeIcon);
    }
  });

  it('handles address check and submission', async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

    (global.fetch as jest.Mock)
      .mockResolvedValueOnce({
        json: async () => [{ lat: '48.0', lon: '9.0', address: { country_code: 'de' } }],
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          distance: 20,
          travelStats: { car: '20m', publicTransport: '30m', carMinutes: 20, ptMinutes: 30 },
        }),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true }),
      });

    const { container } = render(<ContactForm />);

    // Fill valid data
    const nameInput = container.querySelector('input[name="name"]') as HTMLInputElement;
    const emailInput = container.querySelector('input[name="email"]') as HTMLInputElement;
    const phoneInput = container.querySelector('input[name="phone"]') as HTMLInputElement;

    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');
    await user.type(phoneInput, '+123456');

    // Select onsite
    const onsiteRadio = screen.getByLabelText(/onsite/i);
    await user.click(onsiteRadio);

    const addressInput = screen.getByPlaceholderText('officeAddressPlaceholder');
    await user.type(addressInput, 'Berlin');
    await user.tab(); // trigger blur

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(2);
    });

    const messageInput = container.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
    await user.type(messageInput, 'This is a test message that is long enough.');

    // Submit
    const submitBtn = screen.getByText('sendMessage');
    await user.click(submitBtn);

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(3);
      expect(mockSetContactStatus).toHaveBeenCalledWith('sent');
      expect(screen.getByText('successMessage')).toBeInTheDocument();
    });
  });

  it('shows buy_template message when purpose is buy_template', async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    render(<ContactForm />);

    const select = screen.getByRole('combobox');
    await user.selectOptions(select, 'buy_template');

    expect(screen.getByText('buyTemplateMessage')).toBeInTheDocument();
  });
});
