import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Tour = {
  id: number;
  image: string;
  name: string;
  rating: number;
};

interface ToursState {
  tours: Tour[];
}

const initialState: ToursState = {
  tours: [
    {
      id: 1,
      image: "/images/jeti_oguz2.jpg",
      name: "Тур по Жети-Огуз",
      rating: 4.8,
    },
    {
      id: 2,
      image: "/images/tour-ara-kol.jpg",
      name: "Тур по Ара-Коль",
      rating: 4.8,
    },
    {
      id: 3,
      image: "/images/skazka2.jpg",
      name: "Тур по Каньону Сказка",
      rating: 4.8,
    },
    {
      id: 4,
      image: "/images/jeti_oguz2.jpg",
      name: "Тур по Жети-Огуз",
      rating: 4.8,
    },
    {
      id: 5,
      image: "/images/tour-ara-kol.jpg",
      name: "Тур по Ара-Коль",
      rating: 4.8,
    },
    {
      id: 6,
      image: "/images/skazka2.jpg",
      name: "Тур по Каньону Сказка",
      rating: 4.8,
    },
    {
      id: 7,
      image: "/images/skazka2.jpg",
      name: "Тур по Каньону Сказка",
      rating: 4.8,
    },
    {
      id: 8,
      image: "/images/jeti_oguz2.jpg",
      name: "Тур по Жети-Огуз",
      rating: 4.8,
    },
    {
      id: 9,
      image: "/images/tour-ara-kol.jpg",
      name: "Тур по Ара-Коль",
      rating: 4.8,
    },
  ],
};

const toursSlice = createSlice({
  name: "tours",
  initialState,
  reducers: {
    setTours: (state, action: PayloadAction<Tour[]>) => {
      state.tours = action.payload;
    },
  },
});

export const { setTours } = toursSlice.actions;
export default toursSlice.reducer;
