import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { applications } from "@/components/site-data";
import { SectionEyebrow, SectionHeading } from "@/components/ui";

export default function ApplicationsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: 48 }}>
          <div className="container">
            <SectionEyebrow>Applications</SectionEyebrow>
            <SectionHeading>Practical product formats we support.</SectionHeading>
            <p className="section-subtext" style={{ marginTop: 16, maxWidth: 840 }}>
              Start with the product format. We can help with liquid, powder, beverage, gummy, bakery, dairy, oral care,
              pharmaceutical, savory, and more.
            </p>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 8 }}>
          <div className="container application-grid">
            {applications.map((item) => (
              <div key={item.name} className="application-card application-card-tight">
                <img src={item.image} alt={item.name} />
                <div>{item.name}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" style={{ paddingTop: 8, paddingBottom: 80 }}>
          <div className="container showcase">
            <SectionEyebrow>Next step</SectionEyebrow>
            <SectionHeading>Tell us your format, then we can match flavor direction.</SectionHeading>
            <p className="section-subtext" style={{ marginTop: 16, maxWidth: 760 }}>
              We help teams choose liquid or powder systems based on process, taste target, and shelf-life needs.
            </p>
            <a href="/contact" className="cta-btn" style={{ marginTop: 22 }}>Request Samples</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
