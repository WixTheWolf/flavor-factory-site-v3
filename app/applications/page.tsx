import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionEyebrow, SectionHeading } from "@/components/ui";

const applications = [
  "Food & Beverage",
  "Bakery",
  "Confectionery",
  "Nutraceutical",
  "Oral Care",
  "Pharmaceutical",
  "Popcorn",
  "Syrup",
  "Personal Care",
  "Animal Food",
];

export default function ApplicationsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: 48 }}>
          <div className="container showcase">
            <SectionEyebrow>Applications</SectionEyebrow>
            <SectionHeading>Product categories we support.</SectionHeading>
            <div className="showcase-pills">
              {applications.map((item) => (
                <span key={item} className="soft-pill">{item}</span>
              ))}
            </div>
            <Link href="/contact" className="cta-btn" style={{ marginTop: 24 }}>Request Samples</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
