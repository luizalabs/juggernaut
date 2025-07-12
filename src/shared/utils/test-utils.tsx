import { render, RenderOptions } from '@testing-library/react';
import { ReactElement, ReactNode } from 'react';

const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };

export const createMockEvent = (overrides = {}) => ({
  preventDefault: jest.fn(),
  stopPropagation: jest.fn(),
  target: { value: '' },
  ...overrides,
});

export const createMockRouter = (overrides = {}) => ({
  push: jest.fn(),
  replace: jest.fn(),
  prefetch: jest.fn(),
  back: jest.fn(),
  forward: jest.fn(),
  refresh: jest.fn(),
  pathname: '/',
  query: {},
  asPath: '/',
  ...overrides,
});

export const waitForLoadingToFinish = () =>
  new Promise(resolve => setTimeout(resolve, 0));
