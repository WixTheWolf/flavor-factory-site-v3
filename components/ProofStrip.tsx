import { SITE_STATS } from "@/data/site-stats";

const stats = [
  {
    value: `${SITE_STATS.combinedYearsExperience}+`,
    label: "Years of combined flavor experience",
  },
  {
    value: SITE_STATS.sampleLeadTimeDays,
    label: "Business days to a first sample",
  },
  {
    value: `${SITE_STATS.flavorProfileCount}+`,
    label: "Flavor profiles in our library",
  },
  {
    value: "One Facility",
    label: "Development and production in Norco",
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
