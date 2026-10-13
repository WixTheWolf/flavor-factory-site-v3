import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { SITE_STATS } from "@/data/site-stats";

const flavorLibraryDescription = `Browse ${SITE_STATS.flavorProfileCount}+ liquid and powder flavor profiles across ${SITE_STATS.flavorFamilyCount} families. Filter by format, declaration, and industry. Custom development available for any direction.`;

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
    description: `Browse ${SITE_STATS.flavorProfileCount}+ liquid and powder flavor profiles across ${SITE_STATS.flavorFamilyCount} families. Custom development available.`,
    images: [`/og?title=Flavor+Library&description=${SITE_STATS.flavorProfileCount}%2B+profiles+across+${SITE_STATS.flavorFamilyCount}+families`],
  },
};
import { Footer } from "@/components/layout/Footer";
import { FlavorLibrary } from "@/components/flavors/FlavorLibrary";
import { CTA } from "@/components/CTA";
import { familySummaries, libraryItems } from "@/lib/flavor-library";
import { siteImages } from "@/data/site-images";
import { PageHero } from "@/components/PageHero";
import { TimeOnPageTracker } from "@/components/AnalyticsEvents";


const BC_FLAVOR_LIBRARY = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.flavorfactory.net"},{"@type":"ListItem","position":2,"name":"Flavor Library","item":"https://www.flavorfactory.net/flavors"}]};
export default function FlavorsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BC_FLAVOR_LIBRARY) }} />
      <TimeOnPageTracker eventName="Time on page over 60s on the Flavors library" page="/flavors" />
      <Header />
      <main>
        <PageHero
          eyebrow="Our Flavors"
          title="Find a starting point."
          accent="We'll build the rest."
          copy="The library gives you something to react to. Custom development, flavor matching, and reformulation are part of every conversation."
          image={siteImages.flavorsHero}
          imageAlt="Amber liquid being poured into a round glass flask, warm studio light"
          imagePosition="center 30%"
          primaryHref="/request-samples"
          primaryLabel="Request a Custom Sample"
          secondaryHref="/industries"
          secondaryLabel="View Industries"
        />
        <section className="section clean-page flavor-library-section">
          <div className="container">
            <FlavorLibrary items={libraryItems()} families={familySummaries()} profileCount={SITE_STATS.flavorProfileCount} />
          </div>
        </section>
        <CTA
          eyebrow="Not in the library?"
          title="Tell us the flavor. We'll build it for your base."
          copy="The library is a set of starting points. Custom development, flavor matching and reformulation are part of every project, with first samples in 3-5 business days once your brief is confirmed."
          href="/request-samples"
          label="Request a Custom Sample"
        />
      </main>
      <Footer />
    </>
  );
}
