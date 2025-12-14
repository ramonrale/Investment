import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <section className="container mx-auto grid gap-8 py-12 md:grid-cols-2">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-wide text-muted-foreground">Professional platform</p>
        <h1 className="text-4xl font-bold leading-tight text-foreground">
          US Stock Portfolio OS
        </h1>
        <p className="text-lg text-muted-foreground">
          A premium-grade operating system for managing, researching, and stress-testing US equity and ETF portfolios.
        </p>
        <div className="flex gap-4">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow"
          >
            Launch app
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/research" className="inline-flex items-center gap-2 text-sm font-medium text-primary">
            Explore research
          </Link>
        </div>
      </div>
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Highlights</h2>
        <ul className="mt-4 space-y-3 text-muted-foreground">
          <li>• Performance, risk, and factor analytics</li>
          <li>• Broker import + paper trading ready</li>
          <li>• Alerts, notes, reports, and command palette</li>
          <li>• Dual market data providers with caching</li>
        </ul>
      </div>
    </section>
  );
}
