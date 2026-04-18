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

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputClass =
    "w-full rounded-lg border border-[rgba(124,58,237,0.15)] bg-[rgba(17,19,26,0.7)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--muted)] outline-none transition focus:border-[var(--secondary)] focus:ring-1 focus:ring-[rgba(34,211,238,0.2)]";

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

          {/* ── Form / Success ── */}
          <AnimatePresence mode="wait">
            {sent ? (
              /* ── Success card ── */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="cyber-card flex flex-col items-center justify-center gap-5 p-12 text-center"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10">
                  <CheckCircle size={32} className="text-emerald-400" />
                </span>
                <div>
                  <p className="font-display text-xl font-bold text-[var(--text)]">Message sent!</p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    Your mail app should have opened with the message pre-filled.<br />
                    I'll get back to you as soon as I can.
                  </p>
                </div>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
                  className="btn-secondary mt-2"
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              /* ── Form ── */
              <motion.form
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 }}
                onSubmit={handleSubmit}
                className="cyber-card space-y-4 p-7"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-[11px] uppercase tracking-wider text-[var(--muted)]">Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className={inputClass}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[11px] uppercase tracking-wider text-[var(--muted)]">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      className={inputClass}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-[11px] uppercase tracking-wider text-[var(--muted)]">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="What's on your mind?"
                    className={`${inputClass} resize-none`}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  <Send size={15} />
                  Send Message
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
