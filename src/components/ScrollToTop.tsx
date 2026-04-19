import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToTop } from "@/hooks/useSmoothScroll";

/** Resets scroll position to top on every route change. */
export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    scrollToTop(true); // immediate — no animation, just snap to top
  }, [pathname]);
  return null;
}
