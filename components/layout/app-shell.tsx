'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Bell, Wallet, LineChart, Settings } from 'lucide-react';
import { ReactNode, useState } from 'react';
import clsx from 'clsx';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LineChart },
  { href: '/portfolio', label: 'Portfolios', icon: Wallet },
  { href: '/research', label: 'Research', icon: Bell },
  { href: '/analytics', label: 'Analytics', icon: Settings },
  { href: '/settings', label: 'Settings', icon: Settings }
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-white/70 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden rounded-md border p-2"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle navigation"
            >
              <Menu className="h-5 w-5" />
            </button>
            <Link href="/" className="text-lg font-semibold">
              US Stock Portfolio OS
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">
              Beta preview
            </div>
          </div>
        </div>
      </header>
      <div className="container mx-auto grid grid-cols-1 gap-6 py-6 md:grid-cols-[240px_1fr]">
        <aside className={clsx('md:block', open ? 'block' : 'hidden')}> 
          <nav className="space-y-2 rounded-lg border bg-white p-4 shadow-sm">
            {navItems.map((item) => {
              const active = pathname?.startsWith(item.href);
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition hover:bg-secondary',
                    active && 'bg-secondary text-foreground'
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>
        <main className="space-y-6 pb-10">{children}</main>
      </div>
    </div>
  );
}
