import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Guide {
  id: string;
  name: string;
  photo: string;
  experience: number;
  description: string;
}

interface GuideState {
  guides: Guide[];
}

const initialState: GuideState = {
  guides: [],
};

const guideSlice = createSlice({
  name: "guide",
  initialState,
  reducers: {
    setGuides(state, action: PayloadAction<Guide[]>) {
      state.guides = action.payload;
    },
  },
});

export const { setGuides } = guideSlice.actions;
export default guideSlice.reducer;
