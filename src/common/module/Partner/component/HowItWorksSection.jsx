"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    icon: "📋",
    titleKey: "step1Title",
    descKey: "step1Desc",
  },
  {
    num: "02",
    icon: "✅",
    titleKey: "step2Title",
    descKey: "step2Desc",
  },
  {
    num: "03",
    icon: "🛠️",
    titleKey: "step3Title",
    descKey: "step3Desc",
  },
  {
    num: "04",
    icon: "🚀",
    titleKey: "step4Title",
    descKey: "step4Desc",
  },
];

const HowItWorksSection = () => {
  const t = useTranslations("Partner");
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const stepsRef = useRef([]);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(
        headerRef.current,
        { y: 60, opacity: 0 },
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

      // Connector line draw animation
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          },
        }
      );

      // Steps cascade
      stepsRef.current.forEach((step, i) => {
        if (!step) return;
        gsap.fromTo(
          step,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: i * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 68%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-20" id="how-it-works">
      {/* Header */}
      <div ref={headerRef} className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
          {t("howBadge")}
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-neutral-900 dark:text-white mb-4">
          {t("howHeading")}
        </h2>
        <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto">
          {t("howSub")}
        </p>
      </div>

      {/* Steps */}
      <div className="relative">
        {/* Horizontal connector (desktop) */}
        <div className="hidden lg:block absolute top-[60px] left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-px overflow-hidden">
          <div
            ref={lineRef}
            style={{ transformOrigin: "left" }}
            className="h-px bg-gradient-to-r from-[#82C341]/40 via-[#82C341]/60 to-[#82C341]/40 w-full"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {steps.map((step, i) => (
            <div
              key={step.num}
              ref={(el) => (stepsRef.current[i] = el)}
              className="flex flex-col items-center text-center group"
            >
              {/* Step bubble */}
              <div className="relative mb-6">
                <div className="w-14 h-14 rounded-full bg-white dark:bg-neutral-950 border-2 border-neutral-200 dark:border-neutral-800 group-hover:border-[#82C341] dark:group-hover:border-[#82C341] transition-all duration-300 flex items-center justify-center text-2xl shadow-md group-hover:shadow-[0_0_20px_rgba(130,195,65,0.3)]">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#82C341] text-white text-[10px] font-black flex items-center justify-center">
                  {i + 1}
                </div>
              </div>

              {/* Step number label */}
              <div className="text-[10px] font-black tracking-widest text-[#82C341] mb-2 uppercase">
                {step.num}
              </div>

              <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3 leading-snug">
                {t(step.titleKey)}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-[220px] mx-auto">
                {t(step.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
