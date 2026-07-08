import type { CSSProperties } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { CoursesSection } from "@/components/CoursesSection";
import { Mentors } from "@/components/Mentors";
import { StorySpotlight } from "@/components/StorySpotlight";
import { Locations } from "@/components/Locations";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { RegisterForm } from "@/components/RegisterForm";
import { advantages, extras, commonFaq, graduateWorkplaces, site } from "@/data/site";
import { Icon, type IconName } from "@/components/Icon";

const forYou: { icon: IconName; text: string }[] = [
  { icon: "compass", text: "Zamonaviy soha va koʻnikmalarni oʻrganishga qiziqsangiz" },
  { icon: "flame", text: "Rivojlanish uchun kuchli muhit izlayotgan boʻlsangiz" },
  {
    icon: "userCheck",
    text: "Tajribali mentorlardan bilim olib, professional kadr boʻlmoqchi boʻlsangiz",
  },
  { icon: "wrench", text: "Yangi bilimlarni amaliyot bilan mustahkamlamoqchi boʻlsangiz" },
];

const workplaceChunkSize = Math.ceil(graduateWorkplaces.length / 3);
const workplaceRows = [
  graduateWorkplaces.slice(0, workplaceChunkSize),
  graduateWorkplaces.slice(workplaceChunkSize, workplaceChunkSize * 2),
  graduateWorkplaces.slice(workplaceChunkSize * 2),
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />

        {/* Siz uchun agar */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight uppercase text-navy sm:text-4xl">
                Najot Taʼlim siz uchun, agar…
              </h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {forYou.map((item) => (
                <div
                  key={item.text}
                  className="rounded-2xl border border-brand/20 bg-brand/5 p-6"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                    <Icon name={item.icon} size={22} className="text-brand-dark" />
                  </span>
                  <p className="mt-4 font-semibold leading-snug text-navy">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nega biz */}
        <section id="nega-biz" className="scroll-mt-20 bg-navy py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight uppercase text-white sm:text-4xl">
                Nega aynan Najot Taʼlim
              </h2>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {advantages.map((a) => (
                <div
                  key={a.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-7"
                >
                  <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-brand/15">
                    <Icon name={a.icon as IconName} size={26} className="text-brand-bright" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-white">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{a.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kurslar */}
        <CoursesSection />

        {/* Mentorlar */}
        <Mentors />

        {/* Nafaqat kurslar */}
        <section id="imkoniyatlar" className="scroll-mt-20 bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight uppercase text-navy sm:text-4xl">
                Bizda nafaqat kurslar, balki…
              </h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {extras.map((e) => (
                <div
                  key={e.title}
                  className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10">
                    <Icon name={e.icon as IconName} size={22} className="text-brand-dark" />
                  </span>
                  <div>
                    <h3 className="font-bold leading-snug text-navy">{e.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{e.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Oʻquvchilarimizning oʻzgarish hikoyasi */}
        <StorySpotlight />

        {/* Biz haqimizda */}
        <section id="biz-haqimizda" className="scroll-mt-20 bg-navy py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-brand-bright">
                  Biz haqimizda
                </span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight uppercase text-white sm:text-4xl">
                  2018-yildan beri yoshlarni kelajak kasblariga tayyorlaymiz
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-300">
                  Oʻzbekistondagi yetakchi AyTi taʼlim markazi. Bitiruvchilarni
                  ish bilan taʼminlash uchun “TechJobs” kompaniyasiga asos
                  solindi — hozirda 2000+ oʻquvchimiz TechJobs orqali ishga
                  joylashgan.
                </p>
                <blockquote className="mt-6 border-l-4 border-brand pl-5">
                  <footer className="text-sm font-semibold uppercase tracking-wider text-brand-bright">
                    Najot Taʼlim — ilm va tajriba ulashamiz
                  </footer>
                </blockquote>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { v: "6 ta", l: "Filial" },
                  { v: "300+", l: "Xodim" },
                  { v: "2018", l: "Faoliyat boshlangan yil" },
                  { v: "12 000+", l: "Bitiruvchi" },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <div className="text-3xl font-black text-brand-bright">{s.v}</div>
                    <div className="mt-1 text-sm text-slate-400">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 border-t border-white/10 pt-12">
              <h3 className="text-center text-xl font-bold text-white">
                Bitiruvchilarimiz ish joylari
              </h3>
            </div>
          </div>

          {/* Bitiruvchilarimiz ish joylari — chegaradan chiqib, butun kenglikka choʻziladi */}
          <div className="mt-10 space-y-4">
            {workplaceRows.map((row, i) => (
              <div key={i} className="overflow-hidden">
                <div
                  className={`flex w-max gap-4 ${
                    i % 2 === 0 ? "animate-marquee-left" : "animate-marquee-right"
                  }`}
                  style={{ "--marquee-duration": `${row.length * 2.4}s` } as CSSProperties}
                >
                  {[...row, ...row].map((w, idx) => (
                    <div
                      key={`${w.name}-${idx}`}
                      className="flex h-24 w-44 shrink-0 items-center justify-center rounded-2xl bg-white p-4 shadow-sm sm:h-28 sm:w-52"
                    >
                      <Image
                        src={w.logo}
                        alt={w.name}
                        width={160}
                        height={64}
                        className="h-auto max-h-12 w-auto max-w-full object-contain sm:max-h-14"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bizning manzillar */}
        <Locations />

        {/* Roʻyxatdan oʻtish (CTA) */}
        <section id="royxat" className="scroll-mt-20 bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[32px] bg-brand-gradient">
              <div className="absolute inset-0 bg-grid" aria-hidden />
              <div className="relative grid items-center gap-12 p-8 sm:p-14 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="text-white">
                  <h2 className="text-3xl font-black leading-none tracking-tight uppercase sm:text-4xl">
                    Bepul konsultatsiyaga hoziroq yoziling
                  </h2>
                  <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-300">
                    Kurslarimiz haqida batafsil maʼlumot oling
                  </p>
                  <a
                    href={site.phoneHref}
                    className="mt-6 inline-flex items-center gap-3 text-lg font-semibold text-white"
                  >
                    <Icon name="call" size={20} className="text-brand-bright" />
                    {site.phone}
                  </a>
                </div>
                <div>
                  <RegisterForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-wider text-brand">
                FAQ
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight uppercase text-navy sm:text-4xl">
                Koʻp soʻraladigan savollar
              </h2>
            </div>
            <div className="mt-12">
              <Faq items={commonFaq} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
