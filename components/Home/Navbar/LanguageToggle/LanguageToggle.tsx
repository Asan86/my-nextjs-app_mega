"use client";
import { useEffect, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../../src/store/store";

import styles from "./LanguageToggle.module.scss";
import { toggleLanguage } from "@/src/store/slices/languageSlice";

const LanguageToggle: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const language = useSelector((state: RootState) => state.language.value);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as "en" | "ru";
    if (savedLanguage && savedLanguage !== language) {
      dispatch(toggleLanguage(savedLanguage));
    }
  }, [dispatch, language]);

  const handleToggle = useCallback(() => {
    const newLanguage = language === "en" ? "ru" : "en";
    dispatch(toggleLanguage(newLanguage));
    localStorage.setItem("language", newLanguage);
  }, [language, dispatch]);

  const translateClass = useMemo(
    () => (language === "ru" ? styles.translateRight : styles.translateLeft),
    [language]
  );

  return (
    <button onClick={handleToggle} className={styles.toggleButton}>
      <div className={`${styles.indicator} ${translateClass}`}>
        {language.toUpperCase()}
      </div>
    </button>
  );
};

export default LanguageToggle;
