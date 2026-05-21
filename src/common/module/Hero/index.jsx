"use client";
import Buttons from "@/common/component/element/Buttons";
import ImgScale from "@/common/module/Hero/component/ImgScale";
import Rails from "@/common/component/element/Rails";
import CambodiaSkyline from "@/common/component/element/CambodiaSkyline";
import React from "react";
import { motion, useScroll } from "framer-motion";
import Image from "@/common/component/element/Image";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import { HeroImage } from "@/common/constant/HeroImage";
import { Parallax } from "@/common/constant/Parallax";
import H1 from "@/common/component/element/H1";
import { ButtonSpot } from "@/common/component/element/ButtonSpot";
import { useTranslations } from "next-intl";

export const translateVariantText = {
  initial: {
    opacity: 0,
    y: 150,
    height: "10px",
  },
  animate: {
    opacity: 1,
    y: 0,
    height: "250px",
    transition: {
      ease: [0.2, 0.65, 0.3, 0.9],
      duration: 3,
    },
  },
};

export const tranlateVariant = {
  initial: {
    opacity: 0,
    y: 150,
    // height: '10px'
  },
  animate: {
    opacity: 1,
    y: 0,
    // height: 'auto',
    transition: {
      delay: 0.5,
      ease: [0.2, 0.65, 0.3, 0.9],
      duration: 2,
    },
  },
};

const Hero = () => {
  const t = useTranslations("Hero");
  const { scrollY } = useScroll();
  const { c, r, ry, rz, scale, t: parallaxT, y } = Parallax(scrollY);

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  return (
    <div className="h-auto md:mb-20 max-w-[1500px] px-5 lg:px-10 mt-20 relative overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="flex flex-col justify-center md:top-0 mt-28 lg:mt-36  items-center"
      >
        <div className="flex flex-col items-center justify-center">
          <motion.div variants={itemVariants} className="w-full flex justify-center">
            <H1
              className=" xl:w-[80%] 2xl:w-[80%] !leading-[0.85em] items-center flex overflow-hidden dark:bg-gradient-to-r from-white from-50% to-[#9c9c9c] bg-text bg-clip-text text-transparent text-center text-4xl sm:text-5xl md:text-7xl w-full  font-bold pb-1"
              title={t("title")}
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="lg:w-[70%] text-center  lg:text-2xl mt-2 dark:text-neutral-300 text-neutral-700"
          >
            {t("description")}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex max-md:flex-col w-full items-center justify-center gap-5 py-5"
          >
            <ButtonSpot
              title={t("getStarted")}
              className="!rounded-md !w-auto !py-2"
            />
          </motion.div>
        </div>

        <motion.div 
          animate={{
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className=" absolute w-full max-w-[1200px] top-[18%] h-[280px] z-[-99] flex justify-center items-center px-4 "
        >
          <CambodiaSkyline className="w-full h-auto opacity-70" />
          <div className="bg-gradient-to-b from-white dark:from-black from-10% to-transparent absolute inset-0 "></div>
          <div className="bg-gradient-to-l from-white dark:from-black from-1% to-transparent to-20% absolute inset-0"></div>
          <div className="bg-gradient-to-r from-white dark:from-black from-1% to-transparent to-20% absolute inset-0"></div>
          <div className="bg-gradient-to-t from-white dark:from-black from-1% to-transparent to-25% absolute inset-0"></div>
        </motion.div>

        <motion.div
          className="w-[100%] h-full xl:mt-10 mt-32 sm:mt-28 flex gap-1 lg:px-10 overflow-hidden "
          style={{
            translateY: parallaxT,
            translateX: c,
            rotateX: r,
            position: "relative",
            transformPerspective: 819,
            rotateZ: rz,
            rotateY: ry,
          }}
        >
          {HeroImage.map((item, index) => (
            <ComponentTransition
              delay={index * 0.1 + 0.5}
              key={index}
              className=" overflow-hidden rounded-xl w-full"
            >
              <motion.div
                animate={{
                  y: [0, index % 2 === 0 ? -15 : 15, 0],
                }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  alt="Hero"
                  className="overflow-hidden w-full h-auto"
                  height={550}
                  src={item.img}
                  width={550}
                  priority
                />
              </motion.div>
            </ComponentTransition>
          ))}
        </motion.div>

        {/* <ImgScale /> */}
      </motion.div>
    </div>
  );
};

export default Hero;
