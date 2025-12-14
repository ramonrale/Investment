export type Quote = {
  ticker: string;
  price: number;
  changePercent?: number;
  asOf: Date;
};

export type OHLCV = {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
};

export type Fundamentals = {
  marketCap?: number;
  peRatio?: number;
  dividendYield?: number;
  sector?: string;
  industry?: string;
};

export interface MarketDataProvider {
  id: string;
  getQuote(ticker: string): Promise<Quote>;
  getHistory(ticker: string, start: Date, end: Date): Promise<OHLCV[]>;
  getFundamentals(ticker: string): Promise<Fundamentals>;
  getDividends(ticker: string): Promise<{ date: string; amount: number }[]>;
}
