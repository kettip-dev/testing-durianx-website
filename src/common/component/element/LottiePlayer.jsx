"use client";

import React, { useEffect, useState } from "react";

/**
 * SSR-safe Lottie Player wrapper.
 * Dynamically imports `@lottiefiles/react-lottie-player` inside `useEffect` 
 * to ensure that the module chunk is only executed in client contexts,
 * completely avoiding SSR errors like `document is not defined`.
 */
export default function LottiePlayer({
  src,
  style,
  className,
  autoplay = true,
  loop = true,
  ...props
}) {
  const [Player, setPlayer] = useState(null);

  useEffect(() => {
    import("@lottiefiles/react-lottie-player")
      .then((mod) => {
        setPlayer(() => mod.Player);
      })
      .catch((err) => {
        console.error("Failed to load Lottie Player dynamically:", err);
      });
  }, []);

  if (!Player) {
    // Ultra-premium pulsing glassmorphic loader with a green spinner to match the brand accents
    return (
      <div
        className={`animate-pulse bg-neutral-100/30 dark:bg-neutral-900/30 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-800/50 rounded-2xl flex items-center justify-center ${className || ""}`}
        style={{ ...style, minHeight: "200px" }}
      >
        <div className="w-8 h-8 rounded-full border-2 border-t-[#82C341] border-neutral-300 dark:border-neutral-700 animate-spin"></div>
      </div>
    );
  }

  return (
    <Player
      autoplay={autoplay}
      loop={loop}
      src={src}
      style={style}
      className={className}
      {...props}
    />
  );
}
