import RootLayout, { metadata, viewport } from '../layout';
import { createElement } from 'react';

describe('RootLayout', () => {
  it('should be defined', () => {
    expect(RootLayout).toBeDefined();
  });

  it('should execute the component function', () => {
    const result = RootLayout({ children: createElement('div', {}, 'test') });
    expect(result).toBeDefined();
    expect(result.type).toBe('html');
  });

  it('should export metadata', () => {
    expect(metadata).toBeDefined();
    expect(metadata.title).toBe('Noah Template');
    expect(metadata.description).toBe('🚀 Your Next project starter');
  });

  it('should export viewport', () => {
    expect(viewport).toBeDefined();
    expect(viewport.width).toBe('device-width');
    expect(viewport.initialScale).toBe(1);
  });
});
