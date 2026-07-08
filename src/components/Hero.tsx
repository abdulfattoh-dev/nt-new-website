import Link from "next/link";
import { stats } from "@/data/site";
import { Icon } from "./Icon";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-gradient">
      {/* Grid pattern + glow */}
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <div
        className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-brand/20 blur-[120px]"
        aria-hidden
      />
      <div
        className="absolute -bottom-40 -left-20 h-[400px] w-[400px] rounded-full bg-blue/40 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 sm:pt-40 lg:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-[1.06fr_0.94fr]">
          <div>
            <h1 className="animate-fade-up text-3xl font-black leading-[1.05] tracking-tight uppercase text-white sm:text-5xl lg:text-6xl">
              <span className="text-gradient-brand">12 000+</span>{" "}
              muvaffaqiyatli bitiruvchi
            </h1>

            <p className="animate-fade-up mt-6 max-w-lg text-2xl leading-relaxed text-slate-300 sm:text-3xl">
              Keyingisi <span className="text-gradient-brand font-semibold">siz</span>{" "}
              boʻlishingiz mumkin!
            </p>

            <div className="animate-fade-up mt-10 flex flex-col items-start gap-4 sm:flex-row">
              <Link
                href="/#royxat"
                className="inline-flex w-full items-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand/20 transition hover:bg-brand-dark sm:w-auto"
              >
                Bepul konsultatsiya olish
                <Icon name="arrowRight" size={16} />
              </Link>
              <Link
                href="/#kurslar"
                className="w-full rounded-full bg-white/10 px-8 py-4 text-base font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20 sm:w-auto"
              >
                Kurslarni koʻrish
              </Link>
            </div>

            <div className="animate-fade-up mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-black text-white sm:text-3xl">{s.value}</div>
                  <div className="mt-1 text-sm text-slate-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Rasm uchun placeholder — docs/photo-guideline.md ga mos real foto bilan almashtiriladi */}
          <div className="animate-fade-up flex aspect-[6/5] flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed border-white/20 bg-white/5 text-slate-400">
            <Icon name="image" size={40} className="text-white/25" />
            <span className="text-sm font-medium">Rasm shu yerga qoʻshiladi</span>
          </div>
        </div>
      </div>
    </section>
  );
}
