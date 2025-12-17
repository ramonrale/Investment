import { registerAnalyticsWorker } from '@/lib/jobs/queues';
import { computeDailyValue, computeRiskMetrics } from '@/lib/analytics/portfolio-analytics';

registerAnalyticsWorker(async (jobName, data) => {
  if (jobName === 'recompute-metrics') {
    const { transactions, prices } = data;
    const series = computeDailyValue(transactions, prices);
    const risk = computeRiskMetrics(series);
    console.log('Computed metrics', { seriesLength: series.length, risk });
  }
});
