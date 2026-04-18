import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { volunteeringItems } from "@/data/volunteering";
import { Mic2, CheckCircle2, ImageOff } from "lucide-react";

export function Volunteering() {
  return (
    <section id="volunteering" className="relative border-t border-white/[0.04]">
      <div className="section-container">
        <SectionHeading
          eyebrow="Volunteering & Conferences"
          title="On-stage &"
          highlight="on the ground."
          subtitle="Compère, facilitator, and organizing team member across international academic and AI conferences."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {volunteeringItems.map((item, i) => (
            <ConferenceCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ConferenceCard({
  item,
  index,
}: {
  item: (typeof volunteeringItems)[number];
  index: number;
}) {
  const [imgOk, setImgOk] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col overflow-hidden rounded-2xl border bg-[rgba(17,19,26,0.85)] backdrop-blur-xl transition-all duration-300"
      style={{
        borderColor: `${item.color}22`,
        boxShadow: "0 4px 30px rgba(0,0,0,0.3)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = item.color + "55";
        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 50px ${item.color}18, 0 20px 50px rgba(0,0,0,0.4)`;
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = item.color + "22";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 30px rgba(0,0,0,0.3)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      {/* ── Image ── */}
      <div
        className="relative h-[200px] w-full overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${item.color}10, rgba(7,7,10,0.9))` }}
      >
        {imgOk ? (
          <img
            src={item.image}
            alt={item.conference}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgOk(false)}
          />
        ) : (
          /* Fallback: styled conference badge */
          <FallbackBadge item={item} />
        )}

        {/* Gradient fade at bottom */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-20"
          style={{ background: "linear-gradient(to top, rgba(17,19,26,1), transparent)" }}
        />

        {/* Role chip overlaid on image */}
        <div className="absolute left-4 top-4">
          <span
            className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold backdrop-blur-md"
            style={{
              background: `${item.color}18`,
              borderColor: `${item.color}45`,
              color: item.color,
            }}
          >
            <Mic2 size={10} />
            Compère
          </span>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="flex flex-1 flex-col p-5">
        {/* Header */}
        <div className="mb-1 flex items-start justify-between gap-2">
          <h3
            className="font-display text-lg font-bold leading-tight"
            style={{ color: item.color }}
          >
            {item.conference}
          </h3>
        </div>
        <p className="mb-4 text-[13px] font-medium text-[var(--text)]">{item.role}</p>

        {/* Divider */}
        <div
          className="mb-4 h-px w-full"
          style={{ background: `linear-gradient(90deg, ${item.color}30, transparent)` }}
        />

        {/* Highlights */}
        <ul className="space-y-2">
          {item.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-[12.5px] leading-relaxed text-[var(--muted)]">
              <CheckCircle2
                size={12}
                className="mt-[3px] shrink-0"
                style={{ color: item.color }}
              />
              {h}
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom accent line */}
      <div
        className="h-[2px] w-full"
        style={{ background: `linear-gradient(90deg, ${item.color}60, transparent)` }}
      />
    </motion.div>
  );
}

function FallbackBadge({ item }: { item: (typeof volunteeringItems)[number] }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6">
      {/* Decorative rings */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        aria-hidden
      >
        <div
          className="h-32 w-32 rounded-full opacity-10"
          style={{ border: `1px solid ${item.color}`, boxShadow: `0 0 40px ${item.color}` }}
        />
        <div
          className="absolute h-20 w-20 rounded-full opacity-15"
          style={{ background: item.color }}
        />
      </div>

      <div className="relative text-center">
        <p
          className="font-display text-3xl font-extrabold tracking-tight"
          style={{ color: item.color }}
        >
          {item.conference}
        </p>
        <div className="mt-2 flex items-center justify-center gap-1.5 text-[11px] text-[var(--muted)]">
          <ImageOff size={11} />
          <span>Add photo: public/conferences/{item.id}.jpg</span>
        </div>
      </div>
    </div>
  );
}
