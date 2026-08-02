import { Button } from "@/components/ui/Button";

export function BuiltInNorco({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`built-in-norco ${compact ? "built-in-norco-compact" : ""}`.trim()}>
      <div className="built-in-norco-text-only">
        <div className="built-in-norco-copy">
          <div className="new-eyebrow">Built in Norco</div>
          <h2>Developed, produced, and supported from one facility.</h2>
          <p>
            From first sample through production, our team works in the same Norco facility. That keeps communication tighter, revisions faster, and production handoff cleaner.
          </p>
          {!compact && <Button href="/request-samples">Request a Sample</Button>}
        </div>
      </div>
    </section>
  );
}
