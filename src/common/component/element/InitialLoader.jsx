"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function InitialLoader() {
  const [Player, setPlayer] = useState(null);
  const [done, setDone] = useState(false);

  const overlayRef = useRef(null);
  const logoRef = useRef(null);

  /* load Lottie client-side only */
  useEffect(() => {
    import("@lottiefiles/react-lottie-player")
      .then((mod) => setPlayer(() => mod.Player))
      .catch(() => {});
  }, []);

  /* GSAP: logo pop-in → hold → fade out overlay */
  useEffect(() => {
    const overlay = overlayRef.current;
    const logo = logoRef.current;
    if (!overlay || !logo) return;

    const tl = gsap.timeline();

    tl.fromTo(logo,
      { scale: 0.75, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.8)" }
    )
    .to({}, { duration: 1.5 })           /* hold while lottie plays */
    .to(logo, { scale: 0.9, opacity: 0, duration: 0.35, ease: "power2.in" })
    .to(overlay, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.inOut",
      onComplete: () => setDone(true),
    }, "-=0.1");

    /* failsafe */
    const failsafe = setTimeout(() => {
      tl.kill();
      setDone(true);
    }, 5000);

    return () => { tl.kill(); clearTimeout(failsafe); };
  }, []);

  if (done) return null;

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div ref={logoRef} style={{ opacity: 0, width: 400, height: 400 }}>
        {Player ? (
          <Player
            autoplay
            loop
            src="/logo.json"
            style={{ width: 400, height: 400 }}
          />
        ) : (
          /* tiny spinner until the Lottie chunk arrives */
          <div style={{
            width: 40, height: 40, margin: "60px auto",
            borderRadius: "50%",
            border: "3px solid #e5e7eb",
            borderTopColor: "#82C341",
            animation: "dx-spin 0.85s linear infinite",
          }} />
        )}
      </div>
      <style>{`@keyframes dx-spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
