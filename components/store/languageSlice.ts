// store/languageSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LanguageState {
  value: "en" | "ru";
}

const initialState: LanguageState = {
  value: "en",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    toggleLanguage: (state, action: PayloadAction<"en" | "ru">) => {
      state.value = action.payload;
    },
  },
});

export const { toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;
