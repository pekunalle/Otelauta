export function AppHeader() {
  return (
    <header className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-subtle">Metallikitara</p>
        <h1 className="font-display text-4xl font-medium tracking-tight text-fg sm:text-5xl">OTELAUTA</h1>
      </div>
      <p className="max-w-sm text-sm text-muted">
        Valitse vire, juurisävel ja kuvio. Otelaudalla näkyvät kuvioon kuuluvat nuotit — juuri merkitty erikseen.
      </p>
    </header>
  );
}
