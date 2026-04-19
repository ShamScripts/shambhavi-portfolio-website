import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  FolderKanban, Users, Briefcase, Mail, Palette, FlaskConical,
  Brain, BarChart3, Heart, Megaphone,
  Github, Linkedin, Send, ArrowRight, Download,
} from "lucide-react";
import { site } from "@/data/site";

/* ─── layout constants ─── */
const CONT = 580;      // orbital hub container px
const CTR  = CONT / 2; // 290
const R    = 220;      // orbit radius

/* each button is ~56px icon + label; offset by half to center */
function navPos(deg: number) {
  const rad = (deg * Math.PI) / 180;
  return {
    left: CTR + R * Math.sin(rad) - 28,
    top:  CTR - R * Math.cos(rad) - 28,
  };
}

/* ─── data ─── */
const RADIAL_ITEMS = [
  { label: "Projects",   to: "/projects",   Icon: FolderKanban, deg: 330, color: "#7C3AED" },
  { label: "Leadership", to: "/leadership", Icon: Users,        deg: 30,  color: "#F43F5E" },
  { label: "Experience", to: "/experience", Icon: Briefcase,    deg: 90,  color: "#22D3EE" },
  { label: "Contact",    to: "/contact",    Icon: Mail,         deg: 150, color: "#7C3AED" },
  { label: "Art",        to: "/art",        Icon: Palette,      deg: 210, color: "#F43F5E" },
  { label: "Research",   to: "/research",   Icon: FlaskConical, deg: 270, color: "#22D3EE" },
];

const FOCUS_AREAS = [
  { Icon: Brain,     label: "Machine Learning & AI",      color: "#7C3AED" },
  { Icon: Heart,     label: "HR Tech & People Analytics", color: "#F43F5E" },
  { Icon: BarChart3, label: "Data Analytics & Insights",  color: "#22D3EE" },
  { Icon: Megaphone, label: "Leadership & Execution",     color: "#F43F5E" },
];

const STATS = [
  { value: "10+", label: "Projects"         },
  { value: "3+",  label: "Leadership Roles" },
  { value: "5+",  label: "Research Areas"   },
  { value: "2",   label: "Internships"      },
];

const ROLES = [
  "Machine Learning Enthusiast",
  "Data-Driven Problem Solver",
  "HR Analytics & AI Applications",
  "Marketing & Team Leadership",
];

