<<<<<<< HEAD
import { useSelector } from "react-redux";

const handlerAllSlidesInactive = (slides) => {
  const slidesLength = slides.length;
  for (let i = 0; i < slidesLength; i++) {
    slides[i].active = false;
  }
};

export default handlerAllSlidesInactive;
=======
import { useSelector } from "react-redux";

const handlerAllSlidesInactive = (slides) => {
  const slidesLength = slides.length;
  for (let i = 0; i < slidesLength; i++) {
    slides[i].active = false;
  }
};

export default handlerAllSlidesInactive;
>>>>>>> 949e034603fd33898c83216d7dcd5ac4a7b2d19c
