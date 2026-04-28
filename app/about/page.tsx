import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionEyebrow, SectionHeading } from "@/components/ui";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: 48 }}>
          <div className="container showcase">
            <SectionEyebrow>About</SectionEyebrow>
            <SectionHeading>A family-owned flavor manufacturer based in Southern California.</SectionHeading>
            <p className="section-subtext" style={{ marginTop: 16 }}>
              Based in Southern California, The Flavor Factory prides itself on providing the highest quality products
              along with outstanding customer service to businesses of all sizes.
            </p>
            <p className="section-subtext" style={{ marginTop: 12 }}>
              We are a family-owned business with thousands of flavors, a highly skilled product development team,
              and more than 40 years of industry experience. Our mission is simple: bringing customer service back to the flavor industry.
            </p>
            <p className="section-subtext" style={{ marginTop: 12 }}>
              We develop custom, proprietary, and exclusive products for customers who need dependable flavor solutions in liquid and powder forms.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
