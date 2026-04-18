import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { certifications } from "@/data/certifications";
import { Award } from "lucide-react";

const PROVIDER_COLORS: Record<string, { bg: string; color: string }> = {
  freeCodeCamp: { bg: "rgba(34,211,238,0.08)",  color: "#22D3EE"  },
  Udemy:        { bg: "rgba(124,58,237,0.09)",  color: "#7C3AED"  },
  IBM:          { bg: "rgba(34,211,238,0.09)",  color: "#22D3EE"  },
  Teachnook:    { bg: "rgba(244,63,94,0.08)",   color: "#F43F5E"  },
  Aptech:       { bg: "rgba(124,58,237,0.08)",  color: "#7C3AED"  },
};

export function Certifications() {
  return (
    <section id="certifications" className="relative border-t border-white/[0.04]">
      <div className="section-container">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials &"
          highlight="courses."
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => {
            const col = PROVIDER_COLORS[cert.provider] ?? PROVIDER_COLORS.Udemy;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.38, delay: i * 0.06 }}
                className="cyber-card flex items-center gap-4 p-4"
              >
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: col.bg, border: `1px solid ${col.color}30` }}
                >
                  <Award size={16} style={{ color: col.color }} />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[var(--text)] leading-snug">{cert.title}</p>
                  <p
                    className="mt-0.5 text-[11px] font-medium"
                    style={{ color: col.color }}
                  >
                    {cert.provider}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
