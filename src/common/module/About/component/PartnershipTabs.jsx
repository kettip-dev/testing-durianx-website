"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStore, FaBuildingColumns, FaGlobe, FaCircleCheck } from "react-icons/fa6";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import { useTranslations } from "next-intl";

export default function PartnershipTabs() {
  const t = useTranslations("About");
  const [activeTab, setActiveTab] = useState("merchants");

  const partnershipData = [
    {
      id: "merchants",
      title: t("merchantsTitle"),
      icon: FaStore,
      description: t("merchantsDesc"),
      benefits: [
        t("merchantsBenefit1"),
        t("merchantsBenefit2"),
        t("merchantsBenefit3"),
        t("merchantsBenefit4")
      ],
      accent: "text-neutral-700 bg-neutral-150 border-neutral-300 dark:text-neutral-300 dark:bg-neutral-900 dark:border-neutral-850"
    },
    {
      id: "banks",
      title: t("banksTitle"),
      icon: FaBuildingColumns,
      description: t("banksDesc"),
      benefits: [
        t("banksBenefit1"),
        t("banksBenefit2"),
        t("banksBenefit3")
      ],
      accent: "text-neutral-700 bg-neutral-150 border-neutral-300 dark:text-neutral-300 dark:bg-neutral-900 dark:border-neutral-850"
    },
    {
      id: "government",
      title: t("governmentTitle"),
      icon: FaGlobe,
      description: t("governmentDesc"),
      benefits: [
        t("governmentBenefit1"),
        t("governmentBenefit2"),
        t("governmentBenefit3")
      ],
      accent: "text-neutral-700 bg-neutral-150 border-neutral-300 dark:text-neutral-300 dark:bg-neutral-900 dark:border-neutral-850"
    }
  ];

  const currentTab = partnershipData.find((tab) => tab.id === activeTab);

  return (
    <ComponentTransition delay={0.3} className="w-full py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100 mb-4">
          {t("partnerHeading")}
        </h2>
        <p className="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
          {t("partnerSub")}
        </p>
      </div>

      {/* Tabs Selector */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-5 mb-10 max-w-4xl mx-auto px-4">
        {partnershipData.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-6 py-3.5 rounded-2xl text-sm md:text-base font-semibold transition-all duration-300 border-[1px] ${
                isActive
                  ? "bg-neutral-900 text-white border-neutral-800 dark:bg-white dark:text-black dark:border-neutral-100"
                  : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400 dark:bg-neutral-950 dark:text-neutral-300 dark:border-neutral-800 dark:hover:border-neutral-700"
              }`}
            >
              <Icon className="text-lg" />
              <span>{tab.title}</span>
            </button>
          );
        })}
      </div>

      {/* Content Container */}
      <div className="relative max-w-5xl mx-auto px-4 min-h-[420px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 p-8 md:p-12 rounded-[2rem] border-[1px] border-neutral-200 dark:border-neutral-850 bg-neutral-50 dark:bg-neutral-950 relative overflow-hidden"
          >
            {/* Left Content Column */}
            <div className="md:col-span-7 flex flex-col justify-center z-10 relative">
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border-[1px] mb-6 w-fit ${currentTab.accent}`}>
                <currentTab.icon />
                <span>{t("tabSegment")}</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-white mb-4">
                {currentTab.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg mb-8 leading-relaxed">
                {currentTab.description}
              </p>

              {/* Benefits List */}
              <ul className="space-y-4">
                {currentTab.benefits.map((benefit, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3.5"
                  >
                    <FaCircleCheck className="text-neutral-750 dark:text-neutral-300 mt-1 flex-shrink-0 text-lg md:text-xl" />
                    <span className="text-neutral-700 dark:text-neutral-350 text-sm md:text-base font-medium">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Illustration Column */}
            <div className="md:col-span-5 flex items-center justify-center z-10 relative min-h-[220px] md:min-h-auto">
              <div className="relative w-full h-full max-w-[280px] md:max-w-none flex items-center justify-center">
                {/* Visual block representing ecosystem - Flat style */}
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-3xl bg-neutral-100 dark:bg-neutral-900 border-[1px] border-neutral-200 dark:border-neutral-800 flex flex-col items-center justify-center p-6 text-center relative">
                  <currentTab.icon className="text-5xl md:text-6xl text-neutral-700 dark:text-neutral-300 mb-4" />
                  <span className="font-bold text-neutral-700 dark:text-neutral-200 text-sm md:text-base leading-tight">
                    {t("ecosystem")}
                  </span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                    {t("superApp")}
                  </span>

                  {/* Decorative static border circle */}
                  <div className="absolute inset-0 rounded-3xl border-dashed border-[1.5px] border-neutral-350 dark:border-neutral-800 pointer-events-none" />
                </div>

                {/* Flat bordered success badge */}
                <div className="absolute -right-4 -bottom-4 w-28 h-28 rounded-2xl bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-white border-[1px] border-neutral-200 dark:border-neutral-800 flex flex-col items-center justify-center p-3 z-20">
                  <span className="text-xs uppercase tracking-wider font-extrabold opacity-60">{t("success")}</span>
                  <span className="text-2xl md:text-3xl font-black mt-1">100%</span>
                  <span className="text-[10px] opacity-75 mt-1 font-semibold">{t("growthRate")}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </ComponentTransition>
  );
}
