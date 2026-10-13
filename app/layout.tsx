import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { BotIdClient } from "botid/client";
import { SampleTray } from "@/components/SampleTray";
import { MobileContactBar } from "@/components/MobileContactBar";
import { CursorGlow } from "@/components/CursorGlow";
import "./globals.css";
import "./redesign.css";

const BASE = "https://www.flavorfactory.net";

// Self-hosted, preloaded fonts with metric-matched fallbacks, so text doesn't jump when they load: 3 files instead of 7.
// Each family is one variable file per style; weights are capped at the ones the site was designed with (heavier CSS
// weights render as 700). Keep Playfair preloaded: without it the large headlines reflow when it arrives.
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap", variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "The Flavor Factory | Custom Liquid & Powder Flavor Manufacturer - Norco, CA",
    template: "%s | The Flavor Factory",
  },
  description:
    "The Flavor Factory is a family-owned custom liquid and powder flavor manufacturer in Norco, California. B2B flavor development for food, beverage, nutraceutical, oral care, pharmaceutical, and bakery. Low minimums. First samples in 3-5 business days.",
  applicationName: "The Flavor Factory",
  authors: [{ name: "The Flavor Factory", url: BASE }],
  generator: "Next.js",
  keywords: [
    "custom flavor manufacturer",
    "liquid flavor manufacturer",
    "powder flavor manufacturer",
    "flavor manufacturer California",
    "custom flavor development",
    "beverage flavor manufacturer",
    "nutraceutical flavor manufacturer",
    "flavor masking",
    "flavor matching",
    "flavor house Norco CA",
    "B2B flavor manufacturer",
    "organic flavor manufacturer",
    "custom food flavoring",
    "flavor supplier California",
  ],
  openGraph: {
    siteName: "The Flavor Factory",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og?title=Custom+Flavor+Manufacturer",
        width: 1200,
        height: 630,
        alt: "The Flavor Factory - Custom Liquid & Powder Flavor Manufacturer in Norco, CA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@flavorfactory",
    creator: "@flavorfactory",
  },
  verification: {
    google: "5Z2AJUwG1-KbdLbWFDZ5kzzTVOrSa_8uuF4DA961LvM",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/icon-maskable.svg", color: "#1A1614" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <BotIdClient
          protect={[
            { path: "/api/sample-request", method: "POST" },
            { path: "/api/customer-feedback", method: "POST" },
          ]}
        />
      </head>
      <body>
        {children}
        <SampleTray />
        <MobileContactBar />
        <CursorGlow />
        <Analytics />
      </body>
    </html>
  );
}
