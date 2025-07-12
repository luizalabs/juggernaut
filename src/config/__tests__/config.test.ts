import { config } from '../config';

describe('config', () => {
  beforeAll(() => {
    process.env.NEXT_PUBLIC_API_URL = 'https://api.test.com';
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION =
      'site-verification-token';
    process.env.NEXT_PUBLIC_GA_ID = 'GA-123456';
    process.env.NEXT_PUBLIC_GA_TRACKING_ID = '';
  });

  it('should have correct structure', () => {
    expect(config).toHaveProperty('api');
    expect(config).toHaveProperty('google');
    expect(config.api).toHaveProperty('baseUrl');
    expect(config.google).toHaveProperty('siteVerification');
    expect(config.google).toHaveProperty('ga');
  });

  it('should populate values from environment variables', () => {
    expect(config.api.baseUrl).toBe('https://api.test.com');
    expect(config.google.siteVerification).toBe('site-verification-token');
    expect(config.google.ga).toBe('GA-123456');
  });

  it('should return empty string if variables are not defined', () => {
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
