import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/data/courses";

export const metadata: Metadata = {
  title: "Kurslar",
  description:
    "Najot Taʼlimning barcha kurslari — Dasturlash, Dizayn va Marketing yoʻnalishida intensiv va odatiy kurslar.",
};

export default function KurslarPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge="Kurslar"
          title="Oʻzingizga mos yoʻnalishni tanlang"
          subtitle="Dasturlash, sunʼiy intellekt, marketing, dizayn va data analitika yoʻnalishlarida amaliyotga yoʻnaltirilgan intensiv kurslar."
        />
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((c) => (
                <CourseCard key={c.slug} course={c} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
