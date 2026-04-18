import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Initialises Lenis smooth scroll and drives it via requestAnimationFrame.
 * Also intercepts all anchor-link clicks so Lenis handles them smoothly.
 */
export function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,          // scroll duration in seconds — higher = silkier
      easing: (t: number) =>   // custom ease-out-expo for premium feel
        t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
      smoothWheel: true,
      touchMultiplier: 1.8,
    });

    /* Drive Lenis on every animation frame */
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    /* Intercept anchor clicks and let Lenis scroll to the target */
    function handleAnchorClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href?.startsWith("#")) return;
      const el = document.getElementById(href.slice(1));
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: -80, duration: 1.3 });
    }
    document.addEventListener("click", handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
    };
  }, []);
}
