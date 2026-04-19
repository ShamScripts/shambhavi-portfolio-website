import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { site } from "@/data/site";

const NAV_LINKS = [
  { label: "About",      to: "/about"          },
  { label: "Skills",     to: "/skills"         },
  { label: "Projects",   to: "/projects"       },
  { label: "Research",   to: "/research"       },
  { label: "Education",  to: "/education"      },
  { label: "Experience", to: "/experience"     },
  { label: "Leadership", to: "/leadership"     },
  { label: "Art",        to: "/art"            },
  { label: "Gallery",    to: "/gallery"        },
  { label: "Contact",    to: "/contact"        },
];

export function FloatingNav() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  /* On home page: hide until scrolled; on all other pages: always visible */
  const [visible, setVisible] = useState(!isHome);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) { setVisible(true); return; }
    const onScroll = () => setVisible(window.scrollY > 480);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  /* Close mobile menu on route change */
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="fixed top-4 left-1/2 z-50 -translate-x-1/2"
        >
          {/* ── DESKTOP PILL ── */}
          <nav
            className="hidden md:flex items-center gap-0.5 rounded-full border border-white/[0.09] px-2.5 py-1.5 shadow-[0_8px_40px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.03)]"
            style={{ background: "rgba(10,10,15,0.88)", backdropFilter: "blur(24px)" }}
          >
            {/* Logo — always goes home */}
            <Link
              to="/"
              className="mr-2 pr-3 border-r border-white/[0.08] font-display text-[13px] font-bold gradient-text no-underline shrink-0"
            >
              SJ
            </Link>

            {/* Route links */}
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `relative px-3 py-1 rounded-full text-[11.5px] font-semibold no-underline transition-colors duration-150 ${
                    isActive ? "text-[var(--text)]" : "text-[var(--muted)] hover:text-[var(--text)]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full"
                        style={{ background: "rgba(124,58,237,0.18)", border: "1px solid rgba(124,58,237,0.3)" }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </>
                )}
              </NavLink>
            ))}

            {/* Social icons */}
            <span className="ml-2 pl-3 border-l border-white/[0.08] flex items-center gap-1.5">
              <a href={site.github} target="_blank" rel="noreferrer"
                className="flex h-6 w-6 items-center justify-center rounded-full text-[var(--muted)] transition-colors hover:text-[var(--primary)] no-underline">
                <Github size={12} />
              </a>
              <a href={site.linkedin} target="_blank" rel="noreferrer"
                className="flex h-6 w-6 items-center justify-center rounded-full text-[var(--muted)] transition-colors hover:text-[#0a66c2] no-underline">
                <Linkedin size={12} />
              </a>
            </span>
          </nav>

          {/* ── MOBILE PILL ── */}
          <div className="flex md:hidden">
            <div
              className="flex items-center gap-3 rounded-full border border-white/[0.09] px-4 py-2 shadow-[0_8px_40px_rgba(0,0,0,0.55)]"
              style={{ background: "rgba(10,10,15,0.9)", backdropFilter: "blur(24px)" }}
            >
              <Link to="/" className="font-display text-[13px] font-bold gradient-text no-underline">SJ</Link>
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="flex flex-col gap-[4px] p-1"
                aria-label="Toggle menu"
              >
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="block h-[1.5px] w-5 rounded-full bg-[var(--muted)]"
                    animate={
                      menuOpen
                        ? i === 0 ? { rotate: 45, y: 5.5 }
                        : i === 1 ? { opacity: 0 }
                        : { rotate: -45, y: -5.5 }
                        : { rotate: 0, y: 0, opacity: 1 }
                    }
                    transition={{ duration: 0.2 }}
                  />
                ))}
              </button>
            </div>

            {/* Mobile dropdown */}
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-12 left-1/2 -translate-x-1/2 w-44 rounded-2xl border border-white/[0.09] overflow-hidden"
                  style={{ background: "rgba(10,10,15,0.95)", backdropFilter: "blur(24px)" }}
                >
                  {NAV_LINKS.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      className={({ isActive }) =>
                        `flex items-center gap-2 px-4 py-2.5 text-[12px] font-semibold no-underline border-b border-white/[0.04] last:border-0 transition-colors ${
                          isActive ? "text-[var(--primary)]" : "text-[var(--muted)]"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {isActive && <span className="h-1 w-1 rounded-full bg-[var(--primary)] shrink-0" />}
                          {link.label}
                        </>
                      )}
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
