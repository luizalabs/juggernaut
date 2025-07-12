import {
  render,
  createMockEvent,
  createMockRouter,
  waitForLoadingToFinish,
} from '../test-utils';
import React from 'react';

describe('test-utils', () => {
  describe('render', () => {
    it('deve renderizar um componente React', () => {
      const { getByText } = render(<span>Olá</span>);
      expect(getByText('Olá')).toBeInTheDocument();
    });
  });

  describe('createMockEvent', () => {
    it('deve criar um evento mock com métodos padrão', () => {
      const event = createMockEvent();
      expect(typeof event.preventDefault).toBe('function');
      expect(typeof event.stopPropagation).toBe('function');
      expect(event.target).toHaveProperty('value', '');
    });
    it('deve permitir sobrescrever propriedades', () => {
      const event = createMockEvent({ target: { value: 'abc' } });
      expect(event.target.value).toBe('abc');
    });
  });

  describe('createMockRouter', () => {
    it('deve criar um router mock com métodos padrão', () => {
      const router = createMockRouter();
      expect(typeof router.push).toBe('function');
      expect(router.pathname).toBe('/');
    });
    it('deve permitir sobrescrever propriedades', () => {
      const router = createMockRouter({ pathname: '/home' });
      expect(router.pathname).toBe('/home');
    });
  });

  describe('waitForLoadingToFinish', () => {
    it('deve resolver a promise', async () => {
      await expect(waitForLoadingToFinish()).resolves.toBeUndefined();
    });
  });
});
