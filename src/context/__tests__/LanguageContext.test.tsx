import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { LanguageProvider, useLanguage } from '../LanguageContext';

const TestComponent = () => {
  const { language, setLanguage, t } = useLanguage();
  return (
    <div>
      <span data-testid="lang-value">{language}</span>
      <button onClick={() => setLanguage('de')}>Set DE</button>
      <span>{t('portfolioTitle')}</span>
    </div>
  );
};

describe('LanguageContext', () => {
  it('provides language context and translation', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );

    // Default language is 'en'
    expect(screen.getByTestId('lang-value').textContent).toBe('en');

    act(() => {
      screen.getByText('Set DE').click();
    });

    expect(screen.getByTestId('lang-value').textContent).toBe('de');
  });
});
