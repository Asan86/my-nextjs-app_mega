import { combineReducers } from "@reduxjs/toolkit";
import searchReducer from "./slices/searchSlice";
import languageReducer from "./slices/languageSlice";
import heroReducer from "./slices/heroSlice";
import favoriteReducer from "./slices/favoriteSlice";
import guideReducer from "./slices/guideSlice";
import reviewReducer from "./slices/reviewSlice";
import formReducer from "./slices/formSlice";
import formnavReducer from "./slices/formSliceNav";
import tourReducer from "./slices/tourSlice";
import toursReducer from "./slices/toursSlice";

const rootReducer = combineReducers({
  search: searchReducer,
  language: languageReducer,
  hero: heroReducer,
  favorite: favoriteReducer,
  guide: guideReducer,
  review: reviewReducer,
  form: formReducer,
  formnav: formnavReducer,
  tour: tourReducer,
  tours: toursReducer,
});

export default rootReducer;
