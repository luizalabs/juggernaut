import { Pixelify_Sans, Work_Sans } from 'next/font/google';

export const pixelify = Pixelify_Sans({
  variable: '--font-pixelify-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const workSans = Work_Sans({
  variable: '--font-work-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});
