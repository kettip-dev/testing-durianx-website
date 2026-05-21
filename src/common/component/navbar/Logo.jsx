import React from "react";
import Image from "../element/Image";

export default function Logo() {
  return (
    <>
      <Image
        className="w-[200px] md:w-[240px] h-auto object-contain transition-all duration-300 ease-out hover:scale-[1.02] drop-shadow-[0_2px_6px_rgba(0,0,0,0.06)] dark:drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)] hover:drop-shadow-[0_6px_15px_rgba(231,31,47,0.18)]"
        src="/logo.svg"
        alt="Logo"
        width={240}
        height={56}
        priority
      />
    </>
  );
}
