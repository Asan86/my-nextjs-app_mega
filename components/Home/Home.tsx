import React from "react";
import Hero from "../Hero/HeroPage/Hero";
import Tour from "../Tours/Tour/Tour";
import GuideList from "../Guides/GuideList/GuideList";
import ReviewList from "../Reviews/ReviewList/ReviewList";
import { FormComponent } from "../Form/FormComponent";
// import Footer from "../Footer/Footer";
import LoginModal from "../FormComponentNav/LoginModal";
// import ToursPage from "../ToursPage/page";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Tour />
      <GuideList />
      <ReviewList />
      <FormComponent />
      <LoginModal />
      {/* <ToursPage /> */}
    </div>
  );
};

export default Home;
