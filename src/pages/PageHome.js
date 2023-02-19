import ReactPlayer from "react-player/youtube";
import { useSelector } from "react-redux";
import Typewriter from "../components/_typeWriter";

const Home = () => {
  const isMobileMenuActive = useSelector(
    (state) => state.ultilities.isMobileMenuActive
  );

  return (
    <section
      className={`page-home fade ${isMobileMenuActive ? "page-inactive" : ""}`}
    >
      <section className="home-text">
        <section className="home-header">
          <div
            className="typewrite"
            data-type={`["Hi! I'm Luan.", "I'm a Full-Stack Software Engineer.", "Welcome to my playground, where the Wi-Fi is weak, but the company is strong :)."]`}
            data-period="2000"
          ></div>
          <Typewriter />
        </section>
      </section>

      <div />
      <section
        className="home-img"
        dangerouslySetInnerHTML={{
          __html: `<video className="no-hover" width="100%"
                  height="100%" autoplay loop muted playsinline>
                    <source src='/IntroVid.mp4' type="video/mp4" />
                  </video>`,
        }}
      ></section>
      <section className="home-subtitle">
        <p>
          I single-handedly developed an architectural concept for a mixed-use
          residential and commercial complex located in Vienna, taking it from
          scratch to this animation.
        </p>
      </section>
    </section>
  );
};

export default Home;
