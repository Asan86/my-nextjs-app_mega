import { createSlice } from "@reduxjs/toolkit";

type Review = {
  id: number;
  name: string;
  review: string;
  rating: number;
};

type ReviewState = {
  reviews: Review[];
};

const initialState: ReviewState = {
  reviews: [
    {
      id: 1,
      name: "Алина М.",
      review:
        "Очень понравился тур! Гид профессионал своего дела! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  ",
      rating: 5,
    },
    {
      id: 2,
      name: "Бакытбек Ж.",
      review:
        "Прекрасная организация, рекомендую! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      rating: 4,
    },
    {
      id: 3,
      name: "Светлана К.",
      review:
        "Потрясающие виды и отличная команда! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      rating: 5,
    },
    {
      id: 4,
      name: "Тахмина У.",
      review:
        "Потрясающие виды и отличная команда! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      rating: 5,
    },
  ],
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {},
});

export default reviewSlice.reducer;
