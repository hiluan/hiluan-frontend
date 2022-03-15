import { useSelector } from "react-redux";

const handlerAllSlidesInactive = (slides) => {
  const slidesLength = slides.length;
  for (let i = 0; i < slidesLength; i++) {
    slides[i].active = false;
  }
};

export default handlerAllSlidesInactive;
