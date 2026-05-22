"use client";
import Image from "@/common/component/element/Image";
import React from "react";
import { TbDeviceVisionPro } from "react-icons/tb";
import { FaBullseye, FaHandshake, FaUserGroup, FaScaleBalanced, FaHeadset } from "react-icons/fa6";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import FuelYourDay from "@/common/component/element/FuelYourDay";
import { useTranslations } from "next-intl";

const CardAbout = () => {
  const t = useTranslations("About");

  return (
    <div className="w-full flex flex-col gap-20 py-10 relative">
      {/* Section 1: Welcome to DurianX (Hero Content Block) */}
      <ComponentTransition className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border-[1px] border-neutral-200 dark:border-neutral-800 mb-6 w-fit">
            <span>{t("originBadge")}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-800 dark:text-white leading-tight mb-6">
            {t("welcomeTitle")}
          </h2>
          <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {t("welcomeDesc")}
          </p>
        </div>
        
        {/* ── GSAP animated food image with Khmer headline ── */}
        <div className="lg:col-span-5">
          <FuelYourDay className="h-[380px] md:h-[460px]" />
        </div>
      </ComponentTransition>

      {/* Section 2: Built on Collaboration */}
      <div className="w-full py-10 flex flex-col gap-10">
        <ComponentTransition delay={0.1} className="text-center md:max-w-2xl md:mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-800 dark:text-white mb-4">
            {t("collabHeading")}
          </h2>
          <p className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
            {t("collabSub")}
          </p>
        </ComponentTransition>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              num: t("collabPill1"),
              title: t("collabTitle1"),
              desc: t("collabDesc1"),
              icon: FaUserGroup,
              iconColor: "text-neutral-700 dark:text-neutral-300"
            },
            {
              num: t("collabPill2"),
              title: t("collabTitle2"),
              desc: t("collabDesc2"),
              icon: FaScaleBalanced,
              iconColor: "text-neutral-700 dark:text-neutral-300"
            },
            {
              num: t("collabPill3"),
              title: t("collabTitle3"),
              desc: t("collabDesc3"),
              icon: FaHeadset,
              iconColor: "text-neutral-700 dark:text-neutral-300"
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <ComponentTransition
                key={idx}
                delay={idx * 0.1 + 0.2}
                className="group px-8 py-10 rounded-[2rem] bg-neutral-50 dark:bg-neutral-950 border-[1px] border-neutral-200 dark:border-neutral-850 transition-colors duration-300 hover:border-neutral-400 dark:hover:border-neutral-750"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3.5 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border-[1px] border-neutral-200/50 dark:border-neutral-800/50">
                    <Icon className={`text-xl ${item.iconColor}`} />
                  </div>
                  <span className="text-3xl font-black text-neutral-350 dark:text-neutral-800 group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors duration-300">
                    {item.num}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </ComponentTransition>
            );
          })}
        </div>
      </div>

      {/* Section 3: What Drives DurianX Forward */}
      <div className="w-full py-10 flex flex-col gap-10 relative">
        <ComponentTransition delay={0.1} className="text-center md:max-w-2xl md:mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-800 dark:text-white mb-4">
            {t("forwardHeading")}
          </h2>
          <p className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
            {t("forwardSub")}
          </p>
        </ComponentTransition>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              title: t("missionTitle"),
              desc: t("missionDesc"),
              icon: FaBullseye,
              badge: "bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400"
            },
            {
              title: t("visionTitle"),
              desc: t("visionDesc"),
              icon: TbDeviceVisionPro,
              badge: "bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400"
            },
            {
              title: t("valuesTitle"),
              desc: t("valuesDesc"),
              icon: FaHandshake,
              badge: "bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400"
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <ComponentTransition
                key={idx}
                delay={idx * 0.1 + 0.3}
                className="group rounded-[2rem] border-[1px] border-neutral-200 dark:border-neutral-850 p-8 flex flex-col justify-between h-full bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300 hover:border-neutral-400 dark:hover:border-neutral-750"
              >
                <div>
                  <div className="flex justify-between items-center mb-8">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400">
                      Pillar 0{idx + 1}
                    </span>
                    <div className="p-3 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border-[1px] border-neutral-200/50 dark:border-neutral-800/50">
                      <Icon className="text-2xl text-neutral-800 dark:text-neutral-100" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-800 dark:text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t-[1px] border-neutral-200/50 dark:border-neutral-800/50 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">DurianX Core</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                </div>
              </ComponentTransition>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardAbout;
