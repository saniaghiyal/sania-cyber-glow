import { motion, useInView, type Variants } from "motion/react";
import { useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Deterministic pseudo-random so SSR and client markup match. */
export function seeded(i: number, salt = 1) {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

const directions: Record<string, { x?: number; y?: number; scale?: number; rotate?: number }> = {
  up: { y: 40 },
  left: { x: -50 },
  right: { x: 50 },
  scale: { scale: 0.9 },
  rotate: { rotate: -6, y: 24 },
};

export function Reveal({
  children,
  variant = "up",
  delay = 0,
  className,
}: {
  children: ReactNode;
  variant?: keyof typeof directions | string;
  delay?: number;
  className?: string;
}) {
  const from = directions[variant] ?? directions.up;
  const variants: Variants = {
    hidden: { opacity: 0, ...from },
    show: { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 },
  };
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="text-[0.7rem] font-medium uppercase tracking-[0.45em] text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-4xl font-light tracking-tight text-foreground sm:text-5xl">
        {title}
      </h2>
      <div className="mx-auto mt-6 h-px w-24 bg-[image:var(--gradient-luxe)]" />
      {subtitle ? (
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}

/** Magnetic + ripple button surface. */
export function Magnetic({
  children,
  className,
  strength = 14,
  as = "button",
  ...rest
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: "button" | "a";
} & Record<string, unknown>) {
  const ref = useRef<HTMLElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const Comp = motion[as] as typeof motion.button;

  return (
    <Comp
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={cn("relative overflow-hidden", className)}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 200, damping: 14 }}
      onMouseMove={(e) => {
        const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
        setOffset({
          x: ((e.clientX - (r.left + r.width / 2)) / r.width) * strength * 2,
          y: ((e.clientY - (r.top + r.height / 2)) / r.height) * strength * 2,
        });
      }}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      onPointerDown={(e) => {
        const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const id = Date.now();
        setRipples((p) => [...p, { id, x: e.clientX - r.left, y: e.clientY - r.top }]);
        window.setTimeout(() => setRipples((p) => p.filter((x) => x.id !== id)), 650);
      }}
      {...rest}
    >
      {children}
      {ripples.map((r) => (
        <motion.span
          key={r.id}
          aria-hidden
          className="pointer-events-none absolute size-4 rounded-full bg-[color-mix(in_oklab,var(--gold)_60%,transparent)]"
          style={{ left: r.x - 8, top: r.y - 8 }}
          initial={{ scale: 0, opacity: 0.7 }}
          animate={{ scale: 18, opacity: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        />
      ))}
    </Comp>
  );
}

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  if (inView && value === 0 && to > 0) {
    const start = performance.now();
    const step = (now: number) => {
      const p = Math.min((now - start) / 1600, 1);
      setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}