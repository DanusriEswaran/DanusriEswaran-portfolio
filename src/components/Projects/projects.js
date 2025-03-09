import React from "react";
import "./projects.css";
import fileZipperImg from "../../assets/file-zipper.jpg";
import cloudStorageImg from "../../assets/secure-cloud.jpg";
import cinemaImg from "../../assets/cinema-suggestions.jpg";
import handGesture from "../../assets/hand-gesture.jpg";
import Skills from "../Projects/skills";

const projects = [
  {
    title: "File Zipper",
    description:
      "A file compression technique using Huffman coding in Python to efficiently compress and decompress files while storing and retrieving data.",
    tech: ["Python", "HuffmanCoding"],
    image: fileZipperImg,
  },
  {
    title: "Secure Cloud Storage",
    description:
      "A web-based platform for users to upload, store, encrypt, and manage files with user authentication and secure remote access.",
    tech: ["Flask", "MySQL", "FTPLib", "HTML, CSS, JS"],
    image: cloudStorageImg,
  },
  {
    title: "Cinema Suggestions",
    description:
      "Developed a collaborative filtering movie recommendation system using KNN, combining user ratings and tags for better recommendations.",
    tech: ["Python", "Pandas", "PowerBI"],
    image: cinemaImg,
  },
  {
    title: "Hand Gesture Recognition",
    description:
      "Developed a machine learning model with TensorFlow and OpenCV to accurately identify and classify hand gestures.",
    tech: ["TensorFlow", "Keras", "OpenCV", "NumPy"],
    image: handGesture,
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>PROJECTS</h2>
      <div className="title-line"></div>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <h3>{project.title}</h3>
              </div>
              <div className="flip-card-back">
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tag, idx) => (
                    <span key={idx} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Skills />
    </section>
  );
};

export default Projects;
