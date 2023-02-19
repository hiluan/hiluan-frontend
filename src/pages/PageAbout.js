<<<<<<< HEAD
import SectionIntro from "../components/PageAbout-SectionIntro";
import SectionBasicInfo from "../components/PageAbout-SectionBasicInfo";
import { handlerSwitchOtherPages } from "../components/_handlerSwitchPages";
import { useDispatch, useSelector } from "react-redux";
import infoRecommendations from "../components/_infoRecommendations";
import { GiLaurelCrown } from "react-icons/gi";

const Recommendation = (props) => {
  return (
    <section className="about-recommendation">
      <img
        src={props.rec.imgUrl}
        alt={`${props.rec.name} - ${props.rec.position}`}
      />
      <p>"{props.rec.recommendation}"</p>
      <span className="recommendation-name">{props.rec.name}</span>
      <span>{props.rec.position}</span>
      <span className="recommendation-contact">{props.rec.contact}</span>
      <span className="recommendation-laurel">
        <GiLaurelCrown />
      </span>
    </section>
  );
};

const About = () => {
  const recommendations = () => {
    return infoRecommendations.map((rec) => {
      return <Recommendation rec={rec} key={rec.name} />;
    });
  };
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
      <section className="about-recommendations">{recommendations()}</section>
    </section>
  );
};

export default About;
=======
import SectionIntro from "../components/PageAbout-SectionIntro";
import SectionBasicInfo from "../components/PageAbout-SectionBasicInfo";
import { handlerSwitchOtherPages } from "../components/_handlerSwitchPages";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import infoRecommendations from "../components/_infoRecommendations";
import { GiLaurelCrown, GiCurlyWing } from "react-icons/gi";

const Recommendation = (props) => {
  return (
    <section className="about-recommendation">
      <img
        src={props.rec.imgUrl}
        alt={`${props.rec.name} - ${props.rec.position}`}
      />
      <p>"{props.rec.recommendation}"</p>
      <span className="recommendation-name">{props.rec.name}</span>
      <span>{props.rec.position}</span>
      <span className="recommendation-contact">{props.rec.contact}</span>
      <span className="recommendation-laurel">
        {/* <GiCurlyWing className="recommendation-leftwing" /> */}
        <GiLaurelCrown />
        {/* {"    "}
        <GiCurlyWing className="recommendation-righttwing" /> */}
      </span>
    </section>
  );
};

const About = () => {
  const recommendations = () => {
    return infoRecommendations.map((rec) => {
      return <Recommendation rec={rec} key={rec.name} />;
    });
  };
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
      <section className="about-recommendations">{recommendations()}</section>
    </section>
  );
};

export default About;
>>>>>>> 949e034603fd33898c83216d7dcd5ac4a7b2d19c
