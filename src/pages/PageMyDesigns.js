import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import infoMyDesigns from "../components/_infoMyDesigns";
import { isSlideActiveAction } from "../store/isSlideActiveAction";
import handlerAllSlidesInactive from "../components/_handlerAllSlidesInactive";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { isSlidesPlayingAction } from "../store/isSlidesPlayingAction";

const MyDesign = (props) => (
  <section>
    {props.project.active && (
      <section
        // className={`slide-inactive ${props.project.active ? "mydesign-slide" : ""}`}
        className="mydesign-slide fade"
      >
        <section className="mydesign-title">
          <h2 className="mydesign-name">{props.project.name} </h2>
          <h4 className="mydesign-tools">
            {props.project.tools.map((tool) => (
              <span key={tool} className="mydesign-tool">
                {tool}
              </span>
            ))}
          </h4>
          <p className="mydesign-description">{props.project.description}</p>
        </section>
        <img src={props.project.imgUrl} alt={props.project.description} />
      </section>
    )}
  </section>
);

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   slides[slideIndex - 1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

const MyDesigns = () => {
  //https://www.w3schools.com/howto/howto_js_slideshow.asp
  const slides = useSelector((state) => state.ultilities.slides);
  const slidesLength = slides.length;
  const indexFirstSlide = 0;
  const indexCurrentSlide = slides.findIndex((slide) => slide.active === true);
  const indexLastSlide = slidesLength - 1;
  const dispatch = useDispatch();
  const location = useLocation();

  const toNextSlide = () => {
    handlerAllSlidesInactive(slides);
    console.log(";;;;;;;;;;;;");
    indexCurrentSlide === indexLastSlide
      ? dispatch(isSlideActiveAction(indexFirstSlide))
      : dispatch(isSlideActiveAction(indexCurrentSlide + 1));
  };

  const toPrevSlide = () => {
    handlerAllSlidesInactive(slides);
    indexCurrentSlide === indexFirstSlide
      ? dispatch(isSlideActiveAction(indexLastSlide))
      : dispatch(isSlideActiveAction(indexCurrentSlide - 1));
  };
  const toDotSlide = (index) => {
    handlerAllSlidesInactive(slides);
    dispatch(isSlideActiveAction(index));
  };
  // useEffect(() => {
  //   let nIntervId;
  //   let slideIndex = 0;
  //   function showSlides() {
  //     for (let i = 0; i < myDesignsInfo.length; i++) {
  //       myDesignsInfo[i].active = false;
  //     }
  //     slideIndex++;
  //     if (slideIndex > myDesignsInfo.length) {
  //       slideIndex = 1;
  //     }
  //     // myDesignsInfo[slideIndex - 1].active = true;
  //     dispatch(isSlideActiveAction(slideIndex - 1));
  //     console.log(myDesignsInfo[slideIndex - 1].name);
  //   }
  //   if (currentP === "myDesigns") {
  //     // if (location.pathname.includes("designs")) {
  //     if (!nIntervId) {
  //       nIntervId = setInterval(showSlides, 1000);
  //     }
  //     // setInterval(showSlides, 500); // Change image every 2 seconds
  //     return;
  //   } else {
  //     clearInterval(nIntervId);
  //     // release our intervalID from the variable
  //     nIntervId = null;
  //   }

  // if (location.pathname.includes("designs")) {
  //   return;
  // } else {
  //   return;
  // }
  // }, []);

  const designList = () => {
    return infoMyDesigns.map((project) => {
      return <MyDesign project={project} key={project.description} />;
    });
  };
  // x
  return (
    <section className="page-others page-mydesigns">
      <section className="slideshow-container">{designList()}</section>
      <section className="slideshow-arrows">
        <a className="prev" onClick={toPrevSlide}>
          &#10094;
        </a>
        <a className="next" onClick={toNextSlide}>
          &#10095;
        </a>
      </section>
      {/* <section onClick={handlerSlidesPlaying} className="slideshow-play">
        <FaPlayCircle />
      </section> */}
      <section className="slideshow-dots">
        {slides.map((slide, index) => (
          <span
            key={index}
            className={`slideshow-dot ${slide.active && "dot-active"}`}
            onClick={() => toDotSlide(index)}
          ></span>
        ))}
      </section>
    </section>
  );
};

export default MyDesigns;
