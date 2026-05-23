"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const t = useTranslations("Partner");
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const formRef = useRef(null);
  const orbRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    type: "restaurant",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background orb parallax
      gsap.to(orbRef.current, {
        y: -40,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.fromTo(
        contentRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        formRef.current,
        { y: 60, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Animate submit
    gsap.to(formRef.current, {
      scale: 0.98,
      duration: 0.15,
      yoyo: true,
      repeat: 1,
      ease: "power1.inOut",
      onComplete: () => setSubmitted(true),
    });
  };

  return (
    <section ref={sectionRef} className="w-full py-20" id="partner-form">
      <div className="relative rounded-[2.5rem] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-[#82C341]/5 to-neutral-100 dark:from-[#0d1a04] dark:via-[#132706]/50 dark:to-black pointer-events-none">
          <div
            ref={orbRef}
            className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#82C341]/10 dark:bg-[#82C341]/15 blur-[130px]"
          />
          <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-[#82C341]/8 dark:bg-[#82C341]/12 blur-[100px]" />
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07]"
            style={{
              backgroundImage: `linear-gradient(rgba(130,195,65,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(130,195,65,0.5) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 px-8 md:px-16 py-16">
          {/* Left: Content */}
          <div ref={contentRef} className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 bg-[#82C341]/15 dark:bg-[#82C341]/20 border border-[#82C341]/30 dark:border-[#82C341]/40 text-[#4e8816] dark:text-[#a8e06b] text-xs font-bold px-4 py-1.5 rounded-full mb-6 w-fit tracking-widest uppercase">
              <span className="w-1.5 h-1.5 bg-[#82C341] rounded-full animate-pulse" />
              {t("ctaBadge")}
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-neutral-900 dark:text-white leading-tight mb-6">
              {t("ctaHeading")}
              <span className="block text-[#82C341] mt-1">{t("ctaHeading2")}</span>
            </h2>

            <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8 max-w-md">
              {t("ctaDesc")}
            </p>

            {/* Perks */}
            <ul className="space-y-3">
              {["ctaPerk1", "ctaPerk2", "ctaPerk3"].map((key, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-neutral-700 dark:text-neutral-300 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#82C341]/20 dark:bg-[#82C341]/25 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-[#82C341]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {t(key)}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Form */}
          <div ref={formRef}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center gap-4 p-8 rounded-[2rem] bg-white dark:bg-neutral-950 border border-[#82C341]/30 shadow-xl">
                <div className="w-20 h-20 rounded-full bg-[#82C341]/15 flex items-center justify-center text-4xl">
                  🎉
                </div>
                <h3 className="text-2xl font-black text-neutral-900 dark:text-white">
                  {t("formSuccessTitle")}
                </h3>
                <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xs">
                  {t("formSuccessDesc")}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 p-8 rounded-[2rem] bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 shadow-xl"
              >
                <h3 className="text-xl font-black text-neutral-900 dark:text-white mb-1">
                  {t("formTitle")}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">
                      {t("formName")}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t("formNamePlaceholder")}
                      className="px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 focus:border-[#82C341] dark:focus:border-[#82C341] focus:outline-none focus:ring-2 focus:ring-[#82C341]/20 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 transition-all duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">
                      {t("formBusiness")}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      placeholder={t("formBusinessPlaceholder")}
                      className="px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 focus:border-[#82C341] dark:focus:border-[#82C341] focus:outline-none focus:ring-2 focus:ring-[#82C341]/20 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">
                    {t("formPhone")}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+855 XX XXX XXXX"
                    className="px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 focus:border-[#82C341] dark:focus:border-[#82C341] focus:outline-none focus:ring-2 focus:ring-[#82C341]/20 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 transition-all duration-200"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">
                    {t("formType")}
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 focus:border-[#82C341] dark:focus:border-[#82C341] focus:outline-none focus:ring-2 focus:ring-[#82C341]/20 text-sm text-neutral-900 dark:text-white transition-all duration-200 appearance-none"
                  >
                    <option value="restaurant">{t("formTypeFood")}</option>
                    <option value="grocery">{t("formTypeGrocery")}</option>
                    <option value="logistics">{t("formTypeLogistics")}</option>
                    <option value="enterprise">{t("formTypeEnterprise")}</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">
                    {t("formMessage")}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t("formMessagePlaceholder")}
                    className="px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 focus:border-[#82C341] dark:focus:border-[#82C341] focus:outline-none focus:ring-2 focus:ring-[#82C341]/20 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#82C341] hover:bg-[#6aaa2c] text-white font-bold py-4 rounded-xl text-base transition-all duration-300 hover:shadow-[0_0_40px_rgba(130,195,65,0.4)] hover:scale-[1.02] mt-1"
                >
                  {t("formSubmit")}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <p className="text-center text-xs text-neutral-400 dark:text-neutral-600 font-medium">
                  {t("formDisclaimer")}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
