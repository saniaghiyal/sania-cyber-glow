import { useState } from "react";
import { motion } from "motion/react";
import { Award, Download, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Reveal, SectionHeading, Magnetic } from "./primitives";

const certificates = [
  {
    title: "Cyber Security Internship Certificate",
    issuer: "ICT Academy",
    year: "2024",
    detail:
      "Awarded for completing a hands-on cyber security internship covering network security, Wireshark, Nmap, encryption and vulnerability assessment.",
  },
  {
    title: "Medha Certificate",
    issuer: "Medha · Offline Program",
    year: "2024",
    detail:
      "Recognition for completing an offline professional development program focused on communication, teamwork and employability skills.",
  },
  {
    title: "Freelancing Certificate",
    issuer: "Offline Program",
    year: "2024",
    detail:
      "Certification covering freelancing fundamentals, client communication, digital workflow and independent project delivery.",
  },
];

export function Certificates() {
  const [open, setOpen] = useState<number | null>(null);
  const active = open === null ? null : certificates[open]!;

  return (
    <section id="certificates" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="Certificates"
        title="Recognitions"
        subtitle="Milestones collected while learning, practising and growing."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {certificates.map((c, i) => (
          <Reveal key={c.title} variant="up" delay={i * 0.12}>
            <motion.article
              whileHover={{ y: -10 }}
              className="glass gold-ring flex h-full flex-col rounded-[2rem] p-7 transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-12 place-items-center rounded-2xl bg-[image:var(--gradient-luxe)] text-primary-foreground">
                  <Award className="size-5" aria-hidden />
                </span>
                <span className="text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">
                  {c.year}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-light leading-snug text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.issuer}</p>
              <div className="mt-7 flex flex-wrap gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setOpen(i)}
                  className="rounded-full bg-[image:var(--gradient-luxe)] px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.18em] text-primary-foreground"
                >
                  Preview
                </button>
                <button
                  type="button"
                  onClick={() =>
                    toast.success("Certificate download started", { description: c.title })
                  }
                  className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.18em] text-foreground transition-colors hover:bg-secondary"
                >
                  <Download className="size-3.5" aria-hidden />
                  Download
                </button>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>

      <Dialog open={open !== null} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="glass max-w-lg rounded-[2rem] border-none">
          <DialogHeader>
            <DialogTitle className="font-[family-name:var(--font-display)] text-2xl font-light">
              {active?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-2 grid place-items-center rounded-3xl bg-[image:var(--gradient-luxe)] p-10 text-center text-primary-foreground">
            <Sparkles className="size-8" aria-hidden />
            <p className="mt-3 text-sm uppercase tracking-[0.28em]">{active?.issuer}</p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{active?.detail}</p>
          <Magnetic
            onClick={() =>
              toast.success("Certificate download started", { description: active?.title })
            }
            className="mt-4 self-start rounded-full border border-border px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.18em] text-foreground"
          >
            Download certificate
          </Magnetic>
        </DialogContent>
      </Dialog>
    </section>
  );
}