"use client";
import React from "react";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Card = () => {
  const t = useTranslations("Service.cards");

  // Shared styles for our cards
  const textCardClass = "w-full relative group overflow-hidden p-6 md:basis-[calc(33.333%-1rem)] h-[260px] bg-neutral-50/50 dark:bg-neutral-900/40 backdrop-blur-sm border border-neutral-200/80 dark:border-neutral-800/80 rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.01] hover:border-[#82C341]/40 hover:dark:border-[#82C341]/30 cursor-pointer flex flex-col justify-center";

  const imageCardClass = (basis) => `w-full relative group overflow-hidden ${basis} h-[260px] bg-neutral-50/50 dark:bg-neutral-900/40 backdrop-blur-sm border border-neutral-200/80 dark:border-neutral-800/80 rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.01] hover:border-[#82C341]/40 hover:dark:border-[#82C341]/30 cursor-pointer`;

  const glowingBubbles = (
    <>
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#82C341]/10 rounded-full blur-2xl group-hover:bg-[#82C341]/20 transition-all duration-500 pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#82C341]/5 rounded-full blur-2xl group-hover:bg-[#82C341]/10 transition-all duration-500 pointer-events-none"></div>
    </>
  );

  return (
    <div className="py-6 flex gap-6 justify-between flex-row flex-wrap relative w-full">
      <div className="absolute z-[-9] glowbg w-[100%] md:w-[500px] h-[400px] left-0 pointer-events-none opacity-30"></div>

      {/* Row 1 - Card 1 & Card 2 */}
      {/* 1. streamlined */}
      <ComponentTransition className={textCardClass}>
        {glowingBubbles}
        <div className="relative z-10">
          <h1 className="text-xl md:text-2xl text-neutral-800 dark:text-neutral-100 font-bold group-hover:text-[#82C341] dark:group-hover:text-[#82C341] transition-colors duration-300">
            {t("streamlined.title")}
          </h1>
          <h2 className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mt-1 font-medium leading-normal">
            {t("streamlined.subtitle")}
          </h2>
          <p className="mt-4 text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed line-clamp-3 md:line-clamp-4">
            {t("streamlined.desc")}
          </p>
        </div>
      </ComponentTransition>

      {/* 2. Food delivery banner image */}
      <ComponentTransition
        delay={0.2}
        className={imageCardClass("md:basis-[calc(66.666%-0.5rem)]")}
      >
        <div className="w-full h-full relative">
          <Image
            src="/img1.png"
            alt="DurianX Food Delivery"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 66vw"
          />
        </div>
      </ComponentTransition>

      {/* Row 2 - Cards 3, 4, 5 */}
      {/* 3. DurianX person with phone */}
      <ComponentTransition
        delay={0.1}
        className={imageCardClass("md:basis-[calc(33.333%-1rem)]")}
      >
        <div className="w-full h-full relative">
          <Image
            src="/img.png"
            alt="DurianX App"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </ComponentTransition>

      {/* 4. gateway */}
      <ComponentTransition delay={0.1} className={textCardClass}>
        {glowingBubbles}
        <div className="relative z-10">
          <h1 className="text-xl md:text-2xl text-neutral-800 dark:text-neutral-100 font-bold group-hover:text-[#82C341] dark:group-hover:text-[#82C341] transition-colors duration-300">
            {t("gateway.title")}
          </h1>
          <h2 className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mt-1 font-medium leading-normal">
            {t("gateway.subtitle")}
          </h2>
          <p className="mt-4 text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed line-clamp-3 md:line-clamp-4">
            {t("gateway.desc")}
          </p>
        </div>
      </ComponentTransition>

      {/* 5. unlocking */}
      <ComponentTransition delay={0.1} className={textCardClass}>
        {glowingBubbles}
        <div className="relative z-10">
          <h1 className="text-xl md:text-2xl text-neutral-800 dark:text-neutral-100 font-bold group-hover:text-[#82C341] dark:group-hover:text-[#82C341] transition-colors duration-300">
            {t("unlocking.title")}
          </h1>
          <h2 className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mt-1 font-medium leading-normal">
            {t("unlocking.subtitle")}
          </h2>
          <p className="mt-4 text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed line-clamp-3 md:line-clamp-4">
            {t("unlocking.desc")}
          </p>
        </div>
      </ComponentTransition>

      {/* Row 3 - Cards 6, 7, 8 */}
      {/* 6. simplify */}
      <ComponentTransition delay={0.1} className={textCardClass}>
        {glowingBubbles}
        <div className="relative z-10">
          <h1 className="text-xl md:text-2xl text-neutral-800 dark:text-neutral-100 font-bold group-hover:text-[#82C341] dark:group-hover:text-[#82C341] transition-colors duration-300">
            {t("simplify.title")}
          </h1>
          <h2 className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mt-1 font-medium leading-normal">
            {t("simplify.subtitle")}
          </h2>
          <p className="mt-4 text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed line-clamp-3 md:line-clamp-4">
            {t("simplify.desc")}
          </p>
        </div>
      </ComponentTransition>

      {/* 7. efficiency */}
      <ComponentTransition delay={0.1} className={textCardClass}>
        {glowingBubbles}
        <div className="relative z-10">
          <h1 className="text-xl md:text-2xl text-neutral-800 dark:text-neutral-100 font-bold group-hover:text-[#82C341] dark:group-hover:text-[#82C341] transition-colors duration-300">
            {t("efficiency.title")}
          </h1>
          <h2 className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mt-1 font-medium leading-normal">
            {t("efficiency.subtitle")}
          </h2>
          <p className="mt-4 text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed line-clamp-3 md:line-clamp-4">
            {t("efficiency.desc")}
          </p>
        </div>
      </ComponentTransition>

      {/* 8. innovate */}
      <ComponentTransition delay={0.1} className={textCardClass}>
        {glowingBubbles}
        <div className="relative z-10">
          <h1 className="text-xl md:text-2xl text-neutral-800 dark:text-neutral-100 font-bold group-hover:text-[#82C341] dark:group-hover:text-[#82C341] transition-colors duration-300">
            {t("innovate.title")}
          </h1>
          <h2 className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mt-1 font-medium leading-normal">
            {t("innovate.subtitle")}
          </h2>
          <p className="mt-4 text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed line-clamp-3 md:line-clamp-4">
            {t("innovate.desc")}
          </p>
        </div>
      </ComponentTransition>

      {/* Row 4 - Cards 9, 10, 11 */}
      {/* 9. tailored */}
      <ComponentTransition delay={0.1} className={textCardClass}>
        {glowingBubbles}
        <div className="relative z-10">
          <h1 className="text-xl md:text-2xl text-neutral-800 dark:text-neutral-100 font-bold group-hover:text-[#82C341] dark:group-hover:text-[#82C341] transition-colors duration-300">
            {t("tailored.title")}
          </h1>
          <h2 className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mt-1 font-medium leading-normal">
            {t("tailored.subtitle")}
          </h2>
          <p className="mt-4 text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed line-clamp-3 md:line-clamp-4">
            {t("tailored.desc")}
          </p>
        </div>
      </ComponentTransition>

      {/* 10. Merchant with tablet */}
      <ComponentTransition
        delay={0.1}
        className={imageCardClass("md:basis-[calc(33.333%-1rem)]")}
      >
        <div className="w-full h-full relative">
          <Image
            src="/img 2.png"
            alt="DurianX Merchant"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </ComponentTransition>

      {/* 11. fastTrack */}
      <ComponentTransition delay={0.1} className={textCardClass}>
        {glowingBubbles}
        <div className="relative z-10">
          <h1 className="text-xl md:text-2xl text-neutral-800 dark:text-neutral-100 font-bold group-hover:text-[#82C341] dark:group-hover:text-[#82C341] transition-colors duration-300">
            {t("fastTrack.title")}
          </h1>
          <h2 className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mt-1 font-medium leading-normal">
            {t("fastTrack.subtitle")}
          </h2>
          <p className="mt-4 text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed line-clamp-3 md:line-clamp-4">
            {t("fastTrack.desc")}
          </p>
        </div>
      </ComponentTransition>
    </div>
  );
};

export default Card;
