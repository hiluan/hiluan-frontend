import { useSelector } from "react-redux";

const switchPages = (value) => {
  switch (value) {
    case "home":
      return <h3 className="page-name">Home</h3>;
    case "apps":
      return <h3 className="page-name">My Apps</h3>;
    case "designs":
      return <h3 className="page-name">My Designs</h3>;
    case "about":
      return <h3 className="page-name">About Me</h3>;
    case "resume":
      return <h3 className="page-name">My Résumé</h3>;
    case "contact":
      return <h3 className="page-name">Contact Me</h3>;
    default:
      return <h3 className="page-name"></h3>;
  }
};

const PageName = () => {
  const iconActive = useSelector((state) => state.ultilities.iconActive);
  return (
    <section className="page-name-container">{switchPages(iconActive)}</section>
  );
};

export default PageName;
