import { motion } from "motion/react";
import { Github } from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";
import cyber from "@/assets/project-cyber.jpg";
import portfolio from "@/assets/project-portfolio.jpg";
import js from "@/assets/project-js.jpg";
import ai from "@/assets/project-ai.jpg";

const projects = [
  {
    image: cyber,
    title: "Cyber Security Learning Lab",
    description:
      "Practising vulnerability assessment, networking concepts, Wireshark, Nmap, and ethical hacking fundamentals in a safe learning environment.",
    tags: ["Wireshark", "Nmap", "Networking", "Linux"],
  },
  {
    image: portfolio,
    title: "Responsive Portfolio Website",
    description:
      "Personal portfolio built using HTML, CSS, JavaScript, animations, and modern UI principles.",
    tags: ["HTML5", "CSS3", "JavaScript", "UI"],
  },
  {
    image: js,
    title: "JavaScript Mini Applications",
    description:
      "Collection of interactive mini projects such as calculator, to-do list, weather app, digital clock, and form validation to strengthen JavaScript fundamentals.",
    tags: ["JavaScript", "DOM", "APIs"],
  },
  {
    image: ai,
    title: "Future AI Projects",
    description:
      "Upcoming AI-based applications and cybersecurity projects currently under development.",
    tags: ["AI", "Prompt Engineering", "Security"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="Projects"
        title="Learning Projects"
        subtitle="Hands-on explorations that turn curiosity into practical skill."
      />
      <div className="mt-14 grid gap-7 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} variant={i % 2 === 0 ? "left" : "right"} delay={(i % 2) * 0.1}>
            <motion.article
              whileHover={{ y: -10 }}
              className="glass gold-ring group flex h-full flex-col overflow-hidden rounded-[2rem] transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.title} illustration`}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-xl font-light text-foreground">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border px-3 py-1 text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-2">
                  <button
                    type="button"
                    disabled
                    className="cursor-not-allowed rounded-full bg-secondary px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground"
                  >
                    Live Demo · Coming Soon
                  </button>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.18em] text-foreground transition-colors hover:bg-secondary"
                  >
                    <Github className="size-3.5" aria-hidden />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}