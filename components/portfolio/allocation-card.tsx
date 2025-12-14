const allocations = [
  { label: 'Technology', weight: 0.38 },
  { label: 'Financials', weight: 0.16 },
  { label: 'Healthcare', weight: 0.14 },
  { label: 'Industrials', weight: 0.12 },
  { label: 'Other', weight: 0.2 }
];

export function AllocationCard() {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Asset allocation</p>
          <p className="text-2xl font-semibold">Sector view</p>
        </div>
        <span className="rounded-md bg-secondary px-3 py-1 text-xs">Drift watch</span>
      </div>
      <div className="mt-4 space-y-3">
        {allocations.map((allocation) => (
          <div key={allocation.label} className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <span>{allocation.label}</span>
              <span className="font-medium">{Math.round(allocation.weight * 100)}%</span>
            </div>
            <div className="h-2 rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: `${allocation.weight * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
