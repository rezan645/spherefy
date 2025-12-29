// app/providers.tsx
'use client';
import { ThemeProvider } from 'next-themes';
import { LanguageProvider } from '../src/context/LanguageContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </ThemeProvider>
  );
}
