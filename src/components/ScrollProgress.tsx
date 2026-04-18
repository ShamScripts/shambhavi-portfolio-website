import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <motion.div
        className="scroll-progress-bar"
        style={{ scaleX }}
        aria-hidden
      />
      {/* Cursor glow */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-[9999] h-5 w-5 rounded-full transition-transform duration-75 ease-out hidden lg:block"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.5) 0%, rgba(34,211,238,0.2) 55%, transparent 75%)",
          filter: "blur(6px)",
          top: 0,
          left: 0,
        }}
        aria-hidden
      />
    </>
  );
}
