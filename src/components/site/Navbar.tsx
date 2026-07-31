import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useEffect, useState } from "react";
import { Menu, Sparkles, X } from "lucide-react";
import { Magnetic } from "./primitives";
import { ThemeToggle } from "./Chrome";
import { cn } from "@/lib/utils";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1.9, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5"
    >
      <nav
        aria-label="Main navigation"
        className={cn(
          "mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-full px-4 py-2.5 transition-all duration-500 sm:px-6 lg:flex lg:justify-between",
          scrolled ? "glass" : "border border-transparent bg-transparent",
        )}
      >
        <a
          href="#home"
          className="flex min-w-0 items-center gap-2 font-[family-name:var(--font-display)] text-lg tracking-[0.22em] text-foreground"
        >
          <Sparkles className="size-4 shrink-0 text-primary" />
          <span className="truncate">SANIA</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? "page" : undefined}
                className="relative block px-3 py-2 text-[0.78rem] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
                {active === l.id ? (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-[image:var(--gradient-luxe)]"
                  />
                ) : null}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Magnetic
            as="a"
            href="#contact"
            className="hidden rounded-full bg-[image:var(--gradient-luxe)] px-5 py-2.5 text-[0.75rem] uppercase tracking-[0.2em] text-primary-foreground shadow-[var(--shadow-glow)] transition-transform sm:block"
          >
            Let&rsquo;s Connect
          </Magnetic>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="glass grid size-11 place-items-center rounded-full text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass mx-auto mt-2 max-w-6xl space-y-1 rounded-3xl p-4 lg:hidden"
        >
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </motion.ul>
      ) : null}
    </motion.header>
  );
}