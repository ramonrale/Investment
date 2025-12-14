import { PriceHistory, Transaction } from '@prisma/client';

type PortfolioValuePoint = { date: string; value: number };

type RiskMetrics = {
  volatility: number;
  maxDrawdown: number;
  beta: number;
  valueAtRisk: number;
};

export function computeDailyValue(transactions: Transaction[], prices: Record<string, PriceHistory[]>): PortfolioValuePoint[] {
  const series: PortfolioValuePoint[] = [];
  // Simplified scaffold: assume one security and build cumulative value
  const sortedPrices = Object.values(prices)[0] ?? [];
  let position = 0;
  let cash = 0;
  for (const price of sortedPrices.sort((a, b) => a.date.getTime() - b.date.getTime())) {
    const dayTx = transactions.filter((t) => t.occurredAt.toDateString() === price.date.toDateString());
    for (const tx of dayTx) {
      const sign = tx.type === 'SELL' ? -1 : 1;
      position += sign * tx.quantity;
      cash -= sign * tx.quantity * tx.price + tx.fees;
    }
    series.push({ date: price.date.toISOString().slice(0, 10), value: position * price.close + cash });
  }
  return series;
}

export function computeRiskMetrics(values: PortfolioValuePoint[]): RiskMetrics {
  if (values.length < 2) return { volatility: 0, maxDrawdown: 0, beta: 0, valueAtRisk: 0 };
  const returns = values.slice(1).map((v, i) => (v.value - values[i].value) / values[i].value);
  const mean = returns.reduce((a, b) => a + b, 0) / returns.length;
  const variance = returns.reduce((a, b) => a + (b - mean) ** 2, 0) / returns.length;
  const volatility = Math.sqrt(variance) * Math.sqrt(252);

  let peak = values[0].value;
  let maxDrawdown = 0;
  for (const point of values) {
    peak = Math.max(peak, point.value);
    const drawdown = (point.value - peak) / peak;
    maxDrawdown = Math.min(maxDrawdown, drawdown);
  }

  const sorted = [...returns].sort((a, b) => a - b);
  const idx = Math.floor(0.05 * sorted.length);
  const valueAtRisk = sorted[idx] ?? 0;

  return { volatility, maxDrawdown: Math.abs(maxDrawdown), beta: 0.0, valueAtRisk };
}
