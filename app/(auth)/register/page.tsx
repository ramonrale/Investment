export default function RegisterPage() {
  return (
    <div className="mx-auto max-w-md rounded-lg border bg-white p-6 shadow-sm">
      <h1 className="text-2xl font-semibold">Create account</h1>
      <p className="text-sm text-muted-foreground">Supports email/password and OAuth providers.</p>
      <form className="mt-4 space-y-3">
        <input className="w-full rounded-md border px-3 py-2" placeholder="Email" type="email" />
        <input className="w-full rounded-md border px-3 py-2" placeholder="Password" type="password" />
        <input className="w-full rounded-md border px-3 py-2" placeholder="Confirm password" type="password" />
        <button className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">Create account</button>
      </form>
    </div>
  );
}
