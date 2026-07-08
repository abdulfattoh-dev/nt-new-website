import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";
import { navLinks } from "@/data/nav";

const oferta = { href: "/documents/oferta-nt.pdf", label: "Ommaviy oferta" };

// Ijtimoiy tarmoq belgilari (Feather Icons, MIT litsenziya) — brend ikonka
// toʻplamida savdo belgili logotiplar mavjud emas.
const socialIcons: Record<string, React.ReactNode> = {
  Facebook: (
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  ),
  Instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </>
  ),
  LinkedIn: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  Telegram: (
    <>
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </>
  ),
  YouTube: (
    <>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </>
  ),
};

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/najottalim/" },
  { label: "Instagram", href: "https://www.instagram.com/najottalim/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/najottalim/" },
  { label: "Telegram", href: "https://t.me/s/najottalim" },
  { label: "YouTube", href: "https://www.youtube.com/@najottalim" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-slate-300">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: "url(/brand/grid.png)", backgroundSize: "280px" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="flex h-full flex-col items-start">
            <Image
              src="/brand/symbol-green.svg"
              alt="Najot Taʼlim"
              width={2001}
              height={1348}
              className="h-10 w-auto"
            />
            <a
              href={site.phoneHref}
              className="mt-5 block text-lg font-bold text-white transition hover:text-brand"
            >
              {site.phone}
            </a>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              {site.addressLines[0]}
              <br />
              {site.addressLines[1]}
            </p>
            <p className="mt-auto pt-6 text-sm text-slate-500">
              © {site.foundedYear}–2026 {site.name}. Barcha huquqlar himoyalangan.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((p) => (
                <li key={p.href}>
                  {p.external ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-brand"
                    >
                      {p.label}
                    </a>
                  ) : (
                    <Link href={p.href} className="transition hover:text-brand">
                      {p.label}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <a
                  href={oferta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-brand"
                >
                  {oferta.label}
                </a>
              </li>
            </ul>
          </div>

          <div className="flex h-full flex-col justify-between">
            <div className="flex justify-end gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-slate-400 transition hover:border-brand hover:text-brand"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {socialIcons[s.label]}
                  </svg>
                </a>
              ))}
            </div>
            <div className="flex justify-end gap-3">
              <a
                href="/documents/tasdiqnoma.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Image
                  src="/documents/tasdiqnoma-thumb.png"
                  alt="Tasdiqnoma"
                  width={353}
                  height={500}
                  className="h-28 w-auto rounded-lg border border-white/10 object-cover transition group-hover:border-brand"
                />
                <span className="mt-2 block text-xs text-slate-400 transition group-hover:text-brand">
                  Tasdiqnoma
                </span>
              </a>
              <a
                href="/documents/it-park-rezidenti.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Image
                  src="/documents/it-park-rezidenti-thumb.png"
                  alt="IT Park rezidenti"
                  width={500}
                  height={346}
                  className="h-28 w-auto rounded-lg border border-white/10 object-cover transition group-hover:border-brand"
                />
                <span className="mt-2 block text-xs text-slate-400 transition group-hover:text-brand">
                  IT Park rezidenti
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
