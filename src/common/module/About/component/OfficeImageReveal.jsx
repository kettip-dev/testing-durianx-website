"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function OfficeImageReveal() {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const glareRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial Intro ScrollTrigger Animation
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          y: 80,
          scale: 0.95,
          rotationX: -10,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 1.4,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      // 2. Gentle Floating Loop (Hand-held / drone camera simulation)
      gsap.to(cardRef.current, {
        y: "-=8",
        rotationZ: "+=0.6",
        rotationY: "+=0.8",
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // 3. Interactive Mouse Move 3D Tilt & Glare (Tactile Hand Feeling)
  const handleMouseMove = (e) => {
    if (!cardRef.current || !glareRef.current) return;
    const card = cardRef.current;
    const glare = glareRef.current;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; //x position within the element.
    const y = e.clientY - rect.top;  //y position within the element.
    
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    
    const angleX = -(y - yc) / 18; // Max 3D Tilt on X axis
    const angleY = (x - xc) / 18;  // Max 3D Tilt on Y axis

    // Calculate glare opacity & coordinates
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    gsap.to(card, {
      rotateX: angleX,
      rotateY: angleY,
      scale: 1.03,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(130, 195, 65, 0.15)",
      duration: 0.4,
      ease: "power2.out",
      overwrite: "auto",
    });

    gsap.to(glare, {
      opacity: 0.35,
      background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.4) 0%, transparent 60%)`,
      duration: 0.3,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current || !glareRef.current) return;
    
    // Reset to center smoothly
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      duration: 0.8,
      ease: "power3.out",
      overwrite: "auto",
    });

    gsap.to(glareRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full flex items-center justify-center [perspective:1200px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        className="w-full h-full relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[1px] border-neutral-200/40 dark:border-neutral-850/40 transition-shadow duration-300 [transform-style:preserve-3d]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/about/durianx-office.png"
          alt="DurianX Office HQ"
          className="w-full h-full object-cover origin-center select-none pointer-events-none"
        />
        
        {/* 3D Inner Layer Depth Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none z-[4]"
          style={{ transform: "translateZ(30px)" }}
        />
        
        {/* Glowing Welcome Sign Highlight */}
        <div 
          className="absolute bottom-10 left-10 right-10 flex flex-col justify-end pointer-events-none z-[5]"
          style={{ transform: "translateZ(50px)" }}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-primary-500 text-white w-fit shadow-lg shadow-primary-500/30">
            DurianX HQ
          </div>
        </div>

        {/* Glossy Glare Reflection Layer */}
        <div 
          ref={glareRef}
          className="absolute inset-0 z-[6] pointer-events-none opacity-0 mix-blend-overlay transition-opacity duration-300"
        />
      </div>
    </div>
  );
}
