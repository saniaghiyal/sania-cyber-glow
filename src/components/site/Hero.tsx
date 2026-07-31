import { motion } from "motion/react";
import { useEffect, useState } from "react";
import {
  BarChart3,
  Cloud,
  Code2,
  FileDown,
  Github,
  Laptop,
  Linkedin,
  Lock,
  Mail,
  Network,
  ShieldCheck,
} from "lucide-react";
import { toast } from "sonner";
import { Magnetic } from "./primitives";
import character from "@/assets/sania-character.png";

const floatCards = [
  { icon: ShieldCheck, label: "Cyber Security", x: "-6%", y: "6%", d: 0 },
  { icon: Lock, label: "Encryption", x: "72%", y: "0%", d: 0.6 },
  { icon: Code2, label: "JavaScript", x: "78%", y: "34%", d: 1.2 },
  { icon: Network, label: "Network", x: "-10%", y: "44%", d: 1.8 },
  { icon: BarChart3, label: "Analytics", x: "66%", y: "68%", d: 2.4 },
  { icon: Laptop, label: "HTML · CSS", x: "-4%", y: "76%", d: 3 },
  { icon: Cloud, label: "Cloud", x: "34%", y: "-6%", d: 3.6 },
];

const roles = ["BCA Student", "Cyber Security Enthusiast"];

function Typing() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = roles[i % roles.length]!;
    const t = window.setTimeout(
      () => {
        if (!deleting) {
          setText(full.slice(0, text.length + 1));
          if (text.length + 1 === full.length) setDeleting(true);
        } else {
          setText(full.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDeleting(false);
            setI((v) => v + 1);
          }
        }
      },
      deleting ? 45 : text.length === roles[i % roles.length]!.length ? 1500 : 85,
    );
    return () => window.clearTimeout(t);
  }, [text, deleting, i]);

  return (
    <span className="text-luxe" aria-label={roles.join(" and ")}>
      {text || "\u00a0"}
      <span className="ml-0.5 inline-block w-px animate-pulse bg-primary align-middle">&nbsp;</span>
    </span>
  );
}

export function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  return (
    <section
      id="home"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setTilt({
          x: (e.clientX - (r.left + r.width / 2)) / r.width,
          y: (e.clientY - (r.top + r.height / 2)) / r.height,
        });
      }}
      className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-24 pt-32 sm:px-8 sm:pt-40 lg:grid-cols-2 lg:gap-8 lg:pb-32"
    >
      {/* Character + floating UI cards */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 2, ease: [0.16, 1, 0.3, 1] }}
        className="relative order-2 lg:order-1"
      >
        <div className="relative mx-auto aspect-square w-full max-w-[30rem]">
          <div className="absolute inset-6 rounded-full bg-[image:var(--gradient-luxe)] opacity-25 blur-[70px]" />
          <motion.img
            src={character}
            alt="3D illustrated portrait of Sania working on a laptop in an olive blazer"
            width={1024}
            height={1024}
            className="relative z-10 size-full object-contain drop-shadow-[0_30px_60px_color-mix(in_oklab,var(--coffee)_25%,transparent)]"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            style={{ x: tilt.x * -18, rotate: tilt.x * 2 }}
          />
          {floatCards.map((c) => (
            <motion.div
              key={c.label}
              className="glass gold-ring absolute z-20 hidden items-center gap-2 rounded-2xl px-3 py-2 text-[0.7rem] tracking-wide text-foreground transition-all sm:flex"
              style={{
                left: c.x,
                top: c.y,
                x: tilt.x * (20 + c.d * 6),
                y: tilt.y * (16 + c.d * 5),
              }}
              animate={{ translateY: [0, -10, 0] }}
              transition={{
                duration: 6 + c.d,
                repeat: Infinity,
                ease: "easeInOut",
                delay: c.d * 0.3,
              }}
              whileHover={{ scale: 1.08 }}
            >
              <c.icon className="size-3.5 shrink-0 text-primary" aria-hidden />
              <span className="whitespace-nowrap">{c.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Copy */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, delay: 2.15, ease: [0.16, 1, 0.3, 1] }}
        className="order-1 lg:order-2"
      >
        <p className="text-xs uppercase tracking-[0.5em] text-muted-foreground">Hi, I&rsquo;m</p>
        <h1 className="mt-3 text-[clamp(3.2rem,11vw,7rem)] font-light leading-[0.95] tracking-tight text-foreground">
          SANIA
        </h1>
        <p className="mt-4 min-h-8 text-lg font-light tracking-[0.12em] sm:text-xl">
          <Typing />
        </p>
        <div className="mt-7 h-px w-28 bg-[image:var(--gradient-luxe)]" />
        <p className="mt-7 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Motivated and detail-oriented BCA student with a strong foundation in computer
          applications and a growing passion for cybersecurity. Eager to learn, build secure digital
          solutions, and contribute to the future of technology.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Magnetic
            onClick={() =>
              toast.success("Resume download started", {
                description: "Thank you for your interest — Sania's resume is on its way.",
              })
            }
            className="group flex items-center gap-2 rounded-full bg-[image:var(--gradient-luxe)] px-6 py-3.5 text-[0.75rem] uppercase tracking-[0.2em] text-primary-foreground shadow-[var(--shadow-glow)]"
          >
            <FileDown className="size-4" aria-hidden />
            Download Resume
          </Magnetic>
          <Magnetic
            as="a"
            href="#certificates"
            className="glass gold-ring flex items-center rounded-full px-6 py-3.5 text-[0.75rem] uppercase tracking-[0.2em] text-foreground transition-all"
          >
            View Certificates
          </Magnetic>
          <Magnetic
            as="a"
            href="#contact"
            className="flex items-center rounded-full border border-accent/40 px-6 py-3.5 text-[0.75rem] uppercase tracking-[0.2em] text-accent transition-colors hover:bg-accent/10"
          >
            Contact Me
          </Magnetic>
        </div>

        <ul className="mt-9 flex items-center gap-3">
          {[
            { icon: Github, label: "GitHub", href: "https://github.com" },
            { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
            { icon: Mail, label: "Email", href: "mailto:sania@example.com" },
          ].map((s) => (
            <li key={s.label}>
              <motion.a
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={s.label}
                whileHover={{ scale: 1.12, rotate: 6 }}
                className="glass gold-ring grid size-12 place-items-center rounded-full text-primary transition-all"
              >
                <s.icon className="size-[1.15rem]" aria-hidden />
              </motion.a>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}