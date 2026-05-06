import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "The Flavor Factory | Custom Flavor Systems",
  description:
    "Premium B2B flavor formulation and manufacturing for beverages, nutraceuticals, confections, dairy, savory applications, oral care, and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#F4EFE5] text-[#1E1E1A] antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
