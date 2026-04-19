import { useEffect } from "react";
import Lenis from "lenis";

/* Module-level singleton so any component can call scrollToTop() */
let lenisInstance: Lenis | null = null;

export function getLenis() {
  return lenisInstance;
}

export function scrollToTop(immediate = false) {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { immediate, duration: immediate ? 0 : 0.6 });
  } else {
    window.scrollTo({ top: 0, behavior: immediate ? "instant" : "smooth" });
  }
}

export function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.8,
    });

    lenisInstance = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    /* Only intercept in-page anchor links (#id), not route links */
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
      lenisInstance = null;
    };
  }, []);
}
