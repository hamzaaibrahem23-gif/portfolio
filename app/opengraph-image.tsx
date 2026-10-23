import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

import { profile } from "@/data/profile";

// Social preview card shown when the site is shared (LinkedIn, WhatsApp, X, Facebook…).
export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const photo = await readFile(join(process.cwd(), "public", profile.photo));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 90px",
          background: "linear-gradient(135deg, #0a0a0a 0%, #111111 60%, #2a2412 100%)",
          color: "#f5f5f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 640 }}>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "#d4af37",
              letterSpacing: 6,
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            {profile.role}
          </div>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 700, lineHeight: 1.05 }}>{profile.name}</div>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.1,
              backgroundImage: "linear-gradient(90deg, #b8860b, #d4af37, #f0d878)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {profile.title}
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#a1a1aa", marginTop: 28, lineHeight: 1.4 }}>
            Laravel · Next.js · NestJS · WordPress
          </div>
        </div>
        <div
          style={{
            display: "flex",
            padding: 6,
            borderRadius: 9999,
            background: "linear-gradient(135deg, #f0d878, #d4af37, #b8860b)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- next/og renders plain <img> */}
          <img
            src={photoSrc}
            alt=""
            width={340}
            height={340}
            style={{ borderRadius: 9999, objectFit: "cover", border: "8px solid #0a0a0a" }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
