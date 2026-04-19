import { Link } from "react-router-dom";
import { Github, Linkedin, Instagram, Mail, Phone } from "lucide-react";
import { site } from "@/data/site";
import { ContactMailtoForm } from "@/components/Contact";

/** Matches main Contact section — brand-colored outline buttons */
const FIND_ME_SOCIALS = [
  { label: "GitHub",    href: site.github,    Icon: Github,    color: "#7C3AED" },
  { label: "LinkedIn",  href: site.linkedin,  Icon: Linkedin,  color: "#22D3EE" },
  { label: "Instagram", href: site.instagram, Icon: Instagram, color: "#F43F5E" },
];

const QUICK_LINKS = [
  { label: "About",          to: "/about"          },
  { label: "Skills",         to: "/skills"         },
  { label: "Projects",       to: "/projects"       },
  { label: "Research",       to: "/research"       },
  { label: "Education",      to: "/education"      },
  { label: "Experience",     to: "/experience"     },
  { label: "Leadership",     to: "/leadership"     },
  { label: "Art",            to: "/art"            },
  { label: "Gallery",        to: "/gallery"        },
  { label: "Contact",        to: "/contact"        },
];

function FindMeOnCard() {
  return (
    <div className="cyber-card p-5 sm:p-6">
      <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Find me on</p>
      <div className="flex flex-col gap-2.5">
        {FIND_ME_SOCIALS.map((s) => {
          const Icon = s.Icon;
          return (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center gap-2 rounded-lg border px-4 py-2.5 text-[13px] font-semibold transition-all duration-200 sm:text-sm"
              style={{ borderColor: `${s.color}28`, color: "var(--muted)" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = `${s.color}60`;
                el.style.color = s.color;
                el.style.boxShadow = `0 0 22px ${s.color}22`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = `${s.color}28`;
                el.style.color = "var(--muted)";
                el.style.boxShadow = "";
              }}
            >
              <Icon size={15} className="shrink-0" strokeWidth={1.75} />
              <span className="whitespace-nowrap">{s.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

function ReachOutCard() {
  return (
    <div className="cyber-card p-5 sm:p-6">
      <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Reach out</p>
      <p className="mt-3 text-[12px] leading-relaxed text-[var(--muted)]">
        Whether it's a technical role, a creative collaboration, or just an interesting problem to discuss, I'd love to hear from you.
      </p>
      <div className="mt-5 space-y-4">
        <a
          href={`mailto:${site.email}`}
          className="group flex items-start gap-3 text-[13px] text-[var(--muted)] transition hover:text-[var(--text)]"
        >
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[rgba(124,58,237,0.22)] bg-[rgba(124,58,237,0.08)] transition group-hover:border-[rgba(124,58,237,0.45)] group-hover:shadow-[0_0_18px_rgba(124,58,237,0.2)]"
          >
            <Mail size={16} className="text-[var(--primary)]" strokeWidth={1.75} />
          </span>
          <span className="min-w-0 pt-1.5 text-[12px] leading-snug tracking-tight text-[var(--muted)] [overflow-wrap:anywhere] sm:text-[13px]">
            {site.email}
          </span>
        </a>
        <a
          href={`tel:${site.phoneTel}`}
          className="group flex items-center gap-3 text-[13px] text-[var(--muted)] transition hover:text-[var(--text)]"
        >
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[rgba(34,211,238,0.2)] bg-[rgba(34,211,238,0.06)] transition group-hover:border-[rgba(34,211,238,0.45)] group-hover:shadow-[0_0_18px_rgba(34,211,238,0.15)]"
          >
            <Phone size={16} className="text-[var(--secondary)]" strokeWidth={1.75} />
          </span>
          <span className="whitespace-nowrap pt-0.5">{site.phoneDisplay}</span>
        </a>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-[rgba(124,58,237,0.1)]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.4), rgba(34,211,238,0.3), transparent)" }}
        aria-hidden
      />

      <div className="mx-auto max-w-[1280px] px-6 pb-8 pt-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,200px)_minmax(240px,1fr)_minmax(7rem,auto)_minmax(300px,1fr)] lg:items-start lg:gap-x-6 xl:grid-cols-[minmax(0,220px)_minmax(280px,1fr)_minmax(7.5rem,auto)_minmax(340px,1fr)] xl:gap-x-8">
          {/* Brand + Find me on */}
          <div className="flex min-w-0 flex-col gap-6">
            <div>
              <p className="font-display text-lg font-bold gradient-text">{site.name}</p>
              <p className="mt-1 max-w-xs text-xs leading-relaxed text-[var(--muted)]">{site.shortTagline}</p>
            </div>
            <FindMeOnCard />
          </div>

          {/* Contact form */}
          <ContactMailtoForm variant="compact" className="mx-auto min-w-0 w-full max-w-md lg:mx-0 lg:max-w-none" />

          {/* Navigate */}
          <div className="lg:pt-1">
            <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Navigate</p>
            <ul className="space-y-2">
              {QUICK_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-[13px] text-[var(--muted)] no-underline transition hover:text-[var(--secondary)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach out */}
          <div className="min-w-0 lg:pt-1">
            <ReachOutCard />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/[0.05] pt-6 sm:flex-row">
          <p className="text-[11px] text-[var(--muted)]">
            © {new Date().getFullYear()} Shambhavi Jha · All rights reserved
          </p>
          <p className="text-[11px] text-[var(--muted)]">Built with React, Vite & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
