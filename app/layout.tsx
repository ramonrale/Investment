import './globals.css';
import { ReactNode } from 'react';
import { QueryProvider } from '@/components/layout/query-provider';
import { AppShell } from '@/components/layout/app-shell';
import { ThemeProvider } from '@/components/layout/theme-provider';

export const metadata = {
  title: 'US Stock Portfolio OS',
  description: 'Portfolio tracker, research, and risk analytics for US equities and ETFs.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="light">
          <QueryProvider>
            <AppShell>{children}</AppShell>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
