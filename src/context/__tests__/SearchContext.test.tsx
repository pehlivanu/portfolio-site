import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { SearchProvider, useSearch } from '../SearchContext';

const TestComponent = () => {
  const { searchTerm, setSearchTerm } = useSearch();
  return (
    <div>
      <span data-testid="search-query">{searchTerm}</span>
      <button onClick={() => setSearchTerm('test')}>Search Test</button>
    </div>
  );
};

describe('SearchContext', () => {
  it('provides search context', () => {
    render(
      <SearchProvider>
        <TestComponent />
      </SearchProvider>
    );

    expect(screen.getByTestId('search-query').textContent).toBe('');

    act(() => {
      screen.getByText('Search Test').click();
    });

    expect(screen.getByTestId('search-query').textContent).toBe('test');
  });
});
