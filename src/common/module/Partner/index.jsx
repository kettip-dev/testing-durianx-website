"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import HeroSection from "./component/HeroSection";
import WhyJoinSection from "./component/WhyJoinSection";
import HowItWorksSection from "./component/HowItWorksSection";
import BenefitsSection from "./component/BenefitsSection";
import SuccessStories from "./component/SuccessStories";
import PartnerCategories from "./component/PartnerCategories";
import CTASection from "./component/CTASection";

gsap.registerPlugin(ScrollTrigger);

const PartnerPage = () => {
  return (
    <div className="h-auto w-full max-w-[1500px] px-5 xl:px-20 pb-20 overflow-x-hidden">
      {/* Hero */}
      <HeroSection />

      {/* Partner Categories */}
      <PartnerCategories />

      {/* Why Join */}
      <WhyJoinSection />

      {/* How It Works */}
      <HowItWorksSection />

      {/* Benefits */}
      <BenefitsSection />

      {/* Success Stories */}
      <SuccessStories />

      {/* CTA */}
      <CTASection />
    </div>
  );
};

export default PartnerPage;
