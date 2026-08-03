import { SITE_STATS } from "@/data/site-stats";

const stats = [
  {
    value: `${SITE_STATS.combinedYearsExperience}+`,
    label: "Years of combined experience",
  },
  {
    value: SITE_STATS.sampleLeadTimeDays,
    label: "Business days to first samples",
  },
  {
    value: `${SITE_STATS.flavorProfileCount}+`,
    label: "Flavor profiles",
  },
  {
    value: "Norco, CA",
    label: "Development and production",
  },
] as const;

export function ProofStrip() {
  return (
    <section className="new-proof">
      <div className="home-shell new-proof-grid">
        {stats.map((stat) => (
          <div className="new-proof-item" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
