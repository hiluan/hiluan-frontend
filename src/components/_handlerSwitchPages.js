import { isHomePageAction } from "../store/isHomePageAction";
import { isIconActiveAction } from "../store/isIconActiveAction";

export const handlerSwitchHomePage = (dispatch, icon) => {
  dispatch(isHomePageAction(true));
  dispatch(isIconActiveAction(icon));
};
export const handlerSwitchOtherPages = (dispatch, icon) => {
  dispatch(isHomePageAction(false));
  dispatch(isIconActiveAction(icon));
};
