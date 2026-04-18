import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { researchItems } from "@/data/research";
import { FlaskConical, CheckCircle2 } from "lucide-react";

const AREA_COLORS = [
  { border: "rgba(124,58,237,0.2)",  glow: "rgba(124,58,237,0.08)", dot: "#7C3AED" },
  { border: "rgba(34,211,238,0.2)",  glow: "rgba(34,211,238,0.07)", dot: "#22D3EE" },
  { border: "rgba(244,63,94,0.18)", glow: "rgba(244,63,94,0.06)",  dot: "#F43F5E" },
];

export function Research() {
  return (
    <section id="research" className="relative border-t border-white/[0.04]">
      <div className="section-container">
        <SectionHeading
          eyebrow="Research"
          title="Investigations &"
          highlight="open questions."
          subtitle="Ongoing research spanning ML, signal processing, and AI safety."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {researchItems.map((r, i) => {
            const col = AREA_COLORS[i % AREA_COLORS.length];
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.09 }}
                className="cyber-card flex flex-col p-6"
                style={{ borderColor: col.border, boxShadow: `0 0 0 0 transparent` }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${col.glow}`;
                  (e.currentTarget as HTMLElement).style.borderColor = col.dot + "55";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "";
                  (e.currentTarget as HTMLElement).style.borderColor = col.border;
                }}
              >
                <div className="mb-4 flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                    style={{ background: col.glow, border: `1px solid ${col.dot}33` }}
                  >
                    <FlaskConical size={15} style={{ color: col.dot }} />
                  </span>
                  <div>
                    <span
                      className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                      style={{ background: col.glow, color: col.dot }}
                    >
                      {r.period}
                    </span>
                    <h3 className="mt-1.5 font-display text-[15px] font-bold leading-snug text-[var(--text)]">
                      {r.title}
                    </h3>
                  </div>
                </div>

                <ul className="mt-2 space-y-2.5">
                  {r.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-[13px] leading-relaxed text-[var(--muted)]">
                      <CheckCircle2 size={12} className="mt-1 shrink-0" style={{ color: col.dot }} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
