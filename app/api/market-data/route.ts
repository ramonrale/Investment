import { NextResponse } from 'next/server';
import { getMarketDataProvider, cachedFetch } from '@/lib/market-data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const ticker = searchParams.get('ticker') || 'AAPL';
  const provider = getMarketDataProvider();
  const quote = await cachedFetch(`quote:${provider.id}:${ticker}`, () => provider.getQuote(ticker));
  const fundamentals = await cachedFetch(`fund:${provider.id}:${ticker}`, () => provider.getFundamentals(ticker));
  return NextResponse.json({ provider: provider.id, quote, fundamentals });
}
