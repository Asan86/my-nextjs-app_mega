import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Кастомный хук для dispatch с правильными типами
export const useAppDispatch: () => AppDispatch = useDispatch;

// Кастомный хук для useSelector с правильными типами
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
