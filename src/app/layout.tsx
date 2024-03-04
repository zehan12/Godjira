import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Header } from '@/components/navigation/Header/index';

import { NextThemesProvider } from '../providers/next-theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NextThemesProvider>
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </NextThemesProvider>
    </html>
  );
}
