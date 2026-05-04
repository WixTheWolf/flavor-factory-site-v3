import { Beaker, ClipboardCheck, Factory, PackageCheck } from "lucide-react";

const manufacturingPoints = [
  {
    icon: Beaker,
    title: "Develop the profile",
    copy: "Start from a flavor idea, benchmark, application challenge, or existing product that needs to be matched.",
  },
  {
    icon: ClipboardCheck,
    title: "Dial in the fit",
    copy: "Refine around format, use level, declaration, solubility, processing, masking, and finished-product taste.",
  },
  {
    icon: Factory,
    title: "Manufacture with control",
    copy: "Move approved profiles into liquid or powder production with quality programs and documentation support.",
  },
  {
    icon: PackageCheck,
    title: "Support the next run",
    copy: "Keep the project moving with practical sample support, flexible minimums, and clear communication.",
  },
] as const;

export function ManufacturingSection() {
  return (
    <section className="section manufacturing-section">
      <div className="container manufacturing-layout">
        <div className="manufacturing-copy">
          <div className="eyebrow">Flavor Manufacturing</div>
          <h2 className="section-title">Built like a factory. Tuned like a flavor house.</h2>
          <p className="section-subtext">
            The right flavor has to do more than taste good in a cup. It has to work in the product, survive the process, meet the label, and make sense at production scale.
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
