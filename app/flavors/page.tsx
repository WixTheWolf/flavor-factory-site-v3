import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FlavorFinder } from "@/components/flavors/FlavorFinder";
import { siteImages } from "@/data/site-images";
import { PageHero } from "@/components/PageHero";
import { AppImage } from "@/components/ui/AppImage";

export default function FlavorsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section clean-page">
          <div className="container">
            <PageHero
              eyebrow="Our Flavors"
              title="Explore common flavor directions."
              copy="Start with a family, narrow by application, then request samples. The library is a helpful starting point; custom development, matching, and reformulation are part of what we do."
              image={siteImages.flavorsHero}
              imageAlt="Citrus and liquid flavor composition"
              primaryHref="/request-samples"
              primaryLabel="Request Samples"
              secondaryHref="/industries"
              secondaryLabel="View Industries"
              imagePosition="center 40%"
            />
            <div className="page-accent-image">
              <AppImage
                src={siteImages.flavorsAccent}
                alt="Citrus slices, berries, and botanicals in motion"
                sizes="(max-width: 980px) calc(100vw - 40px), 1240px"
              />
            </div>
            <FlavorFinder />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
