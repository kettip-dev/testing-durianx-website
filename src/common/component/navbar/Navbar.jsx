"use client";
import clsx from "clsx";
import { Link, usePathname, useRouter } from "@/navigation";
import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import DarkmodeSwitch from "../element/DarkmodeSwitch";
import Image from "../element/Image";

const Logos = dynamic(() => import('./Logo'), {
  ssr: false
})

import { useTranslations } from "next-intl";
import LanguageSwitcher from "../element/LanguageSwitcher";

const Navbar = () => {
  const router = useRouter();
  const t = useTranslations("Navbar");
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeTab, setActiveTab] = useState("about");
  const [scroll, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const navItems = [
    { src: "/", title: t("home") },
    { src: "/services", title: t("services"), tabId: "consumers" },
    { src: "/solution", title: t("solution"), tabId: "drivers" },
    { src: "/about", title: t("about"), tabId: "about" },
    { src: "/blog", title: t("blog") },
    { src: "/partner", title: t("partner") },
    { src: "/careers", title: t("careersNav") },
  ];

  const megaMenuData = useMemo(() => [
    {
      id: "about",
      label: t("aboutCompany"),
      links: [
        { title: t("companyStory.title"), desc: t("companyStory.desc"), src: "/about" },
        { title: t("newsroom.title"), desc: t("newsroom.desc"), src: "/blog" },
        { title: t("insideDurianX.title"), desc: t("insideDurianX.desc"), src: "/blog" },
        { title: t("careers.title"), desc: t("careers.desc"), src: "/careers" },
        { title: t("investors.title"), desc: t("investors.desc"), src: "/about" },
        { title: t("foundation.title"), desc: t("foundation.desc"), src: "/about" },
        { title: t("locations.title"), desc: t("locations.desc"), src: "/about" },
        { title: t("safety.title"), desc: t("safety.desc"), src: "/solution" },
        { title: t("impact.title"), desc: t("impact.desc"), src: "/about" },
      ]
    },
    {
      id: "consumers",
      label: t("consumers"),
      links: [
        { title: t("foodDelivery.title"), desc: t("foodDelivery.desc"), src: "/services#food" },
        { title: t("groceryDelivery.title"), desc: t("groceryDelivery.desc"), src: "/services#grocery" },
        { title: t("expressParcel.title"), desc: t("expressParcel.desc"), src: "/services#express" },
        { title: t("transportServices.title"), desc: t("transportServices.desc"), src: "/services#transport" },
        { title: t("superApp.title"), desc: t("superApp.desc"), src: "/services" },
      ]
    },
    {
      id: "drivers",
      label: t("drivers"),
      links: [
        { title: t("driveDeliver.title"), desc: t("driveDeliver.desc"), src: "/solution#partners" },
        { title: t("driverSupport.title"), desc: t("driverSupport.desc"), src: "/solution#support" },
        { title: t("driverBenefits.title"), desc: t("driverBenefits.desc"), src: "/solution#partners" },
      ]
    },
    {
      id: "merchants",
      label: t("merchants"),
      links: [
        { title: t("merchantPartner.title"), desc: t("merchantPartner.desc"), src: "/partner" },
        { title: t("foodBusiness.title"), desc: t("foodBusiness.desc"), src: "/services#food" },
        { title: t("advertising.title"), desc: t("advertising.desc"), src: "/solution#tracking" },
      ]
    },
    {
      id: "enterprises",
      label: t("enterprises"),
      links: [
        { title: t("giftCards.title"), desc: t("giftCards.desc"), src: "/solution" },
        { title: t("corporateCommute.title"), desc: t("corporateCommute.desc"), src: "/services#transport" },
        { title: t("mapApi.title"), desc: t("mapApi.desc"), src: "/solution#tracking" },
      ]
    }
  ], [t]);

  const toggleDropdown = (dropdownName, defaultTab) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
      if (defaultTab) {
        setActiveTab(defaultTab);
      }
    }
  };

  const closeAll = () => {
    setActiveDropdown(null);
  };

  const isLinkActive = (item) => {
    if (activeDropdown && activeDropdown !== "mobile") {
      if (item.src === "/services") {
        return activeTab === "consumers" || activeTab === "enterprises";
      }
      if (item.src === "/solution") {
        return activeTab === "drivers" || activeTab === "merchants";
      }
      if (item.src === "/about") {
        return activeTab === "about";
      }
      return false;
    }
    return pathname === item.src;
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scrolled past 10px
      setScrolled(currentScrollY > 10);

      // Hide/Show logic
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
        setActiveDropdown(null);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    const handleOutsideClick = (e) => {
      if (!e.target.closest(".navbar-container-pill")) {
        closeAll();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const currentTabData = useMemo(() => {
    return megaMenuData.find((tab) => tab.id === activeTab) || megaMenuData[0];
  }, [megaMenuData, activeTab]);

  return (
    <>
      {/* Backdrop overlay for click-away behavior */}
      {activeDropdown && (
        <div
          className="fixed inset-0 bg-black/40 dark:bg-black/60 z-[80] backdrop-blur-xs transition-opacity duration-300"
          onClick={closeAll}
        />
      )}

      <motion.div
        animate={{
          y: isVisible ? 0 : -120,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={clsx(
          "navbar-container-pill w-full transition-all duration-300 mx-auto py-4 px-5 lg:px-10 fixed top-0 left-0 right-0 z-[99]",
          scroll
            ? "backdrop-blur-md bg-white/95 dark:bg-[#000000d0] shadow-md border-b-[1px] border-neutral-300 dark:border-neutral-800 mt-0 max-w-full rounded-none"
            : "bg-white/90 dark:bg-black/90 border-b-[1px] border-neutral-200 dark:border-neutral-800 mt-4 max-w-[1500px] rounded-full 2xl:rounded-3xl"
        )}
      >
        <div className="flex flex-row justify-between items-center w-full relative">
          {/* Left Side: Logo */}
          <div className="flex z-[999] items-start justify-start">
            <Link
              href="/"
              className="group relative w-auto flex justify-start items-start"
              onClick={closeAll}
            >
              <Logos />
            </Link>
          </div>

          {/* Center: Navigation Links (Desktop) */}
          <div className="lg:flex hidden justify-center gap-10 items-center w-full">
            {navItems.map((item, index) => {
              const isTrigger = !!item.tabId;
              const isOpen = isTrigger && (
                (item.src === "/services" && activeDropdown === "services") ||
                (item.src === "/solution" && activeDropdown === "solution") ||
                (item.src === "/about" && activeDropdown === "about")
              );
              const isActive = isLinkActive(item);

              return (
                <div key={index} className="relative group flex items-center justify-center">
                  {isTrigger ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDropdown(
                          item.src === "/services" ? "services" : item.src === "/solution" ? "solution" : "about",
                          item.tabId
                        );
                      }}
                      className="flex items-center gap-1 text-base font-semibold text-neutral-800 dark:text-neutral-200 py-1 hover:text-[#82C341] dark:hover:text-[#82C341] transition-colors duration-200 outline-none focus:outline-none"
                    >
                      <span>{item.title}</span>
                      <svg
                        className={clsx(
                          "w-4 h-4 transition-transform duration-200 opacity-70",
                          isOpen && "rotate-180"
                        )}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href={item.src}
                      className="flex justify-center gap-5 items-center relative py-1 text-base font-semibold text-neutral-800 dark:text-neutral-200 hover:text-[#82C341] dark:hover:text-[#82C341] transition-colors duration-200"
                      onClick={closeAll}
                    >
                      <h1 className="line-clamp-1">{item.title}</h1>
                    </Link>
                  )}

                  {/* Underline Indicator */}
                  <div
                    className={clsx(
                      isActive
                        ? "absolute top-[32px] h-[2px] flex items-center w-[50%] bg-[#82C341] transition-transform duration-300"
                        : "absolute top-[32px] h-[2px] w-[0%] bg-[#82C341] transition-all duration-300 group-hover:w-[50%]"
                    )}
                  />
                </div>
              );
            })}
          </div>

          {/* Right Side: Switchers (Desktop) */}
          <div className="lg:flex hidden w-[35%] items-center justify-end gap-4">
            {/* Search icon */}
            <button
              onClick={() => { closeAll(); router.push("/search"); }}
              aria-label="Search"
              className="p-2 rounded-full text-neutral-600 dark:text-neutral-300 hover:text-[#82C341] dark:hover:text-[#82C341] hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
            </button>
            <div className="px-2">
              <LanguageSwitcher />
            </div>
            <div className="px-2">
              <DarkmodeSwitch />
            </div>
          </div>

          {/* Right Side: Switchers & Hamburger Toggle (Mobile) */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Search icon mobile */}
            <button
              onClick={() => { closeAll(); router.push("/search"); }}
              aria-label="Search"
              className="p-2 rounded-full text-neutral-600 dark:text-neutral-300 hover:text-[#82C341] transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
            </button>
            <div className="px-1">
              <LanguageSwitcher />
            </div>
            <div className="px-1">
              <DarkmodeSwitch />
            </div>
            {/* Hamburger Button */}
            <button
              onClick={() => toggleDropdown("mobile", activeTab)}
              className="flex flex-col items-center justify-center p-2 text-neutral-800 dark:text-neutral-200 hover:text-[#82C341] dark:hover:text-[#82C341] transition-colors duration-200 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between mb-1 relative">
                <span className={clsx("w-full h-[2.5px] bg-current rounded-full transition-all duration-300 origin-left", activeDropdown === "mobile" && "rotate-[42deg] translate-y-[2.5px]")} />
                <span className={clsx("w-full h-[2.5px] bg-current rounded-full transition-all duration-300", activeDropdown === "mobile" && "opacity-0")} />
                <span className={clsx("w-full h-[2.5px] bg-current rounded-full transition-all duration-300 origin-left", activeDropdown === "mobile" && "-rotate-[42deg] -translate-y-[2.5px]")} />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider leading-none">{t("menu")}</span>
            </button>
          </div>
        </div>

        {/* Mega Menu Dropdown (Desktop Layout) */}
        {activeDropdown && activeDropdown !== "mobile" && (
          <div
            className="absolute left-0 right-0 top-full mt-3 w-full bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 shadow-2xl z-[95] rounded-3xl overflow-hidden flex flex-row h-[520px] transition-all duration-300 animate-in fade-in slide-in-from-top-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Sidebar Tabs */}
            <div className="w-[25%] bg-white dark:bg-neutral-950 border-r border-neutral-200/80 dark:border-neutral-800/80 py-8 flex flex-col gap-1 overflow-y-auto">
              {megaMenuData.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={clsx(
                      "w-full text-left px-8 py-3.5 text-base transition-all duration-200 border-l-4 focus:outline-none font-semibold",
                      isActive
                        ? "bg-neutral-50/50 dark:bg-neutral-900/30 border-[#82C341] text-[#82C341] font-bold"
                        : "border-transparent text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-900/20 hover:text-neutral-900 dark:hover:text-neutral-200"
                    )}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Middle Content: Grid of links */}
            <div className="w-[75%] p-10 overflow-y-auto bg-neutral-50/30 dark:bg-[#0c0c0cd0]">
              <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-6">
                {currentTabData?.links.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.src}
                    onClick={closeAll}
                    className="group block p-4 rounded-2xl hover:bg-white dark:hover:bg-neutral-900/60 shadow-xs hover:shadow-md transition-all duration-200"
                  >
                    <h4 className="font-bold text-neutral-800 dark:text-neutral-200 group-hover:text-[#82C341] dark:group-hover:text-[#82C341] text-[15px] mb-1.5 transition-colors duration-200">
                      {link.title}
                    </h4>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-medium">
                      {link.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Accordion Layout Dropdown */}
        {activeDropdown === "mobile" && (
          <div
            className="absolute left-0 right-0 top-full mt-3 w-full bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 shadow-2xl z-[95] overflow-y-auto max-h-[calc(100vh-100px)] flex flex-col transition-all duration-300 animate-in fade-in slide-in-from-top-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col">
              {megaMenuData.map((tab) => {
                const isTabActive = activeTab === tab.id;
                return (
                  <div key={tab.id} className="border-b border-neutral-100 dark:border-neutral-900">
                    <button
                      onClick={() => setActiveTab(isTabActive ? null : tab.id)}
                      className="w-full flex items-center justify-between px-6 py-4 text-base font-bold text-neutral-800 dark:text-neutral-200 focus:outline-none"
                    >
                      <span>{tab.label}</span>
                      <svg
                        className={clsx(
                          "w-4 h-4 transition-transform duration-200 opacity-60",
                          isTabActive && "rotate-180"
                        )}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {isTabActive && (
                      <div className="bg-neutral-50/50 dark:bg-neutral-900/10 px-6 py-2 flex flex-col gap-2">
                        {tab.links.map((link, idx) => (
                          <Link
                            key={idx}
                            href={link.src}
                            onClick={closeAll}
                            className="block py-3 border-b border-neutral-100/50 dark:border-neutral-900/50 last:border-b-0"
                          >
                            <h4 className="font-bold text-neutral-800 dark:text-neutral-200 text-sm mb-1">
                              {link.title}
                            </h4>
                            <p className="text-xs text-neutral-500 dark:text-neutral-400">
                              {link.desc}
                            </p>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default Navbar;
