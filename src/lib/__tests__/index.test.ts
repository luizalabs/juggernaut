import * as lib from '../index';

describe('lib/index', () => {
  it('deve exportar HttpClient', () => {
    expect(lib.HttpClient).toBeDefined();
    expect(typeof lib.HttpClient).toBe('function');
  });
});
