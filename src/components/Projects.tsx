import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, TrendingUp } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { projects, projectCategories } from "@/data/projects";

const CAT_COLORS: Record<string, { accent: string; glow: string; chip: string }> = {
  "Machine Learning": {
    accent: "#7C3AED",
    glow:   "rgba(124,58,237,0.18)",
    chip:   "tech-chip",
  },
  "Data & Analytics": {
    accent: "#22D3EE",
    glow:   "rgba(34,211,238,0.15)",
    chip:   "tech-chip-cyan",
  },
  "Systems & Web": {
    accent: "#F43F5E",
    glow:   "rgba(244,63,94,0.15)",
    chip:   "tech-chip-rose",
  },
  Research: {
    accent: "#22D3EE",
    glow:   "rgba(34,211,238,0.15)",
    chip:   "tech-chip-cyan",
  },
};

const DEFAULT_COL = { accent: "#7C3AED", glow: "rgba(124,58,237,0.15)", chip: "tech-chip" };

export function Projects() {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative border-t border-white/[0.04]">
      <div className="section-container">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built &"
          highlight="shipped."
          subtitle="From healthcare ML to retail analytics: projects that connect technical modeling with real-world use cases."
        />

        {/* Filter pills */}
        <div className="mb-10 flex flex-wrap gap-2">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${
                active === cat
                  ? "border-[var(--primary)] bg-[rgba(124,58,237,0.18)] text-[var(--text)]"
                  : "border-white/[0.08] bg-transparent text-[var(--muted)] hover:border-[var(--primary)] hover:text-[var(--text)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => {
              const col = CAT_COLORS[p.category] ?? DEFAULT_COL;
              return (
                <motion.article
                  key={p.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.38, delay: i * 0.05 }}
                  className="group relative flex flex-col overflow-hidden rounded-xl border border-[rgba(124,58,237,0.1)] bg-[rgba(17,19,26,0.85)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1"
                  style={{
                    boxShadow: "0 4px 30px rgba(0,0,0,0.3)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = col.accent + "55";
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${col.glow}, 0 20px 50px rgba(0,0,0,0.4)`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.1)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 30px rgba(0,0,0,0.3)";
                  }}
                >
                  {/* Accent top bar */}
                  <div
                    className="h-[3px] w-full"
                    style={{ background: `linear-gradient(90deg, ${col.accent}, transparent)` }}
                  />

                  <div className="flex flex-1 flex-col p-6">
                    {/* Header */}
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-base font-bold leading-snug text-[var(--text)]">
                          {p.title}
                        </h3>
                        {p.period && (
                          <span className="mt-1 block text-[11px] text-[var(--muted)]">{p.period}</span>
                        )}
                      </div>
                      <span
                        className="mt-0.5 shrink-0 rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide"
                        style={{
                          borderColor: col.accent + "44",
                          color: col.accent,
                          background: col.glow,
                        }}
                      >
                        {p.category}
                      </span>
                    </div>

                    <p className="text-[13px] leading-relaxed text-[var(--muted)]">
                      {p.description}
                    </p>

                    {/* Impact metric */}
                    <div
                      className="mt-4 flex items-start gap-2 rounded-lg p-3 text-[12px] leading-relaxed"
                      style={{ background: col.glow, border: `1px solid ${col.accent}22` }}
                    >
                      <TrendingUp size={13} className="mt-0.5 shrink-0" style={{ color: col.accent }} />
                      <span className="text-[var(--text)]">{p.result}</span>
                    </div>

                    {/* Tech stack */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <span key={t} className={col.chip}>{t}</span>
                      ))}
                    </div>

                    {/* Footer links */}
                    <div className="mt-5 flex items-center gap-3 border-t border-white/[0.05] pt-4">
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[var(--muted)] transition hover:text-[var(--text)]"
                      >
                        <Github size={13} />
                        Code
                      </a>
                      {p.demoUrl ? (
                        <a
                          href={p.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-[11px] font-semibold transition-all hover:opacity-90"
                          style={{
                            borderColor: col.accent + "55",
                            color: col.accent,
                            background: col.glow,
                          }}
                        >
                          <ExternalLink size={11} />
                          Live Demo
                        </a>
                      ) : (
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[var(--muted)] transition hover:text-[var(--secondary)]"
                        >
                          <ExternalLink size={12} />
                          View
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
