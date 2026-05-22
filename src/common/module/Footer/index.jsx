"use client";
import React, { useRef, useEffect } from "react";
import { FaMedium, FaFaceGrin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const t = useTranslations("Footer");

  const footerRef   = useRef(null);
  const gridRef     = useRef(null);
  const dividerRef  = useRef(null);
  const bottomRef   = useRef(null);

  const footerItems = [
    {
      title: t("explore.title"),
      child_1: { title: t("explore.about"),     href: "/about" },
      child_2: { title: t("explore.solutions"),  href: "/solution" },
      child_3: { title: t("explore.blog"),       href: "/blog" },
    },
    {
      title: t("expertise.title"),
      child_1: { title: t("expertise.cloud"),    href: "/services" },
      child_2: { title: t("expertise.web"),      href: "/services" },
      child_3: { title: t("expertise.data"),     href: "/services" },
    },
    {
      title: t("services.title"),
      child_1: { title: t("services.cyber"),     href: "/services" },
      child_2: { title: t("services.ai"),        href: "/services" },
      child_3: { title: t("services.ux"),        href: "/services" },
    },
    {
      title: t("info.title"),
      child_1: { title: t("info.faq"),           href: "/faq" },
      child_2: { title: t("info.docs"),          href: "/faq" },
      child_3: { title: t("info.contact"),       href: "/contact" },
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* divider line draws in */
      gsap.fromTo(
        dividerRef.current,
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            once: true,
          },
        }
      );

      /* grid columns stagger up */
      const cols = gridRef.current?.querySelectorAll("[data-col]");
      if (cols?.length) {
        gsap.fromTo(
          cols,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 90%",
              once: true,
            },
          }
        );
      }

      /* bottom bar fades in */
      gsap.fromTo(
        bottomRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bottomRef.current,
            start: "top 95%",
            once: true,
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={footerRef} className="w-full flex flex-col justify-center items-center">

      {/* Divider */}
      <div
        ref={dividerRef}
        className="w-full max-w-[1500px] mx-auto px-5"
        style={{ opacity: 0 }}
      >
        <div
          style={{
            height: 1,
            background: "linear-gradient(90deg, transparent, #e5e7eb, transparent)",
            transformOrigin: "center",
            transform: "scaleX(0)",
          }}
        />
      </div>

      {/* Grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-4 py-10 px-8 h-auto w-full max-w-[1500px] place-content-center md:px-5 place-items-start md:place-items-center"
      >
        {footerItems.map((item, index) => (
          <div
            key={index}
            data-col
            className="flex flex-col opacity-0"
          >
            <h2 className="text-xl font-bold py-3 px-2 md:px-2 text-neutral-900 dark:text-neutral-100">
              {item.title}
            </h2>

            {[item.child_1, item.child_2, item.child_3].map((child, ci) => (
              <div key={ci} className="md:px-2 md:py-1.5 px-2 py-[4px] flex">
                <Link
                  href={child.href}
                  className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-[#82C341] dark:hover:text-[#82C341] transition-colors duration-200"
                >
                  {child.title}
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        ref={bottomRef}
        className="flex justify-center py-10 items-center flex-col opacity-0 border-t border-neutral-100 dark:border-neutral-800 w-full"
      >
        {/* Social icons */}
        <div className="gap-6 flex py-4 justify-center items-center w-full">
          {[FaMedium, FaTwitter, FaFaceGrin].map((Icon, i) => (
            <button
              key={i}
              className="text-neutral-400 hover:text-[#82C341] transition-colors duration-200 hover:scale-110 transform"
            >
              <Icon size={22} />
            </button>
          ))}
        </div>

        <p className="text-sm text-neutral-400 dark:text-neutral-500">
          {t("rights", { name: "DurianX" })}
        </p>
      </div>
    </div>
  );
};

export default Footer;
