import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import { LanguageProvider } from '@/context/LangusgeContext';
import { vibes, raleway } from '@/utils/fonts';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Iguana Beach Bar & Restaurant',
  description: 'Generated by brunoguerracode.dev',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <title>Iguana Beach Bar & Restaurant</title>
        <link
          rel='icon'
          href='/favicon.png'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'></meta>
      </head>
      <body className={`${inter.className} ${vibes} ${raleway}`}>
        <LanguageProvider>
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
