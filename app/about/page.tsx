import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionEyebrow, SectionHeading } from "@/components/ui";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="container simple-panel">
            <SectionEyebrow>About The Flavor Factory</SectionEyebrow>
            <SectionHeading>A dedicated custom manufacturer in Norco, California</SectionHeading>
            <p className="section-subtext" style={{ marginTop: 16 }}>
              We are a custom manufacturer of high quality liquid and powder flavor solutions for all industries.
              Our focus is simple: reliable flavor development, clear communication, and practical support from sample to production.
            </p>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0, paddingBottom: 80 }}>
          <div className="container strength-grid">
            {[
              ["Mission", "Bring customer service back to the flavor industry."],
              ["Capabilities", "Custom liquid and powder flavor development and manufacturing."],
              ["Service", "Fast sample response and direct communication."],
              ["Support", "Low minimum order options with production-ready follow-through."],
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
