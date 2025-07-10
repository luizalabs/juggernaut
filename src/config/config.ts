interface ApiConfig {
  baseUrl: string;
}

interface Config {
  api: ApiConfig;
  googleSiteVerification: string;
}

export const config: Config = {
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "",
  },
  googleSiteVerification:
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
};
