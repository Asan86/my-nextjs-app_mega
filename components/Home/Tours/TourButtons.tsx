"use client";

import { useDispatch } from "react-redux";
import { setTourType } from "../../../src/store/slices/tourSlice";

export default function TourButtons() {
  const dispatch = useDispatch();

  const tourTypes = [
    {
      type: "best",
      label: "Лучшие туры",
      bgColor: "bg-blue-500",
      borderClass: "rounded-l-full",
    },
    {
      type: "one-day",
      label: "Однодневные туры",
      bgColor: "bg-green-500",
      borderClass: "rounded-r-full",
    },
  ];

  return (
    <div className="flex justify-center items-start px-4 mt-12">
      <div className="flex w-full max-w-[460px]">
        {tourTypes.map(({ type, label, bgColor, borderClass }) => (
          <button
            key={type}
            onClick={() => dispatch(setTourType(type))}
            className={`w-1/2 h-[70px] ${bgColor} text-white font-bold text-lg ${borderClass} transition active:scale-95`}
            aria-label={`Выбрать ${label.toLowerCase()}`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
