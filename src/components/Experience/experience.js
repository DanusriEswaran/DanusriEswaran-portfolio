import React, { useState, useEffect } from "react";
import "./experience.css";
import certificate from "../../assets/certificate.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faClock,
  faUser,
  faProjectDiagram,
  faCode,
  faTools,
} from "@fortawesome/free-solid-svg-icons";

const chatbotData = [
  { icon: faBuilding, question: "Company", answer: "NGP Websmart Pvt Ltd" },
  {
    icon: faClock,
    question: "Duration",
    answer: "July 2024 - Nov 2024 (5 months) ",
  },
  { icon: faUser, question: "Role", answer: "Software Developer Intern" },
  {
    icon: faProjectDiagram,
    question: "Project",
    answer:
      "Worked on enhancing an existing business email marketing application.",
  },
  {
    icon: faTools,
    question: "Work Summary",
    answer:
      "Enhanced the existing template creation feature by adding extra functionalities. Developed graphs, charts, and Excel export functionality for email performance analysis. Optimized data visualization to improve readability and insights.",
  },
  {
    icon: faCode,
    question: "Tech Stack",
    answer: "AdonisJS, JavaScript, PostgreSQL",
  },
];

const Experience = () => {
  const [index, setIndex] = useState(3);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(chatbotData.slice(0, 3));
  }, []);

  const handleNext = () => {
    if (index < chatbotData.length) {
      setMessages([...messages, chatbotData[index]]);
      setIndex(index + 1);
    }
  };

  return (
    <section id="experience">
      <div className="experience-container">
        <h2>INTERNSHIP EXPERIENCE</h2>
        <div className="title-line"></div>
        <div className="chatbot">
          <div className="chatbox">
            {messages.map((msg, i) => (
              <div key={i} className="chat-message fade-in">
                <FontAwesomeIcon icon={msg.icon} className="chat-icon" />
                <span className="chat-question">{msg.question}: </span>
                <span className="chat-answer">{msg.answer}</span>
              </div>
            ))}
          </div>
          {index < chatbotData.length && (
            <button className="chat-button" onClick={handleNext}>
              Discover More
            </button>
          )}
        </div>

        <a href={certificate} target="_blank" rel="noopener noreferrer">
          <button className="certificate-button">View Certificate</button>
        </a>
      </div>
    </section>
  );
};

export default Experience;
