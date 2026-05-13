import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { ShortlistWidget } from "@/components/ShortlistWidget";
import "./globals.css";

const BASE = "https://flavor-factory-site-v3.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "The Flavor Factory | Custom Liquid & Powder Flavors",
    template: "%s | The Flavor Factory",
  },
  description:
    "Family-owned custom flavor manufacturer in Norco, CA. Custom liquid and powder flavor solutions for food, beverage, nutraceutical, oral care, pharmaceutical, and related applications.",
  openGraph: {
    siteName: "The Flavor Factory",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og?title=Custom+Flavor+Manufacturer",
        width: 1200,
        height: 630,
        alt: "The Flavor Factory - Custom Liquid & Powder Flavor Manufacturer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700;0,9..40,800;1,9..40,700&family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <ShortlistWidget />
        <Analytics />
      </body>
    </html>
  );
}
