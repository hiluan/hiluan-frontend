import SectionIntro from "../components/PageAbout-SectionIntro";
import SectionBasicInfo from "../components/PageAbout-SectionBasicInfo";
import { handlerSwitchOtherPages } from "../components/_handlerSwitchPages";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const About = () => {
  return (
    <section className="page-others page-about fade">
      <SectionIntro />
      <hr />
      <SectionBasicInfo />
      <hr />
    </section>
  );
};

export default About;
