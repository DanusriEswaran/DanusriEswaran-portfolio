import AOS from "aos";
import "aos/dist/aos.css";

import React, { useEffect } from "react";
import Navbar from "./components/NavBar/navbar";
import SpaceBackground from "./components/SpaceBackground/spacebackground";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Experience from "./components/Experience/experience";
import Projects from "./components/Projects/projects";
import Milestones from "./components/Milestones/milestones";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (1s)
      once: true, // Animates only once
      easing: "ease-in-out", // Smooth easing
    });
  }, []);

  return (
    <div className="App">
      <SpaceBackground />
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Milestones />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
