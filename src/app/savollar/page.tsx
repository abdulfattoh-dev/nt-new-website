import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Faq } from "@/components/Faq";
import { commonFaq } from "@/data/site";

export const metadata: Metadata = {
  title: "Koʻp soʻraladigan savollar",
  description: "Najot Taʼlim haqida koʻp soʻraladigan savollar va javoblar.",
};

export default function SavollarPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge="FAQ"
          title="Koʻp soʻraladigan savollar"
          subtitle="Najot Taʼlim haqida eng koʻp beriladigan savollarga javoblarni shu yerdan toping."
        />
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Faq items={commonFaq} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
