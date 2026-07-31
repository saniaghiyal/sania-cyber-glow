import { motion } from "motion/react";
import { BrainCircuit, ShieldCheck } from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";

const roles = [
  {
    icon: ShieldCheck,
    title: "Cyber Security Intern",
    org: "ICT Academy",
    period: "May 2024 — July 2024",
    current: false,
    points: [
      "Cyber security fundamentals",
      "Network Security",
      "Wireshark",
      "Nmap",
      "Encryption",
      "Vulnerability Assessment",
      "Security Awareness",
    ],
  },
  {
    icon: BrainCircuit,
    title: "AI Intern",
    org: "The AI School",
    period: "May 2025 — Present",
    current: true,
    points: ["Learning AI", "Prompt Engineering", "AI Tools", "Real-world AI projects"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading eyebrow="Internships" title="Experience" />
      <ol className="relative mt-14 space-y-8 pl-8 sm:pl-12">
        <span
          aria-hidden
          className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-[linear-gradient(to_bottom,var(--gold),color-mix(in_oklab,var(--olive)_60%,transparent),transparent)] sm:left-[11px]"
        />
        {roles.map((r, i) => (
          <li key={r.title} className="relative">
            <span
              aria-hidden
              className="absolute -left-8 top-7 grid size-4 place-items-center rounded-full bg-[image:var(--gradient-luxe)] shadow-[var(--shadow-glow)] sm:-left-12"
            />
            <Reveal variant="left" delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -5 }}
                className="glass gold-ring rounded-[2rem] p-7 transition-all sm:p-9"
              >
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:items-center sm:justify-between">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-secondary text-primary">
                      <r.icon className="size-[1.1rem]" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <h3 className="truncate text-xl font-light text-foreground">{r.title}</h3>
                      <p className="truncate text-sm text-muted-foreground">{r.org}</p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full border border-border px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                    {r.current ? "Ongoing" : "Completed"}
                  </span>
                </div>
                <p className="mt-5 text-[0.7rem] uppercase tracking-[0.28em] text-primary">
                  {r.period}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {r.points.map((p) => (
                    <li
                      key={p}
                      className="rounded-full bg-secondary px-3.5 py-1.5 text-xs text-secondary-foreground"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}