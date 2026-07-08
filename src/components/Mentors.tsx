import Image from "next/image";
import { mentors } from "@/data/people";
import { Icon } from "@/components/Icon";

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function Mentors() {
  return (
    <section id="mentorlar" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight uppercase text-navy sm:text-4xl">
            Bizning ustozlar
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mentors.map((m) => (
            <div
              key={m.name}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-52 w-full overflow-hidden bg-brand-gradient">
                {m.image ? (
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl font-black text-white/90">
                      {initials(m.name)}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="font-bold text-navy">{m.name}</h3>
                <p className="text-sm font-medium text-brand">{m.role}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
                    <Icon name="time" size={12} />
                    {m.experience}
                  </span>
                  <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand-dark">
                    {m.direction}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-600">{m.bio}</p>

                <div className="mt-4 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
                  {m.companies.map((c) => (
                    <span
                      key={c}
                      className="rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
