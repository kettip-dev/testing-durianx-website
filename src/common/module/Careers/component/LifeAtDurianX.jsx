"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const values = [
  { emoji: "🚀", titleKey: "val1Title", descKey: "val1Desc" },
  { emoji: "🤝", titleKey: "val2Title", descKey: "val2Desc" },
  { emoji: "🌱", titleKey: "val3Title", descKey: "val3Desc" },
  { emoji: "💡", titleKey: "val4Title", descKey: "val4Desc" },
  { emoji: "🏆", titleKey: "val5Title", descKey: "val5Desc" },
  { emoji: "❤️", titleKey: "val6Title", descKey: "val6Desc" },
];

const LifeAtDurianX = () => {
  const t = useTranslations("Careers");
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const dividerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: headerRef.current, start: "top 85%" } }
      );

      // Animated divider
      gsap.fromTo(dividerRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.3, ease: "power3.inOut", scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } }
      );

      gsap.fromTo(leftRef.current,
        { x: -70, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 72%" } }
      );

      gsap.fromTo(rightRef.current,
        { x: 70, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 72%" } }
      );

      // Values stagger
      gsap.fromTo(".life-value-item",
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.55, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: rightRef.current, start: "top 78%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-20" id="life-at-durianx">
      <div ref={headerRef} className="text-center mb-14">
        <div className="inline-flex items-center gap-2 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
          {t("lifeBadge")}
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-neutral-900 dark:text-white mb-4">
          {t("lifeHeading")}
        </h2>
        <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto">
          {t("lifeSub")}
        </p>
      </div>

      {/* Divider */}
      <div
        ref={dividerRef}
        style={{ transformOrigin: "left" }}
        className="h-px bg-gradient-to-r from-transparent via-[#82C341]/50 to-transparent mb-14"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        {/* Left: Immersive culture card */}
        <div ref={leftRef} className="flex flex-col gap-6">
          {/* Main culture visual */}
          <div className="relative p-8 rounded-[2rem] bg-gradient-to-br from-[#82C341]/10 via-neutral-50/50 to-[#4e8816]/5 dark:from-[#82C341]/12 dark:via-neutral-950/80 dark:to-[#4e8816]/8 border border-[#82C341]/20 dark:border-[#82C341]/25 overflow-hidden">
            {/* Glow */}
            <div className="absolute -right-10 -bottom-10 w-52 h-52 rounded-full bg-[#82C341]/15 blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="text-4xl mb-4">🌏</div>
              <h3 className="text-2xl font-black text-neutral-900 dark:text-white mb-3">
                {t("lifeCardTitle")}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-base mb-6">
                {t("lifeCardDesc")}
              </p>

              {/* Team avatars */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {["🧑‍💻","👩‍🎨","🧑‍📊","👩‍🔧","🧑‍🚀"].map((em, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-white dark:bg-neutral-900 border-2 border-white dark:border-neutral-900 flex items-center justify-center text-lg shadow-sm">
                      {em}
                    </div>
                  ))}
                </div>
                <span className="text-sm font-semibold text-neutral-600 dark:text-neutral-400">
                  {t("lifeTeamLabel")}
                </span>
              </div>
            </div>
          </div>

          {/* Office locations */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { city: "Phnom Penh", flag: "🇰🇭", label: t("lifeHQ") },
              { city: t("lifeRemote"), flag: "🌐", label: t("lifeRemoteLabel") },
            ].map((loc, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 flex flex-col gap-2">
                <span className="text-2xl">{loc.flag}</span>
                <div className="font-bold text-neutral-900 dark:text-white text-sm">{loc.city}</div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400">{loc.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Values grid */}
        <div ref={rightRef} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {values.map((v, i) => (
            <div key={i} className="life-value-item group p-6 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:border-[#82C341]/40 dark:hover:border-[#82C341]/40 transition-all duration-300 hover:shadow-md">
              <div className="text-2xl mb-3">{v.emoji}</div>
              <h4 className="font-bold text-neutral-900 dark:text-white text-base mb-1.5 group-hover:text-[#82C341] transition-colors duration-200">
                {t(v.titleKey)}
              </h4>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                {t(v.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifeAtDurianX;
