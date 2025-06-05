"use client";

import Image from "next/image";
import { Guide } from "src/store/slices/guideSlice";
import { FaStar } from "react-icons/fa";
import styles from "./GuideCard.module.scss";

const GuideCard = ({ guide }: { guide: Guide }) => {
  const rating = 4.7;
  const reviewsCount = 32;

  return (
    <div className={styles.card}>
      {/* Фото гида */}
      <div className={styles.imageWrapper}>
        <Image
          src={guide.photo}
          alt={guide.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 112px, 160px"
        />
      </div>

      {/* Информация */}
      <div className={styles.content}>
        <h3 className={styles.name}>{guide.name}</h3>

        <div className={styles.meta}>
          <div className={styles.rating}>
            <FaStar size={16} className={styles.star} />
            <span>{rating}</span>
          </div>
          <span>{reviewsCount} отзыва</span>
          <span>{guide.experience} года опыта</span>
        </div>

        <p className={styles.description}>{guide.description}</p>
      </div>
    </div>
  );
};

export default GuideCard;
