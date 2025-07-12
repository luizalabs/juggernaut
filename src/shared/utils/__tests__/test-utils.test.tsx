import {
  render,
  createMockEvent,
  createMockRouter,
  waitForLoadingToFinish,
} from '../test-utils';
import React from 'react';

describe('test-utils', () => {
  describe('render', () => {
    it('should render a React component', () => {
      const { getByText } = render(<span>Hello</span>);
      expect(getByText('Hello')).toBeInTheDocument();
    });
  });

  describe('createMockEvent', () => {
    it('should create a mock event with default methods', () => {
      const event = createMockEvent();
      expect(typeof event.preventDefault).toBe('function');
      expect(typeof event.stopPropagation).toBe('function');
      expect(event.target).toHaveProperty('value', '');
    });
    it('should allow overriding properties', () => {
      const event = createMockEvent({ target: { value: 'abc' } });
      expect(event.target.value).toBe('abc');
    });
  });

  describe('createMockRouter', () => {
    it('should create a mock router with default methods', () => {
      const router = createMockRouter();
      expect(typeof router.push).toBe('function');
      expect(router.pathname).toBe('/');
    });
    it('should allow overriding properties', () => {
      const router = createMockRouter({ pathname: '/home' });
      expect(router.pathname).toBe('/home');
    });
  });

  describe('waitForLoadingToFinish', () => {
    it('should resolve the promise', async () => {
      await expect(waitForLoadingToFinish()).resolves.toBeUndefined();
    });
  });
});
