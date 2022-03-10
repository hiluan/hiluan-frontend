import ReactPlayer from "react-player/youtube";

const Home = () => {
  const youtubeLink = "https://www.youtube.com/watch?v=PhtYjZ_3fTw";
  const youtubeEmbed =
    "https://www.youtube.com/embed/PhtYjZ_3fTw?controls=0&autoplay=1&loop=1&modestbranding=1&showinfo=0&fs=0";
  return (
    <section className="page-home">
      <section className="home-text">
        <h3>FULLSTACK SOFTWARE ENGINEER</h3>
        <section className="home-header">
          <h1>Hello world! </h1>
          <h1>
            I’m
            <span className="home-name"> Luan Pham</span>.
          </h1>
          <h1>Welcome to my special place! </h1>
        </section>
      </section>
      <section className="home-img">
        <ReactPlayer
          className="no-hover"
          url={youtubeLink}
          playing={true}
          loop={true}
          controls={false}
          width="100%"
          height="100%"
        />
      </section>
    </section>
  );
};

export default Home;
