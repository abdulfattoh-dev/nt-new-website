"use client";

import { useState } from "react";
import { branchLocations, site } from "@/data/site";
import { Icon } from "./Icon";

export function Locations() {
  const [active, setActive] = useState(branchLocations[0].name);
  const branch = branchLocations.find((b) => b.name === active) ?? branchLocations[0];

  return (
    <section id="filiallar" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <h2 className="text-3xl font-bold tracking-tight uppercase text-navy sm:text-4xl">
            Bizning manzillar
          </h2>
          <div className="flex items-center gap-3">
            <label htmlFor="branch-select" className="text-sm font-medium text-slate-500">
              Filialni tanlang
            </label>
            <select
              id="branch-select"
              value={active}
              onChange={(e) => setActive(e.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-navy outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
            >
              {branchLocations.map((b) => (
                <option key={b.name} value={b.name}>
                  {b.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.7fr_1fr]">
          <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
            <iframe
              key={branch.name}
              title={`Najot Taʼlim — ${branch.name} xarita`}
              src={branch.mapEmbedUrl}
              width="100%"
              height="100%"
              className="min-h-[420px] w-full"
              loading="lazy"
            />
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-navy">{branch.city}</h3>

            <div className="mt-6 space-y-5">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Manzil
                </div>
                <div className="mt-1.5 text-navy">{branch.address}</div>
              </div>

              <div className="border-t border-slate-100 pt-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Moʻljal
                </div>
                <div className="mt-1.5 text-navy">{branch.landmark ?? "–"}</div>
              </div>

              <div className="border-t border-slate-100 pt-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Ish vaqti
                </div>
                <div className="mt-1.5 flex items-center gap-2 text-navy">
                  <Icon name="time" size={15} className="text-brand" />
                  {branch.hours}
                </div>
              </div>

              <div className="border-t border-slate-100 pt-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Telefon
                </div>
                <a
                  href={site.phoneHref}
                  className="mt-1.5 flex items-center gap-2 font-semibold text-navy transition hover:text-brand"
                >
                  <Icon name="call" size={14} className="text-brand" />
                  {site.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
