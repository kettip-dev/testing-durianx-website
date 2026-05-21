"use client";
import React from "react";
import { useTranslations } from "next-intl";
import ComponentTransition from "@/common/component/element/ComponentTransition";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=kh.com.durianx.customer";
const APP_STORE_URL = "https://apps.apple.com/app/durianx/id6743418286";

export default function DownloadApp() {
  const t = useTranslations("DownloadApp");

  return (
    <section className="w-full max-w-[1500px] mx-auto px-10 xl:px-20 py-20">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a2e0a] via-[#1e3a0d] to-[#0d1f05] dark:from-[#0d1a04] dark:via-[#132706] dark:to-[#060d02] shadow-2xl">
        {/* Background glow blobs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#82C341]/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#82C341]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#82C341]/5 rounded-full blur-[80px] pointer-events-none" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(130,195,65,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(130,195,65,0.3) 1px, transparent 1px)`,
            backgroundSize: "40px 40px"
          }}
        />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 px-10 md:px-16 py-16">
          {/* Left: Text & Buttons */}
          <ComponentTransition className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-[#82C341]/20 border border-[#82C341]/40 text-[#a8e06b] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
              <span className="w-2 h-2 bg-[#82C341] rounded-full animate-pulse" />
              {t("badge")}
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              {t("title")}
            </h2>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-10 max-w-md">
              {t("description")}
            </p>

            {/* Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Google Play */}
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-[#82C341]/60 text-white px-6 py-3.5 rounded-2xl transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(130,195,65,0.25)] backdrop-blur-sm"
              >
                <svg className="w-7 h-7 shrink-0" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M48 436L279 256 48 76V436Z" fill="#EA4335"/>
                  <path d="M400 204L340 168 48 76 279 256 400 204Z" fill="#FBBC05"/>
                  <path d="M400 308L279 256 48 436 340 344 400 308Z" fill="#34A853"/>
                  <path d="M400 204L279 256 400 308L464 272C484 261 484 251 464 240L400 204Z" fill="#4285F4"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-neutral-300 uppercase tracking-widest">{t("playStore.label")}</div>
                  <div className="text-base font-bold leading-tight">Google Play</div>
                </div>
              </a>

              {/* App Store */}
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-[#82C341]/60 text-white px-6 py-3.5 rounded-2xl transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(130,195,65,0.25)] backdrop-blur-sm"
              >
                <svg className="w-7 h-7 shrink-0" viewBox="0 0 814 1000" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-47.4-148.2-108.3C27.7 744.3 0 663.5 0 586c0-182.5 120.2-278.9 238.5-278.9 61.6 0 113.4 38 152.3 38 37.5 0 96.1-40.1 163.9-40.1 26.3.1 108.2 2.6 168.2 77.9zm-120.4-198.5c28.3-34 48.3-81.5 48.3-129s-1.9-98.1-29.6-139.8c-25.9-37.5-72.2-63-113.3-63h-1.9c-30 1.3-67.5 21.1-97.5 57.3-27.2 33.4-47.6 81.8-47.6 129.8 0 43.5 12.4 89.9 36.7 126.4 23 35 67.5 65.2 107.2 65.2h1.6c32.3.1 72.7-23.8 95.1-46.9z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-neutral-300 uppercase tracking-widest">{t("appStore.label")}</div>
                  <div className="text-base font-bold leading-tight">App Store</div>
                </div>
              </a>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 mt-10 pt-8 border-t border-white/10 w-full justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-extrabold text-white">10K+</div>
                <div className="text-xs text-neutral-400 mt-0.5">{t("stats.downloads")}</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-extrabold text-white">4.8★</div>
                <div className="text-xs text-neutral-400 mt-0.5">{t("stats.rating")}</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-extrabold text-white">5K+</div>
                <div className="text-xs text-neutral-400 mt-0.5">{t("stats.reviews")}</div>
              </div>
            </div>
          </ComponentTransition>

          {/* Right: Phone mockup visual */}
          <ComponentTransition delay={0.2} className="flex items-center justify-center shrink-0">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-[40px] bg-[#82C341]/20 blur-2xl scale-110" />
              {/* Phone shell */}
              <div className="relative w-[200px] sm:w-[240px] bg-[#0f1a07] border-2 border-[#82C341]/40 rounded-[40px] shadow-2xl overflow-hidden flex flex-col items-center py-6 px-4 gap-4">
                {/* Status bar */}
                <div className="flex justify-between items-center w-full px-1">
                  <span className="text-[9px] text-white/50 font-medium">9:41</span>
                  <div className="flex gap-1 items-center">
                    <div className="w-3 h-1.5 border border-white/40 rounded-sm">
                      <div className="w-2 h-full bg-[#82C341] rounded-sm" />
                    </div>
                  </div>
                </div>
                {/* App icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#82C341] to-[#4f8025] flex items-center justify-center shadow-lg">
                  <svg viewBox="0 0 100 100" className="w-9 h-9" fill="white">
                    <circle cx="50" cy="38" r="20" />
                    <path d="M30 70 Q50 55 70 70 L75 90 H25 Z" />
                  </svg>
                </div>
                <div className="text-white font-bold text-sm">DurianX</div>
                <div className="text-[#82C341] text-[10px] font-medium text-center leading-tight">Empower Your Life</div>
                {/* Fake UI bars */}
                <div className="w-full space-y-2 mt-2">
                  <div className="h-2 bg-white/10 rounded-full w-full" />
                  <div className="h-2 bg-white/10 rounded-full w-4/5" />
                  <div className="h-2 bg-[#82C341]/40 rounded-full w-3/5" />
                </div>
                {/* Fake nav */}
                <div className="flex justify-around w-full mt-3 pt-3 border-t border-white/10">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className={`w-5 h-5 rounded-lg ${i === 0 ? "bg-[#82C341]/80" : "bg-white/10"}`} />
                  ))}
                </div>
              </div>
            </div>
          </ComponentTransition>
        </div>
      </div>
    </section>
  );
}
