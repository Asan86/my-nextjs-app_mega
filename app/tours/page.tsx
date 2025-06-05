"use client";

import React from "react";
import styles from "./ToursPage.module.scss"; 
import { toursData } from "@data/data";
import TourCard from "@components/Tours/TourCard/TourCard";

const ToursPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarBlock}>
          <ul>
            <li>Все туры</li>
            <li>Лучшие туры</li>
            <li>Индивидуальные туры</li>
          </ul>
        </div>
        <div className={styles.sidebarBlock}>
          <h3>Регион</h3>
          <div className={styles.checkboxGroup}>
            {[
              "однодневный",
              "длительный",
              "гид",
              "с проживанием",
              "с питанием",
              "большая группа",
              "малая группа",
              "легкий тур",
              "средней сложности",
              "сложный тур",
            ].map((label, index) => (
              <label key={index}>
                <input type="checkbox" />
                {label}
              </label>
            ))}
          </div>
          <div className={styles.filterButtons}>
            <button>Применить</button>
            <button>Сбросить</button>
          </div>
        </div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.cards}>
          {toursData.map((data) => (
            <TourCard key={data.id} tour={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToursPage;
