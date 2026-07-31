import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden px-5 pb-14 pt-10 sm:px-8">
      <div className="glass mx-auto max-w-6xl rounded-[2.5rem] px-8 py-12 text-center sm:px-14">
        <div
          aria-hidden
          className="mx-auto size-14 rounded-full bg-[radial-gradient(circle_at_32%_28%,oklch(0.99_0.02_95),color-mix(in_oklab,var(--gold)_70%,white))] shadow-[var(--shadow-glow)]"
          style={{ animation: "drift 10s ease-in-out infinite" }}
        />
        <p className="mt-7 flex items-center justify-center gap-2 font-[family-name:var(--font-display)] text-xl tracking-[0.22em] text-foreground">
          <Sparkles className="size-4 text-primary" aria-hidden />
          SANIA
        </p>
        <p className="mt-5 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          &copy; 2026 Sania
        </p>
        <p className="mt-3 text-sm text-muted-foreground">Built with passion and purpose.</p>
      </div>
    </footer>
  );
}