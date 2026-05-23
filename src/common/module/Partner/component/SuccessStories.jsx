"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { FaStar } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    nameKey: "story1Name",
    roleKey: "story1Role",
    quoteKey: "story1Quote",
    metricKey: "story1Metric",
    avatar: "🍜",
    color: "from-orange-400 to-amber-300",
    rating: 5,
  },
  {
    nameKey: "story2Name",
    roleKey: "story2Role",
    quoteKey: "story2Quote",
    metricKey: "story2Metric",
    avatar: "🛒",
    color: "from-blue-400 to-cyan-300",
    rating: 5,
  },
  {
    nameKey: "story3Name",
    roleKey: "story3Role",
    quoteKey: "story3Quote",
    metricKey: "story3Metric",
    avatar: "☕",
    color: "from-emerald-400 to-green-300",
    rating: 5,
  },
];

const SuccessStories = () => {
  const t = useTranslations("Partner");
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 85%" },
        }
      );

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 60, opacity: 0, rotateX: 10 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.8,
            delay: i * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 72%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animate quote change
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-20">
      {/* Header */}
      <div ref={headerRef} className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
          {t("storyBadge")}
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-neutral-900 dark:text-white mb-4">
          {t("storyHeading")}
        </h2>
        <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto">
          {t("storySub")}
        </p>
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((story, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className={`group relative flex flex-col p-8 rounded-[2rem] bg-white dark:bg-neutral-950 border transition-all duration-500 ${
              activeIdx === i
                ? "border-[#82C341]/40 dark:border-[#82C341]/30 shadow-2xl shadow-[#82C341]/10 scale-[1.02]"
                : "border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700"
            }`}
          >
            {/* Avatar + stars */}
            <div className="flex items-center justify-between mb-6">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${story.color} flex items-center justify-center text-2xl shadow-md`}>
                {story.avatar}
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: story.rating }).map((_, j) => (
                  <FaStar key={j} className="text-amber-400 text-sm" />
                ))}
              </div>
            </div>

            {/* Quote */}
            <blockquote className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6 flex-1 italic">
              &ldquo;{t(story.quoteKey)}&rdquo;
            </blockquote>

            {/* Name + role */}
            <div className="pt-5 border-t border-neutral-100 dark:border-neutral-900">
              <div className="font-bold text-neutral-900 dark:text-white text-base">
                {t(story.nameKey)}
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                {t(story.roleKey)}
              </div>
            </div>

            {/* Metric badge */}
            <div className={`absolute top-4 right-4 bg-gradient-to-br ${story.color} text-white text-xs font-black px-3 py-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
              {t(story.metricKey)}
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            className={`rounded-full transition-all duration-300 ${
              activeIdx === i
                ? "w-6 h-2 bg-[#82C341]"
                : "w-2 h-2 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
