const transactions = [
  { id: 1, date: '2024-07-01', type: 'Buy', ticker: 'AAPL', quantity: 50, price: 190.2, fees: 1.2 },
  { id: 2, date: '2024-07-02', type: 'Dividend', ticker: 'VTI', quantity: 0, price: 0.82, fees: 0 },
  { id: 3, date: '2024-07-03', type: 'Sell', ticker: 'MSFT', quantity: 10, price: 420.0, fees: 1.5 }
];

export function TransactionsTable() {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">Transactions</h3>
        <p className="text-xs text-muted-foreground">CSV import and broker connectors supported</p>
      </div>
      <div className="mt-3 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="text-left text-muted-foreground">
            <tr>
              <th className="py-2 pr-4">Date</th>
              <th className="py-2 pr-4">Type</th>
              <th className="py-2 pr-4">Ticker</th>
              <th className="py-2 pr-4">Quantity</th>
              <th className="py-2 pr-4">Price</th>
              <th className="py-2 pr-4">Fees</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn) => (
              <tr key={txn.id} className="border-t">
                <td className="py-2 pr-4">{txn.date}</td>
                <td className="py-2 pr-4">{txn.type}</td>
                <td className="py-2 pr-4 font-medium">{txn.ticker}</td>
                <td className="py-2 pr-4">{txn.quantity}</td>
                <td className="py-2 pr-4">${txn.price.toFixed(2)}</td>
                <td className="py-2 pr-4">${txn.fees.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
