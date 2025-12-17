import { NextResponse } from 'next/server';
import { computeDailyValue, computeRiskMetrics } from '@/lib/analytics/portfolio-analytics';

export async function POST(request: Request) {
  const body = await request.json();
  const { transactions = [], prices = {} } = body;
  const series = computeDailyValue(transactions, prices);
  const risk = computeRiskMetrics(series);
  return NextResponse.json({ series, risk });
}
