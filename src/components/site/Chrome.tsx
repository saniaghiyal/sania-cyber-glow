import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowUp, Moon, Sun } from "lucide-react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const width = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX: width }}
      className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-[image:var(--gradient-luxe)]"
    />
  );
}

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -300, y: -300 });
  useEffect(() => {
    const onMove = (e: PointerEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[55] hidden size-72 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_22%,transparent),transparent_65%)] blur-2xl md:block"
      animate={{ x: pos.x - 144, y: pos.y - 144 }}
      transition={{ type: "spring", stiffness: 90, damping: 20 }}
    />
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show ? (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          whileHover={{ scale: 1.1 }}
          className="glass gold-ring fixed bottom-7 right-6 z-50 grid size-12 place-items-center rounded-full text-primary"
        >
          <ArrowUp className="size-5" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  return (
    <button
      type="button"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setDark((d) => !d)}
      className="glass gold-ring grid size-11 shrink-0 place-items-center rounded-full text-primary transition-all"
    >
      {dark ? <Sun className="size-[1.1rem]" /> : <Moon className="size-[1.1rem]" />}
    </button>
  );
}

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setDone(true), 1900);
    return () => window.clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {done ? null : (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="px-6 text-center">
            <motion.div
              className="mx-auto mb-8 size-16 rounded-full bg-[radial-gradient(circle_at_32%_28%,oklch(0.99_0.02_95),color-mix(in_oklab,var(--gold)_70%,white))] shadow-[var(--shadow-glow)]"
              animate={{ scale: [1, 1.08, 1], rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="font-[family-name:var(--font-display)] text-2xl font-light tracking-wide text-foreground sm:text-3xl"
            >
              Welcome to Sania&rsquo;s Portfolio
            </motion.p>
            <div className="mx-auto mt-7 h-px w-56 overflow-hidden bg-border">
              <motion.div
                className="h-full bg-[image:var(--gradient-luxe)]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.7, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}