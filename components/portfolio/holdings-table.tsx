const holdings = [
  { ticker: 'AAPL', shares: 120, avgCost: 155.4, marketPrice: 192.1, sector: 'Technology' },
  { ticker: 'MSFT', shares: 80, avgCost: 268.1, marketPrice: 420.8, sector: 'Technology' },
  { ticker: 'VTI', shares: 200, avgCost: 204.3, marketPrice: 260.4, sector: 'ETF' }
];

export function HoldingsTable() {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">Holdings</h3>
        <p className="text-xs text-muted-foreground">Derived from transactions; refreshed nightly</p>
      </div>
      <div className="mt-3 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="text-left text-muted-foreground">
            <tr>
              <th className="py-2 pr-4">Ticker</th>
              <th className="py-2 pr-4">Shares</th>
              <th className="py-2 pr-4">Avg cost</th>
              <th className="py-2 pr-4">Market price</th>
              <th className="py-2 pr-4">Market value</th>
              <th className="py-2 pr-4">Unrealized P&L</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((holding) => {
              const marketValue = holding.marketPrice * holding.shares;
              const costBasis = holding.avgCost * holding.shares;
              const pnl = marketValue - costBasis;
              return (
                <tr key={holding.ticker} className="border-t">
                  <td className="py-2 pr-4 font-medium">{holding.ticker}</td>
                  <td className="py-2 pr-4">{holding.shares}</td>
                  <td className="py-2 pr-4">${holding.avgCost.toFixed(2)}</td>
                  <td className="py-2 pr-4">${holding.marketPrice.toFixed(2)}</td>
                  <td className="py-2 pr-4">${marketValue.toLocaleString()}</td>
                  <td
                    className={`py-2 pr-4 ${pnl >= 0 ? 'text-emerald-600' : 'text-red-600'}`}
                  >
                    {pnl >= 0 ? '+' : '-'}${Math.abs(pnl).toLocaleString()}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
