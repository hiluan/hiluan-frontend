import { BiMailSend, BiPhoneCall, BiMap } from "react-icons/bi";
const Contact = () => {
  return (
    <section className="page-others page-contact fade">
      <section className="section-basicinfo">
        <ul className="info-detail-group">
          <li className="info-detail">
            <BiMailSend className="info-icon" />
            <span className="info-detail-text">
              <span className="info-detail-bold">Write Me</span>
              <span className="info-detail-regular">luan@hiluan.dev</span>
            </span>
          </li>
          <li className="info-detail">
            <BiPhoneCall className="info-icon" />
            <span className="info-detail-text">
              <span className="info-detail-bold">Call Me</span>
              <span className="info-detail-regular">+1 (513) 900 8369</span>
            </span>
          </li>
          <li className="info-detail">
            <BiMap className="info-icon" />
            <span className="info-detail-text">
              <span className="info-detail-bold">Coffee Me</span>
              <span className="info-detail-regular">San Jose, CA, USA</span>
            </span>
          </li>
        </ul>
      </section>
      <form>
        <input
          name="name"
          type="text"
          className="feedback-input"
          placeholder="Your Name"
        />
        <input
          name="email"
          type="text"
          className="feedback-input"
          placeholder="Your Email"
        />
        <textarea
          name="text"
          className="feedback-input"
          placeholder="Your Message..."
        ></textarea>

        <input type="submit" value="SUBMIT" />
      </form>
    </section>
  );
};

export default Contact;
