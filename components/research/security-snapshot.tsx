import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';

const priceSeries = [
  { date: '2024-06-01', value: 180 },
  { date: '2024-06-15', value: 190 },
  { date: '2024-07-01', value: 200 },
  { date: '2024-07-15', value: 212 }
];

export function SecuritySnapshot() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="rounded-lg border bg-white p-4 shadow-sm md:col-span-2">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Security overview</p>
            <p className="text-2xl font-semibold">AAPL</p>
            <p className="text-sm text-muted-foreground">Apple Inc. • Technology Hardware</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-semibold">$212.04</p>
            <p className="text-sm text-emerald-600">+1.3% today</p>
          </div>
        </div>
        <div className="mt-4 h-52">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={priceSeries}>
              <Tooltip formatter={(val: number) => `$${val.toFixed(2)}`} />
              <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="rounded-lg border bg-white p-4 shadow-sm">
        <h3 className="text-sm font-semibold">Fundamentals</h3>
        <dl className="mt-3 space-y-2 text-sm">
          <div className="flex justify-between">
            <dt className="text-muted-foreground">Market cap</dt>
            <dd className="font-medium">$3.1T</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-muted-foreground">P/E</dt>
            <dd className="font-medium">28.4x</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-muted-foreground">Dividend yield</dt>
            <dd className="font-medium">0.5%</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-muted-foreground">Beta vs SPY</dt>
            <dd className="font-medium">1.12</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
