import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/Hero";
import { ProofStrip } from "@/components/ProofStrip";
import { Pillars } from "@/components/Pillars";
import { Process } from "@/components/Process";
import { Industries } from "@/components/Industries";
import { Capabilities } from "@/components/Capabilities";
import { WhyUs } from "@/components/WhyUs";
import { Work } from "@/components/Work";
import { CTA } from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="new-home">
        <Hero />
        <ProofStrip />
        <Pillars />
        <Process />
        <Industries />
        <Capabilities />
        <WhyUs />
        <Work />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
