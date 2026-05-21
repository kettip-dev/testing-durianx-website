"use client";
import React from "react";
import { useTranslations } from "next-intl";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import Image from "@/common/component/element/Image";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=kh.com.durianx.customer";
const APP_STORE_URL = "http://s.durianx.com/C75cZ";

export default function DownloadApp() {
  const t = useTranslations("DownloadApp");

  return (
    <section className="w-full max-w-[1700px] mx-auto px-4 sm:px-10 xl:px-12 py-16">
      <div className="relative rounded-3xl">
        {/* Background Layer with rounded corners and overflow hidden */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden bg-gradient-to-br from-neutral-50 via-[#82C341]/5 to-neutral-100 dark:from-[#0d1a04] dark:via-[#132706] dark:to-[#060d02] pointer-events-none">
          {/* Background glow blobs */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#82C341]/10 dark:bg-[#82C341]/20 rounded-full blur-[100px]" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#82C341]/10 dark:bg-[#82C341]/15 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#82C341]/5 rounded-full blur-[80px]" />

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.05] dark:opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(130,195,65,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(130,195,65,0.3) 1px, transparent 1px)`,
              backgroundSize: "40px 40px"
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 px-10 md:px-16 py-6 lg:py-4">
          {/* Left: Text & Buttons */}
          <ComponentTransition className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-[#82C341]/10 dark:bg-[#82C341]/20 border border-[#82C341]/30 dark:border-[#82C341]/40 text-[#4e8816] dark:text-[#a8e06b] text-xs font-semibold px-4 py-1.5 rounded-full mb-3 tracking-wide">
              <span className="w-2 h-2 bg-[#82C341] rounded-full animate-pulse" />
              {t("badge")}
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-white leading-tight mb-3">
              {t("title")}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 text-base md:text-lg leading-relaxed mb-6 max-w-md">
              {t("description")}
            </p>

            {/* Store Buttons */}
            <div className="flex flex-row items-center gap-4">
              {/* Google Play */}
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(130,195,65,0.15)] dark:hover:shadow-[0_0_30px_rgba(130,195,65,0.25)] rounded-xl overflow-hidden block w-[170px]"
              >
                <Image
                  src="/banner/googleplay.png"
                  alt="Get it on Google Play"
                  width={340}
                  height={100}
                  className="w-full h-auto object-contain"
                />
              </a>

              {/* App Store */}
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(130,195,65,0.15)] dark:hover:shadow-[0_0_30px_rgba(130,195,65,0.25)] rounded-xl overflow-hidden block w-[150px]"
              >
                <Image
                  src="/banner/appstore.png"
                  alt="Download on the App Store"
                  width={300}
                  height={100}
                  className="w-full h-auto object-contain"
                />
              </a>
            </div>
          </ComponentTransition>

          {/* Right: Phone mockup visual */}
          <ComponentTransition delay={0.2} className="flex items-center justify-center shrink-0 w-full lg:w-[60%]">
            <div className="relative w-full max-w-[650px] lg:max-w-[850px] h-[200px] sm:h-[260px] lg:h-[280px] flex items-center justify-center">
              {/* Outer glow ring */}
              <div className="absolute w-[75%] h-[85%] rounded-full bg-[#82C341]/20 blur-[100px] pointer-events-none" />
              {/* Phone Image */}
              <div className="relative w-[235%] sm:w-[225%] lg:w-[220%] animate-float-phone flex items-center justify-center">
                <div className="w-full transition-transform duration-500 hover:rotate-3 hover:scale-[1.05] flex items-center justify-center">
                  <Image
                    src="/banner/phone.png"
                    alt="DurianX App Mockup"
                    width={1000}
                    height={625}
                    priority
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </ComponentTransition>
        </div>
      </div>
    </section>
  );
}
