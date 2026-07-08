import Link from "next/link";
import Image from "next/image";
import type { Course } from "@/data/courses";
import { Icon } from "./Icon";

const categoryStyles: Record<string, { band: string; ink: string }> = {
  Dasturlash: { band: "bg-brand-gradient", ink: "text-white" },
  Dizayn: { band: "bg-blue-gradient", ink: "text-white" },
  Marketing: { band: "bg-green-gradient", ink: "text-navy" },
};

export function CourseCard({ course }: { course: Course }) {
  const style = categoryStyles[course.category];

  return (
    <Link
      href={`/kurslar/${course.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Band */}
      <div
        className={`relative flex items-center justify-center overflow-hidden ${
          course.squareImage ? "aspect-square" : "h-32"
        } ${course.image ? (course.squareImage ? "" : "bg-[#9fcbfc]") : style.band}`}
      >
        {course.image ? (
          <Image
            src={course.image}
            alt={course.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={`transition duration-300 group-hover:scale-105 ${
              course.squareImage ? "object-cover" : "object-contain"
            }`}
          />
        ) : (
          <>
            <div
              className="absolute inset-0 opacity-20"
              style={{ backgroundImage: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.8), transparent 45%)" }}
            />
            <Icon name={course.icon} size={44} className={`${style.ink} opacity-95`} />
            {course.featured && (
              <span className="absolute left-3.5 top-3.5 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-navy">
                TOP
              </span>
            )}
          </>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="text-xs font-bold uppercase tracking-wider text-brand">
          {course.category}
        </span>
        <h3 className="text-xl font-bold leading-tight text-navy transition-colors group-hover:text-brand">
          {course.title}
        </h3>
        <div className="flex flex-wrap gap-4">
          <span className="inline-flex items-center gap-1.5 text-sm text-slate-500">
            <Icon name="time" size={14} className="text-slate-400" />
            {course.duration}
          </span>
          {course.level && (
            <span className="inline-flex items-center gap-1.5 text-sm text-slate-500">
              <Icon name="graph" size={14} className="text-slate-400" />
              {course.level}
            </span>
          )}
        </div>

        <div className="flex-1" />

        <div className="flex items-end justify-between gap-3 border-t border-slate-100 pt-4">
          <div>
            <div className="text-xs text-slate-400">Oylik toʻlov</div>
            <div className="font-bold text-navy">{course.price.monthly}</div>
          </div>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-brand transition group-hover:bg-brand group-hover:text-white">
            <Icon name="arrowRight" size={15} />
          </span>
        </div>
      </div>
    </Link>
  );
}
