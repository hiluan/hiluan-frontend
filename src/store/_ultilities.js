import { combineReducers } from "redux";
import isHomePageReducer from "./isHomePageReducer";
import isIconActiveReducer from "./isIconActiveReducer";
import isSlideActiveReducer from "./isSlideActiveReducer";

const utilitiesReducer = combineReducers({
  isHomePage: isHomePageReducer,
  iconActive: isIconActiveReducer,
  slideActive: isSlideActiveReducer,
});

export default utilitiesReducer;
