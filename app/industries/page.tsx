import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Flavor development for bakery, beverage, confectionery, dairy, nutraceutical, oral care, pharmaceutical, popcorn, savory, and syrup applications. Application-specific from the first sample.",
  alternates: { canonical: "/industries" },
  openGraph: {
    url: "/industries",
    title: "Industries We Serve | The Flavor Factory",
    description:
      "Flavor development for bakery, beverage, confectionery, dairy, nutraceutical, oral care, pharmaceutical, popcorn, savory, and syrup applications.",
    images: [
      {
        url: "/og?title=Industries+We+Serve",
        width: 1200,
        height: 630,
        alt: "The Flavor Factory - industries served",
      },
    ],
  },
  twitter: {
    title: "Industries We Serve | The Flavor Factory",
    description:
      "Flavor development for bakery, beverage, dairy, nutraceutical, oral care, pharmaceutical, popcorn, savory, and syrup.",
    images: ["/og?title=Industries+We+Serve"],
  },
};
import { Footer } from "@/components/layout/Footer";
import { industries } from "@/data/industries";
import { siteImages } from "@/data/site-images";
import { AppImage } from "@/components/ui/AppImage";
import { PageHero } from "@/components/PageHero";

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section clean-page">
          <div className="container">
            <PageHero
              eyebrow="Industries"
              title="Ten categories. One development standard."
              copy="Which means consistent process, response time, and technical depth whether you're building for bakery or pharmaceuticals. Application constraints are the starting point, not a constraint to work around."
              image={siteImages.industriesHero}
              imageAlt="Editorial arrangement of food and beverage products across ten flavor categories"
              imagePosition="center center"
              primaryHref="/request-samples"
              primaryLabel="Request Samples"
              secondaryHref="/flavors"
              secondaryLabel="Explore Flavors"
            />

            <div className="industry-clean-grid">
              {industries.map((item) => (
                <article key={item.key} className="industry-clean-card">
                  <div className="industry-clean-image-wrap">
                    <AppImage
                      src={item.heroImage}
                      alt={item.name}
                      className="industry-clean-image"
                      sizes="(max-width: 720px) calc(100vw - 32px), (max-width: 1024px) calc((100vw - 56px) / 2), 504px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  <div className="industry-clean-body">
                    <h3>{item.name}</h3>
                    <div className="industry-pressure">{item.pressurePoint}</div>
                    <p>{item.summary}</p>

                    <div className="industry-clean-tags">
                      {item.applications.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <a className="industry-card-cta" href={`/industries/${item.key}`}>
                      {item.ctaLabel}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
