"use client";
import CardOffer from "@/common/component/element/CardOffer";
import React from "react";
import { useTranslations } from "next-intl";

export default function Interest() {
  const t = useTranslations("Interest");
  return (
    <div className="px-5 lg:px-10">
        <CardOffer title={t("title")} />
    </div>
  );
}
