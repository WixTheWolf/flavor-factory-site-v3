import { Beaker, ClipboardCheck, Factory, PackageCheck } from "lucide-react";

const manufacturingPoints = [
  {
    icon: Beaker,
    title: "Taste target",
    copy: "Define the profile, benchmark, sweetness, off-notes, and sensory finish the finished product needs.",
  },
  {
    icon: ClipboardCheck,
    title: "Use conditions",
    copy: "Account for heat, pH, fat, water activity, dosage form, solubility, color limits, and processing conditions.",
  },
  {
    icon: Factory,
    title: "Flavor format",
    copy: "Select liquid or powder delivery, strength, carrier, and declaration path based on how the customer will use it.",
  },
  {
    icon: PackageCheck,
    title: "Order support",
    copy: "Keep revisions, approvals, documentation, and repeat orders organized so the project can keep moving.",
  },
] as const;

export function ManufacturingSection() {
  return (
    <section className="section manufacturing-section">
      <div className="container manufacturing-layout">
        <div className="manufacturing-copy">
          <div className="eyebrow">Before Production</div>
          <h2 className="section-title">The practical checks that make a flavor useful.</h2>
          <p className="section-subtext">
            Flavor evaluation is part taste work, part manufacturing judgment. We look at how the profile performs in the actual product, then adjust around the conditions that can change the result.
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
