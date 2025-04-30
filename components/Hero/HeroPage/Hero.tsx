"use client";
import React from "react";
import HeroImage from "../HeroImage/HeroImage";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.heroOverlay} aria-hidden="true"></div>
      <HeroImage />
    </div>
  );
};

export default Hero;
