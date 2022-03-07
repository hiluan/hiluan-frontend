import { combineReducers } from "redux";
import utilitiesReducer from "./_ultilities";

const rootReducer = combineReducers({
  ultilities: utilitiesReducer,
});

export default rootReducer;
