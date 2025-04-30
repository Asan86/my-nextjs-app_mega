"use client";
import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../../src/store/store";
import styles from "./LanguageToggle.module.scss";
import { toggleLanguage } from "@/src/store/slices/languageSlice";

const LanguageToggle: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const language = useSelector((state: RootState) => state.language.value);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language");
      if (savedLanguage === "en" || savedLanguage === "ru") {
        if (savedLanguage !== language) {
          dispatch(toggleLanguage(savedLanguage));
        }
      }
    }
  }, [dispatch, language]);

  const handleToggle = useCallback(() => {
    const newLanguage = language === "en" ? "ru" : "en";
    dispatch(toggleLanguage(newLanguage));
    localStorage.setItem("language", newLanguage);
  }, [language, dispatch]);

  const translateClass =
    language === "ru" ? styles.translateRight : styles.translateLeft;

  return (
    <button onClick={handleToggle} className={styles.toggleButton}>
      <span className={`${styles.indicator} ${translateClass}`}>
        {language.toUpperCase()}
      </span>
    </button>
  );
};

export default LanguageToggle;
