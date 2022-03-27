import { myAvatar } from "./_myAvatar";
import { Link } from "react-router-dom";
import { handlerSwitchOtherPages } from "./_handlerSwitchPages";
import { useDispatch } from "react-redux";

const SectionIntro = () => {
  const dispatch = useDispatch();
  return (
    <section className="section-intro">
      <section className="section-photo">
        <img className="intro-photo" src={myAvatar} alt="Luan says hi!" />
        <section className="border-photo"></section>
      </section>
      <section className="intro-details">
        <h1 className="intro-title">
          Short story about me, my mission, thinking and craft.
        </h1>
        <section className="intro-descriptions">
          <p className="intro-description">I want to change the world!</p>
          <p className="intro-description">
            Currently working for my startup: Cinciao.com, which allows
            celebrities to send personalized video messages to fans in Vietnam.
            Before that, I worked in the architecture and fashion industry.
          </p>
          <p className="intro-description">
            Technology always fascinates me because one great and well executed
            idea could change millions lives, unlike fashion or architecture
            where one idea could help only dozens. This is one of the reasons I
            want to switch my career path to become a software engineer.
          </p>
          <p className="intro-description">
            My name is Luan Pham. I’m passionate about creating things that
            could change the world, things that could change people's lives. I
            will do whatever it takes to make it.
          </p>
          <p className="intro-description">
            Get in touch to find the next thing together!
          </p>
        </section>
        {/* <button className="intro-btn" type="button"> */}
        {/* Get in Touch */}
        {/* </button> */}
        <Link
          className="btn btn-main"
          onClick={() => handlerSwitchOtherPages(dispatch, "contact")}
          to="/contact"
        >
          Get in Touch
        </Link>
      </section>
    </section>
  );
};
export default SectionIntro;
