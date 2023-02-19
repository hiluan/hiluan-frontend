<<<<<<< HEAD
import { isSlideActiveAction } from "../store/isSlideActiveAction";
import handlerAllSlidesInactive from "./_handlerAllSlidesInactive";

import myDesignsInfo from "./_myDesignsInfo";

const handlerShowSlides = (dispatch, slides) => {
  let slideIndex = 0;
  handlerAllSlidesInactive(slides);
  slideIndex++;
  if (slideIndex > myDesignsInfo.length) {
    slideIndex = 1;
  }
  // myDesignsInfo[slideIndex - 1].active = true;
  dispatch(isSlideActiveAction(slideIndex - 1));
  console.log(myDesignsInfo[slideIndex - 1].name);
};

export default handlerShowSlides;
=======
import { isSlideActiveAction } from "../store/isSlideActiveAction";
import handlerAllSlidesInactive from "./_handlerAllSlidesInactive";

import myDesignsInfo from "./_myDesignsInfo";

const handlerShowSlides = (dispatch, slides) => {
  let slideIndex = 0;
  handlerAllSlidesInactive(slides);
  slideIndex++;
  if (slideIndex > myDesignsInfo.length) {
    slideIndex = 1;
  }
  // myDesignsInfo[slideIndex - 1].active = true;
  dispatch(isSlideActiveAction(slideIndex - 1));
  console.log(myDesignsInfo[slideIndex - 1].name);
};

export default handlerShowSlides;
>>>>>>> 949e034603fd33898c83216d7dcd5ac4a7b2d19c
