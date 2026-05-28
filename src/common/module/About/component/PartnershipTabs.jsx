"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStore, FaBuildingColumns, FaGlobe, FaArrowRight } from "react-icons/fa6";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import { useTranslations } from "next-intl";

const TAB_THEMES = {
  merchants: { accentColor: "#82C341", glowColor: "rgba(130,195,65,0.12)", number: "01" },
  banks:     { accentColor: "#3b82f6", glowColor: "rgba(59,130,246,0.12)",  number: "02" },
  government:{ accentColor: "#f59e0b", glowColor: "rgba(245,158,11,0.12)", number: "03" },
};

export default function PartnershipTabs() {
  const t = useTranslations("About");
  const [activeTab, setActiveTab] = useState("merchants");

  const partnershipData = [
    {
      id: "merchants",
      title: t("merchantsTitle"),
      icon: FaStore,
      description: t("merchantsDesc"),
      benefits: [t("merchantsBenefit1"), t("merchantsBenefit2"), t("merchantsBenefit3"), t("merchantsBenefit4")],
    },
    {
      id: "banks",
      title: t("banksTitle"),
      icon: FaBuildingColumns,
      description: t("banksDesc"),
      benefits: [t("banksBenefit1"), t("banksBenefit2"), t("banksBenefit3")],
    },
    {
      id: "government",
      title: t("governmentTitle"),
      icon: FaGlobe,
      description: t("governmentDesc"),
      benefits: [t("governmentBenefit1"), t("governmentBenefit2"), t("governmentBenefit3")],
    },
  ];

  const currentTab = partnershipData.find((tab) => tab.id === activeTab);
  const theme = TAB_THEMES[activeTab];

  return (
    <ComponentTransition delay={0.3} className="w-full py-20">

      {/* ── Header ── */}
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-5"
        >
          <div className="w-8 h-px" style={{ background: theme.accentColor }} />
          <span className="text-[11px] font-black uppercase tracking-[0.22em]" style={{ color: theme.accentColor }}>
            Partnership Ecosystem
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-4xl md:text-6xl font-black tracking-tight text-neutral-900 dark:text-white leading-[1.05] mb-5 max-w-3xl"
        >
          {t("partnerHeading")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="text-lg text-neutral-500 dark:text-neutral-400 max-w-xl font-light leading-relaxed"
        >
          {t("partnerSub")}
        </motion.p>
      </div>

      {/* ── Full flat layout: left tab rail + right content ── */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-16 items-start">

        {/* Left: vertical tab selector */}
        <div className="md:col-span-3 flex md:flex-col gap-2 md:gap-0 overflow-x-auto md:overflow-visible pb-4 md:pb-0">
          {partnershipData.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === activeTab;
            const tabTheme = TAB_THEMES[tab.id];
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative flex items-center gap-3 py-4 md:py-5 pr-6 text-left group flex-shrink-0 md:flex-shrink transition-all duration-300"
              >
                {/* Left accent bar */}
                <div
                  className="w-[3px] flex-shrink-0 rounded-full transition-all duration-400 md:absolute md:left-0 md:top-0 md:bottom-0 md:w-[3px]"
                  style={{
                    height: "100%",
                    background: isActive ? tabTheme.accentColor : "transparent",
                    boxShadow: isActive ? `0 0 12px ${tabTheme.accentColor}88` : "none",
                  }}
                />
                <div className={`flex items-center gap-3 md:pl-5 transition-all duration-300 ${isActive ? "translate-x-1" : ""}`}>
                  <Icon
                    className="text-lg flex-shrink-0 transition-colors duration-300"
                    style={{ color: isActive ? tabTheme.accentColor : "rgb(163 163 163)" }}
                  />
                  <div className="flex flex-col items-start">
                    <span
                      className="text-xs font-black uppercase tracking-widest transition-colors duration-300"
                      style={{ color: isActive ? tabTheme.accentColor : "rgb(163 163 163)" }}
                    >
                      {tabTheme.number}
                    </span>
                    <span
                      className={`text-sm font-bold leading-tight transition-colors duration-300 whitespace-nowrap ${
                        isActive ? "text-neutral-900 dark:text-white" : "text-neutral-400 dark:text-neutral-600"
                      }`}
                    >
                      {tab.title}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}

          {/* Thin vertical track line (desktop) */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800 pointer-events-none" />
        </div>

        {/* Right: flat content area */}
        <div className="md:col-span-9 relative md:border-l border-neutral-200 dark:border-neutral-800 md:pl-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="text-[10px] font-black uppercase tracking-[0.22em]"
                  style={{ color: theme.accentColor }}
                >
                  {theme.number} — {t("tabSegment")}
                </span>
                <div className="h-px flex-1 max-w-[60px]" style={{ background: `${theme.accentColor}50` }} />
              </div>

              {/* Title */}
              <h3 className="text-3xl md:text-5xl font-black text-neutral-900 dark:text-white mb-5 leading-tight tracking-tight">
                {currentTab.title}
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg text-neutral-500 dark:text-neutral-400 mb-12 leading-relaxed font-light max-w-2xl">
                {currentTab.description}
              </p>

              {/* Benefits — flat numbered list */}
              <div className="flex flex-col gap-0">
                {currentTab.benefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.07, duration: 0.35 }}
                    className="group flex items-start gap-5 py-5 border-b border-neutral-100 dark:border-neutral-900 last:border-0"
                  >
                    {/* Flat number */}
                    <span
                      className="text-[11px] font-black tracking-widest mt-0.5 flex-shrink-0 w-6 transition-colors duration-300"
                      style={{ color: theme.accentColor }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm md:text-base font-medium text-neutral-700 dark:text-neutral-300 leading-relaxed flex-1">
                      {benefit}
                    </span>

                    {/* Hover arrow */}
                    <FaArrowRight
                      className="text-xs mt-1 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
                      style={{ color: theme.accentColor }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Bottom flat stat */}
              <div className="mt-12 flex items-end gap-4">
                <div>
                  <div
                    className="text-5xl font-black leading-none"
                    style={{ color: theme.accentColor }}
                  >
                    100%
                  </div>
                  <div
                    className="h-px mt-2 mb-1.5 w-full"
                    style={{ background: `linear-gradient(90deg, ${theme.accentColor}60, transparent)` }}
                  />
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">
                    {t("success")} · {t("growthRate")}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </ComponentTransition>
  );
}
