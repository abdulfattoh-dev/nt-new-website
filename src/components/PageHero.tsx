export function PageHero({
  badge,
  title,
  subtitle,
}: {
  badge?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-gradient">
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-brand/20 blur-[120px]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pt-40 lg:px-8">
        {badge && (
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white ring-1 ring-white/20 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-brand-bright" />
            {badge}
          </span>
        )}
        <h1 className="mt-5 max-w-3xl text-3xl font-black leading-tight tracking-tight uppercase text-white sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {subtitle && <p className="mt-5 max-w-2xl text-lg text-slate-300">{subtitle}</p>}
      </div>
    </section>
  );
}
