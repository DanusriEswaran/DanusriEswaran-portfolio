import React from "react";
import "./projects.css";
import fileZipperImg from "../../assets/file-zipper.jpg";
import cloudStorageImg from "../../assets/secure-cloud.jpg";
import cinemaImg from "../../assets/cinema-suggestions.jpg";
import imageIdentifierImg from "../../assets/image-identifier.jpg";

const projects = [
  {
    title: "File Zipper",
    description:
      "A file compression technique using Huffman coding in Python to efficiently compress and decompress files while storing and retrieving data.",
    tech: ["#Python"],
    image: fileZipperImg,
  },
  {
    title: "Secure Cloud Storage",
    description:
      "Implemented robust encryption for data security, user authentication for secure logins, and efficient file handling with format validation and size restrictions.",
    tech: ["#Python", "#Flask", "#Angular"],
    image: cloudStorageImg,
  },
  {
    title: "Cinema Suggestions",
    description:
      "Developed a collaborative filtering movie recommendation system using KNN, combining user ratings and tags for better recommendations.",
    tech: ["#Python", "#Pandas", "#PowerBI"],
    image: cinemaImg,
  },
  {
    title: "Image Identifier",
    description:
      "Enabled exporting email analytics data to Excel for better reporting.",
    tech: ["#SheetJS", "#React", "#Express.js"],
    image: imageIdentifierImg,
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
    </section>
  );
};

export default Projects;
