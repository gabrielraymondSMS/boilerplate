"use client";

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactNode } from 'react';
import './globals.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Sidebar from '@/components/layout/Sidebar';
import Navbar from '@/components/layout/Navbar';

// Initialize the QueryClient
const queryClient = new QueryClient()

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-col flex-1">
              <Navbar />
              <main className="flex-1 p-4 overflow-auto">
                {children}
              </main>
            </div>
          </div>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </body>
    </html >

  );
}
