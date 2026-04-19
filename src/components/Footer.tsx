import { Link } from "react-router-dom";
import { Github, Linkedin, Instagram } from "lucide-react";
import { site } from "@/data/site";

const SOCIALS = [
  { icon: Github,    href: site.github,    label: "GitHub"    },
  { icon: Linkedin,  href: site.linkedin,  label: "LinkedIn"  },
  { icon: Instagram, href: site.instagram, label: "Instagram" },
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

export function Footer() {
  return (
    <footer className="relative border-t border-[rgba(124,58,237,0.1)]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.4), rgba(34,211,238,0.3), transparent)" }}
        aria-hidden
      />

      <div className="max-w-[1280px] mx-auto px-6 pt-10 pb-8">
        {/* Top row */}
        <div className="grid gap-8 sm:grid-cols-[1fr_auto_auto] sm:items-start">
          {/* Brand */}
          <div>
            <p className="font-display text-lg font-bold gradient-text">{site.name}</p>
            <p className="mt-1 max-w-xs text-xs leading-relaxed text-[var(--muted)]">
              {site.shortTagline}
            </p>
            <div className="mt-4 flex items-center gap-2">
              {SOCIALS.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.07] text-[var(--muted)] transition hover:border-[var(--secondary)] hover:text-[var(--secondary)]"
                    aria-label={s.label}
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick nav */}
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Navigate</p>
            <ul className="space-y-2">
              {QUICK_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-[13px] text-[var(--muted)] transition hover:text-[var(--secondary)] no-underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact quick */}
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Reach out</p>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-[13px] text-[var(--muted)] transition hover:text-[var(--secondary)]"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="text-[13px] text-[var(--muted)] transition hover:text-[var(--secondary)]"
                >
                  {site.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/[0.05] pt-6 sm:flex-row">
          <p className="text-[11px] text-[var(--muted)]">
            © {new Date().getFullYear()} Shambhavi Jha · All rights reserved
          </p>
          <p className="text-[11px] text-[var(--muted)]">
            Built with React, Vite & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
