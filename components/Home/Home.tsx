import React from "react";
import Hero from "../Hero/HeroPage/Hero";
import Tour from "../Tours/Tour/Tour";
import GuideList from "../Guides/GuideList/GuideList";
import ReviewList from "../Reviews/ReviewList/ReviewList";
import { FormComponent } from "../Form/FormComponent";
import LoginModal from "../FormComponentNav/LoginModal";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Tour />
      <GuideList />
      <ReviewList />
      <FormComponent />
      <LoginModal />
    </div>
  );
};

export default Home;
