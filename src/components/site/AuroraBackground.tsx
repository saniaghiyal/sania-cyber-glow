import { seeded } from "./primitives";

const stars = Array.from({ length: 60 }, (_, i) => ({
  left: seeded(i, 1) * 100,
  top: seeded(i, 2) * 100,
  size: 1.5 + seeded(i, 3) * 3,
  delay: seeded(i, 4) * 6,
  duration: 3 + seeded(i, 5) * 5,
}));

const bokeh = Array.from({ length: 10 }, (_, i) => ({
  left: seeded(i, 11) * 100,
  top: seeded(i, 12) * 100,
  size: 90 + seeded(i, 13) * 220,
  delay: seeded(i, 14) * 8,
}));

const orbitStars = [0, 72, 144, 216, 288];

export function AuroraBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[image:var(--gradient-veil)]" />
      <div className="animate-aurora absolute -left-40 top-10 size-[42rem] rounded-full bg-[color-mix(in_oklab,var(--sage)_60%,transparent)] opacity-45 blur-[120px]" />
      <div className="animate-aurora absolute -right-32 bottom-0 size-[38rem] rounded-full bg-[color-mix(in_oklab,var(--lavender)_55%,transparent)] opacity-40 blur-[130px] [animation-delay:-9s]" />
      <div className="animate-aurora absolute left-1/3 top-1/2 size-[30rem] rounded-full bg-[color-mix(in_oklab,var(--peach)_60%,transparent)] opacity-40 blur-[120px] [animation-delay:-16s]" />

      {bokeh.map((b, i) => (
        <div
          key={`b-${i}`}
          className="animate-drift absolute rounded-full bg-[color-mix(in_oklab,var(--gold)_22%,transparent)] blur-3xl"
          style={{
            left: `${b.left}%`,
            top: `${b.top}%`,
            width: b.size,
            height: b.size,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}

      {stars.map((s, i) => (
        <span
          key={`s-${i}`}
          className="animate-twinkle absolute rounded-full bg-[var(--gold)]"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            boxShadow: "0 0 10px color-mix(in oklab, var(--gold) 70%, transparent)",
          }}
        />
      ))}

      {/* Moon on a slow circular orbit, with stars orbiting it */}
      <div className="absolute right-[6%] top-[14%] hidden size-[26rem] sm:block">
        <div
          className="size-full"
          style={{ animation: "orbit 90s linear infinite", transformOrigin: "50% 50%" }}
        >
          <div className="absolute left-1/2 top-0 -translate-x-1/2">
            <div className="relative size-28">
              <div className="absolute inset-0 rounded-full bg-[color-mix(in_oklab,var(--gold)_45%,transparent)] blur-3xl" />
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_32%_28%,oklch(0.99_0.02_95),color-mix(in_oklab,var(--gold)_70%,white))] shadow-[var(--shadow-glow)]" />
              <div className="absolute inset-0" style={{ animation: "orbit 26s linear infinite" }}>
                {orbitStars.map((deg) => (
                  <span
                    key={deg}
                    className="absolute left-1/2 top-1/2 size-1.5 rounded-full bg-[var(--gold)] shadow-[0_0_10px_var(--gold)]"
                    style={{
                      transform: `rotate(${deg}deg) translateX(4.6rem)`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}