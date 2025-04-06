"use client";
import { useEffect, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../src/store/store";
import { toggleLanguage } from "../../../src/store/slices/languageSlice";

const LanguageToggle: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const language = useSelector((state: RootState) => state.language.value);

  // Загрузка языка из localStorage при монтировании компонента
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as "en" | "ru";
    if (savedLanguage && savedLanguage !== language) {
      dispatch(toggleLanguage(savedLanguage));
    }
  }, [dispatch, language]);

  // Оптимизированная функция для переключения языка
  const handleToggle = useCallback(() => {
    const newLanguage = language === "en" ? "ru" : "en";
    dispatch(toggleLanguage(newLanguage));
    localStorage.setItem("language", newLanguage);
  }, [language, dispatch]);

  // Оптимизированный класс для анимации переключателя
  const translateClass = useMemo(
    () => (language === "ru" ? "translate-x-14" : "translate-x-0"),
    [language]
  );

  return (
    <button
      onClick={handleToggle}
      className="relative w-28 h-8 bg-[#EDEDED] rounded-full flex items-center p-1 border border-black-500 transition-all"
    >
      {/* Движущийся индикатор языка */}
      <div
        className={`absolute w-12 h-6.5 bg-white rounded-full shadow-md flex items-center justify-center text-sm font-semibold transition-transform ${translateClass}`}
      >
        {language.toUpperCase()}
      </div>
    </button>
  );
};

export default LanguageToggle;
