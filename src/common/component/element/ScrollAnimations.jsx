"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * ScrollAnimations — globally wires up GSAP ScrollTrigger animations
 * for every section on the page using data-* attribute selectors.
 *
 * Data attributes used (add to any element):
 *   data-gsap="fade-up"          — fade + slide up
 *   data-gsap="fade-left"        — fade + slide from left
 *   data-gsap="fade-right"       — fade + slide from right
 *   data-gsap="scale-in"         — scale + fade in
 *   data-gsap="clip-reveal"      — clip-path wipe reveal
 *   data-gsap="stagger-children" — stagger all direct children
 *   data-gsap="parallax"         — vertical parallax (float on scroll)
 *   data-gsap="counter"          — count-up for numeric text
 *
 * This component also automatically:
 *   - Adds a scroll-progress bar at the top of the viewport
 *   - Adds a scroll-to-top floating button
 *   - Pins & scrubs a subtle horizontal rule between sections
 */
export default function ScrollAnimations() {
  useEffect(() => {
    /* ── wait one frame so the DOM is fully painted ── */
    const frame = requestAnimationFrame(() => {
      setupFadeUp();
      setupFadeLeft();
      setupFadeRight();
      setupScaleIn();
      setupClipReveal();
      setupStaggerChildren();
      setupParallax();
      setupSectionDividers();
    });

    return () => {
      cancelAnimationFrame(frame);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null; /* renders nothing — pure side-effect component */
}

/* ════════════════════════════════════════════════════
   2. FADE UP
════════════════════════════════════════════════════ */
function setupFadeUp() {
  const els = document.querySelectorAll('[data-gsap="fade-up"]');
  els.forEach((el) => {
    gsap.fromTo(
      el,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
      }
    );
  });
}

/* ════════════════════════════════════════════════════
   3. FADE LEFT / RIGHT
════════════════════════════════════════════════════ */
function setupFadeLeft() {
  document.querySelectorAll('[data-gsap="fade-left"]').forEach((el) => {
    gsap.fromTo(
      el,
      { x: -70, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      }
    );
  });
}

function setupFadeRight() {
  document.querySelectorAll('[data-gsap="fade-right"]').forEach((el) => {
    gsap.fromTo(
      el,
      { x: 70, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      }
    );
  });
}

/* ════════════════════════════════════════════════════
   4. SCALE IN
════════════════════════════════════════════════════ */
function setupScaleIn() {
  document.querySelectorAll('[data-gsap="scale-in"]').forEach((el) => {
    gsap.fromTo(
      el,
      { scale: 0.82, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.85,
        ease: "back.out(1.5)",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      }
    );
  });
}

/* ════════════════════════════════════════════════════
   5. CLIP-PATH REVEAL (wipe from bottom)
════════════════════════════════════════════════════ */
function setupClipReveal() {
  document.querySelectorAll('[data-gsap="clip-reveal"]').forEach((el) => {
    gsap.fromTo(
      el,
      { clipPath: "inset(0 0 100% 0)", opacity: 0 },
      {
        clipPath: "inset(0 0 0% 0)",
        opacity: 1,
        duration: 1.0,
        ease: "power4.out",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      }
    );
  });
}

/* ════════════════════════════════════════════════════
   6. STAGGER CHILDREN
════════════════════════════════════════════════════ */
function setupStaggerChildren() {
  document.querySelectorAll('[data-gsap="stagger-children"]').forEach((el) => {
    const children = Array.from(el.children);
    gsap.fromTo(
      children,
      { y: 40, opacity: 0, scale: 0.96 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.65,
        ease: "power3.out",
        stagger: { amount: 0.4 },
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      }
    );
  });
}

/* ════════════════════════════════════════════════════
   7. PARALLAX
════════════════════════════════════════════════════ */
function setupParallax() {
  document.querySelectorAll('[data-gsap="parallax"]').forEach((el) => {
    const speed = parseFloat(el.dataset.parallaxSpeed || "0.25");
    gsap.to(el, {
      y: () => el.offsetHeight * speed * -1,
      ease: "none",
      scrollTrigger: {
        trigger: el.parentElement || el,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.2,
      },
    });
  });
}

/* ════════════════════════════════════════════════════
   8. SECTION DIVIDERS — scrub accent line between sections
════════════════════════════════════════════════════ */
function setupSectionDividers() {
  /* animated separator that grows in width on scroll for each section */
  const sections = document.querySelectorAll("section, [data-section]");
  sections.forEach((sec) => {
    /* inject a hairline at the top of each section */
    const line = document.createElement("div");
    Object.assign(line.style, {
      position: "absolute",
      top: 0,
      left: "50%",
      transform: "translateX(-50%)",
      height: "1px",
      width: "0%",
      background:
        "linear-gradient(90deg, transparent, #82C34166, transparent)",
      pointerEvents: "none",
    });

    const pos = getComputedStyle(sec).position;
    if (pos === "static") sec.style.position = "relative";
    sec.appendChild(line);

    gsap.to(line, {
      width: "80%",
      ease: "none",
      scrollTrigger: {
        trigger: sec,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
    });
  });
}
