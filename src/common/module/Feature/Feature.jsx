"use client";
import Card from "@/common/component/element/Card";
import React, { useRef, useEffect } from "react";
import { ServiceItem } from "@/common/constant/Service";
import { useTranslations } from "next-intl";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Feature() {
  const t = useTranslations("Feature");

  const translatedServiceItems = [
    { ...ServiceItem[0], title: t("items.food.title"), desc: t("items.food.desc"), lottiePath: "/lottie/Food.json" },
    { ...ServiceItem[2], title: t("items.express.title"), desc: t("items.express.desc"), lottiePath: "/lottie/DeliveryExpress.json" },
  ];

  const sectionRef  = useRef(null);
  const titleRef    = useRef(null);
  const descRef     = useRef(null);
  const cardsRef    = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      /* title — y + opacity, no gradient manipulation */
      tl.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }
      );



      /* description */
      tl.fromTo(
        descRef.current,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" },
        "-=0.45"
      );

      /* cards stagger */
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".feature-card-item");
        if (cards.length) {
          tl.fromTo(
            cards,
            { y: 40, opacity: 0, scale: 0.96 },
            { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "power3.out", stagger: 0.12 },
            "-=0.3"
          );
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="h-auto max-w-[1500px] mx-auto px-10 xl:px-20 pb-20"
    >
      <div className="flex justify-center items-center flex-col">

        {/* Title — plain class-based color, GSAP only moves it */}
        <h1
          ref={titleRef}
          className="text-3xl md:text-5xl py-5 text-center bg-clip-text dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f] bg-text md:w-[50%] text-transparent font-bold opacity-0"
        >
          {t("title")}
        </h1>



        {/* Description */}
        <p
          ref={descRef}
          className="text-base md:text-2xl text-center text-neutral-500 dark:text-neutral-300 opacity-0"
        >
          {t("description")}
        </p>
      </div>

      {/* Cards wrapper — add ref so stagger works */}
      <div ref={cardsRef}>
        <Card Content={translatedServiceItems} />
      </div>
    </div>
  );
}
