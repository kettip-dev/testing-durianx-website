"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const t = useTranslations("Partner");
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);
  const orbRef1 = useRef(null);
  const orbRef2 = useRef(null);
  const orbRef3 = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating orbs parallax
      gsap.to(orbRef1.current, {
        y: -60,
        x: 30,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });
      gsap.to(orbRef2.current, {
        y: -80,
        x: -40,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });
      gsap.to(orbRef3.current, {
        y: -50,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
      gsap.to(gridRef.current, {
        y: -30,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      // Headline entrance
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        headlineRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      )
        .fromTo(
          subRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          ctaRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.4"
        )
        .fromTo(
          statsRef.current?.children ? Array.from(statsRef.current.children) : [],
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.12 },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: "10K+", label: t("heroStat1Label") },
    { value: "95%", label: t("heroStat2Label") },
    { value: "24/7", label: t("heroStat3Label") },
    { value: "#1", label: t("heroStat4Label") },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[85vh] flex flex-col items-center justify-center text-center py-20 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grid pattern */}
        <div
          ref={gridRef}
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(rgba(130,195,65,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(130,195,65,0.5) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
        {/* Orb 1 */}
        <div
          ref={orbRef1}
          className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-[#82C341]/10 dark:bg-[#82C341]/15 blur-[120px]"
        />
        {/* Orb 2 */}
        <div
          ref={orbRef2}
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#4e8816]/8 dark:bg-[#a8e06b]/10 blur-[100px]"
        />
        {/* Orb 3 */}
        <div
          ref={orbRef3}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#82C341]/6 dark:bg-[#82C341]/10 blur-[80px]"
        />

        {/* Decorative rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[#82C341]/8 dark:border-[#82C341]/12" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#82C341]/6 dark:border-[#82C341]/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#82C341]/10 dark:bg-[#82C341]/15 border border-[#82C341]/30 dark:border-[#82C341]/40 text-[#4e8816] dark:text-[#a8e06b] text-xs font-bold px-5 py-2 rounded-full mb-8 tracking-widest uppercase">
          <span className="w-1.5 h-1.5 bg-[#82C341] rounded-full animate-pulse" />
          {t("heroBadge")}
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight text-neutral-900 dark:text-white mb-6"
        >
          {t("heroTitle1")}
          <span className="block bg-gradient-to-r from-[#82C341] via-[#5fa832] to-[#a8e06b] bg-clip-text text-transparent">
            {t("heroTitle2")}
          </span>
        </h1>

        {/* Sub */}
        <p
          ref={subRef}
          className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mx-auto mb-10"
        >
          {t("heroDesc")}
        </p>

        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#partner-form"
            className="group flex items-center gap-2 bg-[#82C341] hover:bg-[#6aaa2c] text-white font-bold px-8 py-4 rounded-2xl text-base transition-all duration-300 hover:shadow-[0_0_40px_rgba(130,195,65,0.4)] hover:scale-[1.03]"
          >
            {t("heroCTA1")}
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#how-it-works"
            className="flex items-center gap-2 bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-semibold px-8 py-4 rounded-2xl text-base transition-all duration-300 border border-neutral-200 dark:border-neutral-800"
          >
            {t("heroCTA2")}
          </a>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-1 p-4 rounded-2xl bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm border border-neutral-200/60 dark:border-neutral-800/60"
            >
              <span className="text-2xl md:text-3xl font-black text-neutral-900 dark:text-white">
                {stat.value}
              </span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium text-center leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-neutral-400 font-medium tracking-wider uppercase">Scroll</span>
        <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
