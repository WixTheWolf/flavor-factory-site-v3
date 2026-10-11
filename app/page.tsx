import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Industries } from "@/components/Industries";
import { OrganizationSchema } from "@/components/OrganizationSchema";
import { LandingHero } from "@/components/landing/LandingHero";
import { RequestSection } from "@/components/landing/RequestSection";
import { WhatWeDo } from "@/components/landing/WhatWeDo";
import { FlavorFamilies } from "@/components/landing/FlavorFamilies";
import { FactoryGallery } from "@/components/landing/FactoryGallery";
import { CertStrip } from "@/components/landing/CertStrip";
import { FinalCta } from "@/components/landing/FinalCta";

export const metadata: Metadata = {
  title: "Custom Liquid & Powder Flavors",
  description:
    "Family-owned custom flavor manufacturer in Norco, CA. Liquid and powder flavors built for real products: your base, processing, and label. Samples in 3-5 days.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Custom Liquid & Powder Flavors | The Flavor Factory",
    description:
      "Family-owned custom flavor manufacturer in Norco, CA. Liquid and powder flavors built for real products: your base, processing, and label. Samples in 3-5 days.",
    images: [
      {
        url: "/og?title=Custom+Liquid+%26+Powder+Flavors",
        width: 1200,
        height: 630,
        alt: "The Flavor Factory - Custom Liquid & Powder Flavor Manufacturer",
      },
    ],
  },
  twitter: {
    title: "Custom Liquid & Powder Flavors | The Flavor Factory",
    description:
      "Family-owned custom flavor manufacturer in Norco, CA. Liquid and powder flavors built for real products. Samples in 3-5 days.",
    images: ["/og?title=Custom+Liquid+%26+Powder+Flavors"],
  },
};

const HOME_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.flavorfactory.net/#webpage",
  url: "https://www.flavorfactory.net",
  name: "The Flavor Factory - Custom Liquid & Powder Flavor Manufacturer, Norco CA",
  description: "Family-owned custom flavor manufacturer in Norco, CA. Liquid and powder flavors built for your base, process, and label. Low minimums. First samples in 3-5 business days.",
  isPartOf: { "@id": "https://www.flavorfactory.net/#website" },
  about: { "@id": "https://www.flavorfactory.net/#organization" },
  significantLink: [
    "https://www.flavorfactory.net/flavors",
    "https://www.flavorfactory.net/request-samples",
    "https://www.flavorfactory.net/capabilities",
    "https://www.flavorfactory.net/industries",
    "https://www.flavorfactory.net/about",
    "https://www.flavorfactory.net/process",
    "https://www.flavorfactory.net/contact",
    "https://www.flavorfactory.net/faq",
    "https://www.flavorfactory.net/resources",
  ],
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.flavorfactory.net" }],
  },
};

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOME_SCHEMA) }} />
      <Header />
      <main className="new-home landing">
        {/* Order: request samples first, then what we do and offer, then proof. */}
        <LandingHero />
        <RequestSection />
        <WhatWeDo />
        <FlavorFamilies />
        <Industries />
        <FactoryGallery />
        <CertStrip />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
