import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RegisterForm } from "@/components/RegisterForm";
import { Faq } from "@/components/Faq";
import { courses, getCourse } from "@/data/courses";
import { commonFaq, graduateCompanies } from "@/data/site";
import { Icon } from "@/components/Icon";

function youtubeId(url: string): string {
  const m = url.match(/(?:youtu\.be\/|v=)([\w-]{11})/);
  return m ? m[1] : "";
}

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

  return (
    <>
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
              <Link
                href="#royxat"
                className="rounded-full bg-brand px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand/20 transition hover:bg-brand-dark"
              >
                Roʻyxatdan oʻtish
              </Link>
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
              {course.title} kimlar uchun?
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {course.forWhom.map((w) => (
                <div key={w} className="flex items-start gap-3 rounded-xl bg-slate-50 p-5">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    <Icon name="check" size={12} />
                  </span>
                  <span className="text-navy">{w}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nimalarni oʻrganasiz */}
        <section className="bg-slate-50 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight uppercase text-navy">
              Kursda nimalarni oʻrganasiz?
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {course.learn.map((l, i) => (
                <div key={i} className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 font-bold text-brand">
                    {i + 1}
                  </div>
                  <h3 className="mt-4 font-bold text-navy">{l.title}</h3>
                  {l.text && <p className="mt-2 text-sm leading-relaxed text-slate-600">{l.text}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Koʻnikmalar + Maosh */}
        {(course.skills || course.salary) && (
          <section className="bg-white py-20 sm:py-24">
            <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
              {course.skills && (
                <div>
                  <h2 className="text-3xl font-bold tracking-tight uppercase text-navy">
                    Qanday koʻnikmalarga ega boʻlasiz?
                  </h2>
                  <ul className="mt-6 space-y-3">
                    {course.skills.map((s) => (
                      <li key={s} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand" />
                        <span className="text-navy">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {course.salary && (
                <div className="rounded-2xl bg-navy p-8 text-white">
                  <h3 className="text-xl font-bold">Sohadagi oʻrtacha oylik daromad</h3>
                  <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-black text-brand-bright">{course.salary.min}</div>
                      <div className="mt-1 text-xs text-slate-400">Eng past</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-brand-bright">{course.salary.avg}</div>
                      <div className="mt-1 text-xs text-slate-400">Oʻrtacha</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-brand-bright">{course.salary.max}</div>
                      <div className="mt-1 text-xs text-slate-400">Eng yuqori</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Bitiruvchilar bilan suhbat + kompaniyalar */}
        <section className="bg-slate-50 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {course.graduateVideos && course.graduateVideos.length > 0 && (
              <>
                <h2 className="text-3xl font-bold tracking-tight uppercase text-navy">
                  Bitiruvchilarimiz bilan suhbat
                </h2>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {course.graduateVideos.map((v) => {
                    const id = youtubeId(v);
                    return (
                      <a
                        key={v}
                        href={v}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative aspect-video overflow-hidden rounded-2xl bg-navy shadow-sm"
                      >
                        {id && (
                          <img
                            src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                            alt="Bitiruvchi bilan suhbat"
                            className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100"
                          />
                        )}
                        <span className="absolute inset-0 flex items-center justify-center">
                          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-brand shadow-lg transition group-hover:scale-110">
                            <Icon name="play" size={22} />
                          </span>
                        </span>
                      </a>
                    );
                  })}
                </div>
              </>
            )}

            <h3 className={`text-xl font-bold text-navy ${course.graduateVideos?.length ? "mt-14" : ""}`}>
              Bitiruvchilarimiz ishlayotgan kompaniyalar
            </h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {graduateCompanies.map((c) => (
                <span
                  key={c}
                  className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-navy shadow-sm ring-1 ring-slate-100"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Minimum noutbuk talablari */}
        {course.laptop && (
          <section className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold tracking-tight uppercase text-navy">
                Kurs uchun minimum noutbuk talablari
              </h2>
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { label: "Protsessor", value: course.laptop.cpu },
                  { label: "Tezkor xotira (RAM)", value: course.laptop.ram },
                  { label: "Asosiy xotira", value: course.laptop.storage },
                  ...(course.laptop.os ? [{ label: "Operatsion tizim", value: course.laptop.os }] : []),
                ].map((s) => (
                  <div key={s.label} className="rounded-2xl bg-slate-50 p-6">
                    <div className="text-sm text-slate-500">{s.label}</div>
                    <div className="mt-1 font-bold text-navy">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Narx + Roʻyxat */}
        <section id="royxat" className="scroll-mt-20 relative overflow-hidden bg-brand-gradient py-20 sm:py-24">
          <div className="absolute inset-0 bg-grid" aria-hidden />
          <div className="relative mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="text-white">
              <h2 className="text-3xl font-bold tracking-tight uppercase sm:text-4xl">Kurs narxi</h2>
              <div className="mt-8 rounded-2xl bg-white/5 p-8 ring-1 ring-white/10">
                <div className="text-sm text-slate-300">Oylik toʻlov</div>
                <div className="mt-1 text-4xl font-black text-white">{course.price.monthly}</div>
                {course.price.full && (
                  <div className="mt-4 border-t border-white/10 pt-4">
                    <div className="text-sm text-slate-300">Bittada toʻlov</div>
                    <div className="mt-1 text-2xl font-bold text-brand-bright">{course.price.full}</div>
                  </div>
                )}
                {course.price.note && (
                  <p className="mt-4 text-sm text-slate-400">{course.price.note}</p>
                )}
              </div>
            </div>
            <div>
              <RegisterForm courseName={course.title} />
            </div>
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
      </main>
      <Footer />
    </>
  );
}
