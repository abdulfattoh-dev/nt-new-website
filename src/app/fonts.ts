import localFont from "next/font/local";

// Neue Haas Grotesk Display — Najot Taʼlim brend shrifti (self-hosted)
export const neueHaas = localFont({
  src: [
    { path: "../fonts/NeueHaasDisplay-Light.woff2", weight: "300", style: "normal" },
    { path: "../fonts/NeueHaasDisplay-Roman.woff2", weight: "400", style: "normal" },
    { path: "../fonts/NeueHaasDisplay-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/NeueHaasDisplay-Bold.woff2", weight: "700", style: "normal" },
    { path: "../fonts/NeueHaasDisplay-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-haas",
  display: "swap",
});
