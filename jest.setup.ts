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
  return function MockReactMarkdown(props: any) {
    return props.children;
  };
});
