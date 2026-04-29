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
            <div className="eyebrow">Built for brands that need more than a catalog</div>
            <h2 className="section-title" style={{ marginTop: 10 }}>Responsive, capable, and built for real production.</h2>
            <p className="section-subtext" style={{ marginTop: 14 }}>
              We combine flavor development flexibility with manufacturing practicality so the path from sample to scale stays clear.
            </p>
            <div className="showcase-pills" style={{ marginTop: 16 }}>
              {siteCopy.trustPoints.map((item) => <span className="soft-pill" key={item}>{item}</span>)}
            </div>
            <Button href="/request-samples" className="mt-24" >Request Samples</Button>
          </div>
          <div className="sample-right">
            <AppImage src={siteImages.homeCta} alt="ingredients macro" style={{ objectPosition: "center 45%" }} />
            <div className="sample-overlay" />
          </div>
        </div>
      </div>
    </section>
  );
}
