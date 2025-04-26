import React from "react";
import Hero from "./Hero/HeroPage/Hero";
import Tour from "./Tours/Tour";
import GuideList from "./Guides/GuideList/GuideList";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Tour />
      <GuideList />
    </div>
  );
};

export default Home;
