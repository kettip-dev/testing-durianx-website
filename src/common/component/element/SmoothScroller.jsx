"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * SmoothScroller — wraps the page in Lenis smooth scroll
 * and syncs it with GSAP ScrollTrigger.
 *
 * Usage: mount once in Providers, wrap children.
 */
export default function SmoothScroller({ children }) {
  const wrapperRef = useRef(null);
  const lenisRef = useRef(null);

  useEffect(() => {
    let lenis;
    let rafId;

    async function init() {
      try {
        const { default: Lenis } = await import("lenis");

        lenis = new Lenis({
          duration: 1.4,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          smoothWheel: true,
          wheelMultiplier: 0.9,
          touchMultiplier: 1.8,
        });

        lenisRef.current = lenis;

        /* Sync lenis with GSAP ScrollTrigger */
        lenis.on("scroll", ScrollTrigger.update);

        gsap.ticker.add((time) => {
          lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);
      } catch (e) {
        /* Lenis not available — fall back silently */
        console.warn("Lenis smooth scroll unavailable:", e);
      }
    }

    init();

    return () => {
      lenisRef.current?.destroy();
      gsap.ticker.remove(() => {});
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <>{children}</>;
}
