import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionEyebrow, SectionHeading } from "@/components/ui";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: 48 }}>
          <div className="container">
            <SectionEyebrow>About</SectionEyebrow>
            <SectionHeading>Family-owned flavor manufacturing in Norco, California.</SectionHeading>
            <p className="section-subtext" style={{ marginTop: 16, maxWidth: 820 }}>
              The Flavor Factory develops and manufactures custom liquid and powder flavors for food, beverage, nutraceutical,
              oral care, and pharmaceutical product lines.
            </p>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 8 }}>
          <div className="container showcase">
            <div className="showcase-grid">
              <div>
                <SectionEyebrow>How we work</SectionEyebrow>
                <SectionHeading>Clear communication and practical problem solving.</SectionHeading>
              </div>
              <div className="section-subtext">
                <p>
                  We work directly with customers to build flavor systems that fit their formula, process, and schedule.
                </p>
                <p>
                  Our team focuses on quick sample cycles, dependable manufacturing, and consistent results from first run to repeat production.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 8 }}>
          <div className="container strength-grid">
            {[
              ["Fast sample response", "Short sample timelines help your team evaluate directions without delay."],
              ["Flexible production", "Low minimums and scalable manufacturing support different stages of growth."],
              ["Custom flavor matching", "Bring a benchmark flavor and we can develop toward your profile goals."],
              ["Batch-to-batch consistency", "Reliable production controls keep flavor performance stable over time."],
            ].map(([title, text]) => (
              <div key={title} className="strength-card">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
