import { HoldingsTable } from '@/components/portfolio/holdings-table';
import { TransactionsTable } from '@/components/portfolio/transactions-table';

export default function PortfolioPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Portfolios</h1>
          <p className="text-muted-foreground">Real, paper, and watch-only accounts with multi-currency support.</p>
        </div>
        <div className="flex gap-3">
          <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">New portfolio</button>
          <button className="rounded-md border px-4 py-2 text-sm font-medium">Import CSV</button>
        </div>
      </div>
      <HoldingsTable />
      <TransactionsTable />
    </div>
  );
}
