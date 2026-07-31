import { Counter, Reveal } from "./primitives";

const stats = [
  { to: 1, suffix: "+", label: "Internships" },
  { to: 10, suffix: "+", label: "Skills Learned" },
  { to: 2023, suffix: "+", label: "Learning Journey" },
  { to: 100, suffix: "%", label: "Passion" },
];

export function Highlights() {
  return (
    <section aria-label="Experience highlights" className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <Reveal variant="scale">
        <div className="glass grid grid-cols-2 gap-8 rounded-[2.5rem] px-8 py-12 sm:px-14 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-[family-name:var(--font-display)] text-4xl font-light text-luxe sm:text-5xl">
                <Counter to={s.to} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}