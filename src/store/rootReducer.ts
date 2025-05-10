import { combineReducers } from "@reduxjs/toolkit";
import searchReducer from "./slices/searchSlice";
import languageReducer from "./slices/languageSlice";
import heroReducer from "./slices/heroSlice";
import favoriteReducer from "./slices/favoriteSlice";
import guideReducer from "./slices/guideSlice";
import reviewReducer from "./slices/reviewSlice";
import formReducer from "./slices/formSlice";
import formnavReducer from "./slices/formSliceNav";

const rootReducer = combineReducers({
  search: searchReducer,
  language: languageReducer,
  hero: heroReducer,
  favorite: favoriteReducer,
  guide: guideReducer,
  review: reviewReducer,
  form: formReducer,
  formnav: formnavReducer,
});

export default rootReducer;
