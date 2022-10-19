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
