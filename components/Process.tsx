import { AppImage } from "@/components/ui/AppImage";

const steps = [
  {
    number: "1",
    title: "Define",
    copy: "Product type, target profile, constraints - cost, label, format.",
  },
  {
    number: "2",
    title: "Build",
    copy: "Bench samples with structured iteration. Each version moves forward.",
  },
  {
    number: "3",
    title: "Validate",
    copy: "Application testing inside your product. Stability, performance, taste.",
  },
  {
    number: "4",
    title: "Scale",
    copy: "Consistent batching. Clean execution. Reliable repeat orders.",
  },
] as const;

export function Process() {
  return (
    <section className="new-section new-process">
      <div className="home-shell new-split">
        <div className="new-split-copy">
          <div className="new-eyebrow">How It Works</div>
          <h2>Structured development from brief to batch.</h2>
          <a className="new-inline-cta" href="/request-samples">Request a Custom Sample</a>
        </div>
        <div className="new-process-panel">
          <div className="new-process-image">
            <AppImage
              src="/images/flavor-factory/about-your-project.png"
              alt="Project brief, sample bottles, and formulation tools"
              sizes="(max-width: 980px) calc(100vw - 40px), 44vw"
              style={{ objectPosition: "58% center" }}
            />
          </div>
          <div className="new-process-grid">
            {steps.map((step) => (
              <article className="new-process-step" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
