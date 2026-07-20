"use client";

import { useRef, useState } from "react";
import { courses } from "@/data/courses";
import { CourseCard } from "./CourseCard";
import { Icon } from "./Icon";

// Bosh sahifada avval koʻrsatiladigan kurslar
const featuredSlugs = ["dasturlash-foundation", "start-junior", "sun-iy-intellekt-asoslari"];

const featuredCourses = featuredSlugs
  .map((slug) => courses.find((c) => c.slug === slug))
  .filter((c): c is (typeof courses)[number] => Boolean(c));

const restCourses = courses.filter((c) => !featuredSlugs.includes(c.slug));

export function CoursesSection() {
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const visibleCourses = expanded ? [...featuredCourses, ...restCourses] : featuredCourses;

  function toggleExpanded() {
    const willExpand = !expanded;
    setExpanded(willExpand);
    if (!willExpand) {
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <section ref={sectionRef} id="kurslar" className="scroll-mt-20 bg-slate-50 py-20 sm:py-28">
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
          {visibleCourses.map((c) => (
            <CourseCard key={c.slug} course={c} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={toggleExpanded}
            className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-semibold text-white transition hover:bg-brand-dark"
          >
            {expanded ? "Kamroq koʻrsatish" : "Barcha kurslarni koʻrish"}
            <Icon
              name="arrowRight"
              size={14}
              className={`transition-transform ${expanded ? "-rotate-90" : "rotate-90"}`}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
