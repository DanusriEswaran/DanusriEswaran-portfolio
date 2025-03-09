import React from "react";
import "./milestones.css";

import researchBg from "../../assets/researchPaper.jpg";
import compressionImg from "../../assets/compression.jpg";
import cloudDataImg from "../../assets/cloudData.jpeg";
import leadershipBg from "../../assets/leadership.jpg";
import datalyticsImg from "../../assets/datalytics.jpeg";
import FossImg from "../../assets/Foss.jpeg";
import certificateImg from "../../assets/certificate.jpg";
import algorithmImg from "../../assets/algorithms.jpeg";

const milestones = [
  {
    category: "RESEARCH WORKS",
    image: researchBg,
    items: [
      {
        title: "Analysis on Text Compression Algorithms",
        description:
          "This study compares Huffman Coding, LZ77, and Deflate for text compression, highlighting their efficiency and the combined approach's effectiveness for large datasets.",
        link: "https://ieeexplore.ieee.org/abstract/document/10290181",
        image: compressionImg,
      },
      {
        title: "Enhancing Energy Efficiency in Cloud Data Centers",
        description:
          "This study uses PSO to optimize resource allocation in cloud data centers, reducing energy consumption by 38.71% while maintaining performance.",
        link: "https://thegrenze.com/index.php?display=page&view=journalabstract&absid=2709&id=8",
        image: cloudDataImg,
      },
    ],
  },
  {
    category: "ROLES & RESPONSIBILITIES",
    image: leadershipBg,
    items: [
      {
        title: "Secretary - FOSS(Free and Open Source) Club",
        description:
          "Led club operations, organized events, and managed overall activities.",
        linkedin:
          "https://www.linkedin.com/company/foss-cit/posts/?feedView=all",
        image: FossImg,
      },
      {
        title: "Editor - Datalytics Club",
        description:
          "Created posters, managed social media, and oversaw publications.",
        linkedin:
          "https://www.linkedin.com/company/datalyticscit/posts/?feedView=all",
        image: datalyticsImg,
      },
    ],
  },
  {
    category: "CERTIFICATION",
    image: certificateImg,
    items: [
      {
        title: "Fundamental Algorithms: Design and Analysis",
        description:
          "Certified in fundamental algorithm design and analysis, focusing on efficiency and optimization.",
        image: algorithmImg,
      },
    ],
  },
];

const Milestones = () => {
  return (
    <section id="milestones">
      <div className="milestones-container">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className="milestone-overlay"
            style={{ backgroundImage: `url(${milestone.image})` }}
          >
            <div className="milestone-content">
              <h2>{milestone.category}</h2>
              <ul>
                {milestone.items.map((item, idx) => (
                  <li key={idx}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="milestone-image"
                    />
                    <div className="milestone-text">
                      <strong>{item.title}</strong>
                      {item.description && <p>{item.description}</p>}
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Know more
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Milestones;
