import React from "react";
import Hero from "./Hero/Hero";
import Tour from "./Tours/Tour";
import GuideList from "./Guides/GuideList";

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
