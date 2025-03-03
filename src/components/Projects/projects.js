// Projects.js
import React from "react";
import "./projects.css";

const projects = [
  {
    title: "File Zipper",
    description:
      "A file compression technique using Huffman coding in Python to efficiently compress and decompress files while storing  and retrieving data.",
    tech: "Python",
  },
  {
    title: "Secure Cloud Storage",
    description:
      " Implemented robust encryption for data security, user authentication for secure logins, and efficient file handling with format validation and size restrictions.",
    tech: "Python, Flask, Angular",
  },
  {
    title: "Cinema Suggestions",
    description:
      " Implemented a collaborative filtering movie recommendation system with KNN, merging user ratings and tags. The code conducts data cleaning and aggregation, constructs a final dataset, and employs the KNN model for enhanced movie suggestions, considering both movie titles and genres",
    tech: "pYTHON, Pandas, Power BI",
  },
  {
    title: "Image Identifier",
    description:
      "Enabled exporting email analytics data to Excel for better reporting.",
    tech: "SheetJS, React, Express.js",
  },
  {
    title: "FinSight",
    description:
      "Built a tracker for monitoring the success rate of marketing campaigns.",
    tech: "API, Python, Power BI",
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
                <h3>{project.title}</h3>
              </div>
              <div className="flip-card-back">
                <p>{project.description}</p>
                <span>{project.tech}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
