import { useSelector } from "react-redux";
import infoMyApps from "../components/_infoMyApps";

const MyApp = (props) => (
  <section className="myapp-info">
    <section>
      <section className="myapp-title">
        <h2 className="myapp-name">
          {props.app.name}:<span> {props.app.nameDetail}</span>
        </h2>
        {/* <div></div> */}
      </section>
      <h4 className="myapp-tools">
        {props.app.tools.map((tool) => (
          <span key={tool}>{tool}</span>
        ))}
      </h4>

      <p className="myapp-description">{props.app.description}</p>
    </section>
    <section>
      <a className="myapp-image" target="_blank" href={props.app.linkToApp}>
        <img
          target="_blank"
          href={props.app.linkToApp}
          src={props.app.imgUrl}
          alt={props.app.description}
        />
      </a>
    </section>
    <section>
      <a
        className="btn btn-main myapp-linkToApp"
        target="_blank"
        href={props.app.linkToApp}
      >
        View App
      </a>
      <a
        className="btn btn-main myapp-linkToApp"
        target="_blank"
        href={props.app.linkToRepo}
        style={{ marginLeft: "1rem" }}
      >
        View Repo
      </a>
    </section>
  </section>
);

const MyApps = () => {
  const isMobileMenuActive = useSelector(
    (state) => state.ultilities.isMobileMenuActive
  );
  const appList = () => {
    return infoMyApps.map((app) => {
      return <MyApp app={app} key={app.name} />;
    });
  };
  return (
    <section
      className={`page-others page-myapps fade ${
        isMobileMenuActive ? "page-inactive" : ""
      }`}
    >
      {/* <h1>My Apps</h1> */}
      {appList()}
    </section>
  );
};

export default MyApps;
