import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer"; // Импорт объединенных редюсеров

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
