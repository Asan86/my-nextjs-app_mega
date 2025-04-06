import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TourState {
  tourImgUrl: string;
}

const initialState: TourState = {
  tourImgUrl: "",
};

const tourSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {
    setTourType: (state, action: PayloadAction<string>) => {
      state.tourImgUrl = action.payload;
    },
  },
});

export const { setTourType } = tourSlice.actions;
export default tourSlice.reducer;
