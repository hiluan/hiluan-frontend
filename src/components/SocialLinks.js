import { IoLogoLinkedin, IoLogoGithub, IoLogoTwitter } from "react-icons/io";

const SocialLinks = () => {
  return (
    <section id="social-links">
      <a href="https://www.linkedin.com/in/hiluan/">
        <IoLogoLinkedin className="social-icon" />
      </a>
      <a href="https://github.com/hiluan">
        <IoLogoGithub className="social-icon" />
      </a>
      <a href="https://twitter.com/hiluan_">
        <IoLogoTwitter className="social-icon" />
      </a>
    </section>
  );
};

export default SocialLinks;
