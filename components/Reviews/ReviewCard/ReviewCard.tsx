import React from "react";
import styles from "./ReviewCard.module.scss";
import { FaStar, FaRegStar } from "react-icons/fa";

type Props = {
  name: string;
  review: string;
  rating: number;
};

const ReviewCard: React.FC<Props> = ({ name, review, rating }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.name}>{name}</span>
        <div className={styles.stars}>
          {[...Array(5)].map((_, i) => (
            <span key={i}>
              {i < rating ? (
                <FaStar className={styles.starFilled} />
              ) : (
                <FaRegStar className={styles.starEmpty} />
              )}
            </span>
          ))}
        </div>
      </div>
      <p className={styles.text}>{review}</p>
    </div>
  );
};

export default ReviewCard;
