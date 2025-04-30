import { AppDispatch } from "../../src/store/store";
import { setTourType } from "../../src/store/slices/tourSlice";

export const handleTourTypeClick = // Кнопки Лучшие туры и Однодневные туры
  (dispatch: AppDispatch, type: string) => () => {
    dispatch(setTourType(type));
  };
