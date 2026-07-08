import { testimonials } from "@/data/people";
import { Avatar } from "./Avatar";
import { Icon } from "./Icon";

// Diqqat: rasm oʻrniga Avatar (bosh harf) ishlatiladi — haqiqiy foto
// qoʻshilganda docs/photo-guideline.md ga mos rasm bilan almashtiring.
const spotlight = testimonials.filter((t) =>
  ["Kamola Ismoilova", "Sevara Xolmatova"].includes(t.name)
);
const videoStory = testimonials.find((t) => t.name === "Oybek Nazarov");

export function StorySpotlight() {
  return (
    <section id="natijalar" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight uppercase text-navy sm:text-4xl">
            Oʻquvchilarimiz natijalari
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {spotlight.map((s) => (
            <div
              key={s.name}
              className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm"
            >
              <div className="flex h-44 items-center justify-center bg-gradient-to-br from-slate-100 to-slate-50">
                <Avatar name={s.name} image={s.image} size={72} />
              </div>
              <div className="p-6">
                <div className="text-lg font-bold text-navy">{s.name}</div>
                <div className="mt-0.5 text-sm font-semibold text-brand">
                  {s.course} · {s.company}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  “{s.quote}”
                </p>
              </div>
            </div>
          ))}

          {/* Video hikoya */}
          {videoStory?.video && (
            <a
              href={videoStory.video}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex min-h-[280px] flex-col items-center justify-center gap-3.5 overflow-hidden rounded-3xl bg-navy shadow-sm"
            >
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0 12px, rgba(255,255,255,0.02) 12px 24px)",
                }}
              />
              <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-brand transition group-hover:scale-105">
                <Icon name="play" size={26} className="text-white" />
              </span>
              <span className="relative text-sm text-slate-300">
                Video · {videoStory.name} hikoyasi
              </span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
