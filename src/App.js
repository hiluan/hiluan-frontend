import "./styles/app.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MenuButton from "./components/MenuButton";
import Nav from "./components/Nav";
import {
  handlerSwitchHomePage,
  handlerSwitchOtherPages,
} from "./components/_handlerSwitchPages";
import Home from "./pages/PageHome";
import MyApps from "./pages/PageMyApps";
import MyDesigns from "./pages/PageMyDesigns";
import About from "./pages/PageAbout";
import Resume from "./pages/PageResume";
import Contact from "./pages/PageContact";
import PageNotFound from "./pages/PageNotFound";
import SocialLinks from "./components/SocialLinks";
import PageName from "./components/PageName";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  // when typing pathname in browser, app goes to the exact address
  useEffect(() => {
    if (location.pathname.includes("about")) {
      handlerSwitchOtherPages(dispatch, "about");
      return;
    } else if (location.pathname.includes("contact")) {
      handlerSwitchOtherPages(dispatch, "contact");
      return;
    } else if (location.pathname.includes("apps")) {
      handlerSwitchOtherPages(dispatch, "apps");
      return;
    } else if (location.pathname.includes("designs")) {
      handlerSwitchOtherPages(dispatch, "designs");
      return;
    } else if (location.pathname.includes("resume")) {
      handlerSwitchOtherPages(dispatch, "resume");
      return;
    } else {
      handlerSwitchHomePage(dispatch, "home");
      return;
    }
  }, [location.pathname]);
  return (
    <div className="App dark-mode">
      <Nav />
      <SocialLinks />
      <MenuButton />
      <PageName />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/apps" element={<MyApps />} />
        <Route path="/designs" element={<MyDesigns />} />
        <Route path="/about" element={<About />} />{" "}
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
