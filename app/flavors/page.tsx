import { Header } from "@/components/layout/Header";
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
              imageAlt="Amber liquid being poured into a round glass flask — warm studio light"
              imagePosition="center 30%"
              primaryHref="/request-samples"
              primaryLabel="Request Samples"
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
