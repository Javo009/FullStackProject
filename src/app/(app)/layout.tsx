'use client'
import Navbar from '@/components/Navbar';
import { SessionProvider } from 'next-auth/react';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <SessionProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        {children}
      </div>
      </SessionProvider>
  );
}