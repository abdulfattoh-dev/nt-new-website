import type { Metadata } from "next";
import { neueHaas } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://najottalim.uz"),
  title: {
    default: "Najot Taʼlim — Zamonaviy AyTi taʼlim markazi",
    template: "%s | Najot Taʼlim",
  },
  description:
    "Najot Taʼlim — Oʻzbekistondagi yetakchi AyTi taʼlim markazi. Dasturlash, dizayn va marketing yoʻnalishlarida amaliy kurslar. 12 000+ muvaffaqiyatli bitiruvchi.",
  keywords: [
    "Najot Taʼlim",
    "AyTi kurslar",
    "dasturlash",
    "frontend",
    "backend",
    "kiberxavfsizlik",
    "SMM",
    "data analitika",
  ],
  openGraph: {
    title: "Najot Taʼlim — Zamonaviy AyTi taʼlim markazi",
    description:
      "12 000+ muvaffaqiyatli bitiruvchi. Dasturlash, dizayn va marketing kurslari.",
    url: "https://najottalim.uz",
    siteName: "Najot Taʼlim",
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Najot Taʼlim — Zamonaviy AyTi taʼlim markazi",
    description:
      "12 000+ muvaffaqiyatli bitiruvchi. Dasturlash, dizayn va marketing kurslari.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className={`${neueHaas.variable} h-full antialiased`}>
      <body className="min-h-full bg-white text-navy">{children}</body>
    </html>
  );
}
