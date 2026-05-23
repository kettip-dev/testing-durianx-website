"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { FaCircleCheck } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const BenefitsSection = () => {
  const t = useTranslations("Partner");
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const contentRef = useRef(null);

  const tiers = [
    {
      nameKey: "tierStarter",
      badge: "Starter",
      color: "border-neutral-200 dark:border-neutral-800",
      accent: "bg-neutral-100 dark:bg-neutral-900",
      badgeColor: "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300",
      benefits: ["benefit1", "benefit2", "benefit3", "benefit4"],
    },
    {
      nameKey: "tierGrowth",
      badge: "Growth",
      color: "border-[#82C341]/40 dark:border-[#82C341]/30",
      accent: "bg-[#82C341]/10 dark:bg-[#82C341]/10",
      badgeColor: "bg-[#82C341]/15 dark:bg-[#82C341]/20 text-[#4e8816] dark:text-[#a8e06b]",
      featured: true,
      benefits: ["benefit1", "benefit2", "benefit3", "benefit4", "benefit5", "benefit6"],
    },
    {
      nameKey: "tierPremium",
      badge: "Premium",
      color: "border-violet-200 dark:border-violet-900/50",
      accent: "bg-violet-50 dark:bg-violet-950/30",
      badgeColor: "bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300",
      benefits: ["benefit1", "benefit2", "benefit3", "benefit4", "benefit5", "benefit6", "benefit7", "benefit8"],
    },
  ];

  const benefitLabels = {
    benefit1: t("benLabel1"),
    benefit2: t("benLabel2"),
    benefit3: t("benLabel3"),
    benefit4: t("benLabel4"),
    benefit5: t("benLabel5"),
    benefit6: t("benLabel6"),
    benefit7: t("benLabel7"),
    benefit8: t("benLabel8"),
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 85%" },
        }
      );

      // Tier cards with stagger
      gsap.fromTo(
        ".tier-card",
        { y: 80, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 75%",
          },
        }
      );

      // Benefits list items
      gsap.fromTo(
        ".tier-benefit",
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 65%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-20">
      {/* Header */}
      <div ref={headerRef} className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-[#82C341]/10 dark:bg-[#82C341]/15 border border-[#82C341]/30 dark:border-[#82C341]/40 text-[#4e8816] dark:text-[#a8e06b] text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
          <span className="w-1.5 h-1.5 bg-[#82C341] rounded-full animate-pulse" />
          {t("benBadge")}
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-neutral-900 dark:text-white mb-4">
          {t("benHeading")}
        </h2>
        <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto">
          {t("benSub")}
        </p>
      </div>

      {/* Tier cards */}
      <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier, i) => (
          <div
            key={i}
            className={`tier-card relative flex flex-col p-8 rounded-[2rem] border ${tier.color} ${tier.featured ? "ring-2 ring-[#82C341]/30 dark:ring-[#82C341]/25 shadow-2xl shadow-[#82C341]/10" : ""} transition-all duration-300 hover:shadow-xl`}
          >
            {/* Featured badge */}
            {tier.featured && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#82C341] text-white text-xs font-black px-5 py-1.5 rounded-full tracking-wider uppercase shadow-md">
                {t("benPopular")}
              </div>
            )}

            {/* Tier name */}
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${tier.badgeColor} mb-6 w-fit`}>
              {tier.badge}
            </div>
            <h3 className="text-2xl font-black text-neutral-900 dark:text-white mb-2">
              {t(tier.nameKey)}
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-8 leading-relaxed">
              {t("benTierDesc")}
            </p>

            {/* Benefits */}
            <ul className="space-y-3 flex-1">
              {tier.benefits.map((b, j) => (
                <li
                  key={j}
                  className="tier-benefit flex items-start gap-3"
                >
                  <FaCircleCheck className="text-[#82C341] mt-0.5 flex-shrink-0 text-base" />
                  <span className="text-sm text-neutral-700 dark:text-neutral-300 font-medium leading-snug">
                    {benefitLabels[b]}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#partner-form"
              className={`mt-8 w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                tier.featured
                  ? "bg-[#82C341] hover:bg-[#6aaa2c] text-white hover:shadow-[0_0_30px_rgba(130,195,65,0.35)]"
                  : "bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800"
              }`}
            >
              {t("benCTA")}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
