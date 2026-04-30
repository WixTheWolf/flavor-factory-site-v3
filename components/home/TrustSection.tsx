import { siteCopy } from "@/data/site-copy";
import { siteImages } from "@/data/site-images";
import { Button } from "@/components/ui/Button";
import { AppImage } from "@/components/ui/AppImage";

export function TrustSection() {
  return (
    <section className="section" style={{ paddingTop: 8, paddingBottom: 84 }}>
      <div className="container sample-panel">
        <div className="sample-grid">
          <div className="sample-left">
            <div className="eyebrow">The Brief Gets Better Here</div>
            <h2 className="section-title" style={{ marginTop: 10 }}>Bring the idea, benchmark, or product challenge.</h2>
            <p className="section-subtext" style={{ marginTop: 14 }}>
              We help turn taste goals into flavor profiles that make sense for the product, the label, the process, and the customer experience.
            </p>
            <div className="showcase-pills" style={{ marginTop: 16 }}>
              {siteCopy.trustPoints.map((item) => <span className="soft-pill" key={item}>{item}</span>)}
            </div>
            <Button href="/request-samples" className="mt-24" >Request Samples</Button>
          </div>
          <div className="sample-right">
            <AppImage
              src={siteImages.homeCta}
              alt="ingredients macro"
              sizes="(max-width: 1200px) calc(100vw - 48px), 50vw"
              style={{ objectPosition: "center 45%" }}
            />
            <div className="sample-overlay" />
          </div>
        </div>
      </div>
    </section>
  );
}
