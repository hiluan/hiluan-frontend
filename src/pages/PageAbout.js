import SectionIntro from "../components/PageAbout-SectionIntro";
import SectionBasicInfo from "../components/PageAbout-SectionBasicInfo";
import { handlerSwitchOtherPages } from "../components/_handlerSwitchPages";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const About = () => {
  const isMobileMenuActive = useSelector(
    (state) => state.ultilities.isMobileMenuActive
  );
  return (
    <section
      className={`page-others page-about fade ${
        isMobileMenuActive ? "page-inactive" : ""
      }`}
    >
      <SectionIntro />
      <hr />
      <SectionBasicInfo />
      <hr />
    </section>
  );
};

export default About;
