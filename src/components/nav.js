import hiluan from "../img/hiluan.jpg";
import {
  FaAppStore,
  FaFontAwesomeAlt,
  FaRegAddressCard,
  FaPalette,
  FaRegStar,
  FaRegCommentDots,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { isHomePageAction } from "../store/isHomePageAction";
import { isIconActiveAction } from "../store/isIconActiveAction";

const Nav = () => {
  const dispatch = useDispatch();
  const isHomePage = useSelector((state) => state.ultilities.isHomePage);
  const iconActive = useSelector((state) => state.ultilities.iconActive);

  const handlerSwitchHomePage = (icon) => {
    dispatch(isHomePageAction(true));
    dispatch(isIconActiveAction(icon));
  };
  const handlerSwitchOtherPages = (icon) => {
    dispatch(isHomePageAction(false));
    dispatch(isIconActiveAction(icon));
  };
  return (
    <nav className={isHomePage ? "nav-home-page" : "nav-other-pages"}>
      <section className="nav-header">
        <img id="nav-img" className="nav-img" src={hiluan} alt="" />
        <h1 className="nav-name">Luan Pham</h1>
        {isHomePage && (
          <a className="btn main-btn nav-download-resume" href="">
            Download My Resume
          </a>
        )}
      </section>
      <ul className="nav-list">
        <li className="nav-list-item">
          <Link
            className={
              iconActive === "home"
                ? "icon-active nav-list-icon"
                : "nav-list-icon"
            }
            onClick={() => handlerSwitchHomePage("home")}
            to="/"
          >
            <FaFontAwesomeAlt />
          </Link>
          <Link
            className="nav-list-text"
            onClick={() => handlerSwitchHomePage("home")}
            to="/"
          >
            <span>home</span>
          </Link>
        </li>
        <li className="nav-list-item">
          <Link
            className={
              iconActive === "myApps"
                ? "icon-active nav-list-icon"
                : "nav-list-icon"
            }
            onClick={() => handlerSwitchOtherPages("myApps")}
            to="/apps"
          >
            <FaAppStore />
          </Link>
          <Link
            className="nav-list-text"
            onClick={() => handlerSwitchOtherPages("myApps")}
            to="/apps"
          >
            <span>my apps</span>
          </Link>
        </li>
        <li className="nav-list-item">
          <Link
            className={
              iconActive === "myDesigns"
                ? "icon-active nav-list-icon"
                : "nav-list-icon"
            }
            onClick={() => handlerSwitchOtherPages("myDesigns")}
            to="/designs"
          >
            <FaPalette />
          </Link>
          <Link
            className="nav-list-text"
            onClick={() => handlerSwitchOtherPages("myDesigns")}
            to="/designs"
          >
            <span>my designs</span>
          </Link>
        </li>
        <li className="nav-list-item">
          <Link
            className={
              iconActive === "aboutMe"
                ? "icon-active nav-list-icon"
                : "nav-list-icon"
            }
            onClick={() => handlerSwitchOtherPages("aboutMe")}
            to="/about"
          >
            <FaRegStar />
          </Link>
          <Link
            className="nav-list-text"
            onClick={() => handlerSwitchOtherPages("aboutMe")}
            to="/about"
          >
            <span>about me</span>
          </Link>
        </li>
        <li className="nav-list-item">
          <Link
            className={
              iconActive === "resume"
                ? "icon-active nav-list-icon"
                : "nav-list-icon"
            }
            onClick={() => handlerSwitchOtherPages("resume")}
            to="/resume"
          >
            <FaRegAddressCard />
          </Link>
          <Link
            className="nav-list-text"
            onClick={() => handlerSwitchOtherPages("resume")}
            to="/resume"
          >
            <span>resume</span>
          </Link>
        </li>
        <li className="nav-list-item">
          <Link
            className={
              iconActive === "contact"
                ? "icon-active nav-list-icon"
                : "nav-list-icon"
            }
            onClick={() => handlerSwitchOtherPages("contact")}
            to="/contact"
          >
            <FaRegCommentDots />
          </Link>
          <Link
            className="nav-list-text"
            onClick={() => handlerSwitchOtherPages("contact")}
            to="/contact"
          >
            <span>contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
