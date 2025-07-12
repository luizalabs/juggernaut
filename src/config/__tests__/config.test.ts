import { config } from '../config';

describe('config', () => {
  beforeAll(() => {
    process.env.NEXT_PUBLIC_API_URL = 'https://api.test.com';
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION =
      'site-verification-token';
    process.env.NEXT_PUBLIC_GA_ID = 'GA-123456';
    process.env.NEXT_PUBLIC_GA_TRACKING_ID = '';
  });

  it('deve ter a estrutura correta', () => {
    expect(config).toHaveProperty('api');
    expect(config).toHaveProperty('google');
    expect(config.api).toHaveProperty('baseUrl');
    expect(config.google).toHaveProperty('siteVerification');
    expect(config.google).toHaveProperty('ga');
  });

  it('deve popular os valores a partir das variáveis de ambiente', () => {
    expect(config.api.baseUrl).toBe('https://api.test.com');
    expect(config.google.siteVerification).toBe('site-verification-token');
    expect(config.google.ga).toBe('GA-123456');
  });

  it('deve retornar string vazia se variáveis não estiverem definidas', () => {
    process.env.NEXT_PUBLIC_API_URL = '';
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION = '';
    process.env.NEXT_PUBLIC_GA_ID = '';
    jest.resetModules();
    const { config: configReloaded } = require('../config');
    expect(configReloaded.api.baseUrl).toBe('');
    expect(configReloaded.google.siteVerification).toBe('');
    expect(configReloaded.google.ga).toBe('');
  });
});
