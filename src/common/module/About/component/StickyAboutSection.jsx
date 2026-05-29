"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function StickyAboutSection() {
  const t = useTranslations("About");
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simple fade up animations
      gsap.utils.toArray('.fade-up').forEach((elem) => {
        gsap.fromTo(elem, 
          { y: 40, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 1, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: elem,
              start: "top 85%",
            }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-white dark:bg-[#0a0a0a] py-20 overflow-hidden">
      {/* Hero Section */}
      <div className="max-w-[1500px] mx-auto px-10 xl:px-20 mb-32 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 fade-up">
          <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest border bg-primary-100/30 dark:bg-primary-950/40 text-primary-600 dark:text-primary-400 border-primary-200/50 dark:border-primary-800/40 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
            DurianX Story
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mt-2 mb-6 text-neutral-900 dark:text-white">
            {t("heading")}
          </h1>
          <p className="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 leading-relaxed font-light mb-10">
            {t("intro")}
          </p>
          <div className="flex gap-10 flex-wrap items-end mt-8">
            {[
              { value: "2M+", label: "Active Users", color: "#82C341" },
              { value: "48H", label: "Live in 48 hrs", color: "#3b82f6" },
              { value: "#1",  label: "Super-App KH", color: "#f59e0b" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col group">
                <div className="text-4xl font-black leading-none" style={{ color: s.color }}>
                  {s.value}
                </div>
                <div className="h-px w-full mt-2 mb-1.5" style={{ background: `linear-gradient(90deg, ${s.color}60, transparent)` }} />
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Images */}
        <div className="w-full lg:w-1/2 relative fade-up">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/about/new_office.png"
              alt="DurianX HQ Exterior"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6 z-20 flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-widest bg-primary-500 text-white shadow-lg">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                DurianX Headquarters
              </div>
            </div>
          </div>
          {/* Decorative floating image */}
          <div className="absolute -bottom-12 -left-12 w-2/3 aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-[#0a0a0a] hidden md:block group z-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/about/new_office_interior.png"
              alt="DurianX Office Interior"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* 3 Pillars Section */}
      <div className="max-w-[1500px] mx-auto px-10 xl:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Origin */}
        <div className="fade-up flex flex-col bg-neutral-50 dark:bg-neutral-900/50 p-8 rounded-3xl border border-neutral-200/60 dark:border-neutral-800/60 transition-all hover:shadow-xl hover:border-primary-500/30">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-primary-500" />
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-primary-500">01 — Our Origin</span>
          </div>
          <h2 className="text-3xl font-black text-neutral-900 dark:text-white mb-4 leading-tight">{t("welcomeTitle")}</h2>
          <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed font-light mb-8 flex-1">{t("welcomeDesc")}</p>
          <div className="flex items-center gap-6 mt-auto">
            <div className="flex flex-col">
              <span className="text-2xl font-black text-primary-500 leading-none">2020</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mt-1">Founded</span>
            </div>
            <div className="w-px h-8 bg-neutral-200 dark:bg-neutral-800" />
            <div className="flex flex-col">
              <span className="text-2xl font-black text-primary-500 leading-none">🇰🇭</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mt-1">Cambodia</span>
            </div>
          </div>
        </div>

        {/* How We Work */}
        <div className="fade-up flex flex-col bg-neutral-50 dark:bg-neutral-900/50 p-8 rounded-3xl border border-neutral-200/60 dark:border-neutral-800/60 transition-all hover:shadow-xl hover:border-primary-500/30">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-primary-500" />
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-primary-500">02 — How We Work</span>
          </div>
          <h2 className="text-3xl font-black text-neutral-900 dark:text-white mb-4 leading-tight">{t("collabHeading")}</h2>
          <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed font-light mb-8 flex-1">{t("collabSub")}</p>
          <div className="flex flex-col gap-3 mt-auto">
            {[t("collabTitle1"), t("collabTitle2"), t("collabTitle3")].map((item, i) => (
              <div key={i} className="flex items-center gap-3 group">
                <div className="w-6 h-6 rounded-full bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-[9px] font-black text-primary-600 dark:text-primary-400">{i + 1}</span>
                </div>
                <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* What Drives Us */}
        <div className="fade-up flex flex-col bg-neutral-50 dark:bg-neutral-900/50 p-8 rounded-3xl border border-neutral-200/60 dark:border-neutral-800/60 transition-all hover:shadow-xl hover:border-primary-500/30">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-primary-500" />
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-primary-500">03 — What Drives Us</span>
          </div>
          <h2 className="text-3xl font-black text-neutral-900 dark:text-white mb-4 leading-tight">{t("forwardHeading")}</h2>
          <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed font-light flex-1">{t("missionDesc")}</p>
        </div>
      </div>
    </div>
  );
}
