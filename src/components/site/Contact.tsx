import { useState } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal, SectionHeading, Magnetic } from "./primitives";

const details = [
  { icon: Phone, label: "Phone", value: "+91 00000 00000" },
  { icon: Mail, label: "Email", value: "sania@example.com" },
  { icon: MapPin, label: "Location", value: "Panipat, Haryana, India" },
];

const fields = [
  { id: "name", label: "Name", type: "text", placeholder: "Your name" },
  { id: "email", label: "Email", type: "email", placeholder: "you@email.com" },
  { id: "subject", label: "Subject", type: "text", placeholder: "How can I help?" },
];

export function Contact() {
  const [sending, setSending] = useState(false);

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="Contact"
        title="Let&rsquo;s Connect"
        subtitle="Open to internships, collaborations and conversations about cyber security."
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <Reveal variant="left">
          <form
            className="glass rounded-[2rem] p-8 sm:p-10"
            onSubmit={(e) => {
              e.preventDefault();
              setSending(true);
              window.setTimeout(() => {
                setSending(false);
                (e.target as HTMLFormElement).reset();
                toast.success("Message sent", {
                  description: "Thank you for reaching out — Sania will reply soon.",
                });
              }, 1100);
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {fields.map((f, i) => (
                <div key={f.id} className={i === 2 ? "sm:col-span-2" : undefined}>
                  <label
                    htmlFor={f.id}
                    className="text-[0.68rem] uppercase tracking-[0.24em] text-muted-foreground"
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    name={f.id}
                    type={f.type}
                    required
                    placeholder={f.placeholder}
                    className="mt-2 w-full rounded-2xl border border-input bg-background/40 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:shadow-[var(--shadow-glow)]"
                  />
                </div>
              ))}
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="text-[0.68rem] uppercase tracking-[0.24em] text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Write your message..."
                  className="mt-2 w-full resize-none rounded-2xl border border-input bg-background/40 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:shadow-[var(--shadow-glow)]"
                />
              </div>
            </div>
            <Magnetic
              type="submit"
              disabled={sending}
              className="mt-8 flex items-center gap-2 rounded-full bg-[image:var(--gradient-luxe)] px-7 py-3.5 text-[0.75rem] uppercase tracking-[0.2em] text-primary-foreground shadow-[var(--shadow-glow)] disabled:opacity-70"
            >
              <motion.span
                animate={sending ? { x: [0, 6, 0] } : { x: 0 }}
                transition={{ duration: 0.7, repeat: sending ? Infinity : 0 }}
                className="grid place-items-center"
              >
                <Send className="size-4" aria-hidden />
              </motion.span>
              {sending ? "Sending..." : "Send Message"}
            </Magnetic>
          </form>
        </Reveal>

        <div className="grid gap-5">
          {details.map((d, i) => (
            <Reveal key={d.label} variant="right" delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -5 }}
                className="glass gold-ring flex h-full min-w-0 items-center gap-4 rounded-[1.75rem] p-6 transition-all"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[image:var(--gradient-luxe)] text-primary-foreground">
                  <d.icon className="size-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
                    {d.label}
                  </p>
                  <p className="truncate text-sm text-foreground">{d.value}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}