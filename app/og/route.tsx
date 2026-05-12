import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

async function getPlayfairFont(): Promise<ArrayBuffer> {
  const css = await fetch(
    "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700",
    { headers: { "User-Agent": "Mozilla/5.0 (compatible; OgImageBot/1.0)" } }
  ).then((r) => r.text());

  const match = css.match(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/);
  if (!match) throw new Error("Playfair Display font URL not found in CSS response");
  return fetch(match[1]).then((r) => r.arrayBuffer());
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "Custom Flavor Manufacturer";
  const description = searchParams.get("description") ?? "";

  let fontData: ArrayBuffer | null = null;
  try {
    fontData = await getPlayfairFont();
  } catch {
    // Render with system font if Google Fonts is unavailable
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: "#12382f",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand mark */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#c9852c",
            }}
          />
          <span
            style={{
              color: "#c9852c",
              fontSize: "19px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            The Flavor Factory
          </span>
        </div>

        {/* Title + description */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: title.length > 42 ? "50px" : "64px",
              fontFamily: fontData ? "Playfair Display" : "serif",
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: "920px",
            }}
          >
            {title}
          </div>
          {description ? (
            <div
              style={{
                color: "rgba(255, 255, 255, 0.6)",
                fontSize: "24px",
                lineHeight: 1.5,
                maxWidth: "820px",
              }}
            >
              {description}
            </div>
          ) : null}
        </div>

        {/* Footer */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <span style={{ color: "rgba(255, 255, 255, 0.35)", fontSize: "18px" }}>
            Norco, CA
          </span>
          <div
            style={{
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.2)",
            }}
          />
          <span style={{ color: "rgba(255, 255, 255, 0.35)", fontSize: "18px" }}>
            Custom Liquid &amp; Powder Flavors
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: fontData
        ? [{ name: "Playfair Display", data: fontData, weight: 700, style: "normal" }]
        : [],
    }
  );
}
