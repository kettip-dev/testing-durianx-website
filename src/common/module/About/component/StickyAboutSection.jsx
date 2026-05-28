"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─── tiny floating particle positions (deterministic, no Math.random on render) ─── */
const PARTICLES = [
  { top: "12%", left: "8%",  size: 3, dur: 6,  delay: 0   },
  { top: "28%", left: "82%", size: 2, dur: 8,  delay: 1.2 },
  { top: "55%", left: "15%", size: 4, dur: 7,  delay: 0.5 },
  { top: "70%", left: "70%", size: 2, dur: 9,  delay: 2   },
  { top: "85%", left: "40%", size: 3, dur: 6.5,delay: 0.8 },
  { top: "18%", left: "55%", size: 2, dur: 11, delay: 1.5 },
];

export default function StickyAboutSection() {
  const t = useTranslations("About");

  const wrapperRef = useRef(null);
  const stickyRef  = useRef(null);
  const rightRef   = useRef(null);
  const img1Ref    = useRef(null);
  const img2Ref    = useRef(null);
  const badge1Ref  = useRef(null);
  const badge2Ref  = useRef(null);
  const dot0Ref    = useRef(null);
  const dot1Ref    = useRef(null);
  const overlayRef = useRef(null);

  /* progress bar */
  const progBarRef = useRef(null);

  /* Section refs */
  const sec0Ref = useRef(null);
  const sec1Ref = useRef(null);
  const sec2Ref = useRef(null);
  const sec3Ref = useRef(null);

  const SECTIONS = [
    { ref: sec0Ref, pct: 0    },
    { ref: sec1Ref, pct: 0.25 },
    { ref: sec2Ref, pct: 0.50 },
    { ref: sec3Ref, pct: 0.75 },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const animLines = (sectionEl) => {
        const lines = sectionEl.querySelectorAll("[data-line]");
        gsap.fromTo(
          lines,
          { opacity: 0, y: 48, filter: "blur(4px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", stagger: 0.1, duration: 0.9, ease: "power4.out" }
        );
      };

      const hideLines = (sectionEl) => {
        const lines = sectionEl.querySelectorAll("[data-line]");
        gsap.to(lines, { opacity: 0, y: -24, filter: "blur(6px)", stagger: 0.04, duration: 0.35, ease: "power3.in" });
      };

      /* initial states */
      SECTIONS.forEach(({ ref }) => {
        if (!ref.current) return;
        const lines = ref.current.querySelectorAll("[data-line]");
        gsap.set(lines, { opacity: 0, y: 48, filter: "blur(4px)" });
        if (ref !== sec0Ref) gsap.set(ref.current, { opacity: 0, position: "absolute", top: 0, left: 0, right: 0 });
      });
      gsap.set(sec0Ref.current, { opacity: 1, position: "relative" });
      gsap.set(img2Ref.current,   { opacity: 0, scale: 1.08 });
      gsap.set(badge2Ref.current, { opacity: 0, y: 12 });

      /* Pin */
      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: stickyRef.current,
        pinSpacing: false,
        anticipatePin: 1,
      });

      /* Image panel slide in */
      gsap.fromTo(
        rightRef.current,
        { xPercent: 8, opacity: 0, scale: 0.97 },
        {
          xPercent: 0, opacity: 1, scale: 1,
          duration: 1.5, ease: "power4.out",
          scrollTrigger: { trigger: wrapperRef.current, start: "top 85%", once: true },
        }
      );

      /* Gentle float */
      gsap.to(rightRef.current, { y: -14, duration: 6, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1 });

      /* Progress bar scrub */
      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          if (progBarRef.current) {
            gsap.set(progBarRef.current, { scaleX: self.progress });
          }
        },
      });

      /* sec0 on entry */
      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top 85%",
        once: true,
        onEnter: () => animLines(sec0Ref.current),
      });

      const crossfade = (showRef, hideRefs) => {
        gsap.set(showRef.current, { position: "relative", opacity: 1 });
        hideRefs.forEach((r) => gsap.set(r.current, { position: "absolute", opacity: 0 }));
        animLines(showRef.current);
      };

      /* sec 1 */
      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "25% bottom",
        once: true,
        onEnter: () => {
          hideLines(sec0Ref.current);
          setTimeout(() => crossfade(sec1Ref, [sec0Ref, sec2Ref, sec3Ref]), 350);
        },
      });

      /* sec 2 + image swap */
      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "50% bottom",
        onEnter: () => {
          hideLines(sec1Ref.current);
          setTimeout(() => crossfade(sec2Ref, [sec0Ref, sec1Ref, sec3Ref]), 350);
          gsap.to(img1Ref.current,   { opacity: 0, scale: 0.96, duration: 0.9, ease: "power3.inOut" });
          gsap.to(badge1Ref.current, { opacity: 0, y: 10, duration: 0.5 });
          gsap.to(img2Ref.current,   { opacity: 1, scale: 1, duration: 1, ease: "power3.out" });
          gsap.to(badge2Ref.current, { opacity: 1, y: 0, delay: 0.4, duration: 0.7, ease: "power3.out" });
          gsap.to(dot0Ref.current, { height: 6, backgroundColor: "rgba(255,255,255,0.25)", duration: 0.4 });
          gsap.to(dot1Ref.current, { height: 28, backgroundColor: "rgba(130,195,65,1)", duration: 0.4 });
        },
        onLeaveBack: () => {
          hideLines(sec2Ref.current);
          setTimeout(() => crossfade(sec1Ref, [sec0Ref, sec2Ref, sec3Ref]), 350);
          gsap.to(img1Ref.current,   { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" });
          gsap.to(badge1Ref.current, { opacity: 1, y: 0, duration: 0.6 });
          gsap.to(img2Ref.current,   { opacity: 0, scale: 1.08, duration: 0.7 });
          gsap.to(badge2Ref.current, { opacity: 0, y: 12, duration: 0.4 });
          gsap.to(dot0Ref.current, { height: 28, backgroundColor: "rgba(255,255,255,1)", duration: 0.4 });
          gsap.to(dot1Ref.current, { height: 6, backgroundColor: "rgba(255,255,255,0.25)", duration: 0.4 });
        },
      });

      /* sec 3 */
      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "75% bottom",
        onEnter: () => {
          hideLines(sec2Ref.current);
          setTimeout(() => crossfade(sec3Ref, [sec0Ref, sec1Ref, sec2Ref]), 350);
        },
        onLeaveBack: () => {
          hideLines(sec3Ref.current);
          setTimeout(() => crossfade(sec2Ref, [sec0Ref, sec1Ref, sec3Ref]), 350);
        },
      });

    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="relative" style={{ height: "400vh" }}>

      {/* ── Thin progress bar at top ── */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[200] pointer-events-none overflow-hidden">
        <div
          ref={progBarRef}
          className="h-full w-full origin-left"
          style={{ background: "linear-gradient(90deg,#82C341,#a3e635,#82C341)", scaleX: 0 }}
        />
      </div>

      <div
        ref={stickyRef}
        className="w-full h-screen flex overflow-hidden"
        style={{ background: "var(--about-bg, white)" }}
      >
        <style>{`
          :root { --about-bg: #ffffff; }
          .dark { --about-bg: #0a0a0a; }
          @keyframes float-particle {
            0%,100% { transform: translateY(0px) scale(1); opacity: 0.5; }
            50%      { transform: translateY(-18px) scale(1.3); opacity: 1; }
          }
        `}</style>

        {/* ══ LEFT: cinematic image panel ══ */}
        <div className="hidden lg:block relative flex-shrink-0 w-[46%] xl:w-[48%] h-full">
          <div ref={rightRef} className="w-full h-full relative overflow-hidden">

            {/* Ambient glow behind images */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <div
                className="absolute -inset-4 opacity-40"
                style={{
                  background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(130,195,65,0.4) 0%, transparent 70%)",
                  filter: "blur(40px)",
                }}
              />
            </div>

            {/* Image 1: Exterior */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={img1Ref}
              src="/about/durianx-office.png"
              alt="DurianX HQ Exterior, Phnom Penh"
              className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
              draggable={false}
            />

            {/* Image 2: Interior */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={img2Ref}
              src="/about/durianx-office-2.png"
              alt="DurianX Office Lobby"
              className="absolute inset-0 w-full h-full object-cover object-top select-none pointer-events-none"
              draggable={false}
            />

            {/* Feather blends */}
            <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-white dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/30 to-transparent z-10 pointer-events-none" />

            {/* Floating particles */}
            {PARTICLES.map((p, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-primary-400 z-[15] pointer-events-none"
                style={{
                  top: p.top, left: p.left,
                  width: p.size, height: p.size,
                  animation: `float-particle ${p.dur}s ${p.delay}s ease-in-out infinite`,
                  boxShadow: `0 0 ${p.size * 4}px rgba(130,195,65,0.8)`,
                }}
              />
            ))}

            {/* Badge 1 – HQ */}
            <div
              ref={badge1Ref}
              className="absolute bottom-8 left-8 z-20 pointer-events-none flex flex-col gap-2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-widest bg-primary-500 text-white shadow-2xl shadow-primary-600/50">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                DurianX Headquarters
              </div>
              <div className="flex items-center gap-2 ml-1">
                <span className="text-white/80 text-xs font-semibold">📍 Phnom Penh, Cambodia</span>
                <span className="text-lg">🇰🇭</span>
              </div>
            </div>

            {/* Badge 2 – Interior */}
            <div
              ref={badge2Ref}
              className="absolute bottom-8 left-8 z-20 pointer-events-none flex flex-col gap-2"
              style={{ opacity: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-widest bg-white/90 text-neutral-900 shadow-2xl shadow-white/20 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-primary-500 animate-ping" />
                Our Office Interior
              </div>
              <p className="text-white/75 text-xs font-semibold ml-1">Modern, Vibrant Workspace 🌿</p>
            </div>

            {/* Dot indicators */}
            <div className="absolute top-8 left-8 z-20 flex flex-col gap-2 pointer-events-none">
              <div ref={dot0Ref} className="w-1.5 rounded-full bg-white" style={{ height: 28 }} />
              <div ref={dot1Ref} className="w-1.5 rounded-full" style={{ height: 6, backgroundColor: "rgba(255,255,255,0.25)" }} />
            </div>

            {/* Bottom label bar */}
            <div className="absolute left-8 right-8 bottom-[72px] z-20 flex items-center gap-3 pointer-events-none">
              <div className="h-px flex-1 bg-white/20" />
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40">DurianX · Cambodia</span>
              <div className="h-px flex-1 bg-white/20" />
            </div>
          </div>
        </div>

        {/* ══ RIGHT: text panel ══ */}
        <div className="flex-1 flex flex-col justify-center px-10 sm:px-14 xl:px-20 py-20 z-10 relative overflow-hidden">

          {/* Subtle radial bg accent */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-[0.035] dark:opacity-[0.06]"
            style={{ background: "radial-gradient(circle, #82C341 0%, transparent 70%)" }}
          />

          {/* ── Section 0: Eyebrow + headline ── */}
          <div ref={sec0Ref} className="absolute inset-x-10 xl:inset-x-20">
            <span data-line className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest border bg-primary-100/30 dark:bg-primary-950/40 text-primary-600 dark:text-primary-400 border-primary-200/50 dark:border-primary-800/40 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
              DurianX Story
            </span>

            <h1
              data-line
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.0] tracking-tight mt-2 mb-6"
              style={{
                background: "linear-gradient(135deg, #1a1a1a 0%, #82C341 60%, #a3e635 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t("heading")}
            </h1>

            {/* Dark mode gradient title override */}
            <style>{`
              .dark h1[data-line] {
                background: linear-gradient(135deg,#ffffff 0%,#82C341 55%,#a3e635 100%) !important;
                -webkit-background-clip: text !important;
                -webkit-text-fill-color: transparent !important;
              }
            `}</style>

            <p data-line className="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-lg leading-relaxed font-light">
              {t("intro")}
            </p>

            {/* Scroll hint — flat */}
            <div data-line className="flex items-center gap-3 mt-12">
              <div className="flex flex-col gap-1.5">
                <div className="w-6 h-px bg-neutral-400 dark:bg-neutral-600" />
                <div className="w-4 h-px bg-neutral-300 dark:bg-neutral-700" />
                <div className="w-2 h-px bg-neutral-200 dark:bg-neutral-800" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-neutral-400 dark:text-neutral-600">
                Scroll to explore
              </span>
            </div>
          </div>

          {/* ── Section 1: Origin ── */}
          <div ref={sec1Ref} className="absolute inset-x-10 xl:inset-x-20 opacity-0">
            <div data-line className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-primary-500" />
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-primary-500">01 — Our Origin</span>
            </div>
            <h2
              data-line
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-6 text-neutral-900 dark:text-white"
            >
              {t("welcomeTitle")}
            </h2>
            <p data-line className="text-base md:text-lg text-neutral-500 dark:text-neutral-400 max-w-lg leading-relaxed font-light mb-10">
              {t("welcomeDesc")}
            </p>
            <div data-line className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-primary-500 leading-none">2020</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mt-1">Founded</span>
              </div>
              <div className="w-px h-10 bg-neutral-200 dark:bg-neutral-800" />
              <div className="flex flex-col">
                <span className="text-3xl font-black text-primary-500 leading-none">🇰🇭</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mt-1">Cambodia</span>
              </div>
            </div>
          </div>

          {/* ── Section 2: Collaboration ── */}
          <div ref={sec2Ref} className="absolute inset-x-10 xl:inset-x-20 opacity-0">
            <div data-line className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-primary-500" />
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-primary-500">02 — How We Work</span>
            </div>
            <h2 data-line className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-900 dark:text-white leading-[1.05] tracking-tight mb-6">
              {t("collabHeading")}
            </h2>
            <p data-line className="text-base md:text-lg text-neutral-500 dark:text-neutral-400 max-w-lg leading-relaxed font-light mb-8">
              {t("collabSub")}
            </p>
            <div data-line className="flex flex-col gap-3.5">
              {[t("collabTitle1"), t("collabTitle2"), t("collabTitle3")].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-7 h-7 rounded-full border border-primary-500/40 bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-[10px] font-black text-primary-600 dark:text-primary-400">{i + 1}</span>
                  </div>
                  <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Section 3: Mission / Values ── */}
          <div ref={sec3Ref} className="absolute inset-x-10 xl:inset-x-20 opacity-0">
            <div data-line className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-primary-500" />
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-primary-500">03 — What Drives Us</span>
            </div>
            <h2 data-line className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-900 dark:text-white leading-[1.05] tracking-tight mb-6">
              {t("forwardHeading")}
            </h2>
            <p data-line className="text-base md:text-lg text-neutral-500 dark:text-neutral-400 max-w-lg leading-relaxed font-light mb-10">
              {t("missionDesc")}
            </p>
            {/* Stats — flat, no boxes */}
            <div data-line className="flex gap-10 flex-wrap items-end">
              {[
                { value: "2M+", label: "Active Users",   color: "#82C341" },
                { value: "48H", label: "Live in 48 hrs", color: "#3b82f6" },
                { value: "#1",  label: "Super-App KH",   color: "#f59e0b" },
              ].map((s, i) => (
                <div key={i} className="flex flex-col group">
                  <div
                    className="text-4xl font-black leading-none transition-transform duration-300 group-hover:scale-105"
                    style={{ color: s.color }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="h-px w-full mt-2 mb-1.5"
                    style={{ background: `linear-gradient(90deg, ${s.color}60, transparent)` }}
                  />
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section progress dots — bottom right */}
          <div className="absolute bottom-8 right-10 xl:right-20 flex items-center gap-3 z-20">
            {["01", "02", "03", "04"].map((n, i) => (
              <span key={i} className="text-[9px] font-black text-neutral-300 dark:text-neutral-700 tracking-widest">
                {n}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
