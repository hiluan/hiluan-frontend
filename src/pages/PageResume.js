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

const TechSkill = (props) => {
  const skillArr = props.skill.split("---");
  const skillName = skillArr[0];
  const skillImg = skillArr[1];

  return (
    <li className="skill-group">
      <img src={skillImg} alt={skillName} />
      <span>{skillName}</span>
    </li>
  );
};

const techLanguages = [
  "JavaScript---https://img.stackshare.io/service/1209/javascript.jpeg",
  "HTML---https://img.stackshare.io/service/2538/kEpgHiC9.png",
  "CSS---https://img.stackshare.io/service/6727/css.png",
];

const techToolsFrameworks = [
  "React.JS---https://img.stackshare.io/service/1020/OYIaJ1KK.png",
  "Redux---https://img.stackshare.io/service/4074/13142323.png",
  "Node.JS---https://img.stackshare.io/service/1011/n1JRsFeB_400x400.png",
  "React Native---https://img.stackshare.io/service/2699/KoK6gHzp.jpg",
  "MongoDB---https://img.stackshare.io/service/1030/leaf-360x360.png",
  "Express.JS---https://img.stackshare.io/service/1163/hashtag.png",
  "Sass---https://img.stackshare.io/service/1171/jCR2zNJV.png",
  "Heroku---https://img.stackshare.io/service/133/3wgIDj3j.png",
  "Git---https://img.stackshare.io/service/1046/git.png",
  "API’s---https://alexanderfo.com/wp-content/uploads/2019/12/1139px-Cloud-API-Logo.svg_.png",
  "OOP---https://miro.medium.com/max/300/0*goJuBKoyL-zZX4RB.png",
  "Web Accessibility---https://www.logolynx.com/images/logolynx/1b/1bbc6b02ac7a0866d405eb3f9820e14b.png",
  "Shopify---https://img.stackshare.io/service/266/xDoyHgZW_400x400.png",
];

const designTools = [
  "Adobe Photoshop---https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_Mobile_icon.svg/246px-Adobe_Photoshop_Mobile_icon.svg.png",
  "Adobe InDesign---https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/4_Indesign_Adobe_logo_logos-512.png",
  "Adobe XD---https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/22b74bf9-830b-4bad-88ee-871368b6f6a3.png",
];
const techSkills = [
  "React.JS---https://img.stackshare.io/service/1020/OYIaJ1KK.png",
  "Redux---https://img.stackshare.io/service/4074/13142323.png",
  "Node.JS---https://img.stackshare.io/service/1011/n1JRsFeB_400x400.png",
  "JavaScript---https://img.stackshare.io/service/1209/javascript.jpeg",
  "HTML---https://img.stackshare.io/service/2538/kEpgHiC9.png",
  "CSS---https://img.stackshare.io/service/6727/css.png",
  "React Native---https://img.stackshare.io/service/2699/KoK6gHzp.jpg",
  "MongoDB---https://img.stackshare.io/service/1030/leaf-360x360.png",
  "Express.JS---https://img.stackshare.io/service/1163/hashtag.png",
  "Sass---https://img.stackshare.io/service/1171/jCR2zNJV.png",
  "Heroku---https://img.stackshare.io/service/133/3wgIDj3j.png",
  "Git---https://img.stackshare.io/service/1046/git.png",
  "API’s---https://alexanderfo.com/wp-content/uploads/2019/12/1139px-Cloud-API-Logo.svg_.png",
  "OOP---https://miro.medium.com/max/300/0*goJuBKoyL-zZX4RB.png",
  "Web Accessibility---https://www.logolynx.com/images/logolynx/1b/1bbc6b02ac7a0866d405eb3f9820e14b.png",
  "Shopify---https://img.stackshare.io/service/266/xDoyHgZW_400x400.png",

  "Adobe Photoshop---https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_Mobile_icon.svg/246px-Adobe_Photoshop_Mobile_icon.svg.png",
  "Adobe InDesign---https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/4_Indesign_Adobe_logo_logos-512.png",
  "Adobe XD---https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/22b74bf9-830b-4bad-88ee-871368b6f6a3.png",
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
            <section className="resume-skills-container">
              <h3 className="h3-bold">Languages</h3>
              <ul className="resume-skills">
                {techLanguages.map((skill) => (
                  <TechSkill skill={skill} key={skill} />
                  // <span>{skill}</span>
                ))}
              </ul>
            </section>
            <section className="resume-skills-container">
              <h3 className="h3-bold">Tools / Frameworks</h3>
              <ul className="resume-skills">
                {techToolsFrameworks.map((skill) => (
                  <TechSkill skill={skill} key={skill} />
                  // <span>{skill}</span>
                ))}
              </ul>
            </section>
            <section className="resume-skills-container">
              <h3 className="h3-bold">Design Tools</h3>

              <ul className="resume-skills">
                {designTools.map((skill) => (
                  <TechSkill skill={skill} key={skill} />
                  // <span>{skill}</span>
                ))}
              </ul>
            </section>
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
