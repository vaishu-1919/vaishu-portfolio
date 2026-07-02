import { useState } from "react";
import "./About.css";

import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import resume from "../assets/resume.pdf";

function About() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="about">
      <h1>About Me</h1>

      <p className="about-text">
        I am a passionate Frontend Developer skilled in React, JavaScript, HTML,
        CSS, and responsive web design. I enjoy building user-friendly web
        applications and continuously improving my development skills.
      </p>

      {/* Main Layout */}
      <div className="side-container">

        {/* Left Side - Projects */}
        <div className="projects-box">
          <h2 className="box-title">Projects</h2>

          <div className="project-card">
            <img
              src={project1}
              alt="Major Project"
              onClick={() => setSelectedImg(project1)}
            />
            <h3>Major Project - Gas Leakage Detection</h3>
            <p>Sensor-based system for gas leakage detection and alert generation.</p>
          </div>

          <div className="project-card">
            <img
              src={project2}
              alt="Mini Project"
              onClick={() => setSelectedImg(project2)}
            />
            <h3>Mini Project - Road Accident Prediction</h3>
            <p>Machine learning based road accident prediction system.</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="right-side">

          {/* Achievements */}
          <div className="small-box">
            <h2 className="box-title">🏆 Achievements</h2>

            <ul className="achievement-list">
              <li>Volunteer Head – VJIT College Club</li>
              <li>Organized and coordinated multiple college events</li>
              <li>Recognized for leadership and teamwork</li>
              <li>Actively participated in technical and cultural activities</li>
            </ul>
          </div>

          {/* Resume */}
          <div className="small-box resume-box">
            <h2 className="box-title">📄 Resume</h2>

            <p>Download my latest resume below.</p>

            <a
              href={resume}
              download
              className="resume-btn"
            >
              ⬇ Download Resume
            </a>
          </div>

        </div>
      </div>

      {/* Image Preview */}
      {selectedImg && (
        <div
          className="lightbox"
          onClick={() => setSelectedImg(null)}
        >
          <img src={selectedImg} alt="Project Preview" />
        </div>
      )}
    </section>
  );
}

export default About;