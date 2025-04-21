"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/src/store/hooks";
import { setGuides } from "@/src/store/slices/guideSlice";
import GuideCard from "./GuideCard";
import { guides as mockGuides } from "../../../data/data";
import CustomButton from "../Guides/CustomButton";

import styles from "./GuideList.module.scss"; // 👈 импорт стилей

const GuideList = () => {
  const dispatch = useAppDispatch();
  const guides = useAppSelector((state) => state.guide.guides);

  useEffect(() => {
    dispatch(setGuides(mockGuides));
  }, [dispatch]);

  return (
    <section className={styles.guideList}>
      {guides.map((guide) => (
        <GuideCard key={guide.id} guide={guide} />
      ))}
      <div className={styles.buttonWrapper}>
        <CustomButton onClick={() => console.log("Clicked!")}>
          Все гиды
        </CustomButton>
      </div>
    </section>
  );
};

export default GuideList;
