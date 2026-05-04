import { Beaker, ClipboardCheck, Factory, PackageCheck } from "lucide-react";

const manufacturingPoints = [
  {
    icon: Beaker,
    title: "Develop or match",
    copy: "Start from a flavor idea, benchmark, existing formula, or application challenge that needs a better fit.",
  },
  {
    icon: ClipboardCheck,
    title: "Fit the application",
    copy: "Refine around liquid or powder format, use level, declaration, solubility, sweetness, processing, masking, and finished-product taste.",
  },
  {
    icon: Factory,
    title: "Manufacture the flavor",
    copy: "Move approved profiles into liquid or powder production with documentation and quality programs behind the work.",
  },
  {
    icon: PackageCheck,
    title: "Keep it moving",
    copy: "Support the next sample, revision, or production run with responsive service and clear communication.",
  },
] as const;

export function ManufacturingSection() {
  return (
    <section className="section manufacturing-section">
      <div className="container manufacturing-layout">
        <div className="manufacturing-copy">
          <div className="eyebrow">Flavor Manufacturing</div>
          <h2 className="section-title">Development, samples, and production under one roof.</h2>
          <p className="section-subtext">
            A flavor has to do more than taste good on its own. It has to work in the product, hold up through the process, meet the label goal, and make sense for production.
          </p>
        </div>

        <div className="manufacturing-flow" aria-label="Flavor manufacturing process">
          {manufacturingPoints.map((item, index) => {
            const Icon = item.icon;

            return (
              <article className="manufacturing-step" key={item.title}>
                <div className="manufacturing-step-top">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <Icon size={22} strokeWidth={2.4} aria-hidden="true" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
