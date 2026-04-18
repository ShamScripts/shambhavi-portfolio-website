import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { site } from "@/data/site";
import { MapPin, GraduationCap, Palette, Code2, Globe } from "lucide-react";

const INTERESTS = [
  "Machine Learning", "Data Analytics", "Software Dev",
  "HR Analytics", "Database Systems", "AI Research",
];

const BENTO_CARDS = [
  { label: "Location",    value: "Dubai, UAE",      icon: MapPin,        col: "cyan"   },
  { label: "Degree",      value: "B.E. CS",          icon: GraduationCap, col: "purple" },
  { label: "Creative",    value: "Madhubani Art",     icon: Palette,       col: "rose"   },
  { label: "Stack",       value: "Python · ML · SQL", icon: Code2,         col: "cyan"   },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function About() {
  const [photoOk, setPhotoOk] = useState(true);

  return (
    <section id="about" className="relative border-t border-white/[0.04]">
      <div className="section-container">
        <SectionHeading
          eyebrow="About Me"
          title="Building at the intersection of"
          highlight="data, software & people."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_360px] lg:items-start">
          {/* ── Left: Bio + bento meta ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-5"
          >
            {/* Bio card */}
            <motion.div variants={item} className="cyber-card p-8">
              <p className="mb-4 text-[15px] font-semibold leading-relaxed text-[var(--text)]">
                I build systems where data meets decisions, especially in domains like healthcare, HR analytics, and business operations.
              </p>
              <p className="text-[15px] leading-[1.92] text-[var(--muted)]">
                I'm experienced in building{" "}
                <span className="font-medium text-[var(--text)]">
                  machine learning models, analytics dashboards, ERP-integrated platforms, and backend systems
                </span>
                . My work spans healthcare ML, retail analytics, and full-stack product development, with
                consistent focus on evaluation discipline and results people can act on.
              </p>
              <p className="mt-4 text-[15px] leading-[1.92] text-[var(--muted)]">
                I've interned at{" "}
                <span className="font-semibold text-[var(--secondary)]">TechMantra Gulf DMCC</span>{" "}
                (CRM systems, Dubai) and{" "}
                <span className="font-semibold text-[var(--secondary)]">EvotAi</span>{" "}
                (AI/data, India), and I lead in{" "}
                <span className="font-medium text-[var(--text)]">ACM-W as Marketing Secretary</span> and{" "}
                <span className="font-medium text-[var(--text)]">ACM as Marketing Manager</span>, where
                technical depth meets communication at scale.
              </p>
              <p className="mt-4 text-[15px] leading-[1.92] text-[var(--muted)]">
                Outside engineering, I reset with{" "}
                <span className="font-medium text-[var(--text)]">Madhubani-style painting</span>: patient
                lines, careful colour, and the same discipline I bring to data work. Seeking roles where{" "}
                <span className="font-semibold text-[var(--primary)]">
                  analytical thinking, software skills, and problem-solving
                </span>{" "}
                meet real-world systems.
              </p>

              <div className="mt-6 flex items-center gap-2 border-t border-white/[0.06] pt-5">
                <Globe size={14} className="text-[var(--muted)]" />
                <span className="text-xs text-[var(--muted)]">{site.languages}</span>
              </div>
            </motion.div>

            {/* Bento meta row */}
            <motion.div variants={item} className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {BENTO_CARDS.map((c) => {
                const Icon = c.icon;
                const colMap: Record<string, string> = {
                  cyan:   "border-[rgba(34,211,238,0.15)] hover:border-[rgba(34,211,238,0.4)]",
                  purple: "border-[rgba(124,58,237,0.15)] hover:border-[rgba(124,58,237,0.4)]",
                  rose:   "border-[rgba(244,63,94,0.15)]  hover:border-[rgba(244,63,94,0.4)]",
                };
                const iconMap: Record<string, string> = {
                  cyan:   "text-[var(--secondary)]",
                  purple: "text-[var(--primary)]",
                  rose:   "text-[var(--accent)]",
                };
                return (
                  <div
                    key={c.label}
                    className={`cyber-card border px-4 py-4 transition-colors ${colMap[c.col]}`}
                  >
                    <Icon size={14} className={`mb-2 ${iconMap[c.col]}`} />
                    <p className="text-[10px] uppercase tracking-wider text-[var(--muted)]">{c.label}</p>
                    <p className="mt-0.5 text-sm font-semibold text-[var(--text)]">{c.value}</p>
                  </div>
                );
              })}
            </motion.div>

            {/* Interests */}
            <motion.div variants={item} className="cyber-card p-5">
              <p className="mb-3 text-[10px] uppercase tracking-wider text-[var(--muted)]">
                Areas of Interest
              </p>
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((a) => (
                  <span key={a} className="tech-chip">{a}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto w-full max-w-[340px] lg:mx-0"
          >
            <div
              className="relative aspect-[3/4] overflow-hidden rounded-2xl"
              style={{
                background: "linear-gradient(145deg, rgba(124,58,237,0.12) 0%, #0d0d14 50%, rgba(34,211,238,0.08) 100%)",
                border: "1px solid rgba(124,58,237,0.2)",
                boxShadow: "0 0 60px rgba(124,58,237,0.12), 0 30px 80px rgba(0,0,0,0.5)",
              }}
            >
              {photoOk ? (
                <img
                  src="/avatar/profile.png"
                  alt="Shambhavi Jha"
                  className="h-full w-full object-cover"
                  onError={() => setPhotoOk(false)}
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-4">
                  <p className="font-display text-7xl font-extrabold gradient-text">SJ</p>
                  <p className="text-xs uppercase tracking-[0.35em] text-[var(--secondary)]">Portfolio</p>
                </div>
              )}
              {/* Gradient overlay at bottom */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
                style={{ background: "linear-gradient(to top, rgba(7,7,10,0.9), transparent)" }}
              />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-display text-base font-bold text-[var(--text)]">Shambhavi Jha</p>
                <p className="text-xs text-[var(--muted)]">CS · ML · Dubai</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
