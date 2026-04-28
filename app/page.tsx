import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { ShortcutSection } from "@/components/home/ShortcutSection";
import { RecommendationSection } from "@/components/home/RecommendationSection";
import { FormatSection } from "@/components/home/FormatSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { TrustSection } from "@/components/home/TrustSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ShortcutSection />
        <RecommendationSection />
        <FormatSection />
        <IndustriesSection />
        <TrustSection />
      </main>
      <Footer />
    </>
  );
}
