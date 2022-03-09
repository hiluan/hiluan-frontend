import { myAvatar } from "./_myAvatar";

const SectionIntro = () => {
  return (
    <section className="section-intro">
      <section className="section-photo">
        <img className="intro-photo" src={myAvatar} alt="Luan says hi!" />{" "}
        <section className="border-photo"></section>
      </section>
      <section className="intro-details">
        <h1 className="intro-title">
          Short story intro me, my mission, thinking and craft.
        </h1>
        <section className="intro-descriptions">
          <p className="intro-description">I love answers! </p>
          <br />
          <p className="intro-description">
            Currently the Chief Operating Officer of Cinciao.com and I am always
            thinking about code and this passion often leads me to solve my
            coding problem, while I’m jogging, playing guitar, watching physics
            documentaries, or cooking fajitas for breakfast. I'll figure out the
            answer then rush to my computer to see it work.
          </p>
          <br />
          <p className="intro-description">
            My name is Shawn Charles. I’m a passionate child of parents who
            emigrated from Guyana, passionate about creating community within
            the tech space, And a passionate software engineer who will do
            whatever it takes to find an answer.
          </p>
          <br />
          <p className="intro-description">
            Get in touch to find the next answer together!
          </p>
        </section>
        {/* <button className="intro-btn" type="button"> */}
        {/* Get in Touch */}
        {/* </button> */}
        <a className="btn btn-main" href="/contact">
          Get in Touch
        </a>
      </section>
    </section>
  );
};
export default SectionIntro;
