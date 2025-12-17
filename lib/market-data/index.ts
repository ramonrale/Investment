import NodeCache from 'node-cache';
import { MarketDataProvider } from './provider';
import { MockMarketDataProvider } from './mock-provider';
import { PolygonLikeProvider } from './polygon-provider';

const cache = new NodeCache({ stdTTL: 60 });

export function getMarketDataProvider(): MarketDataProvider {
  const provider = process.env.MARKET_DATA_PROVIDER ?? 'mock';
  if (provider === 'polygon') {
    return new PolygonLikeProvider(process.env.PROVIDER_B_API_KEY || '');
  }
  return new MockMarketDataProvider();
}

export async function cachedFetch<T>(key: string, fn: () => Promise<T>): Promise<T> {
  const hit = cache.get<T>(key);
  if (hit) return hit;
  const value = await fn();
  cache.set(key, value);
  return value;
}
