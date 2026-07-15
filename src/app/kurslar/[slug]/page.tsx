import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { StorySpotlight } from "@/components/StorySpotlight";
import { GraduateWorkplaces } from "@/components/GraduateWorkplaces";
import { EnrollProvider } from "@/components/enroll/EnrollProvider";
import { EnrollButton } from "@/components/enroll/EnrollButton";
import { courses, getCourse } from "@/data/courses";
import { commonFaq } from "@/data/site";
import { Icon } from "@/components/Icon";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return { title: "Kurs topilmadi" };
  return {
    title: course.title,
    description: course.subtitle,
  };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const faqItems = [...(course.extraFaq ?? []), ...commonFaq];
  const skillsMid = course.skills ? Math.ceil(course.skills.length / 2) : 0;
  const skillsLeft = course.skills?.slice(0, skillsMid) ?? [];
  const skillsRight = course.skills?.slice(skillsMid) ?? [];

  return (
    <EnrollProvider>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-brand-gradient">
          <div className="absolute inset-0 bg-grid" aria-hidden />
          <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-brand/20 blur-[120px]" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pt-40 lg:px-8">
            <Link href="/#kurslar" className="text-sm font-medium text-slate-300 transition hover:text-white">
              ← Barcha kurslar
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                {course.category}
              </span>
              {course.level && (
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/20">
                  {course.level}
                </span>
              )}
            </div>
            <h1 className="mt-5 max-w-3xl text-3xl font-black leading-tight tracking-tight uppercase text-white sm:text-4xl md:text-5xl">
              {course.tagline}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-slate-300">{course.subtitle}</p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <EnrollButton
                courseName={course.title}
                className="rounded-full bg-brand px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand/20 transition hover:bg-brand-dark"
              >
                Roʻyxatdan oʻtish
              </EnrollButton>
              <div className="flex items-center gap-2 text-slate-300">
                <Icon name="time" size={17} />
                {course.duration}
              </div>
            </div>
          </div>
        </section>

        {/* Kimlar uchun */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight uppercase text-navy">
              Bu kurs kimlar uchun?
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {course.forWhom.map((w) => (
                <div key={w.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-brand/10">
                    <Icon name={w.icon} size={26} className="text-brand" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-navy">{w.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{w.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nimalarni oʻrganasiz */}
        <section className="bg-slate-50 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand">
              Dastur tarkibi
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight uppercase text-navy">
              Kursda nimalarni oʻrganasiz?
            </h2>
            <div className="mt-8 flex flex-col gap-5">
              {course.learn.map((l, i) => (
                <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                  <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-xl font-bold text-navy">{l.title}</h3>
                    <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                      {l.items.length} ta mavzu
                    </span>
                  </div>
                  <div className="grid gap-x-7 gap-y-2.5 sm:grid-cols-2">
                    {l.items.map((it, j) => (
                      <div key={j} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700">
                        <Icon name="check" size={16} className="mt-0.5 shrink-0 text-brand" />
                        {it}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Koʻnikmalar */}
        {course.skills && (
          <section className="bg-navy py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-bright">
                Koʻnikmalar
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight uppercase text-white">
                Sohani oʻrganib qanday koʻnikmalarga ega boʻlasiz?
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[skillsLeft, skillsRight].map((col, ci) => (
                  <ul key={ci} className="flex flex-col gap-4">
                    {col.map((s) => (
                      <li
                        key={s}
                        className="flex items-start gap-3.5 rounded-2xl border border-white/10 bg-white/5 p-5"
                      >
                        <Icon name="check" size={18} className="mt-0.5 shrink-0 text-brand-bright" />
                        <span className="text-[15px] leading-relaxed text-white/90">{s}</span>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Daromad */}
        {course.salary && (
          <section className="bg-slate-50 py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <span className="text-sm font-semibold uppercase tracking-wider text-brand">
                Daromad
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight uppercase text-navy sm:text-4xl">
                Bitiruvchilarning oʻrtacha oylik daromadi
              </h2>
              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                  <div className="text-sm text-slate-500">Eng past maosh</div>
                  <div className="mt-1.5 text-4xl font-black tracking-tight text-navy">
                    {course.salary.min}
                  </div>
                </div>
                <div className="rounded-2xl bg-brand-gradient p-8 text-white shadow-lg shadow-brand/20">
                  <div className="text-sm text-white/80">Oʻrtacha maosh</div>
                  <div className="mt-1.5 text-4xl font-black tracking-tight">
                    {course.salary.avg}
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                  <div className="text-sm text-slate-500">Eng yuqori maosh</div>
                  <div className="mt-1.5 text-4xl font-black tracking-tight text-navy">
                    {course.salary.max}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Oʻquvchilarimiz natijalari */}
        <StorySpotlight />

        {/* Bitiruvchilarimiz ish joylari */}
        <GraduateWorkplaces />

        {/* Minimum noutbuk talablari */}
        {course.laptop && (
          <section className="bg-white py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <span className="text-sm font-semibold uppercase tracking-wider text-brand">
                    Texnik talablar
                  </span>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight uppercase text-navy sm:text-4xl">
                    Kurs uchun minimum noutbuk
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-slate-600">
                    Darslarda qulay ishlash uchun quyidagi konfiguratsiya tavsiya etiladi.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Protsessor", value: course.laptop.cpu, icon: "cpu" as const },
                    { label: "Tezkor xotira (RAM)", value: course.laptop.ram, icon: "graph" as const },
                    { label: "Asosiy xotira", value: course.laptop.storage, icon: "gem" as const, wide: !course.laptop.os },
                    ...(course.laptop.os
                      ? [{ label: "Operatsion tizim", value: course.laptop.os, icon: "cpu" as const, wide: false }]
                      : []),
                  ].map((s) => (
                    <div
                      key={s.label}
                      className={`rounded-2xl border border-slate-100 bg-white p-6 shadow-sm ${
                        "wide" in s && s.wide ? "col-span-2" : ""
                      }`}
                    >
                      <Icon name={s.icon} size={26} className="text-brand" />
                      <div className="mt-3.5 mb-1 text-sm text-slate-500">{s.label}</div>
                      <div className="text-lg font-bold text-navy">{s.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Kurs narxi */}
        <section id="royxat" className="scroll-mt-20 bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-brand">
                Kurs narxi
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight uppercase text-navy sm:text-4xl">
                {course.price.regions ? "Toʻlov variantlari" : "Toʻlov shartlari"}
              </h2>
            </div>

            {course.price.regions ? (
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {course.price.regions.map((r) => (
                  <div
                    key={r.region}
                    className={`rounded-2xl p-8 ${
                      r.highlight
                        ? "bg-navy text-white shadow-lg"
                        : "border border-slate-200 bg-white text-navy shadow-sm"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold">{r.region}</h3>
                      {r.highlight && (
                        <span className="rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                          Mashhur
                        </span>
                      )}
                    </div>
                    {r.monthly && (
                      <div className="mt-4 flex items-baseline gap-2">
                        <span className="text-4xl font-black text-brand-bright">{r.monthly}</span>
                        <span className={`text-sm ${r.highlight ? "text-slate-300" : "text-slate-500"}`}>
                          / oyiga
                        </span>
                      </div>
                    )}
                    <div className="mt-5 flex flex-col gap-3">
                      {r.split && (
                        <div
                          className={`flex items-center justify-between border-b pb-3 ${
                            r.highlight ? "border-white/10" : "border-slate-100"
                          }`}
                        >
                          <span className={`text-sm ${r.highlight ? "text-slate-300" : "text-slate-500"}`}>
                            Ikkiga boʻlib
                          </span>
                          <span className="text-sm font-bold">{r.split}</span>
                        </div>
                      )}
                      <div
                        className={`flex items-center justify-between ${
                          r.split ? "" : `border-b pb-3 ${r.highlight ? "border-white/10" : "border-slate-100"}`
                        }`}
                      >
                        <span className={`text-sm ${r.highlight ? "text-slate-300" : "text-slate-500"}`}>
                          Bittada toʻliq
                        </span>
                        <span className="text-sm font-bold">{r.full}</span>
                      </div>
                    </div>
                    <EnrollButton
                      courseName={course.title}
                      className={`mt-6 block w-full rounded-full px-6 py-3 text-center text-sm font-semibold transition ${
                        r.highlight
                          ? "bg-brand text-white hover:bg-brand-dark"
                          : "bg-slate-100 text-navy hover:bg-slate-200"
                      }`}
                    >
                      Roʻyxatdan oʻtish
                    </EnrollButton>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mx-auto mt-10 max-w-md rounded-2xl bg-navy p-8 text-white shadow-lg">
                <div className="text-sm text-slate-300">Oylik toʻlov</div>
                <div className="mt-1 text-4xl font-black text-brand-bright">{course.price.monthly}</div>
                {course.price.full && (
                  <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="text-sm text-slate-300">Bittada toʻliq</span>
                    <span className="text-sm font-bold">{course.price.full}</span>
                  </div>
                )}
                {course.price.note && (
                  <p className="mt-4 text-sm text-slate-400">{course.price.note}</p>
                )}
                <EnrollButton
                  courseName={course.title}
                  className="mt-6 block w-full rounded-full bg-brand px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-brand-dark"
                >
                  Roʻyxatdan oʻtish
                </EnrollButton>
              </div>
            )}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight uppercase text-navy">
              Koʻp soʻraladigan savollar
            </h2>
            <div className="mt-12">
              <Faq items={faqItems} />
            </div>
          </div>
        </section>

        {/* Yakuniy CTA */}
        <section className="relative overflow-hidden bg-brand">
          <div className="absolute inset-0 bg-grid opacity-10" aria-hidden />
          <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div>
              <h2 className="text-3xl font-black uppercase leading-tight tracking-tight text-navy sm:text-4xl">
                Zamonaviy kasblargacha 1 qadam qoldi
              </h2>
              <p className="mt-3 text-lg font-medium text-brand-dark">
                {course.title} kursi uchun hoziroq roʻyxatdan oʻting!
              </p>
            </div>
            <EnrollButton
              courseName={course.title}
              className="shrink-0 rounded-full bg-navy px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-navy-deep"
            >
              Roʻyxatdan oʻtish
            </EnrollButton>
          </div>
        </section>
      </main>
      <Footer />
    </EnrollProvider>
  );
}
