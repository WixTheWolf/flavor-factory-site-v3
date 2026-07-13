import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

async function getFont(request: NextRequest, file: string): Promise<ArrayBuffer | null> {
  try {
    return await fetch(new URL(`/fonts/${file}`, request.url)).then((response) =>
      response.arrayBuffer()
    );
  } catch {
    return null;
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "Custom Flavor Manufacturer";
  const description = searchParams.get("description") ?? "";

  const [playfair400, playfairItalic, playfair700] = await Promise.all([
    getFont(request, "playfair-display-latin-400-normal.woff2"),
    getFont(request, "playfair-display-latin-400-italic.woff2"),
    getFont(request, "playfair-display-latin-700-normal.woff2"),
  ]);

  const fonts: {
    name: string;
    data: ArrayBuffer;
    weight: 400 | 700;
    style: "normal" | "italic";
  }[] = [];

  if (playfair400) {
    fonts.push({ name: "Playfair Display", data: playfair400, weight: 400, style: "normal" });
  }

  if (playfairItalic) {
    fonts.push({ name: "Playfair Display", data: playfairItalic, weight: 400, style: "italic" });
  }

  if (playfair700) {
    fonts.push({ name: "Playfair Display", data: playfair700, weight: 700, style: "normal" });
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: "#1A1614",
          color: "#ECE8E1",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 76px",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            color: "#ECE8E1",
          }}
        >
          <div
            style={{
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: 24,
              fontStyle: "italic",
              lineHeight: 1,
              marginLeft: 116,
            }}
          >
            The
          </div>
          <div
            style={{
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: 48,
              fontWeight: 400,
              letterSpacing: 1.2,
              lineHeight: 1.05,
            }}
          >
            Flavor Factory
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              color: "#ECE8E1",
              fontSize: title.length > 42 ? "52px" : "68px",
              fontFamily: "Playfair Display, Georgia, serif",
              fontWeight: 700,
              lineHeight: 1.02,
              maxWidth: "920px",
            }}
          >
            {title}
          </div>
          {description ? (
            <div
              style={{
                color: "rgba(236, 232, 225, 0.72)",
                fontSize: "24px",
                lineHeight: 1.45,
                maxWidth: "820px",
              }}
            >
              {description}
            </div>
          ) : null}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "rgba(236, 232, 225, 0.58)",
            fontSize: "18px",
          }}
        >
          <span>Norco, CA</span>
          <span>Custom Liquid &amp; Powder Flavors</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts,
    }
  );
}
