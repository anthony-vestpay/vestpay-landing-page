const stats = [
  { value: "$2B+", label: "Transaction volume processed" },
  { value: "99.9%", label: "Uptime guarantee" },
  { value: "50ms", label: "Average API response" },
  { value: "10k+", label: "Successful disbursements" },
];

export function StatsSection() {
  return (
    <section className="py-16 border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
