import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const sampleSeries = [
  { date: 'Mon', value: 100000 },
  { date: 'Tue', value: 101200 },
  { date: 'Wed', value: 100800 },
  { date: 'Thu', value: 102400 },
  { date: 'Fri', value: 103200 }
];

export function PortfolioValueCard() {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Portfolio value</p>
          <p className="text-2xl font-semibold">$103,200</p>
          <p className="text-sm text-emerald-600">+2.1% this week</p>
        </div>
        <div className="rounded-md bg-secondary px-3 py-1 text-xs">TWR ready</div>
      </div>
      <div className="mt-4 h-40">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={sampleSeries}>
            <XAxis dataKey="date" hide />
            <YAxis hide domain={['dataMin', 'dataMax']} />
            <Tooltip formatter={(val: number) => `$${val.toLocaleString()}`} />
            <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
