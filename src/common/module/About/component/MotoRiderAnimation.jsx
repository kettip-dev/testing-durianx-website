"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import CambodiaSkyline from "@/common/component/element/CambodiaSkyline";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ACCENT = "#82C341";

export default function MotoRiderAnimation() {
  const t = useTranslations("About");

  const triggerRef = useRef(null);
  const arenaRef = useRef(null);
  const riderRef = useRef(null);   // the moving wrapper — glow/trail/shadow live inside
  const skylineRef = useRef(null);
  const cloud1Ref = useRef(null);
  const cloud2Ref = useRef(null);
  const milestone1Ref = useRef(null);
  const milestone2Ref = useRef(null);
  const milestone3Ref = useRef(null);

  // Speed line refs (individual — no hooks in loops)
  const sl0 = useRef(null); const sl1 = useRef(null);
  const sl2 = useRef(null); const sl3 = useRef(null);
  const sl4 = useRef(null); const sl5 = useRef(null);
  const sl6 = useRef(null); const sl7 = useRef(null);
  const sl = [sl0, sl1, sl2, sl3, sl4, sl5, sl6, sl7];

  const [distance, setDistance] = useState("0.0");
  const [speed, setSpeed] = useState(0);
  const [statusText, setStatusText] = useState("");

  useEffect(() => {
    setStatusText(t("step1"));

    const ctx = gsap.context(() => {
      // ── Idle wheel bobbing (whole rider container bobs) ──
      gsap.to(riderRef.current, {
        y: "+=1",
        duration: 0.08,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // ── Master scrubbed timeline ──
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top center",
          end: "+=200%",
          scrub: 1.5,
          onUpdate: (self) => {
            const p = self.progress;
            setDistance((p * 4.2).toFixed(1));
            setSpeed(p > 0.05 ? Math.round(24 + p * 38) : 0);
            if (p < 0.33) setStatusText(t("step1"));
            else if (p < 0.70) setStatusText(t("step2"));
            else setStatusText(t("step3"));
          },
        },
      });

      // ── Rider traverses full arena width ──
      // riderRef is the entire moving pod (image + glow + trail + shadow)
      tl.fromTo(riderRef.current,
        { left: "-20%" },
        { left: "78%", ease: "power1.inOut" },
        0
      );

      // ── No rotation — mascot stays upright ──

      // ── Speed lines fly past ──
      sl.forEach((ref, i) => {
        tl.fromTo(ref.current,
          { x: "120%", opacity: 0 },
          { x: "-30%", opacity: 0.45, ease: "none" },
          i * 0.07
        );
      });

      // ── Skyline parallax ──
      tl.fromTo(skylineRef.current, { x: 0 }, { x: "-40%", ease: "none" }, 0);

      // ── Clouds ──
      tl.fromTo(cloud1Ref.current, { x: 0 }, { x: "-120px", ease: "none" }, 0);
      tl.fromTo(cloud2Ref.current, { x: 0 }, { x: "-180px", ease: "none" }, 0);

      // ── Milestone glows ──
      tl.fromTo(milestone1Ref.current,
        { scale: 0.88, opacity: 0.4 },
        { scale: 1.12, opacity: 1, boxShadow: `0 0 20px ${ACCENT}99` },
        0.08
      );
      tl.fromTo(milestone2Ref.current,
        { scale: 0.88, opacity: 0.4 },
        { scale: 1.12, opacity: 1, boxShadow: "0 0 20px rgba(59,130,246,0.6)" },
        0.44
      );
      tl.fromTo(milestone3Ref.current,
        { scale: 0.88, opacity: 0.4 },
        { scale: 1.12, opacity: 1, boxShadow: `0 0 20px ${ACCENT}99` },
        0.82
      );

    }, triggerRef);

    return () => ctx.revert();
  }, [t]);

  return (
    <div
      ref={triggerRef}
      className="w-full py-20 flex flex-col items-center select-none relative overflow-hidden"
    >
      {/* ── Title ── */}
      <div className="w-full mb-8 px-1 z-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-2 rounded-sm" style={{ background: "#82C341" }} />
          <span className="text-[11px] font-black uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
            DurianX Logistics
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black mb-3 tracking-tight leading-tight text-neutral-900 dark:text-white">
          {t("deliveryTitle")}
        </h2>
        <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-400 max-w-xl font-light leading-relaxed">
          {t("deliveryDesc")}
        </p>
      </div>



      {/* ── Arena ── */}
      <div
        ref={arenaRef}
        className="w-full h-[420px] md:h-[520px] relative overflow-hidden"
      >
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:36px_36px] opacity-60 pointer-events-none" />
        <div className="absolute inset-0   pointer-events-none" />

        {/* Clouds */}
        <div ref={cloud1Ref} className="absolute top-10 left-[12%] w-36 h-10 rounded-full bg-white/50 dark:bg-white/5 blur-sm opacity-70 z-[1] pointer-events-none" />
        <div ref={cloud2Ref} className="absolute top-20 left-[60%] w-52 h-14 rounded-full bg-white/40 dark:bg-white/5 blur-md opacity-50 z-[1] pointer-events-none" />

        {/* Skyline */}
        <div
          ref={skylineRef}
          className="absolute bottom-[88px] left-0 h-52 z-[2] pointer-events-none opacity-20 dark:opacity-15"
          style={{ width: "220%" }}
        >
          <CambodiaSkyline className="w-1/2 h-full inline-block text-neutral-400 dark:text-neutral-600" />
          <CambodiaSkyline className="w-1/2 h-full inline-block text-neutral-400 dark:text-neutral-600" />
        </div>

        {/* Speed lines */}
        {sl.map((ref, i) => (
          <div
            key={i}
            ref={ref}
            className="absolute h-px z-[3] pointer-events-none"
            style={{
              top: `${16 + i * 7}%`,
              right: `${8 + (i % 4) * 10}%`,
              width: `${55 + (i % 3) * 35}px`,
              background: i % 2 === 0
                ? `linear-gradient(to right, transparent, ${ACCENT}55, transparent)`
                : "linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent)",
            }}
          />
        ))}

        {/* Road */}
        <div className="absolute bottom-[60px] left-0 right-0 h-[48px] bg-neutral-200 dark:bg-neutral-900 z-[4] border-y border-neutral-300 dark:border-neutral-800">
          <div className="absolute inset-y-0 left-0 right-0 flex items-center px-4 gap-3">
            {Array.from({ length: 32 }).map((_, i) => (
              <div key={i} className="flex-1 h-[2px] rounded-full bg-neutral-400/40 dark:bg-neutral-700/60" />
            ))}
          </div>
        </div>

        {/*
          ── RIDER POD ──
          This single div moves left→right via GSAP.
          Glow, trail, shadow are children → always perfectly aligned.

          Layout (all absolute inside this 240×240 box):
            • Image fills the whole box (scaleX-1 = faces right)
            • Glow cone: front-right of the bike (after flip, right side)
            • Trail:     behind the bike (left side after flip)
            • Shadow:    below the wheels, centered
        */}
        <div
          ref={riderRef}
          className="absolute z-[6] pointer-events-none select-none"
          style={{
            bottom: "76px",
            width: "280px",
            height: "280px",
          }}
        >
          {/* ── Headlight glow cone ──
              Mascot faces RIGHT (no scaleX flip).
              Scooter front/headlight is at roughly right-65%, vertically ~68% from top.
              Cone fans out to the right.
          */}
          <div
            className="absolute pointer-events-none z-[2]"
            style={{
              left: "calc(63% + 30px)",
              top: "44%",
              width: "260px",
              height: "70px",
              transform: "translateY(-50%)",
              background: `linear-gradient(to right, ${ACCENT}dd 0%, ${ACCENT}66 35%, ${ACCENT}22 65%, transparent 100%)`,
              clipPath: "polygon(0 37%, 100% 0%, 100% 100%, 0 63%)",
              filter: "blur(8px)",
            }}
          />

          {/* ── Motion trail (behind bike = LEFT side, since mascot faces right) ── */}
          <div
            className="absolute pointer-events-none z-[1] flex flex-row-reverse gap-2 items-center"
            style={{
              right: "88%",
              top: "68%",
              transform: "translateY(-50%)",
            }}
          >
            <div className="w-2 h-2 rounded-full bg-primary-500/50 blur-[2px] animate-pulse" />
            <div className="w-5 h-5 rounded-full bg-primary-400/50 blur-[4px] animate-ping" style={{ animationDuration: "0.7s" }} />
            <div className="w-8 h-8 rounded-full bg-primary-300/30 blur-[7px]" />
          </div>

          {/* ── Ground shadow ── */}
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: "-4px",
              left: "5%",
              width: "90%",
              height: "14px",
              background: "radial-gradient(ellipse at center, rgba(0,0,0,0.25) 0%, transparent 75%)",
              borderRadius: "50%",
            }}
          />

          {/* ── Rider image ── */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Mascot 2.png"
            alt="DurianX Mascot Rider"
            className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.22)] relative z-[3]"
            draggable={false}
          />
        </div>

        {/* ── Milestones — flat boxes ── */}
        <div className="absolute bottom-0 left-0 right-0 z-[8] flex border-t border-neutral-200 dark:border-neutral-800">
          {[
            { ref: milestone1Ref, num: "01", label: t("step1"), sub: "Phnom Penh", color: "#82C341" },
            { ref: milestone2Ref, num: "02", label: t("step2"), sub: "DurianX SaaS", color: "#3b82f6" },
            { ref: milestone3Ref, num: "03", label: t("step3"), sub: "Fast Delivery", color: "#82C341" },
          ].map((m, i) => (
            <div
              key={i}
              ref={m.ref}
              className="flex-1 flex items-center gap-3 px-4 py-3 bg-white dark:bg-neutral-950 border-r border-neutral-200 dark:border-neutral-800 last:border-r-0"
              style={{ borderTop: `2px solid ${m.color}` }}
            >
              {/* Step number */}
              <span
                className="text-lg md:text-2xl font-black leading-none flex-shrink-0"
                style={{ color: m.color }}
              >
                {m.num}
              </span>

              {/* Divider */}
              <div className="w-px h-8 bg-neutral-200 dark:bg-neutral-800 flex-shrink-0" />

              {/* Text */}
              <div className="flex flex-col min-w-0">
                <span className="text-[9px] font-black uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
                  {m.sub}
                </span>
                <span className="text-[11px] md:text-xs font-bold text-neutral-800 dark:text-neutral-200 leading-tight line-clamp-2 mt-0.5">
                  {m.label}
                </span>
              </div>

              {/* Pulse dot */}
              <div className="ml-auto flex-shrink-0 relative">
                <div className="absolute inset-0 w-2 h-2 rounded-full animate-ping opacity-40" style={{ background: m.color }} />
                <div className="w-2 h-2 rounded-full" style={{ background: m.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
