"use client";
import React from "react";
import ComponentTransition from "./ComponentTransition";
import Image from "./Image";
import LottiePlayer from "./LottiePlayer";

export default function Card({ Content }) {
  const isTwoItems = Content.length === 2;
  return (
    <div className={`grid gap-6 py-6 ${isTwoItems ? "grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}>
      {Content.map((item, index) => (
        <ComponentTransition
          delay={index * 0.15}
          key={index}
          className="flex relative group overflow-hidden rounded-3xl flex-col md:flex-row items-center text-center md:text-left p-6 gap-6 bg-neutral-50/50 dark:bg-neutral-900/40 backdrop-blur-sm border border-neutral-200/80 dark:border-neutral-800/80 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.01] hover:border-[#82C341]/40 hover:dark:border-[#82C341]/30 cursor-pointer"
        >
          {/* Subtle top glowing accent matching the brand green */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#82C341]/10 rounded-full blur-2xl group-hover:bg-[#82C341]/20 transition-all duration-500"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#82C341]/5 rounded-full blur-2xl group-hover:bg-[#82C341]/10 transition-all duration-500"></div>

          {/* Premium Illustration Image Container */}
          {(item.lottiePath || item.img) && (
            <div className="w-full md:w-[42%] shrink-0 aspect-[4/3] relative rounded-2xl overflow-hidden flex justify-center items-center bg-neutral-100/50 dark:bg-neutral-900/60 p-4 border border-neutral-100 dark:border-neutral-800/50">
              <div className="w-full h-full relative group-hover:scale-105 group-hover:rotate-1 transition-all duration-700 ease-out flex justify-center items-center">
                {item.lottiePath ? (
                  <LottiePlayer
                    autoplay
                    loop
                    src={item.lottiePath}
                    style={{ width: "100%", height: "100%" }}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="object-contain w-full h-full rounded-xl"
                  />
                )}
              </div>
            </div>
          )}

          {/* Title and Description */}
          <div className="flex flex-col items-center md:items-start w-full z-10">
            <h1 className="text-xl md:text-2xl text-neutral-800 dark:text-neutral-100 font-bold group-hover:text-[#82C341] dark:group-hover:text-[#82C341] transition-colors duration-300">
              {item.title}
            </h1>
            <p className="mt-3 text-sm md:text-base text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors duration-300 leading-relaxed max-w-[280px] md:max-w-none">
              {item.desc}
            </p>
          </div>
        </ComponentTransition>
      ))}
    </div>
  );
}
