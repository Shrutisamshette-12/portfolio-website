import profile from "../assets/profile.jpg";
import resume from "../assets/resume.pdf";

import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <h3>Hello 👋</h3>

        <h1>I'm Shruti Samshette</h1>

        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            2000,
            "AI & Data Science Student",
            2000,
            "React Developer",
            2000,
            "Problem Solver",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="typing"
        />

        <p>
          Passionate about building modern web applications using the MERN
          Stack, solving DSA problems, and exploring Artificial Intelligence &
          Data Science.
        </p>

        <div className="hero-buttons">
          <a href={resume} download>
            <button>Download Resume</button>
          </a>

          <a href="#projects">
            <button>View Projects</button>
          </a>
        </div>

        <div className="social-icons">
          <a
            href="https://github.com/YOUR_GITHUB_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/shruti-samshette-a8897b360/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="hero-right">
        <img src={profile} alt="Shruti Samshette" />
      </div>
    </section>
  );
}

export default Hero;