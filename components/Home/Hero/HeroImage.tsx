import Image from "next/image";
import { useSelector } from "react-redux";
import React from "react";
import { RootState } from "../../../src/store/store";

const HeroImage = () => {
  const imageUrl = useSelector((state: RootState) => state.hero.imageUrl);

  const handleImageError = () => { 
    console.error("Ошибка загрузки изображения.");
  };

  return (
    <div className="relative w-full h-[120vh] flex items-center justify-center bg-gray-200">
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Главное изображение"
          fill
          className="object-cover rounded-lg shadow-lg"
          priority
          onError={handleImageError} // Обработчик ошибки загрузки
        />
      ) : (
        <p className="text-gray-500 text-xl">Загрузка изображения...</p>
      )}
    </div>
  );
};

export default HeroImage;
