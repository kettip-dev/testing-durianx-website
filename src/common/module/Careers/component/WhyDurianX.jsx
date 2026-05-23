"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import {
  FaRocket, FaGraduationCap, FaHeartPulse, FaGlobe,
  FaHandshake, FaMoneyBillWave, FaLaptopCode, FaStar,
} from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const perks = [
  { icon: FaRocket, titleKey: "perk1Title", descKey: "perk1Desc", color: "from-orange-400 to-amber-300" },
  { icon: FaGraduationCap, titleKey: "perk2Title", descKey: "perk2Desc", color: "from-blue-500 to-cyan-400" },
  { icon: FaHeartPulse, titleKey: "perk3Title", descKey: "perk3Desc", color: "from-rose-500 to-pink-400" },
  { icon: FaMoneyBillWave, titleKey: "perk4Title", descKey: "perk4Desc", color: "from-emerald-500 to-green-400" },
  { icon: FaGlobe, titleKey: "perk5Title", descKey: "perk5Desc", color: "from-violet-500 to-purple-400" },
  { icon: FaHandshake, titleKey: "perk6Title", descKey: "perk6Desc", color: "from-sky-500 to-blue-400" },
  { icon: FaLaptopCode, titleKey: "perk7Title", descKey: "perk7Desc", color: "from-teal-500 to-emerald-400" },
  { icon: FaStar, titleKey: "perk8Title", descKey: "perk8Desc", color: "from-yellow-400 to-amber-300" },
];

const WhyDurianX = () => {
  const t = useTranslations("Careers");
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 85%" },
        }
      );

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card,
          { y: 60, opacity: 0, scale: 0.95 },
          {
            y: 0, opacity: 1, scale: 1, duration: 0.65,
            delay: (i % 4) * 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 72%" },
          }
        );

        // Subtle hover tilt
        card.addEventListener("mousemove", (e) => {
          const r = card.getBoundingClientRect();
          const x = ((e.clientX - r.left) / r.width - 0.5) * 10;
          const y = ((e.clientY - r.top) / r.height - 0.5) * 10;
          gsap.to(card, { rotateX: -y, rotateY: x, duration: 0.25, ease: "power1.out", transformPerspective: 700 });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.45, ease: "power2.out" });
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-20">
      <div ref={headerRef} className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-[#82C341]/10 dark:bg-[#82C341]/15 border border-[#82C341]/30 dark:border-[#82C341]/40 text-[#4e8816] dark:text-[#a8e06b] text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
          <span className="w-1.5 h-1.5 bg-[#82C341] rounded-full" />
          {t("whyBadge")}
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-neutral-900 dark:text-white mb-4">
          {t("whyHeading")}
        </h2>
        <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
          {t("whySub")}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {perks.map((p, i) => {
          const Icon = p.icon;
          return (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              style={{ transformStyle: "preserve-3d" }}
              className="group relative flex flex-col p-7 rounded-[2rem] bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-xl transition-all duration-300 will-change-transform cursor-default"
            >
              {/* Gradient icon */}
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-5 shadow-md`}>
                <Icon className="text-white text-xl" />
              </div>

              {/* Number tag */}
              <div className="absolute top-5 right-5 text-[11px] font-black text-neutral-300 dark:text-neutral-700">
                {String(i + 1).padStart(2, "0")}
              </div>

              <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-2 leading-snug">
                {t(p.titleKey)}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                {t(p.descKey)}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyDurianX;
