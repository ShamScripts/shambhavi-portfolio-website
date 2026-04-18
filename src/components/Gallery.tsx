import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { galleryPhotos, galleryCategories, type GalleryCategory } from "@/data/gallery";

const CAT_COLORS: Record<GalleryCategory, string> = {
  "All":            "#7C3AED",
  "ACM-W":          "#F43F5E",
  "ACM":            "#7C3AED",
  "College Events": "#22D3EE",
};

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>("All");
  const [lightboxIdx,  setLightboxIdx]  = useState<number | null>(null);

  const filtered = galleryPhotos.filter(
    (p) => activeFilter === "All" || p.category === activeFilter
  );

  const openLightbox = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const prev = () => setLightboxIdx((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  const next = () => setLightboxIdx((i) => (i === null ? null : (i + 1) % filtered.length));

  const activeColor = CAT_COLORS[activeFilter];
  const lightboxPhoto = lightboxIdx !== null ? filtered[lightboxIdx] : null;

  return (
    <section id="gallery" className="relative border-t border-white/[0.04]">
      <div className="section-container">

        {/* Heading */}
        <div className="mb-10">
          <SectionHeading
            eyebrow="Gallery"
            title="Photos &"
            highlight="memories."
            subtitle="Personal moments, college events, conferences, and club life."
            className="mb-0"
          />
        </div>

        {/* Filter pills */}
        <div className="mb-10 flex flex-wrap gap-2">
          {galleryCategories.map((cat) => {
            const isActive = activeFilter === cat;
            const col = CAT_COLORS[cat];
            return (
              <motion.button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="rounded-full border px-4 py-1.5 text-[11.5px] font-semibold transition-all duration-200"
                style={
                  isActive
                    ? { borderColor: col, background: `${col}18`, color: col, boxShadow: `0 0 18px ${col}35` }
                    : { borderColor: "rgba(255,255,255,0.08)", background: "transparent", color: "var(--muted)" }
                }
              >
                {cat}
                {activeFilter === cat && (
                  <span className="ml-1.5 text-[9px] opacity-70">
                    ({filtered.length})
                  </span>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Photo grid */}
        <motion.div
          layout
          className="columns-2 gap-3 sm:columns-3 lg:columns-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((photo, idx) => {
              const [imgErr, setImgErr] = useState(false);
              const col = CAT_COLORS[photo.category];

              return (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.88 }}
                  transition={{ duration: 0.3 }}
                  className="group relative mb-3 cursor-pointer overflow-hidden rounded-2xl border border-white/[0.06] bg-[rgba(17,19,26,0.9)] break-inside-avoid transition-all duration-300"
                  style={{ minHeight: photo.aspect === "portrait" ? 280 : photo.aspect === "landscape" ? 160 : 200 }}
                  onClick={() => openLightbox(idx)}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${col}50`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 36px ${col}20`;
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  {imgErr ? (
                    <div
                      className="flex items-center justify-center rounded-xl text-[10px] text-[var(--muted)] opacity-50"
                      style={{ minHeight: photo.aspect === "portrait" ? 280 : photo.aspect === "landscape" ? 160 : 200, background: `${col}0a`, border: `1px dashed ${col}30` }}
                    >
                      {photo.caption}
                    </div>
                  ) : (
                    <img
                      src={photo.src}
                      alt={photo.caption}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={() => setImgErr(true)}
                      style={{ minHeight: photo.aspect === "portrait" ? 280 : photo.aspect === "landscape" ? 160 : 200 }}
                    />
                  )}

                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ background: "rgba(7,7,10,0.7)", backdropFilter: "blur(3px)" }}
                  >
                    <ZoomIn size={20} className="text-white" />
                    <p className="px-3 text-center text-[12px] font-semibold text-white">{photo.caption}</p>
                    <span
                      className="rounded-full border px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider"
                      style={{ borderColor: `${col}55`, color: col, background: `${col}15` }}
                    >
                      {photo.category}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* ── FULLSCREEN LIGHTBOX ── */}
      <AnimatePresence>
        {lightboxPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            style={{ background: "rgba(3,3,6,0.97)", backdropFilter: "blur(20px)" }}
            onClick={closeLightbox}
          >
            {/* Ambient glow */}
            <div
              className="absolute rounded-full pointer-events-none blur-[120px] opacity-20"
              style={{ width: 600, height: 600, background: `radial-gradient(circle, ${CAT_COLORS[lightboxPhoto.category]}, transparent 70%)` }}
              aria-hidden
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex max-h-[92vh] max-w-4xl w-full flex-col rounded-3xl border overflow-hidden mx-4"
              style={{
                borderColor: `${CAT_COLORS[lightboxPhoto.category]}30`,
                background: "rgba(11,12,18,0.98)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top accent */}
              <div className="h-[3px] w-full shrink-0"
                style={{ background: `linear-gradient(90deg, ${CAT_COLORS[lightboxPhoto.category]}, rgba(34,211,238,0.5), transparent)` }} />

              {/* Image */}
              <div className="flex flex-1 items-center justify-center overflow-hidden bg-black/20 p-2">
                <img
                  src={lightboxPhoto.src}
                  alt={lightboxPhoto.caption}
                  className="max-h-[78vh] max-w-full rounded-xl object-contain"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>

              {/* Info bar */}
              <div className="flex items-center justify-between gap-4 px-6 py-4 border-t border-white/[0.06]">
                <div>
                  <p className="font-display text-sm font-bold text-[var(--text)]">{lightboxPhoto.caption}</p>
                  <p className="mt-0.5 text-[10.5px] text-[var(--muted)]">{lightboxPhoto.category}</p>
                </div>
                <span className="text-[10px] text-[var(--muted)]">
                  {(lightboxIdx ?? 0) + 1} / {filtered.length}
                </span>
              </div>

              {/* Prev / Next */}
              <button onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.12] bg-[rgba(17,19,26,0.9)] text-[var(--muted)] transition-all hover:border-white/30 hover:text-white">
                <ChevronLeft size={18} />
              </button>
              <button onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-12 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.12] bg-[rgba(17,19,26,0.9)] text-[var(--muted)] transition-all hover:border-white/30 hover:text-white">
                <ChevronRight size={18} />
              </button>

              {/* Close */}
              <button onClick={closeLightbox}
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.12] bg-[rgba(17,19,26,0.9)] text-[var(--muted)] transition-all hover:border-white/30 hover:text-white"
                aria-label="Close">
                <X size={15} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
