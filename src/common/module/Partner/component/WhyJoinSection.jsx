"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import {
  FaChartLine,
  FaUsers,
  FaRocket,
  FaShieldHalved,
  FaBell,
  FaCircleCheck,
} from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const WhyJoinSection = () => {
  const t = useTranslations("Partner");
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const lineRef = useRef(null);

  const benefits = [
    {
      icon: FaChartLine,
      titleKey: "why1Title",
      descKey: "why1Desc",
    },
    {
      icon: FaUsers,
      titleKey: "why2Title",
      descKey: "why2Desc",
    },
    {
      icon: FaRocket,
      titleKey: "why3Title",
      descKey: "why3Desc",
    },
    {
      icon: FaShieldHalved,
      titleKey: "why4Title",
      descKey: "why4Desc",
    },
    {
      icon: FaBell,
      titleKey: "why5Title",
      descKey: "why5Desc",
    },
    {
      icon: FaCircleCheck,
      titleKey: "why6Title",
      descKey: "why6Desc",
    },
  ];

  const highlights = [
    { value: "30%+", labelKey: "whyHighlight1" },
    { value: "2M+", labelKey: "whyHighlight2" },
    { value: "Daily", labelKey: "whyHighlight3" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(
        headerRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          },
        }
      );

      // Left block slide in
      gsap.fromTo(
        leftRef.current,
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      // Right block slide in
      gsap.fromTo(
        rightRef.current,
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      // Animated divider line
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // Stagger benefit items
      gsap.fromTo(
        ".why-benefit-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-20" id="why-join">
      {/* Header */}
      <div ref={headerRef} className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-[#82C341]/10 dark:bg-[#82C341]/15 border border-[#82C341]/30 dark:border-[#82C341]/40 text-[#4e8816] dark:text-[#a8e06b] text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
          <span className="w-1.5 h-1.5 bg-[#82C341] rounded-full" />
          {t("whyBadge")}
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-neutral-900 dark:text-white mb-4">
          {t("whyHeading")}
        </h2>
        <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto">
          {t("whySub")}
        </p>
      </div>

      {/* Divider line */}
      <div
        ref={lineRef}
        style={{ transformOrigin: "left" }}
        className="h-px bg-gradient-to-r from-transparent via-[#82C341]/40 to-transparent mb-16"
      />

      {/* Two column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Highlights + visual */}
        <div ref={leftRef} className="flex flex-col gap-8">
          {/* Big numbers */}
          <div className="grid grid-cols-3 gap-4">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center p-6 rounded-[1.5rem] bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-center"
              >
                <span className="text-3xl md:text-4xl font-black text-neutral-900 dark:text-white mb-1">
                  {h.value}
                </span>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 font-semibold leading-tight">
                  {t(h.labelKey)}
                </span>
              </div>
            ))}
          </div>

          {/* Visual card */}
          <div className="relative rounded-[2rem] p-8 bg-gradient-to-br from-[#82C341]/10 via-transparent to-[#4e8816]/5 dark:from-[#82C341]/15 dark:to-[#4e8816]/10 border border-[#82C341]/20 dark:border-[#82C341]/30 overflow-hidden">
            <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-[#82C341]/10 blur-2xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#82C341] flex items-center justify-center">
                  <FaRocket className="text-white text-lg" />
                </div>
                <div>
                  <div className="font-bold text-neutral-900 dark:text-white text-base">{t("whyCardTitle")}</div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">{t("whyCardSub")}</div>
                </div>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {t("whyCardDesc")}
              </p>
              <div className="mt-5 pt-4 border-t border-neutral-200/60 dark:border-neutral-800/60 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((n) => (
                    <div
                      key={n}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-[#82C341] to-[#4e8816] border-2 border-white dark:border-neutral-900 flex items-center justify-center text-[10px] text-white font-bold"
                    >
                      {n}
                    </div>
                  ))}
                </div>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                  {t("whyCardJoined")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Benefits list */}
        <div ref={rightRef} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="why-benefit-item group flex flex-col gap-3 p-6 rounded-[1.5rem] bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:border-[#82C341]/40 dark:hover:border-[#82C341]/40 transition-all duration-300 hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/50 flex items-center justify-center transition-colors duration-300 group-hover:bg-[#82C341]/10 dark:group-hover:bg-[#82C341]/15 group-hover:border-[#82C341]/30">
                  <Icon className="text-neutral-600 dark:text-neutral-400 group-hover:text-[#82C341] transition-colors duration-300 text-base" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 dark:text-white text-base mb-1.5">
                    {t(b.titleKey)}
                  </h4>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    {t(b.descKey)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;
