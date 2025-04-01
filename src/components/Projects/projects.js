import React from "react";
import "./projects.css";
import fileZipperImg from "../../assets/file-zipper.jpg";
import cloudStorageImg from "../../assets/secure-cloud.jpg";
import Finsight from "../../assets/FinSight.jpg";
import taskManagement from "../../assets/TaskManagement.jpg";
import Skills from "../Projects/skills";

const projects = [
  {
    title: "FinSight",
    description:
      "Expanded a financial analytics system integrating real-time data processing, machine learning, and Power BI for actionable insights. Designed KPI tracking, trend analysis, and anomaly detection to enhance financial decision-making.",
    tech: ["Python", "Pandas", "PostgreSQL", "PowerBI", "Machine Learning"],
    image: Finsight,
  },
  {
    title: "Task Management",
    description:
      "An advanced task management application enabling users to create, edit, and track tasks with categories and statuses. Includes an admin dashboard for task assignment and monitoring.",
    tech: ["VueJS", "Vuetify", "AdonisJS", "PostgreSQL"],
    image: taskManagement,
  },
  {
    title: "Secure Cloud Storage",
    description:
      "A web-based platform for users to upload, store, encrypt, and manage files with user authentication and secure remote access.",
    tech: ["Python", "Flask", "MySQL", "HTML", "CSS"],
    image: cloudStorageImg,
  },
  {
    title: "File Zipper",
    description:
      "A file compression technique using Huffman coding in Python to efficiently compress and decompress files while storing and retrieving data.",
    tech: ["Python", "HuffmanCoding"],
    image: fileZipperImg,
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
