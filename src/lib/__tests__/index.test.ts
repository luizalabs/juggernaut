import * as lib from '../index';

describe('lib/index', () => {
  it('should export HttpClient', () => {
    expect(lib.HttpClient).toBeDefined();
    expect(typeof lib.HttpClient).toBe('function');
  });
});
