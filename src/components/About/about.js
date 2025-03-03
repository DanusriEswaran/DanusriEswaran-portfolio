import React, { useState } from "react";
import "./about.css";
import myimage from "../../assets/myimage.jpg";
import { FaDownload } from "react-icons/fa";
import resume from "../../assets/resume.pdf";
import { FaMapMarkerAlt, FaLinkedin, FaInstagram } from "react-icons/fa";

const About = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <section id="about">
      <div className="about-container">
        <div
          className="image-container"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className={`image-container ${hovered ? "hide-image" : ""}`}>
            <img src={myimage} alt="My Profile" />
          </div>
          <div className={`hover-info ${hovered ? "show-info" : "hide-info"}`}>
            <div className="info-item fade-up">
              <FaMapMarkerAlt /> <span>Coimbatore, TN</span>
            </div>
            <div className="info-item fade-up">
              <FaLinkedin />
              <a
                href="https://www.linkedin.com/in/danusri-eswaran-19647a226/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <div className="info-item fade-up">
              <FaInstagram />
              <a
                href="https://www.instagram.com/__danusri__/?igsh=cXBiYm9qa2I3YTZ4#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="about-content">
          <h2>ABOUT ME</h2>
          <hr />
          <br />
          <p>
            I'm a driven and passionate student with an interest in technology
            and innovation. I have established a solid core of programming and
            problem-solving skills through practical projects and ongoing
            learning. I work best in fast-paced, team-based settings where I can
            bring new ideas and expand my abilities, always looking for the next
            challenge.
          </p>
          <a href={resume} download className="resume-btn">
            <FaDownload /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
