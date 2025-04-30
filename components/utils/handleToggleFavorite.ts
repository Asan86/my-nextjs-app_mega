import { AppDispatch } from "../../src/store/store";
import { toggleFavorite } from "../../src/store/slices/favoriteSlice";

export const handleToggleFavorite = // кнопка "Избранное"
  (dispatch: AppDispatch, id: number) => () => {
    dispatch(toggleFavorite(id));
  };
