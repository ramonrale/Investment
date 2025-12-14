const actions = [
  {
    title: 'Rebalance to targets',
    description: 'Sector tilt exceeds drift threshold. Suggest trimming Technology by 2%.'
  },
  {
    title: 'Check cash buffer',
    description: 'Cash balance is below the 2% minimum policy.'
  },
  {
    title: 'New dividend',
    description: 'VTI announced a dividend payable next week.'
  }
];

export function ActionCenter() {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">Action center</h3>
        <span className="rounded-md bg-secondary px-3 py-1 text-xs">Auto-updates</span>
      </div>
      <div className="mt-3 space-y-3 text-sm">
        {actions.map((action) => (
          <div key={action.title} className="rounded-md border bg-secondary px-3 py-2">
            <p className="font-medium">{action.title}</p>
            <p className="text-muted-foreground">{action.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
