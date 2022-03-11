import hiluan from "../img/hiluan.jpg";
import {
  FaAppStore,
  FaFontAwesomeAlt,
  FaRegAddressCard,
  FaPalette,
  FaRegStar,
  FaRegCommentDots,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { myAvatar } from "./_myAvatar";
import {
  handlerSwitchHomePage,
  handlerSwitchOtherPages,
} from "./_handlerSwitchPages";

const Nav = () => {
  const dispatch = useDispatch();
  const isHomePage = useSelector((state) => state.ultilities.isHomePage);
  const iconActive = useSelector((state) => state.ultilities.iconActive);

  // const handlerSwitchHomePage = (icon) => {
  //   dispatch(isHomePageAction(true));
  //   dispatch(isIconActiveAction(icon));
  // };
  // const handlerSwitchOtherPages = (icon) => {
  //   dispatch(isHomePageAction(false));
  //   dispatch(isIconActiveAction(icon));
  // };
  return (
    <nav className={isHomePage ? "nav-home-page" : "nav-other-pages"}>
      <section className="nav-header">
        <img id="nav-img" className="nav-img" src={myAvatar} alt="" />
        <h1 className="nav-name">Luan Pham</h1>
        <h3>- MArch -</h3>
        {isHomePage && (
          <a className="btn btn-main nav-download-resume" href="">
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
            onClick={() => handlerSwitchHomePage(dispatch, "home")}
            to="/"
          >
            <FaFontAwesomeAlt />
          </Link>
          <Link
            className="nav-list-text"
            onClick={() => handlerSwitchHomePage(dispatch, "home")}
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
            onClick={() => handlerSwitchOtherPages(dispatch, "myApps")}
            to="/apps"
          >
            <FaAppStore />
          </Link>
          <Link
            className="nav-list-text"
            onClick={() => handlerSwitchOtherPages(dispatch, "myApps")}
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
            onClick={() => handlerSwitchOtherPages(dispatch, "myDesigns")}
            to="/designs"
          >
            <FaPalette />
          </Link>
          <Link
            className="nav-list-text"
            onClick={() => handlerSwitchOtherPages(dispatch, "myDesigns")}
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
            onClick={() => handlerSwitchOtherPages(dispatch, "aboutMe")}
            to="/about"
          >
            <FaRegStar />
          </Link>
          <Link
            className="nav-list-text"
            onClick={() => handlerSwitchOtherPages(dispatch, "aboutMe")}
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
            onClick={() => handlerSwitchOtherPages(dispatch, "resume")}
            to="/resume"
          >
            <FaRegAddressCard />
          </Link>
          <Link
            className="nav-list-text"
            onClick={() => handlerSwitchOtherPages(dispatch, "resume")}
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
            onClick={() => handlerSwitchOtherPages(dispatch, "contact")}
            to="/contact"
          >
            <FaRegCommentDots />
          </Link>
          <Link
            className="nav-list-text"
            onClick={() => handlerSwitchOtherPages(dispatch, "contact")}
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
