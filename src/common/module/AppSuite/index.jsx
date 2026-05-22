"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  IoFastFoodOutline,
  IoTrendingUpOutline,
  IoCarOutline,
  IoBedOutline,
  IoGiftOutline,
  IoBriefcaseOutline,
  IoSpeedometerOutline,
} from "react-icons/io5";
import { FaShippingFast, FaCheckCircle, FaStore } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────── constants ─────────────────────────── */
const ACCENT = "#82C341";
const TABS = ["consumer", "driver", "merchant", "enterprise"];

/* ─────────────────────────── helpers ───────────────────────────── */
function usePrevious(value) {
  const ref = useRef(undefined);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

/* ─────────────────────────── component ─────────────────────────── */
const AppSuite = () => {
  const t = useTranslations("AppSuite");
  const [activeTab, setActiveTab] = useState("consumer");
  const prevTab = usePrevious(activeTab);

  /* refs */
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const tabsRef = useRef(null);
  const cardsRef = useRef(null);
  const glow1Ref = useRef(null);
  const glow2Ref = useRef(null);
  const tabIndicatorRef = useRef(null);
  const activeTabBtnRef = useRef(null);

  /* ── tab data ── */
  const tabData = {
    consumer: [
      {
        category: t("categories.deliveries"),
        items: [
          { title: t("services.food.title"), desc: t("services.food.desc"), icon: <IoFastFoodOutline size={26} /> },
          { title: t("services.express.title"), desc: t("services.express.desc"), icon: <FaShippingFast size={22} /> },
        ],
      },
      {
        category: t("categories.mobility"),
        items: [
          { title: t("services.rides.title"), desc: t("services.rides.desc"), icon: <IoCarOutline size={26} /> },
        ],
      },
      {
        category: t("categories.others"),
        items: [
          { title: t("services.hotels.title"), desc: t("services.hotels.desc"), icon: <IoBedOutline size={26} /> },
          { title: t("services.rewards.title"), desc: t("services.rewards.desc"), icon: <IoGiftOutline size={26} /> },
        ],
      },
    ],
    driver: [
      {
        category: t("categories.deliveries"),
        items: [
          { title: t("services.driverDeliveries.title"), desc: t("services.driverDeliveries.desc"), icon: <FaShippingFast size={22} /> },
        ],
      },
      {
        category: t("categories.earnings"),
        items: [
          { title: t("services.flexible.title"), desc: t("services.flexible.desc"), icon: <IoTrendingUpOutline size={26} /> },
          { title: t("services.fulltime.title"), desc: t("services.fulltime.desc"), icon: <FaCheckCircle size={22} /> },
        ],
      },
    ],
    merchant: [
      {
        category: t("categories.operations"),
        items: [
          { title: t("services.orderManager.title"), desc: t("services.orderManager.desc"), icon: <FaStore size={22} /> },
          { title: t("services.menuHub.title"), desc: t("services.menuHub.desc"), icon: <IoFastFoodOutline size={26} /> },
        ],
      },
      {
        category: t("categories.logistics"),
        items: [
          { title: t("services.expressLogistics.title"), desc: t("services.expressLogistics.desc"), icon: <IoSpeedometerOutline size={26} /> },
        ],
      },
    ],
    enterprise: [
      {
        category: t("categories.logistics"),
        items: [
          { title: t("services.bulkShipping.title"), desc: t("services.bulkShipping.desc"), icon: <FaShippingFast size={22} /> },
        ],
      },
      {
        category: t("categories.operations"),
        items: [
          { title: t("services.employeeMeals.title"), desc: t("services.employeeMeals.desc"), icon: <IoBriefcaseOutline size={26} /> },
        ],
      },
    ],
  };

  /* ══════════════════ 1. scroll-triggered section entrance ═════════ */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          once: true,
        },
      });

      /* title clip-path reveal */
      tl.fromTo(
        titleRef.current,
        { clipPath: "inset(0 100% 0 0)", opacity: 0 },
        { clipPath: "inset(0 0% 0 0)", opacity: 1, duration: 1.1, ease: "power3.out" }
      );

      /* tab panel slide-up */
      tl.fromTo(
        tabsRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, ease: "power2.out" },
        "-=0.5"
      );

      /* floating glow pulse loops */
      gsap.to(glow1Ref.current, {
        scale: 1.25,
        opacity: 0.18,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
      gsap.to(glow2Ref.current, {
        scale: 1.3,
        opacity: 0.12,
        duration: 5.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* ══════════════════ 2. animate cards on tab change ══════════════ */
  const animateCards = useCallback(() => {
    const container = cardsRef.current;
    if (!container) return;

    const cards = container.querySelectorAll("[data-card]");
    const cats = container.querySelectorAll("[data-cat]");

    gsap.fromTo(
      cats,
      { x: -18, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.08 }
    );

    gsap.fromTo(
      cards,
      { y: 28, opacity: 0, scale: 0.96 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.55,
        ease: "power3.out",
        stagger: { amount: 0.35, from: "start" },
      }
    );
  }, []);

  /* run on mount */
  useEffect(() => {
    const id = setTimeout(animateCards, 80);
    return () => clearTimeout(id);
  }, [animateCards]);

  /* run on tab change */
  useEffect(() => {
    if (prevTab !== undefined && prevTab !== activeTab) {
      const container = cardsRef.current;
      if (container) {
        gsap.to(container, {
          opacity: 0,
          y: -12,
          duration: 0.2,
          ease: "power2.in",
          onComplete: () => {
            gsap.set(container, { y: 0, opacity: 1 });
            animateCards();
          },
        });
      }
    }
  }, [activeTab, prevTab, animateCards]);

  /* ══════════════════ 3. hover card micro-anim ════════════════════ */
  const handleCardEnter = (e) => {
    const card = e.currentTarget;
    gsap.to(card, { y: -4, scale: 1.012, duration: 0.28, ease: "power2.out" });
    const icon = card.querySelector("[data-icon]");
    if (icon) gsap.to(icon, { rotate: 8, scale: 1.15, duration: 0.28, ease: "back.out(2)" });
  };
  const handleCardLeave = (e) => {
    const card = e.currentTarget;
    gsap.to(card, { y: 0, scale: 1, duration: 0.35, ease: "power2.out" });
    const icon = card.querySelector("[data-icon]");
    if (icon) gsap.to(icon, { rotate: 0, scale: 1, duration: 0.35, ease: "power2.out" });
  };

  /* ══════════════════ 4. tab button click ripple ══════════════════ */
  const handleTabClick = (tab, e) => {
    if (tab === activeTab) return;

    /* ripple */
    const btn = e.currentTarget;
    const ripple = document.createElement("span");
    ripple.style.cssText = `
      position:absolute;pointer-events:none;border-radius:50%;
      width:8px;height:8px;background:${ACCENT};opacity:0.6;
      top:50%;left:50%;transform:translate(-50%,-50%) scale(0);
    `;
    btn.style.position = "relative";
    btn.appendChild(ripple);
    gsap.to(ripple, {
      scale: 18,
      opacity: 0,
      duration: 0.55,
      ease: "power2.out",
      onComplete: () => ripple.remove(),
    });

    setActiveTab(tab);
  };

  /* ─────────────────────────── render ─────────────────────────── */
  return (
    <div
      ref={sectionRef}
      className="relative h-auto max-w-[1500px] mx-auto px-6 md:px-10 xl:px-20 pb-28 w-full pt-16 overflow-hidden"
    >
      {/* ── Floating Glow Orbs ── */}
      <div
        ref={glow1Ref}
        className="absolute top-10 left-8 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${ACCENT}22 0%, transparent 70%)`, filter: "blur(60px)" }}
      />
      <div
        ref={glow2Ref}
        className="absolute bottom-16 right-8 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #3b82f622 0%, transparent 70%)", filter: "blur(80px)" }}
      />

      {/* ── Title ── */}
      <div className="w-full flex flex-col items-start mb-14 lg:mb-18">
        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-black tracking-tight leading-[1.08] max-w-5xl"
          style={{
            background: "linear-gradient(135deg, #111 0%, #444 50%, #82C341 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {t("title")}
        </h1>
      </div>

      {/* ── Main Grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

        {/* ── Tabs ── */}
        <div ref={tabsRef} className="lg:col-span-3 flex flex-col justify-start items-start w-full">
          <div
            className="relative flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible scrollbar-none flex-nowrap gap-1.5 p-2 bg-neutral-100/70 dark:bg-neutral-900/50 border border-neutral-200/40 dark:border-neutral-800/40 rounded-full lg:rounded-2xl shadow-sm w-full sm:w-auto lg:w-full"
            style={{ backdropFilter: "blur(8px)" }}
          >
            {TABS.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={(e) => handleTabClick(tab, e)}
                  style={{ overflow: "hidden" }}
                  className={`relative px-5 py-2.5 lg:px-6 lg:py-3.5 rounded-full lg:rounded-xl text-xs sm:text-sm lg:text-base font-bold transition-colors duration-300 shrink-0 text-center lg:text-left ${
                    isActive
                      ? "text-white"
                      : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
                  }`}
                >
                  {/* GSAP-animated background — use a plain span, no framer-motion */}
                  {isActive && (
                    <span
                      className="absolute inset-0 rounded-full lg:rounded-xl z-0"
                      style={{
                        background: `linear-gradient(135deg, ${ACCENT} 0%, #5aa01a 100%)`,
                        boxShadow: `0 4px 20px ${ACCENT}55`,
                      }}
                    />
                  )}
                  <span className="relative z-10">{t(`tabs.${tab}`)}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Cards ── */}
        <div ref={cardsRef} className="lg:col-span-9 flex flex-col w-full gap-8">
          {tabData[activeTab].map((cat, catIdx) => (
            <div key={`${activeTab}-${catIdx}`} className="flex flex-col w-full">

              {/* Category heading */}
              <div data-cat className="flex items-center gap-3 mb-5">
                <span
                  className="relative flex h-3 w-3 shrink-0"
                  aria-hidden="true"
                >
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <span
                    className="relative inline-flex rounded-full h-3 w-3"
                    style={{ backgroundColor: ACCENT }}
                  />
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-100">
                  {cat.category}
                </h2>
              </div>

              {/* Service cards */}
              <div className="flex flex-col w-full gap-3">
                {cat.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    data-card
                    onMouseEnter={handleCardEnter}
                    onMouseLeave={handleCardLeave}
                    className="group w-full flex items-start gap-4 p-4 rounded-2xl cursor-default
                      bg-white/60 dark:bg-neutral-900/40
                      border border-neutral-200/50 dark:border-neutral-800/50
                      shadow-sm hover:shadow-lg hover:shadow-[#82C341]/10
                      transition-shadow duration-300"
                    style={{ backdropFilter: "blur(6px)", willChange: "transform" }}
                  >
                    {/* Icon */}
                    <div
                      data-icon
                      className="p-3 rounded-xl flex items-center justify-center shrink-0 w-13 h-13
                        border border-neutral-200/60 dark:border-neutral-800/60
                        bg-neutral-50 dark:bg-neutral-900/60
                        text-neutral-600 dark:text-neutral-300
                        group-hover:text-[#82C341] group-hover:border-[#82C341]/30
                        group-hover:bg-[#82C341]/8
                        transition-colors duration-300"
                      style={{ willChange: "transform" }}
                    >
                      {item.icon}
                    </div>

                    {/* Text */}
                    <div className="pt-0.5 flex flex-col gap-1">
                      <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-50 group-hover:text-[#82C341] transition-colors duration-250">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>

                    {/* Corner accent line */}
                    <div
                      className="ml-auto self-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0"
                      style={{
                        width: 3,
                        height: 36,
                        borderRadius: 4,
                        background: `linear-gradient(180deg, ${ACCENT} 0%, transparent 100%)`,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppSuite;
