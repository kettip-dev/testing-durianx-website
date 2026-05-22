"use client";
import React, { useRef, useEffect } from "react";
import Card from "./component/Card";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  const t = useTranslations("Service");

  const titleRef = useRef(null);
  const descRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ── split title into word spans ── */
      const titleEl = titleRef.current;
      const raw = titleEl.innerText;
      titleEl.innerHTML = raw
        .split(" ")
        .map(
          (word) =>
            `<span class="inline-block overflow-hidden"><span class="word-inner inline-block">${word}</span></span>`
        )
        .join(" ");

      const wordInners = titleEl.querySelectorAll(".word-inner");

      /* ── word reveal: clip-path + y ── */
      gsap.fromTo(
        wordInners,
        { y: "110%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 0.75,
          ease: "power3.out",
          stagger: 0.055,
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      /* ── description fade + slide ── */
      gsap.fromTo(
        descRef.current,
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          delay: 0.35,
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="h-auto max-w-[1500px] mx-auto px-10 xl:px-20 pb-20">
      <div ref={wrapperRef} className="flex justify-center items-center flex-col">
        <h1
          ref={titleRef}
          className="text-3xl md:text-5xl py-5 text-center dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f] bg-text bg-clip-text md:w-[50%] text-transparent font-bold leading-snug"
        >
          {t("title")}
        </h1>
        <p
          ref={descRef}
          className="text-base md:text-2xl text-neutral-500 dark:text-neutral-300"
        >
          {t("description")}
        </p>
      </div>
      <Card />
      <div className="w-full md:flex-row flex-col items-center flex justify-center gap-3">
        <Link href="/services" className="w-full rounded-full">
          {/* <Button
            title={t("viewAll")}
            className="hover:!bg-neutral-950 hover:dark:!bg-neutral-100 transition-colors !rounded-full duration-300 overflow-hidden !bg-transparent outline outline-1 dark:outline-white outline-neutral-950 dark:!text-white !text-black w-full py-5"
          /> */}
        </Link>
      </div>
    </div>
  );
};

export default Service;
