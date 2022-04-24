import { useSelector } from "react-redux";
import { workExperience } from "../components/_infoResume";

const WorkExp = (props) => (
  <section className="exp-info">
    <section className="exp-title">
      <h3 className="h3-bold">{props.exp.position}</h3>
      <h3>
        <a href={`https://${props.exp.website}`}>{props.exp.company}</a>
      </h3>
    </section>
    <p className="exp-description">{props.exp.companyDescription}</p>
    <p className="exp-timeLocation">
      {props.exp.time} | {props.exp.location}
    </p>
    <ul className="exp-tasks">
      {props.exp.tasks.map((task) => (
        <li className="exp-task">{task}</li>
      ))}
    </ul>

    <p className="exp-contactPerson">{props.exp.contactPerson}</p>
  </section>
);
const techSkills = [
  "React.JS",
  "Redux",
  "Node.JS",
  "React Native",
  "JavaScript",
  "MongoDB",
  "Express.JS",
  "HTML",
  "CSS",
  "Sass",
  "Git",
  "API’s",
  "OOP",
  "Web Accessibility",
  "Shopify",
  "Adobe Photoshop",
  "Adobe InDesign",
  "Adobe XD",
];

const Resume = () => {
  const experienceList = () => {
    return workExperience.map((exp) => {
      return <WorkExp exp={exp} key={exp.company} />;
    });
  };
  const isMobileMenuActive = useSelector(
    (state) => state.ultilities.isMobileMenuActive
  );
  return (
    <section
      className={`page-others page-resume fade ${
        isMobileMenuActive ? "page-inactive" : ""
      }`}
    >
      <section className="resume-info">
        <section>
          <section className="resume-title">
            <h2>work experience</h2>
            <div></div>
          </section>
          <section className="resume-body">{experienceList()}</section>
        </section>
      </section>
      <section className="resume-info">
        <section className="resume-section">
          <section className="resume-title">
            <h2>technical skills</h2>
            <div></div>
          </section>
          <section className="resume-body">
            <h4 className="resume-skills">
              {techSkills.map((skill) => (
                <span>{skill}</span>
              ))}
            </h4>
          </section>
        </section>
        <section className="resume-section">
          <section className="resume-title">
            <h2>education</h2>
            <div></div>
          </section>
          <section className="resume-body">
            {/* <section className="exp-title">
              <h3 className="h3-bold">HCMC University of Architecture</h3>
              <h3>Bachelor Degree</h3>
            </section> */}
            <section className="resume-school">
              <h3 className="h3-bold">Master Degree</h3>
              <h3>
                <a href="https://www.fh-kaernten.at/en/">
                  Carinthia University of Applied Sciences
                </a>
              </h3>
            </section>
          </section>
        </section>
        {/* <section className="resume-section">
          <section className="resume-title">
            <h2>organizations</h2>
            <div></div>
          </section>
          <section className="resume-body">
            <h3>
              <a href="https://www.facebook.com/groups/munich.international.friends/">
                Munich International Friends
              </a>
            </h3>
            <p className="">
              Organizing meetups, games, indoor and outdoor activities for
              international expats and friends in Munich, Germany.
            </p>
          </section>
        </section> */}
        <section className="resume-section">
          <section className="resume-title">
            <h2>languages</h2>
            <div></div>
          </section>
          <section className="resume-body">
            <ul className="resume-languages">
              <li>
                <span>Vietnamese</span>
                <p className="resume-language">
                  Native or Bilingual Proficiency
                </p>
              </li>
              <li>
                <span>English</span>
                <p className="resume-language">Full Professional Proficiency</p>
              </li>
              <li>
                <span>German</span>
                <p className="resume-language">
                  Professional Working Proficiency
                </p>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Resume;
