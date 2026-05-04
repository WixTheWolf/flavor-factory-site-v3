import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "The Flavor Factory | Custom Liquid & Powder Flavors",
    template: "%s | The Flavor Factory",
  },
  description:
    "Southern California flavor manufacturer creating custom liquid and powder flavor solutions for food, beverage, nutraceutical, oral care, and pharmaceutical brands.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
