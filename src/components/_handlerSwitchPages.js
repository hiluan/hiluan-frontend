import { isHomePageAction } from "../store/isHomePageAction";
import { isIconActiveAction } from "../store/isIconActiveAction";
// import handlerShowSlides from "./_handlerShowSlides";

export const handlerSwitchHomePage = (
  dispatch,
  icon
  // , nIntervId
) => {
  /////// use setInterval to make slide show
  // if (!nIntervId) {
  //   nIntervId = setInterval(() => handlerShowSlides(dispatch), 1000);
  // }
  dispatch(isHomePageAction(true));
  dispatch(isIconActiveAction(icon));
};
export const handlerSwitchOtherPages = (
  dispatch,
  icon
  // , nIntervId
) => {
  // clearInterval(nIntervId);
  // // release our intervalID from the variable
  // nIntervId = null;
  dispatch(isHomePageAction(false));
  dispatch(isIconActiveAction(icon));
};
