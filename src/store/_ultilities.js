import { combineReducers } from "redux";
import isHomePageReducer from "./isHomePageReducer";
import isIconActiveReducer from "./isIconActiveReducer";

const utilitiesReducer = combineReducers({
  isHomePage: isHomePageReducer,
  iconActive: isIconActiveReducer,
});

export default utilitiesReducer;
