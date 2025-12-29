// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import { Providers } from './providers';
//import Navbar from '../components/Navbar';

export const metadata = {
  title: {
    default: 'Spherefy',
    template: '%s | Spherefy',
  },
  description: 'Spherefy – modern web projects and user management solutions',
  keywords: ['web development', 'user management', 'modern web', 'Spherefy'],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-800 transition-colors duration-300">
        <Providers>
          {/* <Navbar /> */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
