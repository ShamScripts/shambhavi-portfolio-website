import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 8 }}
          transition={{ duration: 0.25 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(124,58,237,0.35)] bg-[rgba(17,19,26,0.9)] text-[var(--primary)] shadow-[0_0_20px_rgba(124,58,237,0.2)] backdrop-blur-xl transition-all duration-200 hover:border-[var(--primary)] hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:text-[var(--secondary)] hover:-translate-y-1"
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
