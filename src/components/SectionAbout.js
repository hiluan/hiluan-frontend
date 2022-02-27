import hiluan from "../img/hiluan.jpg";

const SectionAbout = () => {
  return (
    <section className="section-main">
      <section className="section-photo">
        <img className="about-photo" src={hiluan} alt="Luan says hi!" />
      </section>
      <section className="section-about">
        <h1 className="about-title">
          Short story about me, my mission, thinking and craft.
        </h1>
        <p className="about-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          expedita a eveniet nulla excepturi, quam officia unde architecto.
          Sapiente doloribus quam debitis, vitae laboriosam quibusdam quasi
          delectus explicabo minus exercitationem!
        </p>
        <ul className="about-detail-group">
          <li className="about-detail">
            <span className="about-detail-bold">Email:</span>
            <span className="about-detail-regular">luan@hiluan.dev</span>
          </li>
          <li className="about-detail">
            <span className="about-detail-bold">Phone:</span>
            <span className="about-detail-regular">513 900 8369</span>
          </li>
          <li className="about-detail">
            <span className="about-detail-bold">Degree:</span>
            <span className="about-detail-regular">Master</span>
          </li>
          <li className="about-detail">
            <span className="about-detail-bold">Cities:</span>
            <span className="about-detail-regular">San Jose</span>
          </li>
          <li className="about-detail">
            <span className="about-detail-bold">Email:</span>
            <span className="about-detail-regular">luan@hiluan.dev</span>
          </li>
        </ul>
        <button>Get in Touch</button>
      </section>
    </section>
  );
};
export default SectionAbout;
