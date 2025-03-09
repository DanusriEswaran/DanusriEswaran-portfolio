import React, { useState, useEffect } from "react";
import "./navbar.css";
import Lottie from "lottie-react";
import animationData from "../../assets/Animation-logo.json";
import { Link, Events, scrollSpy } from "react-scroll";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaProjectDiagram,
  FaTrophy,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Track active section changes
    Events.scrollEvent.register("begin", (to) => setActiveSection(to));
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
    };
  }, []);

  return (
    <nav className="navbar">
      <Lottie
        animationData={animationData}
        className="logo-animation"
        loop={true}
        autoplay={true}
      />

      {/* Desktop Menu */}
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={`desktopMenuListItem ${
            activeSection === "home" ? "active" : ""
          }`}
        >
          <FaHome className="menuIcon" />
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={`desktopMenuListItem ${
            activeSection === "about" ? "active" : ""
          }`}
        >
          <FaUser className="menuIcon" />
          About
        </Link>
        <Link
          activeClass="active"
          to="experience"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={`desktopMenuListItem ${
            activeSection === "experience" ? "active" : ""
          }`}
        >
          <FaBriefcase className="menuIcon" />
          Experience
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={`desktopMenuListItem ${
            activeSection === "projects" ? "active" : ""
          }`}
        >
          <FaProjectDiagram className="menuIcon" />
          Projects
        </Link>
        <Link
          activeClass="active"
          to="milestones"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={`desktopMenuListItem ${
            activeSection === "milestones" ? "active" : ""
          }`}
        >
          <FaTrophy className="menuIcon" />
          Milestones
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={`desktopMenuListItem ${
            activeSection === "contact" ? "active" : ""
          }`}
        >
          <FaEnvelope className="menuIcon" />
          Contact
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="mobMenuIcon" onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      <div className={`navMenu ${showMenu ? "open" : ""}`}>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={`listItem ${activeSection === "home" ? "active" : ""}`}
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className={`listItem ${activeSection === "about" ? "active" : ""}`}
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="experience"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className={`listItem ${
            activeSection === "experience" ? "active" : ""
          }`}
          onClick={() => setShowMenu(false)}
        >
          Experience
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className={`listItem ${activeSection === "projects" ? "active" : ""}`}
          onClick={() => setShowMenu(false)}
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="milestones"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className={`listItem ${
            activeSection === "milestones" ? "active" : ""
          }`}
          onClick={() => setShowMenu(false)}
        >
          Milestones
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={`listItem ${activeSection === "contact" ? "active" : ""}`}
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
