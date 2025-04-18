import { combineReducers } from "@reduxjs/toolkit";
import searchReducer from "./slices/searchSlice";
import languageReducer from "./slices/languageSlice";
import heroReducer from "./slices/heroSlice";
import favoriteReducer from "./slices/favoriteSlice";

const rootReducer = combineReducers({
  search: searchReducer,
  language: languageReducer,
  hero: heroReducer,
  favorite: favoriteReducer,
});

export default rootReducer;
