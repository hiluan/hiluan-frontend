const Resume = () => {
  let nIntervId;
  function startInt() {
    // check if already an interval has been set up
    if (!nIntervId) {
      nIntervId = setInterval(() => console.log("iii"), 500);
    }
  }

  function stopInt() {
    clearInterval(nIntervId);
    // release our intervalID from the variable
    nIntervId = null;
  }
  return (
    <section className="page-others page-resume">
      <button type="button" onClick={startInt}>
        start
      </button>
      <button type="button" onClick={stopInt}>
        stop
      </button>
    </section>
  );
};

export default Resume;
