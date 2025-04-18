import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoriteState {
  favorites: number[]; // ID избранных туров
}

const initialState: FavoriteState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<number>) {
      const tourId = action.payload;
      const exists = state.favorites.includes(tourId);
      if (exists) {
        state.favorites = state.favorites.filter((id) => id !== tourId);
      } else {
        state.favorites.push(tourId);
      }
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
