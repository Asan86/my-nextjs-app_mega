"use client";

import Image from "next/image";
import { FaStar, FaHeart } from "react-icons/fa";
import React from "react";
import BookButton from "../BookButton/BookButton";
import styles from "./TourCard.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../src/store/store";
import { handleToggleFavorite } from "../../utils/handleToggleFavorite";

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
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorite.favorites);
  const isFavorite = favorites.includes(tour.id);

  return (
    <div className={styles.card}>
      <div className={`${styles.imageWrapper} group`}>
        <button
          className={styles.favoriteButton}
          onClick={() => handleToggleFavorite(dispatch, tour.id)}
          aria-label="Добавить в избранное"
        >
          <FaHeart
            className={`${styles.heartIcon} ${isFavorite ? styles.active : ""}`}
          />
        </button>

        <div className={styles.overlay}></div>

        <Image
          src={tour.image}
          alt={tour.name}
          width={500}
          height={500}
          className={styles.image}
          priority
        />
        <BookButton />
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h1>{tour.name}</h1>
          <div className={styles.rating}>
            <FaStar className={tour.rating >= 1 ? "" : styles.dimmed} />
            <span>{tour.rating}</span>
          </div>
        </div>
        <div className={styles.details}>
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
