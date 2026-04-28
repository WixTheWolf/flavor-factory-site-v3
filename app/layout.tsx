import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Flavor Factory",
  description: "Family-owned flavor manufacturer creating high quality liquid and powder flavor solutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
