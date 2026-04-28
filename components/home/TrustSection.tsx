import { siteCopy } from "@/data/site-copy";
import { Button } from "@/components/ui/Button";

export function TrustSection() {
  return (
    <section className="section" style={{ paddingTop: 8, paddingBottom: 84 }}>
      <div className="container sample-panel">
        <div className="sample-grid">
          <div className="sample-left">
            <div className="eyebrow">Why The Flavor Factory</div>
            <h2 className="section-title" style={{ marginTop: 10 }}>Practical support from sample through scale.</h2>
            <p className="section-subtext" style={{ marginTop: 14 }}>
              We blend flavor development capability with responsive service so your team can move from trial to production without friction.
            </p>
            <div className="showcase-pills" style={{ marginTop: 16 }}>
              {siteCopy.trustPoints.map((item) => <span className="soft-pill" key={item}>{item}</span>)}
            </div>
            <Button href="/request-samples" className="mt-24" >Request Samples</Button>
          </div>
          <div className="sample-right">
            <img src="/images/flavor-factory/cta-background.jpg" alt="ingredients macro" />
            <div className="sample-overlay" />
          </div>
        </div>
      </div>
    </section>
  );
}
