const metrics = [
  { label: 'Volatility (30d)', value: '12.3%' },
  { label: 'Max drawdown (1Y)', value: '-8.1%' },
  { label: 'Beta vs SPY', value: '0.94' },
  { label: 'VaR 95%', value: '-$2,700' }
];

export function RiskSummaryCard() {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Risk summary</p>
          <p className="text-2xl font-semibold">Stable</p>
        </div>
        <span className="rounded-md bg-emerald-50 px-3 py-1 text-xs text-emerald-700">Within guardrails</span>
      </div>
      <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-md bg-secondary px-3 py-2">
            <dt className="text-muted-foreground">{metric.label}</dt>
            <dd className="font-semibold">{metric.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
