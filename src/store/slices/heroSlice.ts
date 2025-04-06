import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface HeroState {
  imageUrl: string;
}

const initialState: HeroState = {
  imageUrl: "/images/image-main.png",  
};

const heroSlice = createSlice({
  name: "hero",
  initialState,
  reducers: {
    setImage: (state, action: PayloadAction<string>) => {
      state.imageUrl = action.payload;
    },
  },
});

export const { setImage } = heroSlice.actions;
export default heroSlice.reducer;
