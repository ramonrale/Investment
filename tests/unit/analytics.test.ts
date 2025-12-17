import { describe, it, expect } from 'vitest';
import { computeDailyValue, computeRiskMetrics } from '@/lib/analytics/portfolio-analytics';

const mockTransactions: any[] = [
  { type: 'BUY', quantity: 1, price: 100, fees: 0, occurredAt: new Date('2024-01-01') },
  { type: 'BUY', quantity: 1, price: 110, fees: 0, occurredAt: new Date('2024-01-02') },
];

const mockPrices: any = {
  AAPL: [
    { date: new Date('2024-01-01'), close: 100 } as any,
    { date: new Date('2024-01-02'), close: 110 } as any,
  ],
};

describe('portfolio analytics', () => {
  it('computes value series and risk metrics', () => {
    const series = computeDailyValue(mockTransactions as any, mockPrices);
    const risk = computeRiskMetrics(series);
    expect(series.length).toBeGreaterThan(0);
    expect(risk.volatility).toBeGreaterThanOrEqual(0);
  });
});
