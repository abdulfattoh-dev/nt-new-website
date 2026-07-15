import Image from "next/image";
import type { CSSProperties } from "react";
import { graduateWorkplaces } from "@/data/site";

const workplaceChunkSize = Math.ceil(graduateWorkplaces.length / 3);
const workplaceRows = [
  graduateWorkplaces.slice(0, workplaceChunkSize),
  graduateWorkplaces.slice(workplaceChunkSize, workplaceChunkSize * 2),
  graduateWorkplaces.slice(workplaceChunkSize * 2),
];

export function GraduateWorkplaces() {
  return (
    <section className="bg-navy py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight uppercase text-white sm:text-4xl">
          Bitiruvchilarimiz ish joylari
        </h2>
      </div>

      {/* Chegaradan chiqib, butun kenglikka choʻziladi */}
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
  );
}
