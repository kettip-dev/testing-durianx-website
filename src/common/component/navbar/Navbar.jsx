"use client";
import clsx from "clsx";
import { Link, usePathname } from "@/navigation";
import NavMobile from "./NavMobile";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ButtonSpot } from "../element/ButtonSpot";
import DarkmodeSwitch from "../element/DarkmodeSwitch";

const Logos = dynamic(() => import('./Logo'), {
  ssr: false
})

import { useTranslations } from "next-intl";
import LanguageSwitcher from "../element/LanguageSwitcher";

const Navbar = () => {
  const t = useTranslations("Navbar");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scroll, setScrolled] = useState(false);

  const navItems = [
    { src: "/", title: t("home") },
    { src: "/services", title: t("services") },
    { src: "/solution", title: t("solution") },
    { src: "/faq", title: t("faq") },
    { src: "/about", title: t("about") },
    { src: "/blog", title: t("blog") },
  ];

  const handleOpen = () => {
    setOpen(!open);
  };

  const close = () => {
    setOpen(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 10);
    });
  }, []);

  return (
    <motion.div
      className={clsx(
        scroll ? "backdrop-blur-sm" : "",
        `w-full transition-all duration-300 mx-auto bg-[#ffffffd0] dark:bg-[#000000d0]  max-w-[1500px]  border-b-[1px] border-neutral-300 dark:border-neutral-800 py-5 px-5 2xl:rounded-3xl  lg:px-10 fixed top-0 z-[99]`
      )}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="flex  z-[999] items-start justify-start">
          <Link
            href="/"
            className="group relative w-auto flex justify-start items-start"
          >
            <Logos />
          </Link>
        </div>
        <div className="lg:flex hidden justify-center gap-10 items-center w-full">
          {navItems.map((item, index) => (
            <Link
              href={item.src}
              className="group  flex justify-center gap-5 items-center  relative"
              key={index}
            >
              <h1 className="text-base font-medium text-black dark:text-white line-clamp-1">
                {item.title}
              </h1>
              <div
                className={clsx(
                  pathname === item.src
                    ? "absolute top-[23px] h-[2px] flex items-center w-[50%]  bg-[#000] dark:bg-white  transition-transform duration-300 "
                    : "absolute top-[23px] h-[2px] w-[0%]  bg-[#000] dark:bg-white  transition-all duration-300 group-hover:w-[50%]"
                )}
              ></div>
            </Link>
          ))}
        </div>

        <div className="lg:hidden flex  items-center">
          <div className="px-2">
            <LanguageSwitcher />
          </div>
          <div className="px-2">
            <DarkmodeSwitch />
          </div>
          <NavMobile open={open} handleOpen={handleOpen} close={close} />
        </div>

        <div className="lg:flex hidden w-[35%] items-center justify-end">
          <div className="px-2">
            <LanguageSwitcher />
          </div>
          <div className="px-2">
            <DarkmodeSwitch />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
