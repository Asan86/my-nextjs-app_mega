import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import languageReducer from "./languageSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
