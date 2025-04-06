import { combineReducers } from "@reduxjs/toolkit";
import searchReducer from "./slices/searchSlice";
import languageReducer from "./slices/languageSlice";
import heroReducer from "./slices/heroSlice";

const rootReducer = combineReducers({
  search: searchReducer,
  language: languageReducer,
  hero: heroReducer,
});

export default rootReducer;
