import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { site } from "@/data/site";
import { Mail, Phone, Github, Linkedin, Instagram, Send, CheckCircle } from "lucide-react";

const SOCIALS = [
  { label: "GitHub",    href: site.github,    icon: Github,    color: "#7C3AED" },
  { label: "LinkedIn",  href: site.linkedin,  icon: Linkedin,  color: "#22D3EE" },
  { label: "Instagram", href: site.instagram, icon: Instagram, color: "#F43F5E" },
];

const inputClass =
  "w-full rounded-lg border border-[rgba(124,58,237,0.15)] bg-[rgba(17,19,26,0.7)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--muted)] outline-none transition focus:border-[var(--secondary)] focus:ring-1 focus:ring-[rgba(34,211,238,0.2)]";

const inputClassCompact =
  "w-full rounded-lg border border-[rgba(124,58,237,0.15)] bg-[rgba(17,19,26,0.7)] px-3 py-2 text-[13px] text-[var(--text)] placeholder:text-[var(--muted)] outline-none transition focus:border-[var(--secondary)] focus:ring-1 focus:ring-[rgba(34,211,238,0.2)]";

type ContactMailtoFormProps = {
  variant?: "full" | "compact";
  className?: string;
};

/** Shared mailto form — full layout for Contact section, compact for Footer. */
export function ContactMailtoForm({ variant = "full", className = "" }: ContactMailtoFormProps) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const compact = variant === "compact";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const ic = compact ? inputClassCompact : inputClass;

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: compact ? 0.98 : 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className={
              compact
                ? "cyber-card flex flex-col items-center justify-center gap-3 p-6 text-center"
                : "cyber-card flex flex-col items-center justify-center gap-5 p-12 text-center"
            }
          >
            <span
              className={
                compact
                  ? "flex h-12 w-12 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10"
                  : "flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10"
              }
            >
              <CheckCircle size={compact ? 24 : 32} className="text-emerald-400" />
            </span>
            <div>
              <p className={`font-display font-bold text-[var(--text)] ${compact ? "text-base" : "text-xl"}`}>
                Message sent!
              </p>
              <p className={`mt-1.5 text-[var(--muted)] ${compact ? "text-xs leading-relaxed" : "text-sm leading-relaxed"}`}>
                {compact ? (
                  <>Your mail app should open with the message ready.</>
                ) : (
                  <>
                    Your mail app should have opened with the message pre-filled.
                    <br />
                    I'll get back to you as soon as I can.
                  </>
                )}
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setSent(false);
                setForm({ name: "", email: "", message: "" });
              }}
              className={compact ? "btn-secondary mt-1 px-4 py-2 text-xs" : "btn-secondary mt-2"}
            >
              Send another
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, x: compact ? 0 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            whileInView={compact ? undefined : { opacity: 1, x: 0 }}
            viewport={compact ? undefined : { once: true }}
            transition={{ duration: 0.5, delay: compact ? 0 : 0.08 }}
            onSubmit={handleSubmit}
            className={compact ? "cyber-card space-y-3 p-5 sm:p-6" : "cyber-card space-y-4 p-7"}
          >
            {compact && (
              <div className="mb-0.5 border-b border-white/[0.06] pb-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Contact me</p>
                <p className="mt-1 font-display text-xl font-bold leading-tight">
                  <span className="gradient-text">Let's connect</span>
                </p>
                <p className="mt-1.5 text-[12px] leading-relaxed text-[var(--muted)]">
                  Drop a note — I'll reply when I can.
                </p>
              </div>
            )}
            <div className={compact ? "grid gap-3 sm:grid-cols-2" : "grid gap-4 sm:grid-cols-2"}>
              <div>
                <label className={`mb-1 block uppercase tracking-wider text-[var(--muted)] ${compact ? "text-[10px]" : "text-[11px]"}`}>
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className={ic}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label className={`mb-1 block uppercase tracking-wider text-[var(--muted)] ${compact ? "text-[10px]" : "text-[11px]"}`}>
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className={ic}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label className={`mb-1 block uppercase tracking-wider text-[var(--muted)] ${compact ? "text-[10px]" : "text-[11px]"}`}>
                Message
              </label>
              <textarea
                required
                rows={compact ? 3 : 5}
                placeholder="What's on your mind?"
                className={`${ic} resize-none`}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <button type="submit" className={`btn-primary w-full justify-center ${compact ? "py-2.5 text-sm" : ""}`}>
              <Send size={compact ? 14 : 15} />
              Send Message
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative border-t border-white/[0.04]">
      <div className="section-container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's"
          highlight="connect."
          subtitle="Open to opportunities in Machine Learning, Data Analytics, HR Tech, and leadership roles in tech-driven communities."
        />

        <div className="grid gap-10 lg:grid-cols-[400px_1fr] lg:items-start">
          {/* ── Info side ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <div className="cyber-card p-6">
              <p className="mb-5 text-sm leading-relaxed text-[var(--muted)]">
                Whether it's a technical role, a creative collaboration, or just an interesting problem to discuss, I'd love to hear from you.
              </p>
              <div className="space-y-4">
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-center gap-3 text-sm text-[var(--muted)] transition hover:text-[var(--text)]"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[rgba(124,58,237,0.1)] border border-[rgba(124,58,237,0.2)] transition group-hover:border-[var(--primary)]">
                    <Mail size={15} className="text-[var(--primary)]" />
                  </span>
                  <span className="truncate">{site.email}</span>
                </a>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="group flex items-center gap-3 text-sm text-[var(--muted)] transition hover:text-[var(--text)]"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[rgba(34,211,238,0.08)] border border-[rgba(34,211,238,0.18)] transition group-hover:border-[var(--secondary)]">
                    <Phone size={15} className="text-[var(--secondary)]" />
                  </span>
                  {site.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="cyber-card p-5">
              <p className="mb-4 text-[10px] uppercase tracking-wider text-[var(--muted)]">Find me on</p>
              <div className="flex gap-3">
                {SOCIALS.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all duration-200"
                      style={{ borderColor: `${s.color}25`, color: "var(--muted)" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = s.color + "55";
                        (e.currentTarget as HTMLElement).style.color = s.color;
                        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${s.color}18`;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = s.color + "25";
                        (e.currentTarget as HTMLElement).style.color = "var(--muted)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "";
                      }}
                    >
                      <Icon size={15} />
                      {s.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <ContactMailtoForm variant="full" />
        </div>
      </div>
    </section>
  );
}
