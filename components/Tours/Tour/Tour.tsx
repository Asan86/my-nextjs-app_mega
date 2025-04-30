"use client";
import { toursData } from "@/data/data";
import React from "react";
import TourCard from "../TourCard/TourCard";
import TourButtons from "../TourButtons/TourButtons";
import styles from "./Tour.module.scss";
import { handleShowAllToursClick } from "../../utils/handleShowAllToursClick";

type TourProps = {
  showAllButtonText?: string;
};

const Tour = ({ showAllButtonText = "Смотреть все туры" }: TourProps) => {
  return (
    <div>
      <TourButtons />

      <div className={styles.container}>
        {toursData.map((data) => (
          <TourCard key={data.id} tour={data} />
        ))}
      </div>

      <div className={styles.buttonWrapper}>
        <button
          className={styles.showAllButton}
          onClick={handleShowAllToursClick}
        >
          {showAllButtonText}
        </button>
      </div>
    </div>
  );
};

export default Tour;
