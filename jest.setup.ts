import '@testing-library/jest-dom';

// Mock IntersectionObserver for Framer Motion
class IntersectionObserver {
  observe = jest.fn();
  disconnect = jest.fn();
  unobserve = jest.fn();
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});

Object.defineProperty(global, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});

// Mock react-markdown since it's an ESM module
jest.mock('react-markdown', () => {
  return function MockReactMarkdown(props: Record<string, unknown> & { children?: unknown }) {
    return props.children;
  };
});

// Mock Canvas getContext to avoid JSDOM warnings
if (typeof window !== 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  HTMLCanvasElement.prototype.getContext = jest.fn() as any;
}
