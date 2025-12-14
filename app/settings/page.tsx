export default function SettingsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Settings</h1>
      <div className="rounded-lg border bg-white p-4 shadow-sm">
        <h3 className="text-sm font-semibold">Data providers</h3>
        <p className="text-sm text-muted-foreground">Add API keys for premium data or stay on mock data for development.</p>
        <div className="mt-3 space-y-2 text-sm">
          <div>
            <label className="block text-muted-foreground">Provider A (mock/free)</label>
            <input className="mt-1 w-full rounded-md border px-3 py-2" placeholder="Optional" />
          </div>
          <div>
            <label className="block text-muted-foreground">Provider B (polygon-like)</label>
            <input className="mt-1 w-full rounded-md border px-3 py-2" placeholder="PROVIDER_B_API_KEY" />
          </div>
        </div>
      </div>
    </div>
  );
}
