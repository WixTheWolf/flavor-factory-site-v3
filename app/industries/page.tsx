import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { industries } from "@/components/site-data";
import { SectionEyebrow, SectionHeading } from "@/components/ui";

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: 48 }}>
          <div className="container">
            <SectionEyebrow>Industries</SectionEyebrow>
            <SectionHeading>Practical flavor support across industries.</SectionHeading>
            <p className="section-subtext" style={{ marginTop: 16, maxWidth: 880 }}>
              We serve food & beverage, confectionery, nutraceutical, oral care, personal care, bakery,
              popcorn, animal food, and more.
            </p>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 8, paddingBottom: 80 }}>
          <div className="container strength-grid" style={{ gridTemplateColumns: "repeat(3, minmax(0,1fr))" }}>
            {industries.map((industry) => (
              <article key={industry.slug} className="strength-card">
                <h3 style={{ fontSize: "1.2rem" }}>{industry.name}</h3>
                <p>{industry.summary}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
