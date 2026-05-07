import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "The Flavor Factory | Custom Liquid & Powder Flavors",
    template: "%s | The Flavor Factory",
  },
  description:
    "Family-owned custom flavor manufacturer in Norco, CA. Custom liquid and powder flavor solutions for food, beverage, nutraceutical, oral care, pharmaceutical, and related applications.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
