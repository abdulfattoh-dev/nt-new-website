import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Najot Taʼlim blogi — AyTi, dasturlash, dizayn va marketing boʻyicha foydali maqolalar.",
};

// Namunaviy maqolalar — keyinchalik real kontent bilan almashtiriladi
const posts = [
  { title: "Dasturlashni qayerdan boshlash kerak?", category: "Dasturlash", date: "Tez orada" },
  { title: "2026-yilda eng talabgir AyTi kasblari", category: "Karyera", date: "Tez orada" },
  { title: "Portfolio qanday tuziladi?", category: "Maslahat", date: "Tez orada" },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge="Tez orada"
          title="Blog"
          subtitle="AyTi, dasturlash, dizayn va marketing boʻyicha foydali maqolalar va maslahatlar yaqin orada shu yerda."
        />
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => (
                <div key={p.title} className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <div className="aspect-video rounded-xl bg-slate-100" />
                  <span className="mt-5 text-xs font-semibold uppercase tracking-wider text-brand">
                    {p.category}
                  </span>
                  <h3 className="mt-2 flex-1 text-lg font-bold text-navy">{p.title}</h3>
                  <span className="mt-4 text-sm text-slate-400">{p.date}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/#kurslar"
                className="inline-block rounded-full bg-brand px-8 py-3.5 text-base font-semibold text-white transition hover:bg-brand-dark"
              >
                Kurslar bilan tanishish
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
