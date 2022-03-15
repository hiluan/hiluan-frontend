import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isSlidesPlayingAction } from "../store/isSlidesPlayingAction";

const Resume = () => {
  //   const [isPlaying, setIsPlaying] = useState(false);
  //   let nIntervId;
  //   function startInt() {
  //     // check if already an interval has been set up
  //     if (!nIntervId) {
  //       nIntervId = setInterval(() => console.log("iii"), 500);
  //     }
  //   }

  //   function stopInt() {
  //     clearInterval(nIntervId);
  //     // release our intervalID from the variable
  //     nIntervId = null;
  //   }

  //   const handlerSlidesPlaying = () => {
  //     if (!isPlaying) {
  //       startInt();
  //       setIsPlaying(true);
  //       console.log(isPlaying);
  //       return;
  //     } else {
  //       stopInt();
  //       setIsPlaying(false);
  //       console.log(isPlaying);
  //       return;
  //     }
  //   };

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 100);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="page-others page-resume fade">
      {/* <button type="button" onClick={handlerSlidesPlaying}>
        click
      </button>
      <button type="button" onClick={handlerSlidesPlaying}>
        stop
      </button> */}
      <header className="a-header">
        {seconds} seconds have elapsed since mounting.
      </header>
    </section>
  );
};

export default Resume;
