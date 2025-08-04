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
import authReducer from "./slices/authSlice";
import registerReducer from "./slices/registerSlice";
import loginReducer from "./slices/loginSlice";

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
  auth: authReducer,
  register: registerReducer,
  login: loginReducer,
});

export default rootReducer;
