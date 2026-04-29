import { siteCopy } from "@/data/site-copy";
<<<<<<< HEAD
import { Button } from "@/components/ui/Button";
=======
import { siteImages } from "@/data/site-images";
import { Button } from "@/components/ui/Button";
import { AppImage } from "@/components/ui/AppImage";
>>>>>>> 548318da6fb1b74bff62dc150768c36fe33e7b33

export function TrustSection() {
  return (
    <section className="section" style={{ paddingTop: 8, paddingBottom: 84 }}>
      <div className="container sample-panel">
        <div className="sample-grid">
          <div className="sample-left">
<<<<<<< HEAD
            <div className="eyebrow">Why The Flavor Factory</div>
            <h2 className="section-title" style={{ marginTop: 10 }}>Practical support from sample through scale.</h2>
            <p className="section-subtext" style={{ marginTop: 14 }}>
              We blend flavor development capability with responsive service so your team can move from trial to production without friction.
=======
            <div className="eyebrow">Built for brands that need more than a catalog</div>
            <h2 className="section-title" style={{ marginTop: 10 }}>Responsive, capable, and built for real production.</h2>
            <p className="section-subtext" style={{ marginTop: 14 }}>
              We combine flavor development flexibility with manufacturing practicality so the path from sample to scale stays clear.
>>>>>>> 548318da6fb1b74bff62dc150768c36fe33e7b33
            </p>
            <div className="showcase-pills" style={{ marginTop: 16 }}>
              {siteCopy.trustPoints.map((item) => <span className="soft-pill" key={item}>{item}</span>)}
            </div>
            <Button href="/request-samples" className="mt-24" >Request Samples</Button>
          </div>
          <div className="sample-right">
<<<<<<< HEAD
            <img src="/images/flavor-factory/cta-background.jpg" alt="ingredients macro" />
=======
            <AppImage src={siteImages.homeCta} alt="ingredients macro" style={{ objectPosition: "center 45%" }} />
>>>>>>> 548318da6fb1b74bff62dc150768c36fe33e7b33
            <div className="sample-overlay" />
          </div>
        </div>
      </div>
    </section>
  );
}
