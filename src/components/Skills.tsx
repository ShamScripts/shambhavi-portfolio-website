import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { skillCategories } from "@/data/skills";
import { Code2, BarChart2, Database, Wrench, GitBranch, Brain } from "lucide-react";

const CATEGORY_ICONS = [Code2, Brain, BarChart2, Database, GitBranch, Wrench];
const CATEGORY_COLORS = [
  { border: "rgba(124,58,237,0.25)", text: "text-[var(--primary)]",   bg: "rgba(124,58,237,0.08)" },
  { border: "rgba(34,211,238,0.22)",  text: "text-[var(--secondary)]", bg: "rgba(34,211,238,0.07)" },
  { border: "rgba(124,58,237,0.2)",   text: "text-[var(--primary)]",   bg: "rgba(124,58,237,0.06)" },
  { border: "rgba(34,211,238,0.2)",   text: "text-[var(--secondary)]", bg: "rgba(34,211,238,0.06)" },
  { border: "rgba(244,63,94,0.2)",    text: "text-[var(--accent)]",    bg: "rgba(244,63,94,0.06)"  },
  { border: "rgba(124,58,237,0.2)",   text: "text-[var(--primary)]",   bg: "rgba(124,58,237,0.06)" },
];

export function Skills() {
  return (
    <section id="skills" className="relative border-t border-white/[0.04]">
      <div className="section-container">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Tools, languages &"
          highlight="frameworks."
          subtitle="The stack I use to build, analyze, and ship."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const Icon = CATEGORY_ICONS[i % CATEGORY_ICONS.length];
            const col  = CATEGORY_COLORS[i % CATEGORY_COLORS.length];
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="cyber-card p-6"
                style={{ borderColor: col.border }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-lg"
                    style={{ background: col.bg }}
                  >
                    <Icon size={16} className={col.text} />
                  </span>
                  <h3 className="text-sm font-semibold capitalize text-[var(--text)]">
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item) => (
                    <span key={item} className="tech-chip">{item}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
