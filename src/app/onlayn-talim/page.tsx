import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Onlayn taʼlim",
  description:
    "Najot Taʼlim onlayn taʼlim yoʻnalishi — istalgan joydan, oʻzingizga qulay vaqtda oʻrganing.",
};

const perks = [
  { title: "Istalgan joydan", text: "Uydan yoki ishdan turib, internet orqali darslarda qatnashing." },
  { title: "Yozib olingan darslar", text: "Darsni oʻtkazib yuborsangiz, yozuvini istagan vaqtda koʻring." },
  { title: "Mentor qoʻllab-quvvatlashi", text: "Onlayn formatda ham savollaringizga mentorlar javob beradi." },
];

export default function OnlaynTalimPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge="Tez orada"
          title="Onlayn taʼlim"
          subtitle="Najot Taʼlim sifatidagi taʼlimni endi masofadan turib oling. Onlayn kurslar yaqin orada ishga tushadi."
        />
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-3">
              {perks.map((p) => (
                <div key={p.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-navy">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 rounded-2xl bg-slate-50 p-8 text-center">
              <h2 className="text-2xl font-bold text-navy">Birinchilardan boʻlib xabardor boʻling</h2>
              <p className="mx-auto mt-3 max-w-xl text-slate-600">
                Onlayn kurslar ishga tushganda sizni xabardor qilamiz. Hozircha
                offline kurslarimiz bilan tanishing.
              </p>
              <Link
                href="/#kurslar"
                className="mt-6 inline-block rounded-full bg-brand px-8 py-3.5 text-base font-semibold text-white transition hover:bg-brand-dark"
              >
                Kurslarni koʻrish
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
