import React from 'react';
import { render } from '@testing-library/react';
import MatrixRain from '../MatrixRain';

describe('MatrixRain Component', () => {
  let mockGetContext: jest.Mock;

  beforeEach(() => {
    jest.useFakeTimers();
    mockGetContext = jest.fn().mockReturnValue({
      fillRect: jest.fn(),
      fillText: jest.fn(),
      fillStyle: '',
      font: '',
    });

    // @ts-expect-error: mocking getContext for canvas
    window.HTMLCanvasElement.prototype.getContext = mockGetContext;
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  it('renders canvas and initializes matrix effect', () => {
    const { container } = render(<MatrixRain />);

    const canvas = container.querySelector('canvas');
    expect(canvas).toBeInTheDocument();

    // Verify getContext was called
    expect(mockGetContext).toHaveBeenCalledWith('2d');

    // Fast-forward time to trigger the interval
    jest.advanceTimersByTime(100);

    // Verify drawing operations happened
    const ctx = mockGetContext.mock.results[0].value;
    expect(ctx.fillRect).toHaveBeenCalled();
    expect(ctx.fillText).toHaveBeenCalled();
  });

  it('handles window resize', () => {
    render(<MatrixRain />);

    // Trigger window resize
    window.innerWidth = 800;
    window.innerHeight = 600;
    window.dispatchEvent(new Event('resize'));

    // Fast forward to let the next frame draw with new dimensions
    jest.advanceTimersByTime(50);

    const ctx = mockGetContext.mock.results[0].value;
    expect(ctx.fillRect).toHaveBeenCalled();
  });
});
