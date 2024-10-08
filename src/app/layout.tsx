import Navbar from '@/components/navbar/navbar';
import { NextUIProvider } from '@nextui-org/react';
import type { Metadata } from 'next';
import { SessionProvider } from 'next-auth/react';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rrenavirk',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={(inter.className, 'min-h-screen antialiased')}>
        <NextUIProvider>
          <SessionProvider>
            <Navbar />
            <main className="z-0 pt-28">{children}</main>
          </SessionProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
