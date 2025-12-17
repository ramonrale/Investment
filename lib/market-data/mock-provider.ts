import { MarketDataProvider, OHLCV, Quote, Fundamentals } from './provider';

const demoHistory: OHLCV[] = [
  { date: '2024-07-01', open: 180, high: 185, low: 178, close: 182, volume: 120_000_000 },
  { date: '2024-07-02', open: 182, high: 186, low: 181, close: 185, volume: 98_000_000 },
  { date: '2024-07-03', open: 185, high: 189, low: 183, close: 188, volume: 102_000_000 }
];

export class MockMarketDataProvider implements MarketDataProvider {
  id = 'mock';

  async getQuote(ticker: string): Promise<Quote> {
    return {
      ticker,
      price: 188.12,
      changePercent: 0.012,
      asOf: new Date()
    };
  }

  async getHistory(): Promise<OHLCV[]> {
    return demoHistory;
  }

  async getFundamentals(): Promise<Fundamentals> {
    return { marketCap: 3.1e12, peRatio: 28.4, dividendYield: 0.005, sector: 'Technology', industry: 'Hardware' };
  }

  async getDividends(): Promise<{ date: string; amount: number }[]> {
    return [
      { date: '2024-06-15', amount: 0.24 },
      { date: '2024-03-15', amount: 0.24 }
    ];
  }
}
