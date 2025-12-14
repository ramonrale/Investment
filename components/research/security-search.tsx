'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

const mockResults = [
  { ticker: 'AAPL', name: 'Apple Inc.', sector: 'Technology' },
  { ticker: 'MSFT', name: 'Microsoft Corporation', sector: 'Technology' },
  { ticker: 'VTI', name: 'Vanguard Total Stock Market ETF', sector: 'ETF' }
];

export function SecuritySearch() {
  const [query, setQuery] = useState('');
  const results = mockResults.filter((item) => item.ticker.includes(query.toUpperCase()) || item.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <Search className="h-5 w-5 text-muted-foreground" />
        <input
          className="w-full rounded-md border px-3 py-2 text-sm"
          placeholder="Search tickers (e.g., AAPL, VTI)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="mt-3 divide-y text-sm">
        {results.map((item) => (
          <div key={item.ticker} className="flex items-center justify-between py-2">
            <div>
              <p className="font-semibold">{item.ticker}</p>
              <p className="text-muted-foreground">{item.name}</p>
            </div>
            <div className="flex gap-2">
              <span className="rounded-md bg-secondary px-3 py-1 text-xs">{item.sector}</span>
              <button className="rounded-md border px-3 py-1 text-xs">Add</button>
            </div>
          </div>
        ))}
        {results.length === 0 && <p className="py-2 text-muted-foreground">No matches yet</p>}
      </div>
    </div>
  );
}
