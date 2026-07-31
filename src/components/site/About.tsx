import { Reveal, SectionHeading } from "./primitives";
import { motion } from "motion/react";
import { ShieldCheck, Target } from "lucide-react";

const cards = [
  {
    icon: ShieldCheck,
    title: "Focus",
    items: ["Cyber Security", "Digital Awareness"],
  },
  {
    icon: Target,
    title: "Goal",
    items: ["Become a skilled Cyber Security Professional"],
  },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading eyebrow="About" title="About Me" />
      <div className="mt-14 grid gap-6 lg:grid-cols-[1.35fr_1fr]">
        <Reveal variant="left">
          <article className="glass h-full rounded-[2rem] p-8 sm:p-12">
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-light text-foreground">
              A curious mind, learning by building
            </h3>
            <div className="mt-5 h-px w-20 bg-[image:var(--gradient-luxe)]" />
            <p className="mt-6 text-sm leading-loose text-muted-foreground sm:text-base">
              I&rsquo;m a passionate BCA student who enjoys learning about cybersecurity, web
              technologies and modern software development. I believe in continuous learning,
              problem-solving, creativity and building meaningful digital experiences.
            </p>
          </article>
        </Reveal>
        <div className="grid gap-6">
          {cards.map((c, i) => (
            <Reveal key={c.title} variant="right" delay={i * 0.15}>
              <motion.article
                whileHover={{ y: -6 }}
                className="glass gold-ring h-full rounded-[2rem] p-8 transition-all"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-[image:var(--gradient-luxe)] text-primary-foreground">
                  <c.icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-5 text-xl font-light text-foreground">{c.title}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {c.items.map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      {t}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}