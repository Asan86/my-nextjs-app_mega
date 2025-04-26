"use client";

import { useDispatch } from "react-redux";
import { setTourType } from "../../../../src/store/slices/tourSlice";
import styles from "./TourButtons.module.scss";

export default function TourButtons() {
  const dispatch = useDispatch();

  const tourTypes = [
    {
      type: "best",
      label: "Лучшие туры",
      bgClass: styles.blue,
      borderClass: styles.leftRounded,
    },
    {
      type: "one-day",
      label: "Однодневные туры",
      bgClass: styles.green,
      borderClass: styles.rightRounded,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.buttonGroup}>
        {tourTypes.map(({ type, label, bgClass, borderClass }) => (
          <button
            key={type}
            onClick={() => dispatch(setTourType(type))}
            className={`${styles.button} ${bgClass} ${borderClass}`}
            aria-label={`Выбрать ${label.toLowerCase()}`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
