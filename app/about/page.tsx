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
            <SectionHeading>Family owned. Flavor focused.</SectionHeading>
            <p className="section-subtext" style={{ marginTop: 16, maxWidth: 820 }}>
              The Flavor Factory is a family-owned manufacturer focused on producing high-quality liquid and powder flavors with modern capability, real responsiveness, and clean execution.
            </p>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 8 }}>
          <div className="container showcase">
            <div className="showcase-grid">
              <div>
                <SectionEyebrow>Who we are</SectionEyebrow>
                <SectionHeading>A working team, not a distant corporation.</SectionHeading>
              </div>
              <div className="section-subtext">
                <p>
                  We work closely with customers to build flavor systems that actually fit their product, process, and business pace.
                </p>
                <p>
                  Our approach is straightforward: do the job right, communicate clearly, move quickly, and keep quality consistent.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 8 }}>
          <div className="container strength-grid">
            {[
              ["Fast response", "Customers should never feel like their project disappeared into a system."],
              ["Flexible production", "We support practical needs from samples to scalable output."],
              ["Hands-on problem solving", "Real product questions deserve real answers and useful direction."],
              ["Consistency first", "Good flavor means nothing if it is not reliable from batch to batch."],
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
