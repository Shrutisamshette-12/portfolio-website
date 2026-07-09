import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">

        <h2>Shruti Samshette</h2>

        <p>
          Aspiring Full Stack Developer | AI & Data Science Student
        </p>

        <div className="footer-contact">

          <p>
            <FaEnvelope /> shrutisamshette05@gmail.com
          </p>

          <p>
            <FaPhone /> +91 XXXXX XXXXX
          </p>

          <p>
            <FaMapMarkerAlt /> Pune, Maharashtra
          </p>

        </div>

        <div className="footer-links">

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={28} />
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={28} />
          </a>

          <a href="mailto:shrutisamshette05@gmail.com">
            <FaEnvelope size={28} />
          </a>

        </div>

        <hr />

        <p className="copyright">
          © 2026 Shruti Samshette. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;