import { motion } from "framer-motion";
import { Cpu, Users, MessageSquare, Heart } from "lucide-react";

const PILLARS = [
  {
    icon: Cpu,
    title: "ML Systems with Real-World Application",
    description:
      "I connect machine learning models with practical outcomes: predicting employee attrition, supporting clinical decisions, and building tools that matter in real contexts.",
    color: "#7C3AED",
  },
  {
    icon: Users,
    title: "Large-Scale Initiative & Campaign Execution",
    description:
      "I own things end to end. From campaign planning to on-ground delivery, I coordinate teams, manage timelines, and ship outcomes. Not just contribution, but ownership.",
    color: "#F43F5E",
  },
  {
    icon: MessageSquare,
    title: "Structured Communication & Coordination",
    description:
      "I make complex initiatives legible to teams, stakeholders, and communities. Clear messaging, structured execution, and the ability to align cross-functional efforts toward shared goals.",
    color: "#22D3EE",
  },
  {
    icon: Heart,
    title: "HR Tech, Analytics & Human-Centered Systems",
    description:
      "I'm drawn to where data meets people: workforce analytics, decision-support tools, and HR tech. I understand both the technical model and the human outcome it's designed to serve.",
    color: "#7C3AED",
  },
];

export function WhatIBring() {
  return (
    <section id="what-i-bring" className="relative border-t border-white/[0.04]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="section-eyebrow mb-4">What I Bring</div>
          <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-[var(--text)] sm:text-4xl md:text-[2.75rem]">
            Four things I bring to{" "}
            <span className="gradient-text">every role.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted)]">
            Across internships, research, and leadership. These are the consistent threads.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.09 }}
                className="group relative flex gap-5 overflow-hidden rounded-2xl border bg-[rgba(17,19,26,0.85)] p-6 backdrop-blur-xl transition-all duration-300"
                style={{ borderColor: `${p.color}22` }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = p.color + "50";
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${p.color}15`;
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = p.color + "22";
                  (e.currentTarget as HTMLElement).style.boxShadow = "";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                {/* Left accent bar */}
                <div
                  className="absolute inset-y-0 left-0 w-[3px] rounded-l-2xl"
                  style={{ background: `linear-gradient(to bottom, ${p.color}, transparent)` }}
                />

                <span
                  className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border"
                  style={{ background: `${p.color}12`, borderColor: `${p.color}30`, color: p.color }}
                >
                  <Icon size={20} strokeWidth={1.6} />
                </span>

                <div>
                  <h3 className="font-display text-[15px] font-bold leading-snug text-[var(--text)]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-[var(--muted)]">
                    {p.description}
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
