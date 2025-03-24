"use client";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { toggleLanguage } from "../../store/languageSlice";

const LanguageToggle: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const language = useSelector((state: RootState) => state.language.value);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as "en" | "ru";
    if (savedLanguage) {
      dispatch(toggleLanguage(savedLanguage));
    }
  });

  const handleToggle = () => {
    const newLanguage = language === "en" ? "ru" : "en";
    dispatch(toggleLanguage(newLanguage));
    localStorage.setItem("language", newLanguage);
  };

  return (
    <button
      onClick={handleToggle}
      className="relative w-28 h-8 bg-[#EDEDED] rounded-full flex items-center p-1 transition-all"
    >
      <div
        className={`absolute w-12 h-6.5 bg-white rounded-full shadow-md flex items-center justify-center text-sm font-semibold transition-transform ${
          language === "ru" ? "translate-x-14" : "translate-x-0"
        }`}
      >
        {language.toUpperCase()}
      </div>
    </button>
  );
};

export default LanguageToggle;
