import { pixelify, workSans } from '../font';

describe('font config', () => {
  it('should export pixelify with correct properties', () => {
    expect(pixelify).toHaveProperty('variable');
    expect(pixelify).toHaveProperty('style');
    expect(pixelify).toHaveProperty('className');
  });

  it('should export workSans with correct properties', () => {
    expect(workSans).toHaveProperty('variable');
    expect(workSans).toHaveProperty('style');
    expect(workSans).toHaveProperty('className');
  });
});
