import type { Viewport, Metadata } from 'next';
import { pixelify, workSans } from '@config/font';
import '../style/globals.css';
import { config } from '@config/config';

const { googleSiteVerification } = config;

export const metadata: Metadata = {
  title: 'Noah Template',
  description: '🚀 Your Next project starter',
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#363030' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br'>
      <head>
        <link rel='icon' href='/img/favicon.ico' />
        <link rel='manifest' href='/manifest.json' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta
          name='apple-mobile-web-app-status-bar-style'
          content='black-translucent'
        />
        <meta
          name='google-site-verification'
          content={googleSiteVerification}
        />

        <meta
          name='theme-color'
          media='(prefers-color-scheme: light)'
          content='#ffffff'
        />
        <meta
          name='theme-color'
          media='(prefers-color-scheme: dark)'
          content='#18181b'
        />

        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta
          name='apple-mobile-web-app-status-bar-style'
          content='black-translucent'
        />
      </head>
      <body className={`${pixelify.variable} ${workSans.variable} antialiased`}>
        <div id='app-container'>{children}</div>
      </body>
    </html>
  );
}
