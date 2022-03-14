import myDesignsInfo from "../components/_myDesignsInfo";
import { Fade } from "react-slideshow-image";

// export default myDesignsInfo;

const MyDesign = (props) => (
  <section className="mydesign-slide">
    <section className="mydesign-title">
      {/* <h2 className="mydesign-name">{props.project.name} </h2>
      <h4 className="mydesign-tools">
        {props.project.tools.map((tool) => (
          <span>{tool}</span>
        ))}
      </h4> */}
      <p>
        <span className="mydesign-name">{props.project.name}</span>
      </p>
      <p>
        <span className="mydesign-tools">
          {props.project.tools.map((tool) => (
            <span className="mydesign-tool">{tool}</span>
          ))}
        </span>
      </p>
      <p>
        <span className="mydesign-description">
          {props.project.description}
        </span>
      </p>
    </section>
    <img src={props.project.imgUrl} alt={props.project.description} />
    {/* <span className="slideshow-numbertext">
        {props.indexOf(props.project)}/{props.length}
      </span> */}
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
  // const currentP = useSelector((state) => state.ultilities.iconActive);
  // const dispatch = useDispatch();
  // const location = useLocation();
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
    return myDesignsInfo.map((project) => {
      return <MyDesign project={project} key={project.description} />;
    });
  };
  const fadeProperties = {
    duration: 3000,
    pauseOnHover: true,
    autoplay: true,
    indicators: true,
  };
  return (
    <section className="page-others page-mydesigns">
      <section className="slideshow-container slide-container">
        {/* <h1>My projects</h1> */}
        <Fade {...fadeProperties}>{designList()}</Fade>
        {/* <a className="prev" onClick="plusSlides(-1)">
          &#10094;
        </a>
        <a className="next" onClick="plusSlides(1)">
          &#10095;
        </a> */}
      </section>
      {/* <section className="slideshow-dots">
        <span className="slideshow-dot" onClick="currentSlide(1)"></span>
        <span className="slideshow-dot" onClick="currentSlide(2)"></span>
        <span className="slideshow-dot" onClick="currentSlide(3)"></span>
      </section> */}
    </section>
  );
};
// const MyDesigns = () => {
//   return <section className="page-others page-mydesigns"></section>;
// };

export default MyDesigns;
