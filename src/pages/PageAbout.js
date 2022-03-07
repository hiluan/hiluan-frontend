import SectionIntro from "../components/PageAbout-SectionIntro";
import SectionBasicInfo from "../components/PageAbout-SectionBasicInfo";

const About = () => {
  return (
    <section className="page-others page-about">
      <SectionIntro />
      <hr />
      <SectionBasicInfo />
      <hr />
    </section>
  );
};

export default About;
