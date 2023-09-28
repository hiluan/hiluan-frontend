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
          {/* <p className="intro-description">
            Currently working for my startup: Cinciao.com, which allows
            celebrities to send personalized video messages to fans in Vietnam.
            Before that, I worked in the architecture and fashion industry.
          </p> */}
          <p className="intro-description">
            Technology has this incredible way of totally captivating me. I
            mean, think about it: one brilliant, impeccably executed tech idea
            has the potential to rock millions of lives, unlike fashion or
            architecture, where you're mostly impacting just a handful. And this
            is precisely why I'm all fired up about transitioning into the world
            of software engineering.
          </p>
          <p className="intro-description">
            I'm Luan Pham, and I live for creating stuff that can rock the
            world, that can truly transform people's lives. I'm telling you,
            I'll move mountains to make it happen.
          </p>
          <p className="intro-description">
            Hit me up, let's team up and find that next game-changer, together!"
          </p>
        </section>
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
