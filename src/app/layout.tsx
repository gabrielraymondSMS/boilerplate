import { ReactNode } from 'react';
import './globals.css';
import Sidebar from '@/components/layout/Sidebar';
import Navbar from '@/components/layout/Navbar';
import Provider from '@/utils/Providers';


interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-col flex-1">
              <Navbar />
              <main className="flex-1 p-4 overflow-auto bg-gray-100">
                {children}
              </main>
            </div>
          </div>
        </Provider>
      </body>
    </html >

  );
}
