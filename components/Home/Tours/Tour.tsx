import { toursData } from "@/data/data";
import React from "react";
import TourCard from "./TourCard";
import TourButtons from "./TourButtons";

const Tour = () => {
  return (
    <div>
      <TourButtons />
      <div
        className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
          gap-8 items-start mt-16"
      >
        {toursData.map((data) => (
          <TourCard key={data.id} tour={data} />
        ))}
      </div>
      {/* Button - Смотреть все туры */}
      <div className="flex justify-center mb-4 mt-12">
        <button className="w-[455px] h-[50px] bg-[#E48C3F] text-white rounded-[15px] font-semibold text-lg transition-all duration-300 hover:bg-[#D17B2E]">
          Смотреть все туры
        </button>
      </div>
    </div>
  );
};

export default Tour;
