<<<<<<< HEAD
import { combineReducers } from "redux";
import isHomePageReducer from "./isHomePageReducer";
import isIconActiveReducer from "./isIconActiveReducer";
import isMenuActiveReducer from "./isMenuActiveReducer";
import isSlideActiveReducer from "./isSlideActiveReducer";
import isSlidesPlayingReducer from "./isSlidesPlayingReducer";

const utilitiesReducer = combineReducers({
  isHomePage: isHomePageReducer,
  iconActive: isIconActiveReducer,
  isSlidesPlaying: isSlidesPlayingReducer,
  isMobileMenuActive: isMenuActiveReducer,
  slides: isSlideActiveReducer,
});

export default utilitiesReducer;
=======
import { combineReducers } from "redux";
import isHomePageReducer from "./isHomePageReducer";
import isIconActiveReducer from "./isIconActiveReducer";
import isMenuActiveReducer from "./isMenuActiveReducer";
import isSlideActiveReducer from "./isSlideActiveReducer";
import isSlidesPlayingReducer from "./isSlidesPlayingReducer";

const utilitiesReducer = combineReducers({
  isHomePage: isHomePageReducer,
  iconActive: isIconActiveReducer,
  isSlidesPlaying: isSlidesPlayingReducer,
  isMobileMenuActive: isMenuActiveReducer,
  slides: isSlideActiveReducer,
});

export default utilitiesReducer;
>>>>>>> 949e034603fd33898c83216d7dcd5ac4a7b2d19c
