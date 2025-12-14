import { MarketDataProvider, OHLCV, Quote, Fundamentals } from './provider';

export class PolygonLikeProvider implements MarketDataProvider {
  id = 'polygon-like';
  constructor(private apiKey: string) {}

  async getQuote(ticker: string): Promise<Quote> {
    // Replace with real HTTP call; stub for scaffold
    return { ticker, price: 190.1, changePercent: -0.004, asOf: new Date() };
  }

  async getHistory(ticker: string, start: Date, end: Date): Promise<OHLCV[]> {
    return [
      { date: start.toISOString().slice(0, 10), open: 188, high: 191, low: 187, close: 190, volume: 88_000_000 },
      { date: end.toISOString().slice(0, 10), open: 190, high: 192, low: 189, close: 191, volume: 92_000_000 }
    ];
  }

  async getFundamentals(ticker: string): Promise<Fundamentals> {
    return { marketCap: 1.9e12, peRatio: 25.1, dividendYield: 0.007, sector: 'Technology', industry: 'Software' };
  }

  async getDividends(): Promise<{ date: string; amount: number }[]> {
    return [
      { date: '2024-05-15', amount: 0.62 },
      { date: '2024-02-15', amount: 0.62 }
    ];
  }
}
