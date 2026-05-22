// app/providers.tsx
"use client";

import { ThemeProvider } from "next-themes";
import InitialLoader from "./InitialLoader";
import SmoothScroller from "./SmoothScroller";
import ScrollAnimations from "./ScrollAnimations";

export function Providers({ children }) {
  return (
    <div>
      {/* First-visit splash loader */}
      <InitialLoader />
      {/* Lenis smooth scroll synced with GSAP ScrollTrigger */}
      <SmoothScroller>
        <ThemeProvider enableSystem={true} attribute="class">
          {/* Global GSAP scroll-triggered animations + progress bar */}
          <ScrollAnimations />
          {children}
        </ThemeProvider>
      </SmoothScroller>
    </div>
  );
}