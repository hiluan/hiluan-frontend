// import ReactPlayer from "react-player/youtube";
import { useSelector } from "react-redux";

const Home = () => {
  const isMobileMenuActive = useSelector(
    (state) => state.ultilities.isMobileMenuActive
  );
//   const youtubeLink = "https://www.youtube.com/watch?v=PhtYjZ_3fTw";
//   const youtubeEmbed =
//     "https://www.youtube.com/embed/PhtYjZ_3fTw?controls=0&autoplay=1&loop=1&modestbranding=1&showinfo=0&fs=0";
  return (
    <section
      className={`page-home fade ${isMobileMenuActive ? "page-inactive" : ""}`}
    >
      <section className="home-text">
        <h3>FULLSTACK SOFTWARE ENGINEER</h3>
        <section className="home-header">
          <h1>
            Hi, I’m
            <span className="home-name"> Luan</span>.
          </h1>
          <h1>Welcome to my world!</h1>
        </section>
      </section>
{/*        <section className="home-bg-img fadeOut">
         <img
           src="https://i.ibb.co/PDdg9CY/hiluan-vienna-project.jpg"
           alt="vienna project - architectural design "
         />
       </section>*/}
      <section
        className="home-img"
        dangerouslySetInnerHTML={{
          __html: `<video className="no-hover" width="100%"
                  height="100%" autoplay loop muted playsinline>
                    <source src='/IntroVid.mp4' type="video/mp4" />
                  </video>`,
        }}
      >
        {/* <ReactPlayer
          className="no-hover"
          url={youtubeLink}
          playing={true}
          loop={true}
          controls={false}
          width="100%"
          height="100%"
        /> 
//         <video
//           className="no-hover"
//           width="100%"
//           height="100%"
//           loop
//           autoPlay
//           muted
//         >
//           <source src="/IntroVid.mp4" type="video/mp4" />
//         </video>*/}
      </section>
      <section className="home-subtitle">
        <p>
          This is an architectural concept of a residential and commercial
          complex, located in Vienna, I developed from scratch to this
          animation, all by myself.
        </p>
      </section>
    </section>
  );
};

export default Home;
