import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ParticleBackground } from "./ParticleBackground";
import { ScrollProgress } from "./ScrollProgress";
import { BackToTop } from "./BackToTop";
import { FloatingNav } from "./FloatingNav";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";

export function PageLayout() {
  const { pathname } = useLocation();
  const isContact = pathname === "/contact";

  return (
    <div className="relative min-h-screen bg-background text-[var(--text)]">
      {/* Global overlays — persist across all pages */}
      <div className="grain-overlay" aria-hidden />
      <ParticleBackground />
      <ScrollProgress />
      <BackToTop />
      <FloatingNav />
      <ScrollToTop />

      {/* Page content with fade transition */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Contact + Footer on every page; skip Contact card on /contact since it IS the page */}
      {!isContact && (
        <>
          <div className="section-divider" />
          <Contact />
        </>
      )}
      <Footer />
    </div>
  );
}
