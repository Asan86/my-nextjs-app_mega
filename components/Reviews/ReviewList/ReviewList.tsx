"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/src/store/store";
import ReviewCard from "../ReviewCard/ReviewCard";
import styles from "./ReviewList.module.scss";

const ReviewList: React.FC = () => {
  const reviews = useSelector((state: RootState) => state.review.reviews);

  return (
    <div className={styles.reviewSection}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h2 className={styles.title}>Отзывы</h2>
          <button className={styles.button}>Оставить свой отзыв</button>
        </div>
      </div>

      <div className={styles.container}>
        {reviews.map((r) => (
          <ReviewCard key={r.id} {...r} />
        ))}
      </div>
    </div>
  );
};

export default ReviewList;
