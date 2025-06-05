import Image from "next/image";
import { useSelector } from "react-redux";
import React from "react";
import { RootState } from "src/store/store";
import styles from "./HeroImage.module.scss";

const HeroImage = () => {
  const imageUrl = useSelector((state: RootState) => state.hero.imageUrl);

  const handleImageError = () => {
    console.error("Ошибка загрузки изображения.");
  };

  return (
    <div className={styles.heroImageWrapper}>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Главное изображение"
          fill
          className={styles.image}
          priority
          onError={handleImageError}
        />
      ) : (
        <p className={styles.loadingText}>Загрузка изображения...</p>
      )}
    </div>
  );
};

export default HeroImage;
