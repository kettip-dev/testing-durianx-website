"use client";
import React from "react";
import CareerHero from "./component/CareerHero";
import WhyDurianX from "./component/WhyDurianX";
import OpenRoles from "./component/OpenRoles";
import LifeAtDurianX from "./component/LifeAtDurianX";
import CareerCTA from "./component/CareerCTA";

const CareersPage = () => {
  return (
    <div className="h-auto w-full max-w-[1500px] px-5 xl:px-20 pb-20 overflow-x-hidden">
      <CareerHero />
      <WhyDurianX />
      <LifeAtDurianX />
      <OpenRoles />
      <CareerCTA />
    </div>
  );
};

export default CareersPage;
