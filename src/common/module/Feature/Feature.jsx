import Button from "@/common/component/element/Button";
import Card from "@/common/component/element/Card";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import SectionHeading from "@/common/component/element/SectionHeading";
import { Link } from "@/navigation";
import React from "react";
import { AiFillSliders } from "react-icons/ai";
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
      <ComponentTransition className="flex justify-center py-5">
        <SectionHeading title={t("heading")} icon={<AiFillSliders size={30} />} />
      </ComponentTransition>
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

      <ComponentTransition className="w-full md:flex-row flex-col items-center flex justify-center gap-3">
        <Link href="/solution" className="rounded-full">
          <Button
            title={t("viewAll")}
            className="hover:!bg-neutral-950 hover:dark:!bg-neutral-100 transition-colors !rounded-full duration-300 overflow-hidden !bg-transparent outline outline-1 dark:outline-white outline-neutral-950 dark:!text-white !text-black px-8 py-4"
          />
        </Link>
      </ComponentTransition>
    </div>
  );
}
