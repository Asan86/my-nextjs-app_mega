import Image from "next/image";
import { FaStar, FaHeart } from "react-icons/fa";
import React from "react";

type Props = {
  tour: {
    id: number;
    image: string;
    name: string;
    tour: string;
    price: string;
    departure_dates: string;
    places_left: string;
    rating: number;
  };
};

const TourCard = ({ tour }: Props) => {
  return (
    <div className="hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden">
      <div className="relative h-[300px] w-full rounded-lg cursor-pointer group overflow-hidden">
        {/* Add to fav button - Кнопка «Добавить в избранное» */}
        <div className="absolute top-4 left-4 z-20 w-8 h-8 bg-white rounded-full text-black flex items-center justify-center flex-col">
          <FaHeart className="w-3 h-3 transition-transform group-hover:scale-110 group-hover:text-red-500" />
        </div>
        {/* Overlay - Наложение */}
        <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
        {/* Image - Изображение */}
        <Image
          src={tour.image}
          alt={tour.name}
          width={500}
          height={500}
          className="overflow-hidden h-full w-full transition-all duration-300 object-cover group-hover:scale-110"
        />
        {/* Book Button - Кнопка «Забронировать» */}
        <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 bg-white/70 text-black px-4 py-2 text-sm font-medium rounded-full backdrop-blur-md hover:bg-white transition-all">
          Забронировать
        </button>
      </div>
      {/* Content - Содержание */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold text-blue-950 font-serif hover:text-black cursor-pointer transition-all duration-200">
            {tour.name}
          </h1>
          {/* Rating - Рейтинг */}
          <div className="flex items-center space-x-1">
            <FaStar
              className={`text-yellow-400 text-xs ${
                tour.rating >= 1 ? "opacity-100" : "opacity-30"
              }`}
            />
            <span className="ml-1 text-sm font-medium text-gray-600">
              {tour.rating}
            </span>
          </div>
        </div>
        <div className="text-sm text-gray-600 font-medium space-y-2 mt-3 mb-6">
          <p>{tour.tour}</p>
          <p>{tour.price}</p>
          <p>{tour.departure_dates}</p>
          <p>{tour.places_left}</p>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
