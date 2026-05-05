export function PageHero({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:px-10 lg:px-16 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(155,107,47,0.16),transparent_34%),linear-gradient(135deg,#f7f4ee_0%,#ece4d8_100%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-[#9b6b2f]">{eyebrow}</p>
          <h1 className="text-5xl font-semibold tracking-[-0.055em] text-[#102218] md:text-7xl">{title}</h1>
          <p className="mt-7 max-w-3xl text-xl leading-8 text-[#405045] md:text-2xl md:leading-9">{body}</p>
        </div>
      </div>
    </section>
  );
}
