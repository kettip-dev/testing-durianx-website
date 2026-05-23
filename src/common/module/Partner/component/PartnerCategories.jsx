"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { FaStore, FaTruck, FaBuildingColumns, FaGlobe } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    id: "restaurant",
    icon: FaStore,
    color: "from-emerald-500 to-green-400",
    bg: "from-emerald-500/10 to-green-400/10 dark:from-emerald-500/15 dark:to-green-400/15",
    border: "border-emerald-200 dark:border-emerald-900/50",
    labelKey: "catRestaurant",
    descKey: "catRestaurantDesc",
    tag: "Food & Beverage",
  },
  {
    id: "logistics",
    icon: FaTruck,
    color: "from-blue-500 to-cyan-400",
    bg: "from-blue-500/10 to-cyan-400/10 dark:from-blue-500/15 dark:to-cyan-400/15",
    border: "border-blue-200 dark:border-blue-900/50",
    labelKey: "catLogistics",
    descKey: "catLogisticsDesc",
    tag: "Logistics",
  },
  {
    id: "finance",
    icon: FaBuildingColumns,
    color: "from-violet-500 to-purple-400",
    bg: "from-violet-500/10 to-purple-400/10 dark:from-violet-500/15 dark:to-purple-400/15",
    border: "border-violet-200 dark:border-violet-900/50",
    labelKey: "catFinance",
    descKey: "catFinanceDesc",
    tag: "Financial",
  },
  {
    id: "enterprise",
    icon: FaGlobe,
    color: "from-orange-500 to-amber-400",
    bg: "from-orange-500/10 to-amber-400/10 dark:from-orange-500/15 dark:to-amber-400/15",
    border: "border-orange-200 dark:border-orange-900/50",
    labelKey: "catEnterprise",
    descKey: "catEnterpriseDesc",
    tag: "Enterprise",
  },
];

const PartnerCategories = () => {
  const t = useTranslations("Partner");
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
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
            toggleActions: "play none none none",
          },
        }
      );

      // Cards stagger animation
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 80, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: i * 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );

        // Hover magnetic effect
        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
          const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
          gsap.to(card, { rotateX: -y, rotateY: x, duration: 0.3, ease: "power1.out", transformPerspective: 800 });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.5, ease: "power2.out" });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-20">
      {/* Header */}
      <div ref={headerRef} className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
          {t("catBadge")}
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-neutral-900 dark:text-white mb-4">
          {t("catHeading")}
        </h2>
        <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto">
          {t("catSub")}
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.id}
              ref={(el) => (cardsRef.current[i] = el)}
              style={{ transformStyle: "preserve-3d" }}
              className={`group relative flex flex-col p-7 rounded-[2rem] bg-gradient-to-br ${cat.bg} border ${cat.border} cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-neutral-200/50 dark:hover:shadow-black/40 will-change-transform`}
            >
              {/* Tag */}
              <div className="absolute top-4 right-4 text-[10px] font-bold tracking-wider uppercase text-neutral-400 dark:text-neutral-600">
                {cat.tag}
              </div>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-6 shadow-lg`}>
                <Icon className="text-white text-2xl" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                {t(cat.labelKey)}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed flex-1">
                {t(cat.descKey)}
              </p>

              {/* Arrow */}
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-neutral-700 dark:text-neutral-300 group-hover:text-[#82C341] transition-colors duration-200">
                <span>{t("catLearnMore")}</span>
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PartnerCategories;
