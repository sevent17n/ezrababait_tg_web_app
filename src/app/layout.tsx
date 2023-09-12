import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import MainProvider from '@/providers/MainProvider';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <MainProvider>
        <body className={inter.className}>
          {children}
          <Script src={'https://telegram.org/js/telegram-web-app.js'} />
        </body>
      </MainProvider>
    </html>
  );
}
