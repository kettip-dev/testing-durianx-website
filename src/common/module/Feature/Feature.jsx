"use client";
import Card from "@/common/component/element/Card";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import React from "react";
import { ServiceItem } from "@/common/constant/Service";
import { useTranslations } from "next-intl";

export default function Feature() {
  const t = useTranslations("Feature");

  const translatedServiceItems = [
    { ...ServiceItem[0], title: t("items.food.title"), desc: t("items.food.desc"), lottiePath: "/lottie/Food.json" },
    { ...ServiceItem[2], title: t("items.express.title"), desc: t("items.express.desc"), lottiePath: "/lottie/DeliveryExpress.json" },
  ];

  return (
    <div className="h-auto max-w-[1500px] mx-auto px-10 xl:px-20 pb-20">
      <ComponentTransition
        delay={0.1}
        className="flex justify-center items-center flex-col"
      >
        <h1 className="text-3xl md:text-5xl py-5 text-center bg-clip-text dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f]  bg-text md:w-[50%] text-transparent font-bold">
          {t("title")}
        </h1>
        <p className="text-base md:text-2xl text-center text-neutral-500 dark:text-neutral-300">
          {t("description")}
        </p>
      </ComponentTransition>
      <Card Content={translatedServiceItems} />
    </div>
  );
}
