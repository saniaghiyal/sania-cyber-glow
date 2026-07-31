import { motion } from "motion/react";
import { GraduationCap, School } from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";

const items = [
  {
    icon: GraduationCap,
    title: "Bachelor of Computer Applications (BCA)",
    org: "IB (PG) College, Panipat",
    meta: "Kurukshetra University",
    period: "2023 — 2026 · Pursuing",
  },
  {
    icon: School,
    title: "Senior Secondary",
    org: "Panipat, Haryana",
    meta: "Foundation in computing and mathematics",
    period: "Completed",
  },
];

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading eyebrow="Education" title="Academic Journey" />
      <ol className="relative mt-14 space-y-8 pl-8 sm:pl-12">
        <span
          aria-hidden
          className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-[linear-gradient(to_bottom,color-mix(in_oklab,var(--olive)_70%,transparent),var(--gold),transparent)] sm:left-[11px]"
        />
        {items.map((e, i) => (
          <li key={e.title} className="relative">
            <motion.span
              aria-hidden
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.6 }}
              className="absolute -left-8 top-7 grid size-4 place-items-center rounded-full bg-[image:var(--gradient-sage)] sm:-left-12"
            />
            <Reveal variant="right" delay={i * 0.1}>
              <article className="glass gold-ring rounded-[2rem] p-7 transition-all sm:p-9">
                <div className="flex min-w-0 items-start gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[image:var(--gradient-sage)] text-accent-foreground">
                    <e.icon className="size-5" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-light leading-snug text-foreground sm:text-xl">
                      {e.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{e.org}</p>
                    <p className="text-sm text-muted-foreground">{e.meta}</p>
                    <p className="mt-4 text-[0.7rem] uppercase tracking-[0.28em] text-primary">
                      {e.period}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}