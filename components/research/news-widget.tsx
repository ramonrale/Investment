const headlines = [
  {
    title: 'FOMC holds rates; market eyes earnings season',
    source: 'MarketWatch'
  },
  {
    title: 'Tech mega-cap earnings drive futures higher',
    source: 'Bloomberg'
  }
];

export function NewsWidget() {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">News & events</h3>
        <span className="rounded-md bg-secondary px-3 py-1 text-xs">Live</span>
      </div>
      <div className="mt-3 space-y-2 text-sm">
        {headlines.map((headline) => (
          <div key={headline.title} className="rounded-md bg-secondary px-3 py-2">
            <p className="font-medium">{headline.title}</p>
            <p className="text-muted-foreground">{headline.source}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
