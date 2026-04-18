import { motion } from "framer-motion";
import {
  BarChart2, Briefcase, Calendar, Megaphone, Star, Trophy, CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const clubRoles = [
  {
    icon: Trophy,
    badge: "Current",
    title: "Marketing Secretary",
    org: "ACM-W, BITS Pilani Dubai",
    period: "May 2025 to Present",
    tagline: "Owns strategy, execution & community growth",
    points: [
      "Leads end-to-end marketing strategy: from campaign planning to on-ground delivery",
      "Drives promotional campaigns across social media and campus channels for workshops and hackathons",
      "Coordinates cross-functional teams to ensure structured execution of large-scale technical events",
      "Acts as primary liaison between the committee, collaborators, and the student community",
    ],
    color: "#F43F5E",
  },
  {
    icon: Star,
    badge: "Current",
    title: "Marketing Manager",
    org: "ACM, BITS Pilani Dubai",
    period: "May 2025 to Present",
    tagline: "Campaigns, branding & structured outreach",
    points: [
      "Manages branding and outreach strategy for ACM technical programmes and flagship events",
      "Coordinates hackathon and workshop execution across teams with system-level thinking",
      "Drives consistent messaging and visual identity across all communication channels",
      "Builds participation pipelines to grow community engagement in technical initiatives",
    ],
    color: "#7C3AED",
  },
  {
    icon: Megaphone,
    badge: "Previous",
    title: "Marketing Executive",
    org: "ACM-W, BITS Pilani Dubai",
    period: "May 2024 to May 2025",
    tagline: "Built the execution foundation",
    points: [
      "Organised AI-focused technical workshops and hackathons, managing logistics and participant engagement",
      "Led targeted marketing campaigns that improved event participation and community visibility",
      "Developed cross-functional coordination skills across large-scale events with multi-team involvement",
      "Created content across social platforms to amplify ACM-W's reach and messaging",
    ],
    color: "#F43F5E",
  },
  {
    icon: Calendar,
    badge: "Previous",
    title: "Management Executive",
    org: "SUPERNOVA: Astronomy Club",
    period: "Sept 2024 to May 2025",
    tagline: "Operations, talks & knowledge-sharing",
    points: [
      "Managed operational planning and delivery of club activities and technical speaker sessions",
      "Hosted an Excel data analysis & visualisation workshop for club members",
      "Coordinated logistics and communications for events, ensuring smooth on-ground execution",
    ],
    color: "#22D3EE",
  },
  {
    icon: Briefcase,
    badge: "Previous",
    title: "Treasurer",
    org: "SUPERNOVA: Astronomy Club",
    period: "Feb 2024 to Jun 2024",
    tagline: "Fiscal accountability & resource management",
    points: [
      "Maintained accurate financial records and budget allocations for all club activities",
      "Coordinated sponsorship and funding initiatives to resource club events",
      "Ensured structured financial accountability across the club's operational calendar",
    ],
    color: "#22D3EE",
  },
  {
    icon: BarChart2,
    badge: "",
    title: "Content, Events & Coordination",
    org: "Cross-club",
    period: "Ongoing",
    tagline: "Execution across every initiative",
    points: [
      "Creates event communications that make purpose and value immediately clear to audiences",
      "Manages logistics, speaker alignment, and on-day execution across multiple simultaneous workstreams",
      "Resolves coordination friction and keeps cross-functional teams focused on outcomes",
      "Applies the same structured thinking to events as to data: systematic, deliberate, results-driven",
    ],
    color: "#7C3AED",
  },
];

export function Clubs() {
  return (
    <section id="clubs" className="relative border-t border-white/[0.04]">
      <div className="section-container">
        <SectionHeading
          eyebrow="Community"
          title="Clubs &"
          highlight="leadership."
          subtitle="I focus on execution, coordination, and making ideas actually happen at scale: from planning and campaigns to on-ground delivery."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {clubRoles.map((c, i) => {
            const Icon = c.icon;
            const isCurrent = c.badge === "Current";
            return (
              <motion.div
                key={c.title + c.org}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.42, delay: i * 0.07 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border bg-[rgba(17,19,26,0.85)] backdrop-blur-xl"
                style={{
                  borderColor: `${c.color}22`,
                  transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = c.color + "55";
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 50px ${c.color}18, 0 20px 40px rgba(0,0,0,0.35)`;
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = c.color + "22";
                  (e.currentTarget as HTMLElement).style.boxShadow = "";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                {/* Top accent bar */}
                <div
                  className="h-[3px] w-full shrink-0"
                  style={{ background: `linear-gradient(90deg, ${c.color}, ${c.color}40, transparent)` }}
                />

                {/* Card body */}
                <div className="flex flex-1 flex-col p-6">
                  {/* Header row */}
                  <div className="mb-4 flex items-start justify-between gap-2">
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border"
                      style={{
                        background: `${c.color}12`,
                        borderColor: `${c.color}30`,
                        color: c.color,
                      }}
                    >
                      <Icon size={18} strokeWidth={1.6} />
                    </span>

                    {c.badge && (
                      <span
                        className="rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest"
                        style={
                          isCurrent
                            ? { borderColor: `${c.color}50`, background: `${c.color}14`, color: c.color }
                            : { borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", color: "var(--muted)" }
                        }
                      >
                        {isCurrent ? "● " : ""}{c.badge}
                      </span>
                    )}
                  </div>

                  {/* Title + org + period */}
                  <h3 className="font-display text-[15px] font-bold leading-snug text-[var(--text)]">
                    {c.title}
                  </h3>
                  <p className="mt-0.5 text-[12px] font-semibold" style={{ color: c.color }}>
                    {c.org}
                  </p>
                  <p className="mt-0.5 text-[11px] text-[var(--muted)]">{c.period}</p>

                  {/* Tagline */}
                  <p className="mt-3 text-[12px] italic text-[var(--muted)] opacity-80">
                    {c.tagline}
                  </p>

                  {/* Divider */}
                  <div
                    className="my-4 h-px w-full"
                    style={{ background: `linear-gradient(90deg, ${c.color}30, transparent)` }}
                  />

                  {/* Bullet points */}
                  <ul className="flex flex-1 flex-col gap-2.5">
                    {c.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5">
                        <CheckCircle2
                          size={13}
                          className="mt-[3px] shrink-0"
                          style={{ color: c.color }}
                        />
                        <span className="text-[12.5px] leading-[1.65] text-[var(--muted)]">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
