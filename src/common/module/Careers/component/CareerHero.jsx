"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const CareerHero = () => {
  const t = useTranslations("Careers");
  const sectionRef = useRef(null);
  const headRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);
  const orbA = useRef(null);
  const orbB = useRef(null);
  const orbC = useRef(null);
  const gridRef = useRef(null);
  const taglineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax bg elements on scroll
      gsap.to(orbA.current, {
        y: -70, x: 20,
        scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "bottom top", scrub: 1.8 },
      });
      gsap.to(orbB.current, {
        y: -90, x: -30,
        scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "bottom top", scrub: 2.2 },
      });
      gsap.to(orbC.current, {
        y: -50,
        scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "bottom top", scrub: 1 },
      });
      gsap.to(gridRef.current, {
        y: -40,
        scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "bottom top", scrub: 0.8 },
      });

      // Entrance timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl
        .fromTo(taglineRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 })
        .fromTo(headRef.current, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.4")
        .fromTo(subRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.5")
        .fromTo(ctaRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, "-=0.4")
        .fromTo(
          statsRef.current?.children ? Array.from(statsRef.current.children) : [],
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
          "-=0.3"
        );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const stats = [
    { value: "200+", label: t("heroStat1") },
    { value: "12+", label: t("heroStat2") },
    { value: "4.9★", label: t("heroStat3") },
    { value: "100%", label: t("heroStat4") },
  ];

  return (
    <section ref={sectionRef} className="relative w-full min-h-[88vh] flex flex-col items-center justify-center text-center py-20 overflow-hidden">

      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          ref={gridRef}
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(130,195,65,0.6) 1px, transparent 1px)`,
            backgroundSize: "36px 36px",
          }}
        />
        <div ref={orbA} className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full bg-[#82C341]/10 dark:bg-[#82C341]/15 blur-[130px]" />
        <div ref={orbB} className="absolute top-10 right-0 w-[380px] h-[380px] rounded-full bg-[#4e8816]/8 dark:bg-[#a8e06b]/10 blur-[100px]" />
        <div ref={orbC} className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-[#82C341]/6 dark:bg-[#82C341]/10 blur-[90px]" />

        {/* Concentric decorative rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full border border-[#82C341]/6 dark:border-[#82C341]/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-[#82C341]/8 dark:border-[#82C341]/12" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-dashed border-[#82C341]/10 dark:border-[#82C341]/15" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        {/* Tagline pill */}
        <div ref={taglineRef} className="inline-flex items-center gap-2 bg-[#82C341]/10 dark:bg-[#82C341]/15 border border-[#82C341]/30 dark:border-[#82C341]/40 text-[#4e8816] dark:text-[#a8e06b] text-xs font-bold px-5 py-2 rounded-full mb-8 tracking-widest uppercase">
          <span className="w-2 h-2 bg-[#82C341] rounded-full animate-pulse" />
          {t("heroBadge")}
        </div>

        {/* Headline */}
        <h1 ref={headRef} className="text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[1.04] tracking-tight text-neutral-900 dark:text-white mb-6">
          {t("heroTitle1")}
          <span className="block bg-gradient-to-r from-[#82C341] via-[#5fa832] to-[#c5e87a] bg-clip-text text-transparent mt-2">
            {t("heroTitle2")}
          </span>
        </h1>

        {/* Subheading */}
        <p ref={subRef} className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mx-auto mb-10">
          {t("heroDesc")}
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#open-roles"
            className="group flex items-center gap-2 bg-[#82C341] hover:bg-[#6aaa2c] text-white font-bold px-9 py-4 rounded-2xl text-base transition-all duration-300 hover:shadow-[0_0_40px_rgba(130,195,65,0.4)] hover:scale-[1.03]"
          >
            {t("heroCTA1")}
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#life-at-durianx"
            className="flex items-center gap-2 bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-semibold px-9 py-4 rounded-2xl text-base transition-all duration-300 border border-neutral-200 dark:border-neutral-800"
          >
            {t("heroCTA2")}
          </a>
        </div>

        {/* Stats row */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-2xl mx-auto">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-1 py-4 px-3 rounded-2xl bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm border border-neutral-200/60 dark:border-neutral-800/60">
              <span className="text-2xl md:text-3xl font-black text-neutral-900 dark:text-white">{s.value}</span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium text-center leading-tight">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <span className="text-[10px] text-neutral-400 font-semibold tracking-widest uppercase">Explore</span>
        <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default CareerHero;
