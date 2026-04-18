import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { LazyImage } from "./LazyImage";
import { artPieces } from "@/data/art";
import { X, ZoomIn, Instagram, ArrowUpRight } from "lucide-react";

export function Art() {
  const [selected, setSelected] = useState<(typeof artPieces)[number] | null>(null);

  // Escape key closes lightbox
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <section id="art" className="relative border-t border-white/[0.04]">
      <div className="section-container">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Creative Work"
            title="Art &"
            highlight="visual expression."
            subtitle="My creative work reflects my approach to detail, patience, and visual thinking. The same mindset I bring to data and systems."
            className="mb-0"
          />
          <motion.a
            href="https://www.instagram.com/artsbyshamz"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="group flex shrink-0 items-center gap-2.5 rounded-xl border border-[rgba(244,63,94,0.25)] bg-[rgba(244,63,94,0.07)] px-4 py-2.5 text-sm font-semibold text-[rgba(244,63,94,0.9)] transition-all duration-300 hover:border-[rgba(244,63,94,0.5)] hover:bg-[rgba(244,63,94,0.13)] hover:shadow-[0_0_30px_rgba(244,63,94,0.18)]"
          >
            <Instagram size={15} />
            @artsbyshamz
            <ArrowUpRight size={13} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </motion.a>
        </div>

        {/* Masonry-style gallery */}
        <div className="columns-2 gap-4 md:columns-3">
          {artPieces.map((piece, i) => {
            const GLOW_COLORS = [
              "rgba(124,58,237,0.3)",
              "rgba(34,211,238,0.25)",
              "rgba(244,63,94,0.25)",
              "rgba(124,58,237,0.25)",
              "rgba(34,211,238,0.22)",
              "rgba(244,63,94,0.22)",
            ];
            const BORDER_COLORS = [
              "rgba(124,58,237,0.4)",
              "rgba(34,211,238,0.35)",
              "rgba(244,63,94,0.35)",
              "rgba(124,58,237,0.35)",
              "rgba(34,211,238,0.3)",
              "rgba(244,63,94,0.3)",
            ];
            const glow = GLOW_COLORS[i % GLOW_COLORS.length];
            const border = BORDER_COLORS[i % BORDER_COLORS.length];
            return (
              <motion.div
                key={piece.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group relative mb-4 cursor-pointer break-inside-avoid overflow-hidden rounded-xl border border-white/[0.06] bg-[rgba(17,19,26,0.8)] transition-all duration-300"
                onClick={() => setSelected(piece)}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = border;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${glow}, 0 20px 50px rgba(0,0,0,0.4)`;
                  (e.currentTarget as HTMLElement).style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "";
                  (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                }}
              >
                <LazyImage
                  src={piece.imageSrc}
                  alt={piece.alt}
                  imgClassName="object-cover group-hover:scale-105"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[rgba(7,7,10,0.65)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-[2px]">
                  <ZoomIn size={22} className="text-white/80" />
                  <div className="text-center px-3">
                    <p className="font-display text-[13px] font-bold text-white">{piece.title}</p>
                    <p className="text-[11px] text-white/60">{piece.medium}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9100] flex items-center justify-center bg-[rgba(7,7,10,0.92)] p-6 backdrop-blur-xl"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[88vh] max-w-[88vw] overflow-hidden rounded-2xl border border-[rgba(124,58,237,0.35)] shadow-[0_0_80px_rgba(124,58,237,0.2)]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.imageSrc}
                alt={selected.alt}
                className="max-h-[80vh] max-w-[80vw] object-contain"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(7,7,10,0.85)] to-transparent p-5">
                <p className="font-display text-base font-bold text-white">{selected.title}</p>
                <p className="text-xs text-white/60">{selected.medium}</p>
              </div>
              <button
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(7,7,10,0.7)] text-white/70 transition hover:text-white"
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
