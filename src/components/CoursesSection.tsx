import { courses } from "@/data/courses";
import { CourseCard } from "./CourseCard";

export function CoursesSection() {
  return (
    <section id="kurslar" className="scroll-mt-20 bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            Kurslar
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight uppercase text-navy sm:text-4xl">
            Oʻzingizga mos yoʻnalishni tanlang
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Dasturlash, sunʼiy intellekt, marketing, dizayn va data
            analitika yoʻnalishlarida amaliyotga yoʻnaltirilgan intensiv
            kurslar
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <CourseCard key={c.slug} course={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
