"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { FaMapPin, FaClock, FaArrowUpRightFromSquare } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const departments = ["All", "Engineering", "Product", "Operations", "Marketing", "Design", "People & Culture"];

const roles = [
  { title: "Senior Software Engineer – Backend", dept: "Engineering", type: "Full-time", location: "Phnom Penh", badge: "🔥 Hot" },
  { title: "React / Next.js Frontend Developer", dept: "Engineering", type: "Full-time", location: "Phnom Penh / Remote" },
  { title: "Product Manager – Consumer App", dept: "Product", type: "Full-time", location: "Phnom Penh" },
  { title: "UI/UX Designer", dept: "Design", type: "Full-time", location: "Phnom Penh", badge: "New" },
  { title: "Operations Associate – Logistics", dept: "Operations", type: "Full-time", location: "Phnom Penh" },
  { title: "Digital Marketing Specialist", dept: "Marketing", type: "Full-time", location: "Phnom Penh / Remote" },
  { title: "Data Analyst", dept: "Engineering", type: "Full-time", location: "Remote", badge: "Remote" },
  { title: "HR Business Partner", dept: "People & Culture", type: "Full-time", location: "Phnom Penh" },
  { title: "Customer Success Manager", dept: "Operations", type: "Full-time", location: "Phnom Penh" },
];

const deptColors = {
  Engineering: "bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300",
  Product: "bg-violet-100 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300",
  Operations: "bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300",
  Marketing: "bg-pink-100 dark:bg-pink-950/50 text-pink-700 dark:text-pink-300",
  Design: "bg-teal-100 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300",
  "People & Culture": "bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300",
};

const OpenRoles = () => {
  const t = useTranslations("Careers");
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const [activeDept, setActiveDept] = useState("All");

  const filtered = activeDept === "All" ? roles : roles.filter((r) => r.dept === activeDept);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: headerRef.current, start: "top 85%" } }
      );

      gsap.fromTo(".role-card",
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 72%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Re-animate when filter changes
  useEffect(() => {
    gsap.fromTo(".role-card",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.06, ease: "power2.out" }
    );
  }, [activeDept]);

  return (
    <section ref={sectionRef} className="w-full py-20" id="open-roles">
      <div ref={headerRef} className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-[#82C341]/10 dark:bg-[#82C341]/15 border border-[#82C341]/30 dark:border-[#82C341]/40 text-[#4e8816] dark:text-[#a8e06b] text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
          <span className="w-1.5 h-1.5 bg-[#82C341] rounded-full animate-pulse" />
          {t("rolesBadge")}
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-neutral-900 dark:text-white mb-4">
          {t("rolesHeading")}
        </h2>
        <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto">
          {t("rolesSub")}
        </p>
      </div>

      {/* Department filter tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {departments.map((dept) => (
          <button
            key={dept}
            onClick={() => setActiveDept(dept)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-250 border ${
              activeDept === dept
                ? "bg-neutral-900 dark:bg-white text-white dark:text-black border-neutral-900 dark:border-white shadow-md"
                : "bg-white dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400 border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600"
            }`}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Roles list */}
      <div className="flex flex-col gap-4">
        {filtered.map((role, i) => (
          <div
            key={i}
            className="role-card group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:border-[#82C341]/40 dark:hover:border-[#82C341]/40 hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col gap-2 flex-1">
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="font-bold text-neutral-900 dark:text-white text-lg group-hover:text-[#82C341] transition-colors duration-200">
                  {role.title}
                </h3>
                {role.badge && (
                  <span className={`text-[10px] font-black px-2.5 py-1 rounded-full tracking-wider uppercase ${
                    role.badge === "🔥 Hot"
                      ? "bg-orange-100 dark:bg-orange-950/50 text-orange-600 dark:text-orange-300"
                      : role.badge === "Remote"
                      ? "bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-300"
                      : "bg-[#82C341]/15 text-[#4e8816] dark:text-[#a8e06b]"
                  }`}>
                    {role.badge}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-4 flex-wrap">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${deptColors[role.dept] || "bg-neutral-100 text-neutral-600"}`}>
                  {role.dept}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                  <FaClock className="text-neutral-400 text-[11px]" />
                  {role.type}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                  <FaMapPin className="text-neutral-400 text-[11px]" />
                  {role.location}
                </span>
              </div>
            </div>

            {/* Apply button */}
            <a
              href="mailto:careers@durianx.com"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 hover:bg-[#82C341] dark:hover:bg-[#82C341] text-neutral-700 dark:text-neutral-300 hover:text-white dark:hover:text-white text-sm font-bold border border-neutral-200 dark:border-neutral-800 hover:border-[#82C341] transition-all duration-300 whitespace-nowrap group/btn"
            >
              {t("rolesApply")}
              <FaArrowUpRightFromSquare className="text-xs transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-20 text-neutral-400 dark:text-neutral-600">
          <div className="text-5xl mb-4">🔍</div>
          <p className="text-lg font-semibold">{t("rolesEmpty")}</p>
        </div>
      )}

      {/* General apply CTA */}
      <div className="mt-10 text-center">
        <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-3">{t("rolesCantFind")}</p>
        <a
          href="mailto:careers@durianx.com"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#82C341] hover:text-[#6aaa2c] underline underline-offset-4 transition-colors duration-200"
        >
          {t("rolesSpontaneous")}
          <FaArrowUpRightFromSquare className="text-xs" />
        </a>
      </div>
    </section>
  );
};

export default OpenRoles;
