import { CTA } from "@/components/CTA";
import { FlavorFinder } from "@/components/flavors/FlavorFinder";
import { PageHero } from "@/components/PageHero";

export default function FlavorsPage() {
  return (
    <main className="bg-[#F4EFE5] text-[#1E1E1A]">
      <PageHero
        eyebrow="Flavors"
        title="A cleaner way to explore flavor direction."
        body="Browse common flavor families, search the database, and narrow by application, format, or declaration type. The finder is a starting point for sample requests, matching work, and custom development."
        image="/images/flavor-factory/hero-flavors-clean.jpg"
        imageAlt="Amber flavor samples and citrus in a clean formulation setting"
      />

      <FlavorFinder />

      <CTA
        eyebrow="Need Something Specific?"
        title="Tell Us About the Flavor Target"
        body="Share the product, application, benchmark, and timeline. We will help choose a starting profile or develop a custom direction."
      />
    </main>
  );
}
