"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const CareerCTA = () => {
  const t = useTranslations("Careers");
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const orbRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(orbRef.current, {
        y: -50,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.fromTo(contentRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );

      gsap.fromTo(formRef.current,
        { y: 60, opacity: 0, scale: 0.97 },
        { y: 0, opacity: 1, scale: 1, duration: 1, delay: 0.15, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 78%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const testimonials = [
    { name: "Dara S.", role: t("ctaTestRole1"), quote: t("ctaTestQuote1"), emoji: "👨‍💻" },
    { name: "Sreyleak M.", role: t("ctaTestRole2"), quote: t("ctaTestQuote2"), emoji: "👩‍🎨" },
    { name: "Virak K.", role: t("ctaTestRole3"), quote: t("ctaTestQuote3"), emoji: "🧑‍📊" },
  ];

  return (
    <section ref={sectionRef} className="w-full py-20">
      <div className="relative rounded-[2.5rem] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-[#82C341]/5 to-neutral-100 dark:from-[#0d1a04] dark:via-[#132706]/40 dark:to-black pointer-events-none">
          <div ref={orbRef} className="absolute -top-36 -left-36 w-[600px] h-[600px] rounded-full bg-[#82C341]/10 dark:bg-[#82C341]/15 blur-[140px]" />
          <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] rounded-full bg-[#82C341]/8 dark:bg-[#82C341]/12 blur-[110px]" />
          <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07]"
            style={{ backgroundImage: `radial-gradient(circle, rgba(130,195,65,0.5) 1px, transparent 1px)`, backgroundSize: "32px 32px" }}
          />
        </div>

        <div className="relative z-10 px-8 md:px-16 py-16 flex flex-col gap-16">
          {/* Top: Heading + main CTA */}
          <div ref={contentRef} className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 bg-[#82C341]/15 dark:bg-[#82C341]/20 border border-[#82C341]/30 dark:border-[#82C341]/40 text-[#4e8816] dark:text-[#a8e06b] text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
                <span className="w-1.5 h-1.5 bg-[#82C341] rounded-full animate-pulse" />
                {t("ctaBadge")}
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-neutral-900 dark:text-white leading-tight mb-4">
                {t("ctaHeading")}
                <span className="block text-[#82C341]">{t("ctaHeading2")}</span>
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg leading-relaxed">
                {t("ctaDesc")}
              </p>
            </div>

            {/* Quick action cards */}
            <div className="flex flex-col gap-4 w-full lg:w-auto lg:min-w-[300px]">
              <a
                href="#open-roles"
                className="group flex items-center justify-between gap-4 p-5 rounded-2xl bg-[#82C341] hover:bg-[#6aaa2c] text-white transition-all duration-300 hover:shadow-[0_0_40px_rgba(130,195,65,0.4)] hover:scale-[1.02]"
              >
                <div>
                  <div className="font-black text-base">{t("ctaCard1Title")}</div>
                  <div className="text-sm opacity-80">{t("ctaCard1Sub")}</div>
                </div>
                <svg className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              <a
                href="mailto:careers@durianx.com"
                className="group flex items-center justify-between gap-4 p-5 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:border-[#82C341]/40 dark:hover:border-[#82C341]/40 hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="font-black text-base text-neutral-900 dark:text-white">{t("ctaCard2Title")}</div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">careers@durianx.com</div>
                </div>
                <svg className="w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom: Employee testimonials */}
          <div ref={formRef}>
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-600 mb-5">{t("ctaVoicesLabel")}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#82C341] to-[#4e8816] flex items-center justify-center text-xl border-2 border-white dark:border-neutral-900 shadow-md">
                      {item.emoji}
                    </div>
                    <div>
                      <div className="font-bold text-neutral-900 dark:text-white text-sm">{item.name}</div>
                      <div className="text-xs text-neutral-500 dark:text-neutral-400">{item.role}</div>
                    </div>
                  </div>
                  <blockquote className="text-sm text-neutral-700 dark:text-neutral-300 italic leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map((s) => (
                      <svg key={s} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerCTA;
