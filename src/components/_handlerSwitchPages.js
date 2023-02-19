<<<<<<< HEAD
import { isHomePageAction } from "../store/isHomePageAction";
import { isIconActiveAction } from "../store/isIconActiveAction";
import { isMenuActiveAction } from "../store/isMenuActiveAction";
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
  dispatch(isMenuActiveAction(false));
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
  dispatch(isMenuActiveAction(false));
};
=======
import { isHomePageAction } from "../store/isHomePageAction";
import { isIconActiveAction } from "../store/isIconActiveAction";
import { isMenuActiveAction } from "../store/isMenuActiveAction";
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
  dispatch(isMenuActiveAction(false));
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
  dispatch(isMenuActiveAction(false));
};
>>>>>>> 949e034603fd33898c83216d7dcd5ac4a7b2d19c
