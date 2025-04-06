"use client";
import React from "react";
import HeroImage from "./HeroImage";
const Hero = () => {
  return (
    <div className="relative w-full h-[120vh] sm:h-[100vh] overflow-hidden">
      <div className="absolute inset-0 bg-gray-800" aria-hidden="true"></div>
      <HeroImage />
    </div>
  );
};

export default Hero;
