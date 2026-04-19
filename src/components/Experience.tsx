import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { experienceItems } from "@/data/experience";
import { Briefcase, MapPin, ChevronRight } from "lucide-react";

const TYPE_MAP: Record<string, { color: string; bg: string; border: string }> = {
  techmantra:       { color: "#7C3AED", bg: "rgba(124,58,237,0.1)",  border: "rgba(124,58,237,0.3)"  },
  evotai:           { color: "#22D3EE", bg: "rgba(34,211,238,0.08)", border: "rgba(34,211,238,0.28)"  },
  "acmw-sec":       { color: "#F43F5E", bg: "rgba(244,63,94,0.08)",  border: "rgba(244,63,94,0.25)"  },
  "acmw-exec":      { color: "#F43F5E", bg: "rgba(244,63,94,0.08)",  border: "rgba(244,63,94,0.22)"  },
  "acm-mgr":        { color: "#7C3AED", bg: "rgba(124,58,237,0.08)", border: "rgba(124,58,237,0.22)" },
  "supernova-exec": { color: "#22D3EE", bg: "rgba(34,211,238,0.07)", border: "rgba(34,211,238,0.2)"  },
  "supernova-treasurer": { color: "#22D3EE", bg: "rgba(34,211,238,0.07)", border: "rgba(34,211,238,0.2)" },
};

const INTERNSHIP_IDS = ["techmantra", "evotai"];

export function Experience() {
        const internships = experienceItems.filter((e) => INTERNSHIP_IDS.includes(e.id));

  const renderItem = (item: typeof experienceItems[number], i: number) => {
    const col = TYPE_MAP[item.id] ?? TYPE_MAP["acm-mgr"];
    return (
      <motion.div
        key={item.id}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: i * 0.07 }}
        className="group relative flex h-full gap-4"
      >
        {/* Role icon (no vertical spine — grid layout) */}
        <div className="flex shrink-0 flex-col items-center">
          <span
            className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border"
            style={{ background: col.bg, borderColor: col.border, color: col.color }}
          >
            <Briefcase size={15} />
            <span
              className="absolute inset-0 rounded-full animate-ping opacity-20"
              style={{ background: col.color }}
              aria-hidden
            />
          </span>
        </div>

        {/* Card */}
        <div
          className="relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border bg-[rgba(17,19,26,0.8)] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5"
          style={{
            borderColor: col.border.replace("0.3", "0.12"),
            transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = col.border;
            (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${col.bg}`;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = col.border.replace("0.3", "0.12");
            (e.currentTarget as HTMLElement).style.boxShadow = "";
          }}
        >
          {/* Top accent */}
          <div
            className="absolute inset-x-0 top-0 h-[2px] rounded-t-xl"
            style={{ background: `linear-gradient(90deg, ${col.color}, transparent)` }}
          />

          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <h3 className="font-display text-[15px] font-bold text-[var(--text)]">{item.title}</h3>
              <p className="mt-0.5 text-sm font-medium" style={{ color: col.color }}>{item.org}</p>
            </div>
            <div className="text-right">
              <span
                className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold"
                style={{ background: col.bg, color: col.color }}
              >
                {item.period}
              </span>
              {item.location && (
                <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-[var(--muted)]">
                  <MapPin size={9} />
                  {item.location}
                </div>
              )}
            </div>
          </div>

          <p className="mt-3 text-[13px] leading-relaxed text-[var(--muted)]">{item.summary}</p>

          <ul className="mt-3 space-y-1.5">
            {item.highlights.map((h) => (
              <li key={h} className="flex items-start gap-1.5 text-[12px] text-[var(--muted)]">
                <ChevronRight size={12} className="mt-0.5 shrink-0" style={{ color: col.color }} />
                {h}
              </li>
            ))}
          </ul>

          {item.tools.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {item.tools.map((t) => (
                <span key={t} className="tech-chip">{t}</span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <section id="experience" className="relative border-t border-white/[0.04]">
      <div className="section-container">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've"
          highlight="worked & led."
        />

        <div className="grid max-w-5xl gap-6 sm:grid-cols-2">
          {internships.map((item, i) => renderItem(item, i))}
        </div>
      </div>
    </section>
  );
}
