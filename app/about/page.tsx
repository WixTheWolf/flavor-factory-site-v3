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
              The Flavor Factory develops custom liquid and powder flavors for teams that need responsive service, reliable quality, and practical manufacturing support.
            </p>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 8 }}>
          <div className="container showcase">
            <div className="showcase-grid">
              <div>
                <SectionEyebrow>Who we are</SectionEyebrow>
                <SectionHeading>A hands-on team focused on getting your flavor right.</SectionHeading>
              </div>
              <div className="section-subtext">
                <p>
                  We work directly with product developers, purchasing teams, and plant teams to make sure flavor choices fit both sensory goals and production realities.
                </p>
                <p>
                  Our approach is straightforward: respond quickly, communicate clearly, and deliver consistent flavor performance from sample through scale-up.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 8 }}>
          <div className="container strength-grid">
            {[
              ["Fast response", "You get timely updates and a clear next step on every project."],
              ["Low minimums", "We make it easier to start and test without oversized commitments."],
              ["Custom matching", "We tune and adjust profiles to match your product target."],
              ["Consistent batches", "Reliable quality supports confident scale from pilot to production."],
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
