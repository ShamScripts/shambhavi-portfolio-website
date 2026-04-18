import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SECTIONS = [
  { id: "home",          label: "Home"          },
  { id: "about",         label: "About"         },
  { id: "what-i-bring",  label: "What I Bring"  },
  { id: "skills",        label: "Skills"        },
  { id: "projects",      label: "Projects"      },
  { id: "research",      label: "Research"      },
  { id: "education",     label: "Education"     },
  { id: "experience",    label: "Experience"    },
  { id: "clubs",         label: "Leadership"    },
  { id: "volunteering",  label: "Conferences"   },
  { id: "certifications",label: "Certificates"  },
  { id: "art",           label: "Art"           },
  { id: "gallery",       label: "Gallery"       },
  { id: "contact",       label: "Contact"       },
];

export function SectionDots() {
  const [activeId,  setActiveId]  = useState("home");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveId(e.target.id); });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="fixed right-5 top-1/2 z-50 -translate-y-1/2 hidden lg:flex flex-col items-center gap-2.5">
      {SECTIONS.map((s) => {
        const isActive  = activeId  === s.id;
        const isHovered = hoveredId === s.id;
        return (
          <div
            key={s.id}
            className="relative flex items-center justify-end"
            onMouseEnter={() => setHoveredId(s.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Label tooltip */}
            <AnimatePresence>
              {isHovered && (
                <motion.span
                  initial={{ opacity: 0, x: 6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-6 whitespace-nowrap rounded-lg border border-white/[0.08] px-2.5 py-1 text-[10px] font-semibold tracking-wide"
                  style={{
                    background: "rgba(10,10,15,0.92)",
                    backdropFilter: "blur(12px)",
                    color: isActive ? "var(--primary)" : "var(--muted)",
                    borderColor: isActive ? "rgba(124,58,237,0.35)" : "rgba(255,255,255,0.08)",
                  }}
                >
                  {s.label}
                </motion.span>
              )}
            </AnimatePresence>

            {/* Dot */}
            <a
              href={`#${s.id}`}
              aria-label={`Go to ${s.label}`}
              className="relative flex items-center justify-center no-underline transition-all duration-200"
              style={{ width: 16, height: 16 }}
            >
              {/* Active outer ring */}
              {isActive && (
                <motion.span
                  layoutId="dot-ring"
                  className="absolute rounded-full border"
                  style={{ width: 14, height: 14, borderColor: "rgba(124,58,237,0.55)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {/* Inner dot */}
              <motion.span
                className="rounded-full"
                animate={{
                  width:            isActive ? 6 : isHovered ? 5 : 4,
                  height:           isActive ? 6 : isHovered ? 5 : 4,
                  backgroundColor:  isActive ? "#7C3AED" : isHovered ? "#94A3B8" : "rgba(148,163,184,0.35)",
                  boxShadow:        isActive ? "0 0 8px rgba(124,58,237,0.8)" : "none",
                }}
                transition={{ duration: 0.2 }}
              />
            </a>
          </div>
        );
      })}
    </div>
  );
}
