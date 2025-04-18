import { toursData } from "@/data/data";
import React from "react";
import TourCard from "./TourCard";
import TourButtons from "./TourButtons";
import styles from "./Tour.module.scss"; // импорт SCSS модуля

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
        <button className={styles.showAllButton}>{showAllButtonText}</button>
      </div>
    </div>
  );
};

export default Tour;
