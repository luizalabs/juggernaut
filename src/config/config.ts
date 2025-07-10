interface ApiConfig {
  baseUrl: string;
}

interface GoogleConfig {
  siteVerification: string;
  ga: string;
}

interface Config {
  api: ApiConfig;
  google: GoogleConfig;
}

export const config: Config = {
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || '',
  },
  google: {
    siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
    ga: process.env.NEXT_PUBLIC_GA_ID || '',
  },
};
