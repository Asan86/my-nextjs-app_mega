import Image from "next/image";

import React from "react";
import { FaHeart } from "react-icons/fa";

type Props = {
  tour: {
    id: number;
    image: string;
    name: string;
    tour: string;
    price: string;
    departure_dates: string;
    places_left: number;
    rating: number;
  };
};
const TourCard = ({ tour }: Props) => {
  return (
    <div className="">
      <div className="relative h-[300px] w-full rounded-lg cursor-pointer group overflow-hidden">
        {/* Add to fav button - Кнопка «Добавить в избранное» */}
        <div
          className="absolute top-4 right-4 z-20 w-8 h-8 bg-white rounded-full
           text-black flex items-center justify-center flex-col"
        >
          <FaHeart className="w-3 h-3" />
        </div>
        {/* Overlay - Наложение */}
        <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
        {/* Image - Изображение */}
        <Image
          src={tour.image}
          alt={tour.name}
          width={500}
          height={500}
          className="overflow-hidden h-full w-full transition-all 
          duration-300 object-cover group-hover:scale-110"
        />
      </div>
      {/* Content - Содержание  */}
      <div className="">
        <h1 className="mt-4 text-lg font-semibold text-blue-950 font-serif hover:text-black cursor-pointer transition-all duration-200">
          {tour.name}
        </h1>
        <p className="text-sm text-gray-600 font-medium mt-3 mb-6">
          {tour.departure_dates}
        </p>
        {/* rating - рейтинг */}
        <div className="flex items-center space-x-2">
          <div className="px-2 py-2 bg-blue-800 rounded-md font-bold text-white text-xs ">
            {tour.rating}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
