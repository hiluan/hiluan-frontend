import axios from "axios";
import { useState } from "react";
import { BiMailSend, BiPhoneCall, BiMap } from "react-icons/bi";
import { useSelector } from "react-redux";
const Contact = () => {
  const isMobileMenuActive = useSelector(
    (state) => state.ultilities.isMobileMenuActive
  );
  const initialForm = {
    name: "",
    email: "",
    message: "",
  };
  const herokuAPI = process.env.REACT_APP_HEROKU_API;
  const [form, setForm] = useState(initialForm);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  // These methods will update the state properties.
  const updateForm = (value) => {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  };

  // This function will handle the submission.
  const onSubmit = async (e) => {
    e.preventDefault();
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newContact = { ...form };
    try {
      await axios.post(`${herokuAPI}/form/add`, newContact);
    } catch (error) {
      console.log(error);
      return;
    }
    setForm(initialForm);
    setIsFormSubmitted(true);
  };
  return (
    <section
      className={`page-others page-contact fade ${
        isMobileMenuActive ? "page-inactive" : ""
      }`}
    >
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
      {!isFormSubmitted ? (
        <form onSubmit={onSubmit}>
          <input
            onChange={(e) => updateForm({ name: e.target.value })}
            name="name"
            type="text"
            className="feedback-input"
            // value={form.name}
            placeholder="Your Name"
          />
          <input
            onChange={(e) => updateForm({ email: e.target.value })}
            name="email"
            type="text"
            className="feedback-input"
            placeholder="Your Email"
          />
          <textarea
            onChange={(e) => updateForm({ message: e.target.value })}
            name="text"
            className="feedback-input"
            placeholder="Your Message..."
          ></textarea>

          <input type="submit" value="SUBMIT" />
        </form>
      ) : (
        <section className="section-basicinfo">
          <h3>Thank you!</h3>
          <p>
            Your message has been sent to me. I will get back to you as soon as
            possible.
          </p>
          <p>
            Should you need my immediate attention, please text or call me. I
            appreciate it!
          </p>
          <input
            onClick={() => setIsFormSubmitted(false)}
            type="button"
            value="Send Another Message"
          />
        </section>
      )}
    </section>
  );
};

export default Contact;
