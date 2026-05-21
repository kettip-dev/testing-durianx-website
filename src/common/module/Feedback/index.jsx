"use client";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import SectionHeading from "@/common/component/element/SectionHeading";
import React from "react";
import { MdOutlineFeedback } from "react-icons/md";
import FeedbackCard from "./component/FeedbackCard";
import clsx from "clsx";
import { useTranslations } from "next-intl";

export default function Feedback({className}) {
  const t = useTranslations("Feedback");
  return (
    <div className={clsx(className, `h-auto max-w-[1500px] px-5 lg:px-10 pb-20`)}>
      <ComponentTransition className="flex justify-center py-5">
        <SectionHeading
          title={t("heading")}
          icon={<MdOutlineFeedback size={30} />}
        />
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="flex justify-center items-center flex-col"
      >
        <h1 className="text-3xl md:text-5xl py-5 text-center bg-clip-text dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f] bg-text md:w-[50%] text-transparent font-bold">
          {t("title")}
        </h1>
      </ComponentTransition>
      <FeedbackCard  />
    
      
    </div>
  );
}
