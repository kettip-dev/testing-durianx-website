"use client";
import React, { useState } from "react";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoFastFoodOutline,
  IoTrendingUpOutline,
  IoCarOutline,
  IoBedOutline,
  IoGiftOutline,
  IoBriefcaseOutline,
  IoSpeedometerOutline
} from "react-icons/io5";
import { FaShippingFast, FaCheckCircle, FaStore } from "react-icons/fa";



const AppSuite = () => {
  const t = useTranslations("AppSuite");
  const [activeTab, setActiveTab] = useState("consumer");

  const tabData = {
    consumer: [
      {
        category: t("categories.deliveries"),
        items: [
          {
            title: t("services.food.title"),
            desc: t("services.food.desc"),
            icon: <IoFastFoodOutline size={28} />
          },
          {
            title: t("services.express.title"),
            desc: t("services.express.desc"),
            icon: <FaShippingFast size={24} />
          }
        ]
      },
      {
        category: t("categories.mobility"),
        items: [
          {
            title: t("services.rides.title"),
            desc: t("services.rides.desc"),
            icon: <IoCarOutline size={28} />
          }
        ]
      },
      {
        category: t("categories.others"),
        items: [
          {
            title: t("services.hotels.title"),
            desc: t("services.hotels.desc"),
            icon: <IoBedOutline size={28} />
          },
          {
            title: t("services.rewards.title"),
            desc: t("services.rewards.desc"),
            icon: <IoGiftOutline size={28} />
          }
        ]
      }
    ],
    driver: [
      {
        category: t("categories.deliveries"),
        items: [
          {
            title: t("services.driverDeliveries.title"),
            desc: t("services.driverDeliveries.desc"),
            icon: <FaShippingFast size={24} />
          }
        ]
      },
      {
        category: t("categories.earnings"),
        items: [
          {
            title: t("services.flexible.title"),
            desc: t("services.flexible.desc"),
            icon: <IoTrendingUpOutline size={28} />
          },
          {
            title: t("services.fulltime.title"),
            desc: t("services.fulltime.desc"),
            icon: <FaCheckCircle size={24} />
          }
        ]
      }
    ],
    merchant: [
      {
        category: t("categories.operations"),
        items: [
          {
            title: t("services.orderManager.title"),
            desc: t("services.orderManager.desc"),
            icon: <FaStore size={24} />
          },
          {
            title: t("services.menuHub.title"),
            desc: t("services.menuHub.desc"),
            icon: <IoFastFoodOutline size={28} />
          }
        ]
      },
      {
        category: t("categories.logistics"),
        items: [
          {
            title: t("services.expressLogistics.title"),
            desc: t("services.expressLogistics.desc"),
            icon: <IoSpeedometerOutline size={28} />
          }
        ]
      }
    ],
    enterprise: [
      {
        category: t("categories.logistics"),
        items: [
          {
            title: t("services.bulkShipping.title"),
            desc: t("services.bulkShipping.desc"),
            icon: <FaShippingFast size={24} />
          }
        ]
      },
      {
        category: t("categories.operations"),
        items: [
          {
            title: t("services.employeeMeals.title"),
            desc: t("services.employeeMeals.desc"),
            icon: <IoBriefcaseOutline size={28} />
          }
        ]
      }
    ]
  };

  const tabs = ["consumer", "driver", "merchant", "enterprise"];

  return (
    <div className="h-auto max-w-[1500px] mx-auto px-6 md:px-10 xl:px-20 pb-28 w-full pt-16 relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/5 dark:bg-primary-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#82C341]/5 dark:bg-[#82C341]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Elegant Header Section: Large, Clean, Premium Title */}
      <ComponentTransition className="w-full flex flex-col items-start mb-12 lg:mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-black tracking-tight text-neutral-900 dark:text-neutral-50 leading-[1.08] max-w-5xl bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-700 dark:from-white dark:via-neutral-100 dark:to-neutral-400 bg-clip-text text-transparent">
          {t("title")}
        </h1>
      </ComponentTransition>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left Column: Responsive Tab Controls */}
        <div className="lg:col-span-3 flex flex-col justify-start items-start w-full">
          <ComponentTransition className="w-full flex flex-col items-start">
            <div className="relative flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible scrollbar-none flex-nowrap gap-1 lg:gap-1.5 p-1.5 bg-neutral-100/70 dark:bg-neutral-900/50 border border-neutral-200/40 dark:border-neutral-800/40 rounded-full lg:rounded-2xl shadow-sm w-full sm:w-auto lg:w-full">
              {tabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative px-5 py-2.5 lg:px-6 lg:py-3.5 rounded-full lg:rounded-xl text-xs sm:text-sm lg:text-base font-bold transition-all duration-300 shrink-0 text-center lg:text-left ${
                      isActive
                        ? "text-white"
                        : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
                    }`}
                  >
                    <span className="relative z-10">{t(`tabs.${tab}`)}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeTabIndicator"
                        className="absolute inset-0 bg-[#82C341] rounded-full lg:rounded-xl z-0 shadow-md shadow-[#82C341]/20"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </ComponentTransition>
        </div>

        {/* Right Column: Services Showcase List */}
        <div className="lg:col-span-9 flex flex-col w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex flex-col w-full gap-8"
            >
              {tabData[activeTab].map((cat, catIdx) => (
                <div
                  key={catIdx}
                  className="flex flex-col w-full animate-in fade-in-50 duration-500"
                >
                  {/* Category Header with subtle green bullet */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#82C341]" />
                    <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-100">
                      {cat.category}
                    </h2>
                  </div>

                  {/* Services Grid */}
                  <div className="flex flex-col w-full gap-3">
                    {cat.items.map((item, itemIdx) => (
                      <motion.div
                        key={itemIdx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: itemIdx * 0.05, duration: 0.3 }}
                        className="group w-full flex items-start gap-3 sm:gap-4 p-2 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-900/30 transition-all duration-300"
                      >
                        {/* Dual Ring Icon Wrapper with theme-specific glow */}
                        <div className="p-3 rounded-xl flex items-center justify-center shrink-0 w-12 h-12 sm:w-14 sm:h-14 transition-all duration-300 group-hover:scale-105 shadow-sm border border-neutral-200/60 dark:border-neutral-800/60 bg-neutral-50 dark:bg-neutral-900/50 text-neutral-700 dark:text-neutral-300 group-hover:text-primary-500 group-hover:border-primary-500/20 group-hover:bg-primary-500/5 group-hover:shadow-[0_0_15px_rgba(130,195,65,0.15)]">
                          {item.icon}
                        </div>
                        <div className="pt-1">
                          <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-50 mb-1 group-hover:text-primary-500 transition-colors duration-200">
                            {item.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-medium">
                            {item.desc}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AppSuite;
