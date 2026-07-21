import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Najot Taʼlim — Zamonaviy AyTi taʼlim markazi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0f1826 0%, #092145 60%, #013682 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#0eb182",
            }}
          />
          <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: 1 }}>NAJOT TAʼLIM</div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.15,
            maxWidth: 920,
          }}
        >
          Zamonaviy AyTi taʼlim markazi
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 30, color: "#94a3b8" }}>
          12 000+ muvaffaqiyatli bitiruvchi
        </div>
      </div>
    ),
    { ...size }
  );
}
