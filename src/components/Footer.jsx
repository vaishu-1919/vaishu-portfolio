import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <h2 className="footer-logo">Vaishnavi Dudyala</h2>

        <p className="footer-role">Frontend Developer</p>

        <p className="footer-description">
          Creating responsive and user-friendly web applications with modern technologies.
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="social-icons">

          <a href="https://github.com/vaishu-1919" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/dudyala-vaishnavi-9a5b74259" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>

          <a href="mailto:yshu190519@gmail.com">
            <FaEnvelope />
          </a>

        </div>

        <hr />

        <p className="copyright">
          © 2026 Vaishnavi Dudyala. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;