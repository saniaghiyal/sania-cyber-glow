import { motion } from "motion/react";
import {
  Braces,
  FileCode2,
  Github,
  GitBranch,
  Lightbulb,
  Monitor,
  Network,
  Palette,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";

const skills = [
  { icon: ShieldCheck, name: "Cyber Security", level: 78 },
  { icon: FileCode2, name: "HTML5", level: 92 },
  { icon: Palette, name: "CSS3", level: 88 },
  { icon: Braces, name: "JavaScript", level: 80 },
  { icon: GitBranch, name: "Git", level: 75 },
  { icon: Github, name: "GitHub", level: 78 },
  { icon: Network, name: "Networking Basics", level: 72 },
  { icon: Terminal, name: "Linux Basics", level: 70 },
  { icon: Lightbulb, name: "Problem Solving", level: 85 },
  { icon: Monitor, name: "Responsive Design", level: 86 },
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="Skills"
        title="Craft & Capabilities"
        subtitle="A growing toolkit shaped by curiosity, practice and a love for secure, elegant technology."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <Reveal key={s.name} variant="scale" delay={(i % 3) * 0.08}>
            <motion.article
              whileHover={{ y: -6, rotateX: 4, rotateY: -4 }}
              style={{ transformPerspective: 900 }}
              className="glass gold-ring group h-full rounded-[1.75rem] p-6 transition-all"
            >
              <div className="flex min-w-0 items-center gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-secondary text-primary transition-all group-hover:bg-[image:var(--gradient-luxe)] group-hover:text-primary-foreground">
                  <s.icon className="size-[1.1rem]" aria-hidden />
                </span>
                <h3 className="truncate text-base font-normal tracking-wide text-foreground">
                  {s.name}
                </h3>
                <span className="ml-auto shrink-0 text-xs tracking-widest text-muted-foreground">
                  {s.level}%
                </span>
              </div>
              <div
                className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-secondary"
                role="progressbar"
                aria-label={`${s.name} proficiency`}
                aria-valuenow={s.level}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <motion.div
                  className="h-full rounded-full bg-[linear-gradient(90deg,var(--olive),var(--gold))]"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}