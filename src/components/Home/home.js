import React from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/lottie-animation.json"; // Replace with your Lottie JSON file
import "./home.css";

const Home = () => {
  return (
    <section id="home">
      <div className="intro-container">
        <div className="image-section">
          <Lottie
            animationData={animationData}
            className="laptop-animation"
            loop={true}
            autoplay={true}
          />
        </div>
        <div className="text-section">
          <h1 className="hello">Hello,👋</h1>
          <h2>I'm DANUSRI</h2>
          <p className="description">
            Exploring technology, one line of code at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
