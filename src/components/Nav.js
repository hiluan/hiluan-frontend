import {
  FaAppStore,
  FaRegAddressCard,
  FaRegStar,
  FaRegCommentDots,
} from "react-icons/fa";
import { BiHomeSmile } from "react-icons/bi";
import { GiPalette } from "react-icons/gi";
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
  const resume = "./";

  const isHomePage = useSelector((state) => state.ultilities.isHomePage);
  const iconActive = useSelector((state) => state.ultilities.iconActive);
  const isMobileMenuActive = useSelector(
    (state) => state.ultilities.isMobileMenuActive
  );

  return (
    <nav
      className={`fade ${isMobileMenuActive ? "mobile-menu-active" : ""} ${
        isHomePage ? "nav-home-page" : "nav-other-pages"
      }`}
    >
      <section className="nav-header">
        <img id="nav-img" className="nav-img" src={myAvatar} alt="" />
        <h1 className="nav-name">Luan Pham</h1>
        <h3>- MArch -</h3>
        <a
          target="_blank"
          className={`btn btn-main ${isHomePage ? "nav-download-resume" : ""} ${
            isMobileMenuActive ? "nav-download-resume" : ""
          }`}
          // href="https://drive.google.com/file/d/1MpjCmSG-xJmgMEwhVqoepIVGo5lveSLy/view?usp=sharing"
          href="https://drive.google.com/file/d/1MpjCmSG-xJmgMEwhVqoepIVGo5lveSLy/view?usp=sharing"
        >
          Download My Resume
        </a>
      </section>
      <ul className="nav-list">
        <li className="nav-list-item">
          <Link
            className={`nav-list-icon ${
              iconActive === "home" ? "icon-active" : ""
            }`}
            onClick={() =>
              handlerSwitchHomePage(
                dispatch,
                "home"
                // nIntervId
              )
            }
            to="/"
          >
            <BiHomeSmile className="menu-icon" />
          </Link>
          <Link
            className="nav-list-text"
            onClick={() =>
              handlerSwitchHomePage(
                dispatch,
                "home"
                // nIntervId
              )
            }
            to="/"
          >
            <span>home</span>
          </Link>
        </li>
        <li className="nav-list-item">
          <Link
            className={`nav-list-icon ${
              iconActive === "myApps" ? "icon-active" : ""
            }`}
            onClick={() => handlerSwitchOtherPages(dispatch, "myApps")}
            to="/apps"
          >
            <FaAppStore className="menu-icon" />
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
            className={`nav-list-icon ${
              iconActive === "myDesigns" ? "icon-active" : ""
            }`}
            onClick={() =>
              handlerSwitchOtherPages(
                dispatch,
                "myDesigns"
                // nIntervId
              )
            }
            to="/designs"
          >
            <GiPalette className="menu-icon" />
          </Link>
          <Link
            className="nav-list-text"
            onClick={() =>
              handlerSwitchOtherPages(
                dispatch,
                "myDesigns"
                // nIntervId
              )
            }
            to="/designs"
          >
            <span>my designs</span>
          </Link>
        </li>
        <li className="nav-list-item">
          <Link
            className={`nav-list-icon ${
              iconActive === "aboutMe" ? "icon-active" : ""
            }`}
            onClick={() => handlerSwitchOtherPages(dispatch, "aboutMe")}
            to="/about"
          >
            <FaRegStar className="menu-icon" />
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
            className={`nav-list-icon ${
              iconActive === "resume" ? "icon-active" : ""
            }`}
            onClick={() => handlerSwitchOtherPages(dispatch, "resume")}
            to="/resume"
          >
            <FaRegAddressCard className="menu-icon" />
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
            className={`nav-list-icon ${
              iconActive === "contact" ? "icon-active" : ""
            }`}
            onClick={() => handlerSwitchOtherPages(dispatch, "contact")}
            to="/contact"
          >
            <FaRegCommentDots className="menu-icon" />
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
