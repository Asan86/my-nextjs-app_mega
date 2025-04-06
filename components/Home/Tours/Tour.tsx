import { toursData } from "@/data/data";
import React from "react";
import TourCard from "./TourCard";
import TourButtons from "./TourButtons";

const Tour = () => {
  return (
    <div className="">
      <TourButtons />
      <div
        className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
        gap-8 items-center mt-16"
      >
        {/* TourCard */}
        {toursData.map((data) => {
          return (
            <div className="" key={data.id}>
              <TourCard tour={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tour;
