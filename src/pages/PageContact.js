import SectionBasicInfo from "../components/PageAbout-SectionBasicInfo";

const Contact = () => {
  return (
    <section className="page-others page-contact">
      <section className="section-basicinfo">
        <ul className="info-detail-group">
          <li className="info-detail">
            <span className="info-detail-bold">Email</span>
            <span className="info-detail-regular">: luan@hiluan.dev</span>
          </li>
          <li className="info-detail">
            <span className="info-detail-bold">Phone</span>
            <span className="info-detail-regular">: +1 (513) 900 8369</span>
          </li>
          <li className="info-detail">
            <span className="info-detail-bold">Location</span>
            <span className="info-detail-regular">: San Jose, CA, USA</span>
          </li>
        </ul>
      </section>
      <form>
        <input
          name="name"
          type="text"
          className="feedback-input"
          placeholder="Name"
        />
        <input
          name="email"
          type="text"
          className="feedback-input"
          placeholder="Email"
        />
        <textarea
          name="text"
          className="feedback-input"
          placeholder="Comment"
        ></textarea>

        <input type="submit" value="SUBMIT" />
      </form>
    </section>
  );
};

export default Contact;
