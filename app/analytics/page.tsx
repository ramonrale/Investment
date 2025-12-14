import { RiskSummaryCard } from '@/components/analytics/risk-summary-card';
import { PerformanceCard } from '@/components/analytics/performance-card';
import { CorrelationCard } from '@/components/analytics/correlation-card';

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Analytics</h1>
          <p className="text-muted-foreground">Performance, risk, and factor-style diagnostics.</p>
        </div>
        <button className="rounded-md border px-4 py-2 text-sm font-medium">Export report</button>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <PerformanceCard />
        <RiskSummaryCard />
        <CorrelationCard />
      </div>
    </div>
  );
}
