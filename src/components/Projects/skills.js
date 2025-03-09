import React, { useRef, useEffect } from "react";
import {
  SiC,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiPostgresql,
  SiAngular,
  SiAdonisjs,
  SiReact,
} from "react-icons/si";
import { FaJava, FaUsers, FaLightbulb, FaUserCheck } from "react-icons/fa";
import "./skills.css";

const skillsData = [
  { id: 1, icon: <SiC className="icon" />, name: "C" },
  { id: 2, icon: <SiPython className="icon" />, name: "Python" },
  { id: 3, icon: <FaJava className="icon" />, name: "Java" },
  { id: 4, icon: <SiJavascript className="icon" />, name: "JavaScript" },
  { id: 5, icon: <SiHtml5 className="icon" />, name: "HTML" },
  { id: 6, icon: <SiCss3 className="icon" />, name: "CSS" },
  { id: 7, icon: <SiMysql className="icon" />, name: "MySQL" },
  { id: 8, icon: <SiPostgresql className="icon" />, name: "PostgreSQL" },
  { id: 9, icon: <SiAngular className="icon" />, name: "Angular" },
  { id: 10, icon: <SiAdonisjs className="icon" />, name: "AdonisJS" },
  { id: 11, icon: <SiReact className="icon" />, name: "React" },
  { id: 12, icon: <FaUsers className="icon" />, name: "Team Player" },
  { id: 13, icon: <FaLightbulb className="icon" />, name: "Leadership" },
  { id: 14, icon: <FaUserCheck className="icon" />, name: "Adaptability" },
];

const Skills = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const scrollSpeed = 1.5;

    const scroll = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += scrollSpeed;

        // Reset to start when reaching the end
        if (
          carouselRef.current.scrollLeft >=
          carouselRef.current.scrollWidth / 2
        ) {
          carouselRef.current.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="skills-container">
      <h2>SKILLS</h2>
      <div className="title-line"></div>
      <div className="carousel-wrapper">
        <div className="carousel" ref={carouselRef}>
          {[...skillsData, ...skillsData].map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="icon">{skill.icon}</div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
