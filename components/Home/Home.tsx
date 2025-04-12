import React from "react";
import Hero from "./Hero/Hero";
import Tour from "./Tours/Tour";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Tour />
    </div>
  );
};

export default Home;
