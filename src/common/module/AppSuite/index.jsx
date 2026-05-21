"use client";
import React, { useState } from "react";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import { useTranslations } from "next-intl";
import {
  IoFastFoodOutline,
  IoTrendingUpOutline,
  IoCarOutline,
  IoBedOutline,
  IoGiftOutline,
  IoBriefcaseOutline,
  IoSpeedometerOutline
} from "react-icons/io5";
import { FaShippingFast, FaCheckCircle, FaStore, FaTools } from "react-icons/fa";

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
            icon: <IoFastFoodOutline size={30} />,
            color: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400"
          },
          {
            title: t("services.express.title"),
            desc: t("services.express.desc"),
            icon: <FaShippingFast size={26} />,
            color: "bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400"
          }
        ]
      },
      {
        category: t("categories.mobility"),
        items: [
          {
            title: t("services.rides.title"),
            desc: t("services.rides.desc"),
            icon: <IoCarOutline size={30} />,
            color: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400"
          }
        ]
      },
      {
        category: t("categories.others"),
        items: [
          {
            title: t("services.hotels.title"),
            desc: t("services.hotels.desc"),
            icon: <IoBedOutline size={30} />,
            color: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400"
          },
          {
            title: t("services.rewards.title"),
            desc: t("services.rewards.desc"),
            icon: <IoGiftOutline size={30} />,
            color: "bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400"
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
            icon: <FaShippingFast size={26} />,
            color: "bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400"
          }
        ]
      },
      {
        category: t("categories.earnings"),
        items: [
          {
            title: t("services.flexible.title"),
            desc: t("services.flexible.desc"),
            icon: <IoTrendingUpOutline size={30} />,
            color: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400"
          },
          {
            title: t("services.fulltime.title"),
            desc: t("services.fulltime.desc"),
            icon: <FaCheckCircle size={26} />,
            color: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400"
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
            icon: <FaStore size={26} />,
            color: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400"
          },
          {
            title: t("services.menuHub.title"),
            desc: t("services.menuHub.desc"),
            icon: <IoFastFoodOutline size={30} />,
            color: "bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400"
          }
        ]
      },
      {
        category: t("categories.logistics"),
        items: [
          {
            title: t("services.expressLogistics.title"),
            desc: t("services.expressLogistics.desc"),
            icon: <IoSpeedometerOutline size={30} />,
            color: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400"
          }
        ]
      }
    ]
  };

  const tabs = ["consumer", "driver", "merchant"];

  return (
    <div className="h-auto max-w-[1500px] mx-auto px-6 md:px-10 xl:px-20 pb-20 w-full pt-16">
      {/* Header and Brand Text */}
      <ComponentTransition className="w-full flex flex-col justify-start items-start mb-12">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#111] dark:text-neutral-100 max-w-[700px] leading-[1.15] mb-10">
          {t("title")}
        </h1>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2 md:gap-4 items-center">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${isActive
                  ? "bg-[#82C341] text-white shadow-md scale-105"
                  : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                  }`}
              >
                {t(`tabs.${tab}`)}
              </button>
            );
          })}
        </div>
      </ComponentTransition>

      {/* Horizontal Divider */}
      <div className="w-full h-[1px] bg-neutral-200 dark:bg-neutral-800/80 mb-2"></div>

      {/* Tab Content List */}
      <div className="flex flex-col w-full">
        {tabData[activeTab].map((cat, catIdx) => (
          <div
            key={catIdx}
            className="grid grid-cols-1 md:grid-cols-12 py-12 border-b-[1px] border-neutral-200 dark:border-neutral-800 last:border-none items-start gap-6 md:gap-8"
          >
            {/* Left Column: Category Label */}
            <div className="col-span-1 md:col-span-4">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-100">
                {cat.category}
              </h2>
            </div>

            {/* Right Column: Services List with inner borders */}
            <div className="col-span-1 md:col-span-8 flex flex-col w-full gap-8">
              {cat.items.map((item, itemIdx) => (
                <div key={itemIdx} className="w-full flex flex-col">
                  {/* Item Content */}
                  <div className="flex items-center gap-5 md:gap-6 group">
                    {/* Circle icon styled exactly as the image */}
                    <div className={`p-4 rounded-full flex items-center justify-center shrink-0 w-16 h-16 md:w-20 md:h-20 transition-all duration-300 group-hover:scale-110 shadow-sm ${item.color}`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-base text-neutral-500 dark:text-neutral-400">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Inner divider if there are multiple items in the same category */}
                  {itemIdx < cat.items.length - 1 && (
                    <div className="w-full h-[1px] bg-neutral-100 dark:bg-neutral-900/60 mt-8"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppSuite;
