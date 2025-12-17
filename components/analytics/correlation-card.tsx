const correlations = [
  { pair: 'Portfolio vs SPY', value: 0.86 },
  { pair: 'Portfolio vs QQQ', value: 0.72 },
  { pair: 'Portfolio vs VTI', value: 0.91 }
];

export function CorrelationCard() {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">Correlation</h3>
        <span className="rounded-md bg-secondary px-3 py-1 text-xs">Beta-ready</span>
      </div>
      <ul className="mt-3 space-y-2 text-sm">
        {correlations.map((item) => (
          <li key={item.pair} className="flex items-center justify-between rounded-md bg-secondary px-3 py-2">
            <span>{item.pair}</span>
            <span className="font-semibold">{item.value.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
