import "./styles/app.scss";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/PageHome";
import MyApps from "./pages/PageMyApps";
import MyDesigns from "./pages/PageMyDesigns";
import About from "./pages/PageAbout";
import Resume from "./pages/PageResume";
import Contact from "./pages/PageContact";

function App() {
  return (
    <div className="App dark-mode">
      <Nav />
      <Routes>
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
