import React from "react";

const CambodiaSkyline = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 300"
      width="100%"
      height="100%"
      className={className}
      fill="none"
    >
      <defs>
        {/* Soft sun glow gradient matching branded green #82C341 */}
        <radialGradient id="sunGlow" cx="30%" cy="60%" r="50%">
          <stop offset="0%" stopColor="#82C341" stopOpacity="0.25" />
          <stop offset="60%" stopColor="#82C341" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#82C341" stopOpacity="0" />
        </radialGradient>
        {/* Sleek base line gradient */}
        <linearGradient id="skylineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#82C341" stopOpacity="0.1" />
          <stop offset="30%" stopColor="#82C341" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#82C341" stopOpacity="0.8" />
          <stop offset="70%" stopColor="#82C341" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#82C341" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Branded glowing sun background */}
      <circle cx="360" cy="180" r="120" fill="url(#sunGlow)" />

      {/* Subtle decorative background stars */}
      <g stroke="currentColor" strokeWidth="0.5" className="text-neutral-300 dark:text-neutral-700" opacity="0.4">
        <circle cx="100" cy="80" r="1.5" />
        <circle cx="250" cy="50" r="1" />
        <circle cx="580" cy="90" r="1.5" />
        <circle cx="920" cy="60" r="1" />
        <circle cx="1100" cy="110" r="2" />
      </g>

      {/* Skyline Outlines */}
      <g
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-neutral-400 dark:text-neutral-600"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* ANGKOR WAT TEMPLE (Left-to-Center) */}
        {/* Left Outer Gallery */}
        <path d="M 120,250 L 160,250 L 160,230 L 180,230 L 180,250 L 220,250" />
        {/* Left Sub-Tower */}
        <path d="M 220,250 L 220,210 L 230,210 L 230,170 C 230,150 240,140 245,130 C 250,140 260,150 260,170 L 260,210 L 270,210 L 270,250" />
        {/* Left tower tier details */}
        <path d="M 225,190 L 265,190" strokeWidth="1" />
        <path d="M 230,165 L 260,165" strokeWidth="1" />
        <path d="M 238,145 L 252,145" strokeWidth="1" />

        {/* Central Connecting Gallery */}
        <path d="M 270,250 L 310,250 L 310,200 L 330,200 L 330,250" />

        {/* Main Central Tower */}
        <path d="M 330,250 L 330,190 L 340,190 L 340,140 C 340,110 355,90 360,70 C 365,90 380,110 380,140 L 380,190 L 390,190 L 390,250" />
        {/* Central tower tier details */}
        <path d="M 335,170 L 385,170" strokeWidth="1" />
        <path d="M 340,135 L 380,135" strokeWidth="1" />
        <path d="M 348,105 L 372,105" strokeWidth="1" />
        <path d="M 354,82 L 366,82" strokeWidth="1" />

        {/* Right Connecting Gallery */}
        <path d="M 390,250 L 420,250 L 420,200 L 440,200 L 440,250" />

        {/* Right Sub-Tower */}
        <path d="M 440,250 L 440,210 L 450,210 L 450,170 C 450,150 460,140 465,130 C 470,140 480,150 480,170 L 480,210 L 490,210 L 490,250" />
        {/* Right tower tier details */}
        <path d="M 445,190 L 485,190" strokeWidth="1" />
        <path d="M 450,165 L 480,165" strokeWidth="1" />
        <path d="M 458,145 L 472,145" strokeWidth="1" />

        {/* Right Outer Gallery */}
        <path d="M 490,250 L 530,250 L 530,230 L 550,230 L 550,250 L 580,250" />

        {/* ROYAL PALACE / PAGODA SPIRE (Center) */}
        {/* Left Wing Roof */}
        <path d="M 580,250 L 580,220 C 580,220 595,200 610,210 L 610,250" />
        {/* Palace Center Base */}
        <path d="M 610,250 L 610,180 L 690,180 L 690,250" />
        {/* Main traditional roof - Lower Tier */}
        <path d="M 590,195 C 600,195 605,185 615,180 L 685,180 C 695,185 700,195 710,195" />
        <path d="M 600,180 L 615,160 L 685,160 L 700,180" />
        {/* Middle Tier Roof */}
        <path d="M 610,160 C 618,160 622,150 630,145 L 670,145 C 678,150 682,160 690,160" />
        {/* Top Tier Roof */}
        <path d="M 625,145 C 632,145 635,138 640,132 L 660,132 C 665,138 668,145 675,145" />
        {/* Main Central Spire */}
        <path d="M 650,132 L 650,45" strokeWidth="2" />
        <path d="M 646,90 L 654,90" strokeWidth="1" />
        <path d="M 648,70 L 652,70" strokeWidth="1" />
        <circle cx="650" cy="42" r="2.5" className="fill-neutral-400 dark:fill-neutral-600" />

        {/* Right Wing Roof */}
        <path d="M 690,250 L 690,220 C 690,220 705,200 720,210 L 720,250 L 760,250" />

        {/* MODERN PHNOM PENH SKYSCRAPERS (Right) */}
        {/* Vattanac Capital (Curved skyscraper) */}
        <path d="M 760,250 L 780,250 L 780,140 C 780,120 790,100 810,80 C 825,65 835,55 845,45 L 850,45 L 850,250" />
        {/* Vattanac structural glass lines */}
        <path d="M 795,140 L 795,250" strokeWidth="0.75" opacity="0.5" />
        <path d="M 815,100 L 815,250" strokeWidth="0.75" opacity="0.5" />
        <path d="M 835,65 L 835,250" strokeWidth="0.75" opacity="0.5" />
        <path d="M 780,160 L 850,160" strokeWidth="0.75" opacity="0.5" />
        <path d="M 780,200 L 850,200" strokeWidth="0.75" opacity="0.5" />
        
        {/* Modern Skyscraper 2 (Canadia style or standard block tower) */}
        <path d="M 865,250 L 865,75 L 910,75 L 910,250" />
        <path d="M 865,95 L 910,95" strokeWidth="0.75" opacity="0.5" />
        <path d="M 865,135 L 910,135" strokeWidth="0.75" opacity="0.5" />
        <path d="M 865,175 L 910,175" strokeWidth="0.75" opacity="0.5" />
        <path d="M 865,215 L 910,215" strokeWidth="0.75" opacity="0.5" />
        <path d="M 887,75 L 887,250" strokeWidth="0.75" opacity="0.5" />

        {/* Skyscraper 3 (Sleek spire skyscraper) */}
        <path d="M 925,250 L 925,120 L 955,100 L 955,250" />
        <path d="M 940,100 L 940,65" strokeWidth="1" />
        
        {/* Skyscraper 4 (Hexagonal / Diagonal facade tower) */}
        <path d="M 970,250 L 970,150 L 995,125 L 1020,150 L 1020,250" />
        <path d="M 970,170 L 1020,170" strokeWidth="0.75" opacity="0.5" />
        <path d="M 970,210 L 1020,210" strokeWidth="0.75" opacity="0.5" />

        {/* Small cluster buildings */}
        <path d="M 1020,250 L 1040,250 L 1040,180 L 1070,180 L 1070,250" />
        <path d="M 1070,250 L 1090,250 L 1090,210 L 1120,210 L 1120,250" />
      </g>

      {/* Horizon and glowing base line */}
      <line
        x1="50"
        y1="250"
        x2="1150"
        y2="250"
        stroke="url(#skylineGradient)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      {/* Decorative dashed horizontal lines representing modern tech grid/river */}
      <line
        x1="80"
        y1="256"
        x2="1120"
        y2="256"
        stroke="currentColor"
        className="text-neutral-300 dark:text-neutral-800"
        strokeWidth="1.5"
        strokeDasharray="20 15 5 10 30 15"
      />
      <line
        x1="120"
        y1="262"
        x2="1080"
        y2="262"
        stroke="currentColor"
        className="text-neutral-200 dark:text-neutral-900"
        strokeWidth="1"
        strokeDasharray="40 30 10 20"
      />
    </svg>
  );
};

export default CambodiaSkyline;
