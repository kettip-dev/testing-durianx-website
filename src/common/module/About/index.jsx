"use client";
import Rails from "@/common/component/element/Rails";
import React from "react";
import MotoRiderAnimation from "./component/MotoRiderAnimation";
import PartnershipTabs from "./component/PartnershipTabs";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import Feedback from "../Feedback";
import CardOffer from "@/common/component/element/CardOffer";
import StickyAboutSection from "./component/StickyAboutSection";

const About = () => {
  return (
    <div className="w-full">
      {/* ── Full-bleed Sticky Split Screen (building right, content left) ── */}
      <StickyAboutSection />

      {/* ── Padded sections below ── */}
      <ComponentTransition className="h-auto max-w-[1500px] mx-auto px-10 xl:px-20 pb-20">
        {/* GSAP Scroll Animating Moto Rider */}
        <MotoRiderAnimation />

        {/* Interactive Partnership Tabs */}
        <PartnershipTabs />

        {/* User Feedback & CTA */}
        <Feedback className="!px-0" />
        <CardOffer title="Let&rsquo;s Get Started With Us" className="!px-0" />
      </ComponentTransition>
    </div>
  );
};

export default About;

