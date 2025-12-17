const metrics = [
  { label: 'Time-weighted return (YTD)', value: '8.4%' },
  { label: 'Money-weighted return (ITD)', value: '9.1%' },
  { label: 'Benchmark (SPY) YTD', value: '7.2%' }
];

export function PerformanceCard() {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">Performance</h3>
        <span className="rounded-md bg-secondary px-3 py-1 text-xs">TWR/IRR</span>
      </div>
      <dl className="mt-3 space-y-2 text-sm">
        {metrics.map((metric) => (
          <div key={metric.label} className="flex justify-between rounded-md bg-secondary px-3 py-2">
            <dt className="text-muted-foreground">{metric.label}</dt>
            <dd className="font-semibold">{metric.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
