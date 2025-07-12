import { pixelify, workSans } from '../font';

describe('font config', () => {
  it('deve exportar pixelify com as propriedades corretas', () => {
    expect(pixelify).toHaveProperty('variable');
    expect(pixelify).toHaveProperty('style');
    expect(pixelify).toHaveProperty('className');
  });

  it('deve exportar workSans com as propriedades corretas', () => {
    expect(workSans).toHaveProperty('variable');
    expect(workSans).toHaveProperty('style');
    expect(workSans).toHaveProperty('className');
  });
});
