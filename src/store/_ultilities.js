import { combineReducers } from "redux";
import isHomePageReducer from "./isHomePageReducer";
import isIconActiveReducer from "./isIconActiveReducer";
import isSlideActiveReducer from "./isSlideActiveReducer";
import isSlidesPlayingReducer from "./isSlidesPlayingReducer";

const utilitiesReducer = combineReducers({
  isHomePage: isHomePageReducer,
  iconActive: isIconActiveReducer,
  isSlidesPlaying: isSlidesPlayingReducer,
  slides: isSlideActiveReducer,
});

export default utilitiesReducer;
