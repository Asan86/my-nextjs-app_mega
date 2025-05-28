"use client";

import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../../../src/store/store";
import styles from "./TourDetails.module.scss";
import Image from "next/image";
import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import { FaStar } from "react-icons/fa6";
import ReviewList from "@/components/Reviews/ReviewList/ReviewList";

const TourDetailsPage = () => {
  const params = useParams() as { id: string };
  const tourId = Number(params.id);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  if (isNaN(tourId)) {
    return <div className={styles.notFound}>Неверный ID тура</div>;
  }

  const tour = useSelector((state: RootState) =>
    state.tours.tours.find((t) => t.id === tourId)
  );

  if (!tour) {
    return <div className={styles.notFound}>Тур не найден</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src={tour.image}
          alt={tour.name}
          width={1920}
          height={600}
          sizes="100vw"
          className={styles.mainImage}
          priority
        />
      </div>

      <div className={styles.infoPanel}>
        <div className={styles.leftBlock}>
          <div className={styles.titleRating}>
            <h1>{tour.name}</h1>
            <div className={styles.rating}>
              <span>{tour.rating}</span>
              <FaStar className={tour.rating >= 1 ? "" : styles.dimmed} />
            </div>
          </div>
          <p className={styles.departureDates}>Ближайшие даты выездов</p>
          <button className={styles.bookButton}>Забронировать</button>
        </div>

        <div className={styles.centerBlock}>
          <Calendar
            onChange={(value) => {
              if (value instanceof Date) {
                setSelectedDate(value);
              } else if (Array.isArray(value) && value[0] instanceof Date) {
                setSelectedDate(value[0]);
              } else {
                setSelectedDate(null);
              }
            }}
            // value={selectedDate}
            // className={styles.calendar}
            // calendarType="gregory"
            // locale="ru-RU"
          />
          {/* {selectedDate && (
            <p className={styles.selectedDateText}>
              Вы выбрали: {selectedDate.toLocaleDateString("ru-RU")}
            </p>
          )} */}
        </div>

        <div className={styles.rightBlock}></div>
      </div>

      <div className={styles.description}>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>

      <div className={styles.iconsWrapper}>
        <div className={styles.iconItem}>
          <Image src="/icons/map.svg" alt="map" width={80} height={80} />
          <p>
            Точка сбора: <br /> Адрес
          </p>
        </div>
        <div className={styles.iconItem}>
          <Image
            src="/icons/calendar.svg"
            alt="calendar"
            width={80}
            height={80}
          />
          <p>
            Длительность: <br /> 1 день
          </p>
        </div>
        <div className={styles.iconItem}>
          <Image src="/icons/user.svg" alt="user" width={80} height={80} />
          <p>
            Сложность:
            <br /> Легкий
          </p>
        </div>
        <div className={styles.iconItem}>
          <Image src="/icons/card.svg" alt="card" width={80} height={80} />
          <p>
            Стоимость:
            <br /> 1500 сом
          </p>
        </div>
        <div className={styles.iconItem}>
          <Image src="/icons/age.svg" alt="age" width={80} height={80} />
          <p>
            Возраст:
            <br /> от 12 лет
          </p>
        </div>
        <div className={styles.iconItem}>
          <Image src="/icons/group.svg" alt="group" width={80} height={80} />
          <p>
            Группа:
            <br /> от 5 человек
          </p>
        </div>
      </div>

      <ReviewList />
    </div>
  );
};
export default TourDetailsPage;
