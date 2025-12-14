import { PortfolioValueCard } from '@/components/portfolio/portfolio-value-card';
import { AllocationCard } from '@/components/portfolio/allocation-card';
import { RiskSummaryCard } from '@/components/analytics/risk-summary-card';
import { ActionCenter } from '@/components/portfolio/action-center';
import { NewsWidget } from '@/components/research/news-widget';

export default function DashboardPage() {
  return (
    <div className="grid gap-6">
      <div className="grid gap-4 md:grid-cols-3">
        <PortfolioValueCard />
        <AllocationCard />
        <RiskSummaryCard />
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <ActionCenter />
        <NewsWidget />
        <div className="rounded-lg border bg-white p-4 shadow-sm">
          <h3 className="text-sm font-semibold">Top Movers</h3>
          <p className="mt-2 text-sm text-muted-foreground">Connect a portfolio to see intraday movers.</p>
        </div>
      </div>
    </div>
  );
}
