"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { navLinks } from "@/data/nav";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Najot Taʼlim" className="shrink-0">
          <Image
            src={solid ? "/brand/logo-central.svg" : "/brand/logo-central-white.svg"}
            alt="Najot Taʼlim"
            width={2001}
            height={429}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        {/* Desktop menu */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) =>
            l.external ? (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-medium transition-colors hover:text-brand ${
                  solid ? "text-navy" : "text-white/90"
                }`}
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-brand ${
                  solid ? "text-navy" : "text-white/90"
                }`}
              >
                {l.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={site.phoneHref}
            className={`text-sm font-semibold transition-colors hover:text-brand ${
              solid ? "text-navy" : "text-white"
            }`}
          >
            {site.phone}
          </a>
          <Link
            href="/#royxat"
            className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark"
          >
            Roʻyxatdan oʻtish
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden ${solid ? "text-navy" : "text-white"}`}
          aria-label="Menyu"
          aria-expanded={open}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((l) =>
              l.external ? (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-navy hover:bg-slate-50"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-navy hover:bg-slate-50"
                >
                  {l.label}
                </Link>
              )
            )}
            <a href={site.phoneHref} className="block px-3 py-2.5 text-base font-semibold text-brand">
              {site.phone}
            </a>
            <Link
              href="/#royxat"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-full bg-brand px-5 py-3 text-center text-base font-semibold text-white"
            >
              Roʻyxatdan oʻtish
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
