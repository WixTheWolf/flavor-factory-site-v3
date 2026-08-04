import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FlavorFinder } from "@/components/flavors/FlavorFinder";
import { siteImages } from "@/data/site-images";
import { PageHero } from "@/components/PageHero";
import { TimeOnPageTracker } from "@/components/AnalyticsEvents";
import { SITE_STATS } from "@/data/site-stats";

const flavorLibraryDescription = `Browse ${SITE_STATS.flavorProfileCount}+ liquid and powder flavor profiles across ${SITE_STATS.flavorFamilyCount} families.`;

export const metadata: Metadata = {
  title: "Flavor Library",
  description: flavorLibraryDescription,
  alternates: { canonical: "/flavors" },
  openGraph: {
    url: "/flavors",
    title: "Flavor Library | The Flavor Factory",
    description: flavorLibraryDescription,
    images: [
      {
        url: `/og?title=Flavor+Library&description=${SITE_STATS.flavorProfileCount}%2B+profiles+across+${SITE_STATS.flavorFamilyCount}+families`,
        width: 1200,
        height: 630,
        alt: "The Flavor Factory flavor library",
      },
    ],
  },
  twitter: {
    title: "Flavor Library | The Flavor Factory",
    description: flavorLibraryDescription,
    images: [`/og?title=Flavor+Library&description=${SITE_STATS.flavorProfileCount}%2B+profiles+across+${SITE_STATS.flavorFamilyCount}+families`],
  },
};

const BC_FLAVOR_LIBRARY = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.flavorfactory.net"},{"@type":"ListItem","position":2,"name":"Flavor Library","item":"https://www.flavorfactory.net/flavors"}]};

export default function FlavorsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BC_FLAVOR_LIBRARY) }} />
      <TimeOnPageTracker eventName="Time on page over 60s on the Flavors library" page="/flavors" />
      <Header />
      <main>
        <section className="section clean-page">
          <div className="container">
            <PageHero
              eyebrow="Flavor Library"
              title="Find a starting point."
              copy="Browse the library, shortlist a few directions, or ask us to develop something custom."
              image={siteImages.flavorsHero}
              imageAlt="Amber liquid being poured into a round glass flask"
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
