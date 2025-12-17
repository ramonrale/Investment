import { SecuritySearch } from '@/components/research/security-search';
import { SecuritySnapshot } from '@/components/research/security-snapshot';

export default function ResearchPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Research</h1>
          <p className="text-muted-foreground">Search tickers, review fundamentals, and add to watchlists.</p>
        </div>
        <button className="rounded-md border px-4 py-2 text-sm font-medium">Create alert</button>
      </div>
      <SecuritySearch />
      <SecuritySnapshot />
    </div>
  );
}
