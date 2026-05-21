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
  IoSpeedometerOutline,
  IoSearchOutline,
  IoNotificationsOutline,
  IoShieldCheckmarkOutline
} from "react-icons/io5";
import { FaShippingFast, FaCheckCircle, FaStore, FaTools, FaBuilding } from "react-icons/fa";

const DeviceMockup = ({ activeTab }) => {
  return (
    <div className="relative w-full max-w-[310px] xl:max-w-[330px] aspect-[9/18.5] bg-neutral-950 border-[8px] border-neutral-900 dark:border-neutral-800 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col p-2.5 ring-1 ring-white/10">
      {/* Notch */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-5 bg-neutral-900 dark:bg-neutral-800 rounded-full z-30 flex items-center justify-between px-3">
        <span className="w-1.5 h-1.5 rounded-full bg-neutral-800 dark:bg-neutral-700"></span>
        <span className="w-8 h-1 rounded-full bg-neutral-800 dark:bg-neutral-700"></span>
      </div>

      {/* Screen Shine Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-20" />

      {/* Internal Screen Content Container */}
      <div className="w-full h-full bg-neutral-900 rounded-[1.8rem] overflow-hidden relative flex flex-col pt-5 text-[10px] text-white">
        
        {/* Mock Status Bar */}
        <div className="w-full px-4 py-1 flex justify-between items-center text-[8px] opacity-75 font-semibold z-10">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <span>5G</span>
            <div className="w-3.5 h-1.5 border border-white/60 rounded-[3px] p-[1px] flex">
              <div className="h-full w-2 bg-white rounded-[1px]" />
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "consumer" && (
            <motion.div
              key="consumer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col px-3.5 pt-2 gap-3"
            >
              {/* App Bar */}
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[8px] opacity-60">Deliver to</p>
                  <p className="font-bold flex items-center gap-0.5 text-primary-500">BKK1, Phnom Penh</p>
                </div>
                <div className="w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center">
                  <IoNotificationsOutline size={12} className="text-neutral-400" />
                </div>
              </div>

              {/* Search Bar */}
              <div className="w-full bg-neutral-800/80 border border-neutral-700/55 rounded-full py-1.5 px-3 flex items-center gap-2">
                <IoSearchOutline size={11} className="text-neutral-400" />
                <span className="text-neutral-400 text-[8px]">Where to? / ស្វែងរកសេវាកម្ម...</span>
              </div>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-4 gap-2">
                {[
                  { label: "Food", icon: <IoFastFoodOutline size={14} />, color: "bg-emerald-500/20 text-emerald-400" },
                  { label: "Rides", icon: <IoCarOutline size={14} />, color: "bg-emerald-500/20 text-emerald-400" },
                  { label: "Express", icon: <FaShippingFast size={12} />, color: "bg-orange-500/20 text-orange-400" },
                  { label: "Hotels", icon: <IoBedOutline size={14} />, color: "bg-blue-500/20 text-blue-400" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <div className={`w-9 h-9 rounded-full ${item.color} flex items-center justify-center shadow-inner`}>
                      {item.icon}
                    </div>
                    <span className="text-[7px] font-semibold text-neutral-300">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Live Delivery Status Map */}
              <div className="flex-1 bg-neutral-800/60 border border-neutral-700/30 rounded-2xl p-2.5 flex flex-col relative overflow-hidden mb-2">
                <p className="font-bold text-[9px] mb-1">Active Delivery</p>
                <div className="flex items-center gap-1.5 z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_6px_#10B981]" />
                  <span className="text-[8px] text-emerald-400 font-semibold">Scooter arriving in 5 mins</span>
                </div>
                
                {/* Stylized CSS Map */}
                <div className="absolute inset-0 top-6 opacity-30 pointer-events-none">
                  {/* Road Paths */}
                  <div className="absolute left-[30%] top-0 bottom-0 w-2 bg-neutral-700" />
                  <div className="absolute top-[50%] left-0 right-0 h-2 bg-neutral-700" />
                  <div className="absolute left-0 right-0 top-[20%] h-1.5 bg-neutral-700/50 -rotate-12" />
                  
                  {/* Dashed Tracking Line */}
                  <svg className="absolute inset-0 w-full h-full">
                    <path
                      d="M 30,80 Q 50,55 90,40"
                      fill="transparent"
                      stroke="#82C341"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />
                  </svg>
                  
                  {/* Moving Scooter Marker */}
                  <motion.div
                    animate={{
                      x: [25, 45, 85],
                      y: [75, 52, 38],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute text-primary-500"
                  >
                    <FaShippingFast size={10} />
                  </motion.div>

                  {/* Destination Pulsing Green Pin */}
                  <div className="absolute left-[88px] top-[38px]">
                    <span className="absolute inline-flex h-3 w-3 rounded-full bg-emerald-500 opacity-75 animate-ping"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-600"></span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "driver" && (
            <motion.div
              key="driver"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col px-3.5 pt-2 gap-3"
            >
              {/* Status Bar Console */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                  <span className="font-bold text-[9px] uppercase tracking-wide">Console Online</span>
                </div>
                <div className="w-5 h-5 rounded-full bg-neutral-800 flex items-center justify-center">
                  <IoShieldCheckmarkOutline size={11} className="text-emerald-400" />
                </div>
              </div>

              {/* Earnings Card */}
              <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700/40 rounded-2xl p-3 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-12 h-12 bg-primary-500/10 rounded-full blur-xl" />
                <p className="text-[8px] text-neutral-400">{"Today's Earnings"}</p>
                <p className="text-xl font-extrabold text-white mt-0.5">$128.50</p>
                <div className="w-full bg-neutral-700/60 rounded-full h-1.5 mt-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-primary-500 rounded-full"
                  />
                </div>
                <p className="text-[7px] text-neutral-400 mt-1">85% of daily target ($150.00)</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-neutral-800/40 border border-neutral-700/20 rounded-xl p-2 flex flex-col">
                  <span className="text-neutral-400 text-[7px]">Accept Rate</span>
                  <span className="font-bold text-emerald-400 text-[10px] mt-0.5">98.2%</span>
                </div>
                <div className="bg-neutral-800/40 border border-neutral-700/20 rounded-xl p-2 flex flex-col">
                  <span className="text-neutral-400 text-[7px]">Rides Completed</span>
                  <span className="font-bold text-white text-[10px] mt-0.5">14 Jobs</span>
                </div>
              </div>

              {/* Incoming Job Banner */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
                className="bg-primary-950/70 border border-primary-500/30 rounded-xl p-2.5 flex flex-col gap-1.5 shadow-[0_8px_20px_-8px_rgba(130,195,65,0.3)] mb-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-[8px] font-bold text-primary-400 uppercase tracking-wide">New Ride Request</span>
                  <span className="text-[8px] text-neutral-400">1.2 km away</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="font-semibold text-white">BKK1 ➔ Toul Kork</p>
                  <p className="text-neutral-400 text-[7px]">Est. earnings: <span className="text-primary-400 font-bold">$4.80</span></p>
                </div>
                <div className="flex gap-1.5 mt-0.5">
                  <button className="flex-1 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-[8px] transition-colors">Decline</button>
                  <button className="flex-1 py-1 rounded bg-primary-500 hover:bg-primary-600 text-white font-bold text-[8px] shadow-md shadow-primary-500/20 transition-colors">Accept</button>
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === "merchant" && (
            <motion.div
              key="merchant"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col px-3.5 pt-2 gap-3"
            >
              {/* Merchant Title */}
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-[10px] text-white">Cafe Durian (BKK1)</h4>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-emerald-400 text-[7px] font-semibold">Store Open</span>
                  </div>
                </div>
                <div className="w-5 h-5 rounded-full bg-neutral-800 flex items-center justify-center">
                  <FaStore size={10} className="text-neutral-400" />
                </div>
              </div>

              {/* Mini Queue Tracker */}
              <div className="flex flex-col gap-1.5">
                <p className="text-neutral-400 text-[8px] font-bold">Active Orders (3)</p>
                
                {[
                  { id: "#2842", item: "2x Cappuccino", status: "Preparing", color: "text-orange-400 bg-orange-500/10 border-orange-500/20" },
                  { id: "#2840", item: "1x Durian Muffin", status: "Ready", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
                ].map((order, i) => (
                  <div key={i} className="bg-neutral-800/50 border border-neutral-700/20 rounded-xl p-2 flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-white">{order.item}</p>
                      <p className="text-neutral-400 text-[7px] mt-0.5">Order {order.id}</p>
                    </div>
                    <span className={`text-[7px] font-bold px-1.5 py-0.5 rounded-full border ${order.color}`}>
                      {order.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Hourly Sales Visual Chart */}
              <div className="flex-1 bg-neutral-800/40 border border-neutral-700/20 rounded-xl p-2.5 flex flex-col mb-2">
                <p className="text-[8px] text-neutral-400 font-bold mb-1.5">{"Today's Revenue Trend"}</p>
                <div className="flex-1 flex gap-2 items-end justify-between px-1">
                  {[40, 60, 30, 85, 55, 95, 70].map((height, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full bg-neutral-700/60 rounded-t-sm h-12 relative overflow-hidden">
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ duration: 0.8, delay: idx * 0.05 }}
                          className="absolute bottom-0 left-0 right-0 bg-primary-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "enterprise" && (
            <motion.div
              key="enterprise"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col px-3.5 pt-2 gap-3"
            >
              {/* Enterprise Header */}
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-[10px] text-white">Enterprise Hub</h4>
                  <p className="text-[7px] text-neutral-400 mt-0.5">Cambodia Corporate Portal</p>
                </div>
                <div className="w-5 h-5 rounded-full bg-neutral-800 flex items-center justify-center">
                  <FaBuilding size={10} className="text-neutral-400" />
                </div>
              </div>

              {/* Counter Metrics */}
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700/40 rounded-xl p-2 flex flex-col">
                  <span className="text-neutral-400 text-[7px] font-bold">Active Deliveries</span>
                  <span className="font-extrabold text-white text-base mt-0.5">42</span>
                </div>
                <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700/40 rounded-xl p-2 flex flex-col">
                  <span className="text-neutral-400 text-[7px] font-bold">Monthly Spend</span>
                  <span className="font-extrabold text-primary-400 text-base mt-0.5">$3,420</span>
                </div>
              </div>

              {/* Shipping tracker progress bar */}
              <div className="bg-neutral-800/40 border border-neutral-700/20 rounded-xl p-2 flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-white text-[8px] truncate max-w-[130px]">Bulk Shipping #984</span>
                  <span className="text-[7px] text-emerald-400 font-bold">75%</span>
                </div>
                <div className="w-full bg-neutral-700/60 rounded-full h-1 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 0.8 }}
                    className="h-full bg-primary-500 rounded-full"
                  />
                </div>
                <p className="text-[6.5px] opacity-60 text-neutral-300 truncate">Depot ➔ Siem Reap Central</p>
              </div>

              {/* Corporate meal allowances progress bar */}
              <div className="bg-neutral-800/40 border border-neutral-700/20 rounded-xl p-2 flex flex-col gap-1.5 mb-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-white">Team Lunch Budget</span>
                  <span className="text-[7px] text-neutral-400 font-semibold">$1,500 / $2,000</span>
                </div>
                <div className="w-full bg-neutral-700/60 rounded-full h-1 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="h-full bg-orange-500 rounded-full"
                  />
                </div>
                <p className="text-[6.5px] opacity-60 text-neutral-300">Resets in 10 days</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20 items-start">
        {/* Left Column: Heading, Tabs, and Phone Mockup Preview */}
        <div className="lg:col-span-5 flex flex-col justify-start items-start">
          <ComponentTransition className="w-full flex flex-col items-start">

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#111] dark:text-neutral-50 leading-[1.15] mb-8 bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent">
              {t("title")}
            </h1>

            {/* Tab Controls */}
            <div className="relative flex flex-wrap bg-neutral-100 dark:bg-neutral-900/50 p-1.5 rounded-full gap-1 border border-neutral-200/50 dark:border-neutral-800/50 mb-12 shadow-sm w-full sm:w-auto">
              {tabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
                    }`}
                  >
                    <span className="relative z-10">{t(`tabs.${tab}`)}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeTabIndicator"
                        className="absolute inset-0 bg-[#82C341] rounded-full z-0 shadow-lg shadow-primary-500/25"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* High-fidelity Mockup Phone */}
            <div className="w-full hidden lg:flex justify-center mt-2">
              <ComponentTransition delay={0.2}>
                <DeviceMockup activeTab={activeTab} />
              </ComponentTransition>
            </div>
          </ComponentTransition>
        </div>

        {/* Right Column: Services Showcase List */}
        <div className="lg:col-span-7 flex flex-col w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex flex-col w-full gap-10"
            >
              {tabData[activeTab].map((cat, catIdx) => (
                <div
                  key={catIdx}
                  className="flex flex-col w-full bg-white/20 dark:bg-neutral-900/10 border border-neutral-200/40 dark:border-neutral-800/40 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-xs animate-in fade-in-50 duration-500"
                >
                  {/* Category Header with subtle green bullet */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#82C341]" />
                    <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-100">
                      {cat.category}
                    </h2>
                  </div>

                  {/* Services Grid */}
                  <div className="flex flex-col w-full gap-5">
                    {cat.items.map((item, itemIdx) => (
                      <motion.div
                        key={itemIdx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: itemIdx * 0.05, duration: 0.3 }}
                        className="group w-full flex items-start gap-4 sm:gap-6 p-4 rounded-2xl hover:bg-white dark:hover:bg-neutral-900/40 border border-transparent hover:border-neutral-200/50 dark:hover:border-neutral-800/50 hover:shadow-xl hover:shadow-primary-500/3 transition-all duration-300"
                      >
                        {/* Dual Ring Icon Wrapper with theme-specific glow */}
                        <div className="p-4 rounded-2xl flex items-center justify-center shrink-0 w-14 h-14 sm:w-16 sm:h-16 transition-all duration-300 group-hover:scale-110 shadow-sm border border-neutral-200/60 dark:border-neutral-800/60 bg-neutral-50 dark:bg-neutral-900/50 text-neutral-700 dark:text-neutral-300 group-hover:text-primary-500 group-hover:border-primary-500/20 group-hover:bg-primary-500/5 group-hover:shadow-[0_0_15px_rgba(130,195,65,0.15)]">
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
