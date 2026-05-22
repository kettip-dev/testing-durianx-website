"use client";
import Rails from "@/common/component/element/Rails";
import React from "react";
import CardAbout from "./component/CardAbout";
import PartnershipTabs from "./component/PartnershipTabs";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import Feedback from "../Feedback";
import CardOffer from "@/common/component/element/CardOffer";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("About");

  return (
    <ComponentTransition className="h-auto max-w-[1500px] px-10 xl:px-20 pb-20">
      <div className="flex justify-center py-5 ">
        <div className="flex justify-center mt-20 relative ">
          <h1 className="text-4xl md:text-7xl py-5 px-10 text-center dark:bg-gradient-to-r from-white from-50% to-black bg-text bg-clip-text  text-transparent font-bold">
            {t("heading")}
          </h1>
          <div className=" absolute w-[150%] md:w-[210%]  h-[250px] z-[-99] top-[-70px]">
            <Rails />
            <div className="bg-gradient-to-b from-white dark:from-black from-20% to-transparent absolute inset-0 "></div>
            <div className="bg-gradient-to-l from-white dark:from-black from-1% to-transparent to-30% absolute inset-0"></div>
            <div className="bg-gradient-to-r from-white dark:from-black from-1% to-transparent to-30% absolute inset-0"></div>
            <div className="bg-gradient-to-t from-white dark:from-black from-1% to-transparent to-30% absolute inset-0"></div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center items-center flex-col mb-10">
        <p className="text-base md:text-2xl text-neutral-500 md:w-[75%] text-center leading-relaxed">
          {t("intro")}
        </p>
      </div>

      {/* Main Core pillars & Story */}
      <CardAbout />

      {/* Interactive Partnership Tabs */}
      <PartnershipTabs />

      {/* User Feedback & CTA */}
      <Feedback className='!px-0' />
      <CardOffer title='Let&rsquo;s Get Started With Us' className="!px-0" />
    </ComponentTransition>
  );
};

export default About;
