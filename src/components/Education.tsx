import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { educationEntries } from "@/data/education";
import { GraduationCap, MapPin, BookOpen, School } from "lucide-react";

const CARD_STYLES = [
  {
    strip:  "linear-gradient(90deg, #7C3AED, #22D3EE, transparent)",
    icon:   "rgba(124,58,237,0.12)",
    iconBorder: "rgba(124,58,237,0.2)",
    iconColor:  "var(--primary)",
    periodColor: "var(--primary)",
    border: "rgba(124,58,237,0.15)",
    borderHover: "rgba(124,58,237,0.35)",
    glow:   "rgba(124,58,237,0.1)",
    chipClass: "tech-chip-cyan",
    Icon: GraduationCap,
  },
  {
    strip:  "linear-gradient(90deg, #22D3EE, #7C3AED, transparent)",
    icon:   "rgba(34,211,238,0.10)",
    iconBorder: "rgba(34,211,238,0.2)",
    iconColor:  "var(--secondary)",
    periodColor: "var(--secondary)",
    border: "rgba(34,211,238,0.12)",
    borderHover: "rgba(34,211,238,0.32)",
    glow:   "rgba(34,211,238,0.08)",
    chipClass: "tech-chip",
    Icon: School,
  },
];

export function Education() {
  return (
    <section id="education" className="relative border-t border-white/[0.04]">
      <div className="section-container">
        <SectionHeading
          eyebrow="Education"
          title="Where I'm"
          highlight="learning."
        />

        <div className="space-y-6">
          {educationEntries.map((e, i) => {
            const s = CARD_STYLES[i] ?? CARD_STYLES[CARD_STYLES.length - 1];
            const EntryIcon = s.Icon;
            return (
            <motion.div
              key={e.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl bg-[rgba(17,19,26,0.85)] p-8 backdrop-blur-xl transition-all duration-300"
              style={{
                border: `1px solid ${s.border}`,
              }}
              onMouseEnter={(el) => {
                (el.currentTarget as HTMLElement).style.borderColor = s.borderHover;
                (el.currentTarget as HTMLElement).style.boxShadow = `0 0 60px ${s.glow}`;
              }}
              onMouseLeave={(el) => {
                (el.currentTarget as HTMLElement).style.borderColor = s.border;
                (el.currentTarget as HTMLElement).style.boxShadow = "";
              }}
            >
              {/* Decorative top gradient strip */}
              <div
                className="absolute inset-x-0 top-0 h-[2px]"
                style={{ background: s.strip }}
              />

              {/* BG glow on hover */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: `radial-gradient(ellipse at 30% 0%, ${s.glow} 0%, transparent 65%)` }}
                aria-hidden
              />

              <div className="relative grid gap-6 md:grid-cols-[1fr_auto]">
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-lg"
                      style={{ background: s.icon, border: `1px solid ${s.iconBorder}` }}
                    >
                      <EntryIcon size={18} style={{ color: s.iconColor }} />
                    </span>
                    <span
                      className="text-xs font-semibold uppercase tracking-widest"
                      style={{ color: s.periodColor }}
                    >
                      {e.period}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[var(--text)] sm:text-2xl">
                    {e.institution}
                  </h3>
                  <p className="mt-1 font-medium text-[15px]" style={{ color: s.iconColor }}>{e.degree}</p>
                  <p className="mt-0.5 text-sm text-[var(--muted)]">{e.detail}</p>

                  <div className="mt-2 flex items-center gap-1.5 text-[12px] text-[var(--muted)]">
                    <MapPin size={11} />
                    {e.location}
                  </div>
                </div>

                {/* Coursework */}
                <div className="md:max-w-[320px]">
                  <div className="mb-2 flex items-center gap-1.5">
                    <BookOpen size={12} className="text-[var(--muted)]" />
                    <span className="text-[10px] uppercase tracking-wider text-[var(--muted)]">
                      {i === 0 ? "Relevant Coursework" : "Subjects"}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {e.coursework.map((c) => (
                      <span key={c} className={s.chipClass}>{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
