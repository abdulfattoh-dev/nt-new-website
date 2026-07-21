"use client";

import { useRef, useState } from "react";
import { resultShorts } from "@/data/people";
import { Icon } from "./Icon";

export function StorySpotlight() {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  function scrollByCard(dir: 1 | -1) {
    const el = scrollRef.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap || "16");
    const step = card.getBoundingClientRect().width + gap;
    // overflow-hidden konteynerlarda native "smooth" scrollBy birinchi
    // freym'dan keyin toʻxtab qoladi — shuning uchun darhol (aniq) siljitamiz,
    // scroll-snap oʻzi kartani chetga tekislaydi.
    el.scrollBy({ left: dir * step, behavior: "auto" });
  }

  return (
    <section id="natijalar" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-bold tracking-tight uppercase text-navy sm:text-4xl">
            Oʻquvchilarimiz natijalari
          </h2>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Oldingi"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-navy transition hover:bg-slate-50"
            >
              <Icon name="arrowRight" size={14} className="rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Keyingi"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-navy transition hover:bg-slate-50"
            >
              <Icon name="arrowRight" size={14} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="-mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-hidden px-4 pb-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
        >
          {resultShorts.map((id) =>
            playingId === id ? (
              <div
                key={id}
                className="relative aspect-9/16 w-56 shrink-0 snap-start overflow-hidden rounded-2xl bg-black shadow-sm sm:w-64 lg:w-72"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1&playsinline=1&controls=0&cc_load_policy=0`}
                  title="Bitiruvchi video-hikoyasi"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  className="h-full w-full"
                />
              </div>
            ) : (
              <button
                key={id}
                type="button"
                onClick={() => setPlayingId(id)}
                className="group relative aspect-9/16 w-56 shrink-0 snap-start overflow-hidden rounded-2xl bg-slate-100 shadow-sm sm:w-64 lg:w-72"
              >
                <img
                  src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
                  }}
                  onLoad={(e) => {
                    // maxresdefault yoʻq boʻlsa YouTube xato oʻrniga 120x90'lik kichik
                    // rasm qaytaradi — bunday holatda ham hqdefault'ga oʻtamiz.
                    const img = e.currentTarget;
                    if (img.naturalWidth <= 120) {
                      img.src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
                    }
                  }}
                  alt="Bitiruvchi video-hikoyasi"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy/30 via-navy/0 to-navy/0" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand shadow-lg transition group-hover:scale-110">
                    <Icon name="play" size={20} className="text-white" />
                  </span>
                </span>
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
}
