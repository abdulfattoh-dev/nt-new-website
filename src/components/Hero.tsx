"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { stats } from "@/data/site";
import { Icon } from "./Icon";

const heroImages = [
  "/hero/0O8A0066.JPG",
  "/hero/0O8A7814.JPG",
  "/hero/0O8A7958.JPG",
  "/hero/0O8A8019.JPG",
  "/hero/0O8A9012.JPG",
  "/hero/0O8A9139.JPG",
  "/hero/0O8A9553.JPG",
  "/hero/DSC07809.JPG",
  "/hero/IMG_0128.JPG",
  "/hero/IMG_0169.JPG",
];

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-brand-gradient">
      {/* Grid pattern + glow */}
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <div
        className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-brand/20 blur-[120px]"
        aria-hidden
      />
      <div
        className="absolute -bottom-40 -left-20 h-[400px] w-[400px] rounded-full bg-blue/40 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 sm:pt-40 lg:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-[1.06fr_0.94fr]">
          <div>
            <h1 className="animate-fade-up text-3xl font-black leading-[1.05] tracking-tight uppercase text-white sm:text-5xl lg:text-6xl">
              <span className="text-gradient-brand">12 000+</span>{" "}
              muvaffaqiyatli bitiruvchi
            </h1>

            <p className="animate-fade-up mt-6 max-w-lg text-2xl leading-relaxed text-slate-300 sm:text-3xl">
              Keyingisi <span className="text-gradient-brand font-semibold">siz</span>{" "}
              boʻlishingiz mumkin!
            </p>

            <div className="animate-fade-up mt-10 flex flex-col items-start gap-4 sm:flex-row">
              <Link
                href="/#royxat"
                className="inline-flex w-full items-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand/20 transition hover:bg-brand-dark sm:w-auto"
              >
                Bepul konsultatsiya olish
                <Icon name="arrowRight" size={16} />
              </Link>
              <Link
                href="/#kurslar"
                className="w-full rounded-full bg-white/10 px-8 py-4 text-base font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20 sm:w-auto"
              >
                Kurslarni koʻrish
              </Link>
            </div>

            <div className="animate-fade-up mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-black text-white sm:text-3xl">{s.value}</div>
                  <div className="mt-1 text-sm text-slate-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero rasmlar karuseli */}
          <div className="animate-fade-up relative aspect-[6/5] overflow-hidden rounded-3xl ring-1 ring-white/10">
            {heroImages.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt="Najot Taʼlim oʻquvchilari"
                fill
                priority={i === 0}
                sizes="(max-width: 1024px) 100vw, 560px"
                className={`object-cover transition-opacity duration-1000 ease-in-out ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-linear-to-t from-navy/40 via-transparent to-transparent" />

            {/* Indikatorlar */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
              {heroImages.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  aria-label={`${i + 1}-rasm`}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active ? "w-5 bg-white" : "w-1.5 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
