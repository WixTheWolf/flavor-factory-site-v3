import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Flavor Library",
  description:
    "Browse 148+ liquid and powder flavor profiles across 17 families. Filter by format, declaration, and industry. Custom development available for any direction.",
  alternates: { canonical: "/flavors" },
  openGraph: {
    url: "/flavors",
    title: "Flavor Library | The Flavor Factory",
    description:
      "Browse 148+ liquid and powder flavor profiles across 17 families. Filter by format, declaration, and industry. Custom development available for any direction.",
    images: [
      {
        url: "/og?title=Flavor+Library&description=148%2B+profiles+across+17+families",
        width: 1200,
        height: 630,
        alt: "The Flavor Factory flavor library",
      },
    ],
  },
  twitter: {
    title: "Flavor Library | The Flavor Factory",
    description:
      "Browse 148+ liquid and powder flavor profiles across 17 families. Custom development available.",
    images: ["/og?title=Flavor+Library&description=148%2B+profiles+across+17+families"],
  },
};
import { Footer } from "@/components/layout/Footer";
import { FlavorFinder } from "@/components/flavors/FlavorFinder";
import { siteImages } from "@/data/site-images";
import { PageHero } from "@/components/PageHero";

export default function FlavorsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section clean-page">
          <div className="container">
            <PageHero
              eyebrow="Our Flavors"
              title="Find a starting point. We'll build the rest."
              copy="The library gives you something to react to. Custom development, flavor matching, and reformulation are part of every conversation."
              image={siteImages.flavorsHero}
              imageAlt="Amber liquid being poured into a round glass flask, warm studio light"
              imagePosition="center 30%"
              primaryHref="/request-samples"
              primaryLabel="Request a Sample"
              secondaryHref="/industries"
              secondaryLabel="View Industries"
            />
            <FlavorFinder />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
