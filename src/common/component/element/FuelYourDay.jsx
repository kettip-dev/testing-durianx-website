"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ACCENT = "#82C341";

/* ── tiny seeded random so particles are SSR-stable ── */
function seededRand(seed) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

const PARTICLES = Array.from({ length: 22 }, (_, i) => {
  const r = seededRand(i * 137 + 42);
  return {
    id: i,
    x: r() * 100,
    y: r() * 100,
    size: 2 + r() * 4,
    dur: 3 + r() * 5,
    delay: r() * 4,
    opacity: 0.15 + r() * 0.4,
  };
});

export default function FuelYourDay({ className = "" }) {
  const wrapRef     = useRef(null);
  const imgRef      = useRef(null);
  const overlayRef  = useRef(null);
  const badge1Ref   = useRef(null);
  const badge2Ref   = useRef(null);
  const taglineRef  = useRef(null);
  const shimmerRef  = useRef(null);
  const charsRef    = useRef([]);
  const orb1Ref     = useRef(null);
  const orb2Ref     = useRef(null);
  const lineRef     = useRef(null);
  const particleRefs = useRef([]);

  /* ══════════════════ GSAP master timeline ══════════════════ */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top 82%",
          once: true,
        },
      });

      /* 1 ── image clip-path wipe from left */
      tl.fromTo(
        imgRef.current,
        { clipPath: "inset(0 100% 0 0)", scale: 1.08, opacity: 0 },
        { clipPath: "inset(0 0% 0 0)", scale: 1, opacity: 1, duration: 1.4, ease: "power4.out" }
      );

      /* 2 ── overlay fade */
      tl.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.7, ease: "power2.out" },
        "-=0.6"
      );

      /* 3 ── accent line draw */
      tl.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 0.9, ease: "power3.inOut" },
        "-=0.5"
      );

      /* 4 ── char stagger */
      tl.fromTo(
        charsRef.current,
        { y: 60, opacity: 0, rotateX: -40 },
        {
          y: 0, opacity: 1, rotateX: 0,
          duration: 0.75, ease: "back.out(1.4)",
          stagger: { amount: 0.65 },
        },
        "-=0.55"
      );

      /* 5 ── tagline slide-up */
      tl.fromTo(
        taglineRef.current,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
        "-=0.3"
      );

      /* 6 ── badge pop-in */
      tl.fromTo(
        [badge1Ref.current, badge2Ref.current],
        { scale: 0.6, opacity: 0, y: 12 },
        {
          scale: 1, opacity: 1, y: 0,
          duration: 0.55, ease: "back.out(1.9)",
          stagger: 0.15,
        },
        "-=0.4"
      );

      /* 7 ── shimmer sweep (loops) */
      gsap.fromTo(
        shimmerRef.current,
        { x: "-120%" },
        {
          x: "220%",
          duration: 2.2,
          ease: "power1.inOut",
          repeat: -1,
          repeatDelay: 5,
          delay: 2.5,
        }
      );

      /* 8 ── orb ambient pulses */
      gsap.to(orb1Ref.current, {
        scale: 1.3, opacity: 0.18,
        duration: 4.5, ease: "sine.inOut",
        yoyo: true, repeat: -1,
      });
      gsap.to(orb2Ref.current, {
        scale: 1.4, opacity: 0.13,
        duration: 6, ease: "sine.inOut",
        yoyo: true, repeat: -1, delay: 1.5,
      });

      /* 9 ── particles float */
      particleRefs.current.forEach((el, i) => {
        if (!el) return;
        const p = PARTICLES[i];
        gsap.to(el, {
          y: `-=${20 + p.size * 4}`,
          x: `+=${(i % 2 === 0 ? 1 : -1) * (8 + p.size * 2)}`,
          opacity: p.opacity * 0.6,
          duration: p.dur,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: p.delay,
        });
      });

      /* 10 ── scroll parallax on image */
      gsap.to(imgRef.current, {
        y: -55,
        ease: "none",
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.4,
        },
      });
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  /* ── split text into char spans ── */
  const khmerText = "លើសពីអាហារ—យើងជំរុញថ្ងៃរបស់អ្នក";
  /* spread on codepoints to keep Khmer clusters intact-ish */
  const chars = [...khmerText];

  return (
    <div
      ref={wrapRef}
      className={`relative w-full overflow-hidden rounded-3xl ${className}`}
      style={{ minHeight: 520 }}
    >
      {/* ── ambient orbs ── */}
      <div
        ref={orb1Ref}
        className="pointer-events-none absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full z-0"
        style={{
          background: `radial-gradient(circle, ${ACCENT}33 0%, transparent 70%)`,
          filter: "blur(70px)",
        }}
      />
      <div
        ref={orb2Ref}
        className="pointer-events-none absolute -bottom-20 -right-20 w-[380px] h-[380px] rounded-full z-0"
        style={{
          background: "radial-gradient(circle, #3b82f633 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* ── floating particles ── */}
      {PARTICLES.map((p, i) => (
        <div
          key={p.id}
          ref={(el) => (particleRefs.current[i] = el)}
          className="pointer-events-none absolute rounded-full z-[1]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: i % 3 === 0 ? ACCENT : i % 3 === 1 ? "#fff" : "#60a5fa",
            opacity: p.opacity,
            filter: "blur(0.5px)",
          }}
        />
      ))}

      {/* ── main image ── */}
      <div
        ref={imgRef}
        className="relative z-[2] w-full h-full"
        style={{
          borderRadius: "inherit",
          overflow: "hidden",
          minHeight: "inherit",
          clipPath: "inset(0 100% 0 0)",
          opacity: 0,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1400&auto=format&fit=crop"
          alt="Delicious food served with passion"
          className="w-full h-full object-cover"
          style={{ minHeight: 520, display: "block" }}
        />

        {/* ── dark gradient overlay ── */}
        <div
          ref={overlayRef}
          className="absolute inset-0 z-[3]"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.10) 100%)",
            opacity: 0,
          }}
        />

        {/* ── shimmer sweep ── */}
        <div
          ref={shimmerRef}
          className="absolute inset-y-0 z-[4] pointer-events-none"
          style={{
            width: "30%",
            background:
              "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.07) 50%, transparent 70%)",
            left: 0,
          }}
        />

        {/* ── content layer ── */}
        <div className="absolute inset-0 z-[5] flex flex-col justify-end p-7 sm:p-10 md:p-14">
          {/* accent line */}
          <div
            ref={lineRef}
            className="mb-5"
            style={{
              height: 3,
              width: "5rem",
              borderRadius: 9999,
              background: `linear-gradient(90deg, ${ACCENT}, #5aa01a)`,
              boxShadow: `0 0 14px ${ACCENT}99`,
              transformOrigin: "left center",
              transform: "scaleX(0)",
            }}
          />

          {/* Khmer headline — per-character stagger */}
          <div
            className="overflow-hidden mb-4"
            style={{ perspective: 600 }}
            aria-label={khmerText}
          >
            <div className="flex flex-wrap gap-x-[0.05em]">
              {chars.map((ch, i) => (
                <span
                  key={i}
                  ref={(el) => (charsRef.current[i] = el)}
                  className="inline-block select-none"
                  style={{
                    fontFamily: "'Kantumruy Pro', 'Noto Sans Khmer', system-ui, sans-serif",
                    fontSize: "clamp(1.6rem, 4.5vw, 3.5rem)",
                    fontWeight: 800,
                    lineHeight: 1.25,
                    letterSpacing: "0.01em",
                    color: "#ffffff",
                    textShadow: "0 2px 24px rgba(0,0,0,0.6)",
                    opacity: 0,
                    willChange: "transform, opacity",
                    whiteSpace: ch === " " ? "pre" : "normal",
                  }}
                  aria-hidden="true"
                >
                  {ch === " " ? "\u00a0" : ch}
                </span>
              ))}
            </div>
          </div>

          {/* tagline */}
          <p
            ref={taglineRef}
            className="text-sm sm:text-base font-medium tracking-wide mb-6"
            style={{
              color: "rgba(255,255,255,0.70)",
              opacity: 0,
            }}
          >
            Beyond food — we fuel your day.
          </p>

          {/* badges */}
          <div className="flex flex-wrap gap-3">
            <span
              ref={badge1Ref}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{
                background: `${ACCENT}22`,
                border: `1px solid ${ACCENT}66`,
                color: ACCENT,
                backdropFilter: "blur(8px)",
                opacity: 0,
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: ACCENT }}
              />
              Fast Delivery
            </span>
            <span
              ref={badge2Ref}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.18)",
                color: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(8px)",
                opacity: 0,
              }}
            >
              🇰🇭 Made in Cambodia
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
