"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "@/navigation";
import { gsap } from "gsap";

export default function PageTransition() {
  const pathname   = usePathname();
  const prevPath   = useRef(null);
  const tlRef      = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (prevPath.current === null) {
      prevPath.current = pathname;
      return;
    }
    if (prevPath.current === pathname) return;
    prevPath.current = pathname;

    tlRef.current?.kill();

    const el = overlayRef.current;
    if (!el) return;

    lockScroll();

    const tl = gsap.timeline({
      onComplete: () => unlockScroll(),
    });
    tlRef.current = tl;

    tl
      /* fade IN — white covers the page */
      .to(el, { autoAlpha: 1, duration: 0.3, ease: "power2.out" })
      /* scroll to top while white */
      .call(() => window.scrollTo({ top: 0, behavior: "instant" }))
      /* tiny hold */
      .to({}, { duration: 0.05 })
      /* fade OUT — new page revealed */
      .to(el, { autoAlpha: 0, duration: 0.4, ease: "power2.inOut" });
  }, [pathname]);

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99997,
        background: "#ffffff",
        pointerEvents: "none",
        opacity: 0,
        visibility: "hidden",
      }}
    />
  );
}

function lockScroll() {
  document.documentElement.style.overflow = "hidden";
}
function unlockScroll() {
  document.documentElement.style.overflow = "";
}