/* ─── component ─── */
export function Hero() {
  const navigate = useNavigate();
  const [display, setDisplay] = useState("");
  const [avatarErr, setAvatarErr] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));
    async function loop() {
      let i = 0;
      while (!cancelled) {
        const full = ROLES[i];
        for (let c = 0; c <= full.length; c++) { if (cancelled) return; setDisplay(full.slice(0, c)); await sleep(48); }
        await sleep(1800);
        for (let c = full.length; c >= 0; c--) { if (cancelled) return; setDisplay(full.slice(0, c)); await sleep(22); }
        await sleep(300);
        i = (i + 1) % ROLES.length;
      }
    }
    void loop();
    return () => { cancelled = true; };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">

      {/* ── BACKGROUND ── */}
      <div className="absolute inset-0 bg-[#07070A]" aria-hidden />
      <div className="absolute inset-0 pointer-events-none" aria-hidden
        style={{ background: "radial-gradient(ellipse 80% 70% at 50% 42%, rgba(124,58,237,0.18) 0%, rgba(34,211,238,0.07) 48%, transparent 72%)" }} />
      <div className="absolute -left-72 -top-40 h-[700px] w-[700px] rounded-full opacity-[0.11] blur-[150px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #7C3AED 0%, transparent 60%)" }} aria-hidden />
      <div className="absolute -right-72 bottom-0 h-[600px] w-[600px] rounded-full opacity-[0.09] blur-[150px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #22D3EE 0%, transparent 60%)" }} aria-hidden />

      <div className="relative z-10 flex flex-col min-h-screen max-w-5xl mx-auto w-full px-4 sm:px-6 pt-10 pb-6">

        {/* ── HERO TEXT ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="text-center"
        >
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 text-[11px] font-semibold text-emerald-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Available · Summer 2026 · Dubai · BITS Pilani Class of 2027
            </span>
          </div>

          <p className="font-display text-xl font-semibold text-[var(--muted)] sm:text-2xl">Hi, I'm</p>
          <h1 className="font-display font-extrabold leading-[1.0] tracking-tight text-[3rem] sm:text-6xl lg:text-[5.5rem]">
            <span className="gradient-text">Shambhavi</span>
          </h1>
          <p className="mt-2.5 text-sm text-[var(--muted)] sm:text-base max-w-xl mx-auto">
            CS undergraduate building ML systems &amp; HR tech solutions.
          </p>

          {/* Typing */}
          <div className="mt-3 flex justify-center items-center gap-2 min-h-[1.8rem]">
            <span className="font-mono text-[var(--muted)] opacity-40 text-sm">//</span>
            <span className="font-display font-bold text-[var(--secondary)] text-sm sm:text-base">
              {display}
              <span className="ml-px inline-block h-[1em] w-[2px] translate-y-[1px] animate-pulse bg-[var(--secondary)]" />
            </span>
          </div>
        </motion.div>

        {/* ── ORBITAL HUB ── */}
        <div className="flex flex-1 items-center justify-center mt-2 lg:mt-0">
          {/* Desktop orbital layout */}
          <div className="hidden lg:block relative shrink-0" style={{ width: CONT, height: CONT }}>

            {/* SVG rings */}
            <svg className="absolute inset-0 pointer-events-none" width={CONT} height={CONT} aria-hidden>
              {/* outer dashed orbit ring */}
              <circle cx={CTR} cy={CTR} r={R}
                fill="none" stroke="rgba(124,58,237,0.22)" strokeWidth={1.5}
                strokeDasharray="6 12" />
              {/* inner glow ring */}
              <circle cx={CTR} cy={CTR} r={R - 30}
                fill="none" stroke="rgba(34,211,238,0.08)" strokeWidth={1} />
              {/* spoke lines from center to each nav position */}
              {RADIAL_ITEMS.map((item) => {
                const rad = (item.deg * Math.PI) / 180;
                const x2 = CTR + (R - 32) * Math.sin(rad);
                const y2 = CTR - (R - 32) * Math.cos(rad);
                return (
                  <line key={item.label + "-spoke"}
                    x1={CTR} y1={CTR} x2={x2} y2={y2}
                    stroke={item.color} strokeWidth={0.8} opacity={0.18}
                    strokeDasharray="3 6" />
                );
              })}
            </svg>

            {/* Rotating conic arc */}
            <motion.div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: R * 2, height: R * 2,
                left: CTR - R, top: CTR - R,
                background: "conic-gradient(from 0deg, transparent 0%, rgba(124,58,237,0.32) 15%, rgba(34,211,238,0.22) 28%, transparent 40%)",
                borderRadius: "50%",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              aria-hidden
            />

            {/* Avatar glows */}
            <div className="absolute rounded-full pointer-events-none"
              style={{ width: 300, height: 300, left: CTR - 150, top: CTR - 150,
                background: "radial-gradient(circle, rgba(124,58,237,0.30) 0%, rgba(34,211,238,0.10) 45%, transparent 70%)" }}
              aria-hidden />
            <div className="absolute rounded-full pointer-events-none"
              style={{ width: 210, height: 210, left: CTR - 105, top: CTR - 105,
                background: "radial-gradient(circle, rgba(124,58,237,0.42) 0%, transparent 65%)" }}
              aria-hidden />

            {/* Pulsing halo rings */}
            <motion.div className="absolute rounded-full border pointer-events-none"
              style={{ width: 230, height: 230, left: CTR - 115, top: CTR - 115, borderColor: "rgba(124,58,237,0.40)" }}
              animate={{ scale: [1, 1.07, 1], opacity: [0.4, 0.75, 0.4] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden />
            <motion.div className="absolute rounded-full border pointer-events-none"
              style={{ width: 268, height: 268, left: CTR - 134, top: CTR - 134, borderColor: "rgba(34,211,238,0.18)" }}
              animate={{ scale: [1.04, 1, 1.04], opacity: [0.25, 0.5, 0.25] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              aria-hidden />

            {/* Avatar image — centered in container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute flex items-end justify-center pointer-events-none"
              style={{ width: 200, height: 250, left: CTR - 100, top: CTR - 125 }}
            >
              {!avatarErr ? (
                <motion.img
                  src="/avatar/avatar.png"
                  alt="Shambhavi avatar"
                  className="w-full h-full object-contain select-none"
                  style={{ filter: "drop-shadow(0 0 28px rgba(124,58,237,0.65)) drop-shadow(0 0 60px rgba(124,58,237,0.22))" }}
                  onError={() => setAvatarErr(true)}
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              ) : (
                <motion.div
                  className="flex h-52 w-44 items-center justify-center rounded-3xl border border-[rgba(124,58,237,0.3)] bg-[rgba(124,58,237,0.08)]"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="font-display text-5xl font-extrabold gradient-text">SJ</span>
                </motion.div>
              )}
            </motion.div>

            {/* ── RADIAL NAV BUTTONS ── */}
            {RADIAL_ITEMS.map((item, i) => {
              const { left, top } = navPos(item.deg);
              const NavIcon = item.Icon;
              return (
                <motion.div
                  key={item.label}
                  role="link"
                  onClick={() => navigate(item.to)}
                  initial={{ opacity: 0, scale: 0.3 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.55, delay: 0.5 + i * 0.09, type: "spring", stiffness: 240, damping: 20 }}
                  whileHover={{ scale: 1.18 }}
                  whileTap={{ scale: 0.9 }}
                  style={{ position: "absolute", left, top, width: 56, cursor: "pointer" }}
                  className="flex flex-col items-center gap-1.5 z-20"
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-full border transition-all duration-200"
                    style={{
                      background: `${item.color}14`,
                      borderColor: `${item.color}50`,
                      color: item.color,
                      boxShadow: `0 0 20px ${item.color}30, inset 0 1px 0 ${item.color}25`,
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = `${item.color}28`;
                      el.style.borderColor = item.color;
                      el.style.boxShadow = `0 0 36px ${item.color}70, 0 0 70px ${item.color}22`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = `${item.color}14`;
                      el.style.borderColor = `${item.color}50`;
                      el.style.boxShadow = `0 0 20px ${item.color}30, inset 0 1px 0 ${item.color}25`;
                    }}
                  >
                    <NavIcon size={20} strokeWidth={1.6} />
                  </div>
                  <span
                    className="text-[9.5px] font-bold uppercase tracking-[0.12em] whitespace-nowrap text-center leading-none"
                    style={{ color: item.color, textShadow: `0 0 12px ${item.color}` }}
                  >
                    {item.label}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile: smaller avatar + grid nav */}
          <div className="lg:hidden flex flex-col items-center gap-8 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex items-center justify-center"
              style={{ width: 280, height: 280 }}
            >
              <div className="absolute rounded-full"
                style={{ width: 240, height: 240, background: "radial-gradient(circle, rgba(124,58,237,0.32) 0%, transparent 70%)" }} />
              <motion.div className="absolute rounded-full border"
                style={{ width: 220, height: 220, borderColor: "rgba(124,58,237,0.35)" }}
                animate={{ scale: [1, 1.06, 1], opacity: [0.45, 0.8, 0.45] }}
                transition={{ duration: 3, repeat: Infinity }} />
              {!avatarErr && (
                <motion.img src="/avatar/avatar.png" alt="Shambhavi"
                  className="relative z-10 h-60 w-auto object-contain"
                  style={{ filter: "drop-shadow(0 0 22px rgba(124,58,237,0.6))" }}
                  onError={() => setAvatarErr(true)}
                  animate={{ y: [0, -10, 0] }} transition={{ duration: 3.8, repeat: Infinity }} />
              )}
            </motion.div>

            <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
              {RADIAL_ITEMS.map((item) => {
                const NavIcon = item.Icon;
                return (
                  <Link key={item.label} to={item.to}
                    className="flex flex-col items-center gap-1.5 rounded-xl border py-3 no-underline transition-all duration-200"
                    style={{ borderColor: `${item.color}30`, background: `${item.color}0a`, color: item.color }}>
                    <NavIcon size={17} strokeWidth={1.6} />
                    <span className="text-[9px] font-bold uppercase tracking-wide">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── FOCUS AREAS ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-2.5 mt-4 lg:mt-2"
        >
          {FOCUS_AREAS.map((fa) => {
            const FIcon = fa.Icon;
            return (
              <span key={fa.label}
                className="inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold"
                style={{ borderColor: `${fa.color}30`, background: `${fa.color}0d`, color: fa.color }}>
                <FIcon size={11} />
                {fa.label}
              </span>
            );
          })}
        </motion.div>

        {/* ── STATS ROW ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-5 border-t border-white/[0.05] pt-5"
        >
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-xl font-extrabold gradient-text leading-none">{s.value}</p>
              <p className="mt-0.5 text-[10px] uppercase tracking-wider text-[var(--muted)]">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* ── CTA BAR ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="flex flex-col items-center gap-3 mt-5"
        >
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/projects" className="btn-primary">
              View Projects <ArrowRight size={15} />
            </Link>
            <a href="/resume.pdf" download className="btn-secondary">
              <Download size={15} /> Resume
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <p className="text-[11px] font-medium text-[var(--muted)]">Open to ML &amp; HR Tech Opportunities</p>
            <span className="h-3 w-px bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-2">
              {[
                { href: `mailto:${site.email}`, Icon: Send,     hoverColor: "rgba(34,211,238,0.5)"  },
                { href: site.linkedin,           Icon: Linkedin, hoverColor: "rgba(10,102,194,0.5)"  },
                { href: site.github,             Icon: Github,   hoverColor: "rgba(124,58,237,0.5)"  },
              ].map(({ href, Icon: SIcon, hoverColor }) => (
                <a key={href} href={href} target="_blank" rel="noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] text-[var(--muted)] transition-all duration-200"
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.boxShadow = `0 0 16px ${hoverColor}`;
                    el.style.borderColor = hoverColor;
                    el.style.color = hoverColor;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.boxShadow = "";
                    el.style.borderColor = "rgba(255,255,255,0.08)";
                    el.style.color = "var(--muted)";
                  }}
                >
                  <SIcon size={12} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── SCROLL INDICATOR ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-4 flex flex-col items-center gap-1.5"
        >
          <span className="text-[8px] uppercase tracking-[0.3em] text-[var(--muted)] opacity-50">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="h-5 w-px bg-gradient-to-b from-[var(--primary)] via-[var(--secondary)] to-transparent"
          />
        </motion.div>

      </div>
    </section>
  );
}
