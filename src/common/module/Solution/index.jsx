"use client";
import React from "react";
import CardSolution from "./component/Card";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import { useTranslations } from "next-intl";

const Solution = () => {
  const t = useTranslations("Solution");
  return (
    <div className="h-auto max-w-[1500px]  px-10 xl:px-20 pb-20">
      <ComponentTransition delay={0.1} className="flex justify-center items-center flex-col">
        <h1 className="text-3xl md:text-5xl py-5 text-center bg-clip-text dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f]  bg-text md:w-[50%] text-transparent font-bold">
          {t("title")}
        </h1>
        <p className="text-base md:text-2xl text-center text-neutral-500 dark:text-neutral-300">
          {t("description")}
        </p>
      </ComponentTransition>
      <CardSolution/>
    </div>
  );
};

export default Solution;
