import RootLayout, { metadata, viewport } from '../layout';
import { createElement } from 'react';

describe('RootLayout', () => {
  it('deve estar definido', () => {
    expect(RootLayout).toBeDefined();
  });

  it('deve executar a função do componente', () => {
    const result = RootLayout({ children: createElement('div', {}, 'test') });
    expect(result).toBeDefined();
    expect(result.type).toBe('html');
  });

  it('deve exportar metadata', () => {
    expect(metadata).toBeDefined();
    expect(metadata.title).toBe('Noah Template');
    expect(metadata.description).toBe('🚀 Your Next project starter');
  });

  it('deve exportar viewport', () => {
    expect(viewport).toBeDefined();
    expect(viewport.width).toBe('device-width');
    expect(viewport.initialScale).toBe(1);
  });
});
