import React, { useState } from "react";
import "./navbar.css";
import Lottie from "lottie-react";
import animationData from "../../assets/Animation-logo.json";
import { Link } from "react-scroll";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaProjectDiagram,
  FaGraduationCap,
  FaTrophy,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

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
          className="desktopMenuListItem"
        >
          <FaHome className="menuIcon" />
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          <FaUser className="menuIcon" />
          About
        </Link>
        <Link
          activeClass="active"
          to="experience"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          <FaBriefcase className="menuIcon" />
          Experience
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          <FaProjectDiagram className="menuIcon" />
          Projects
        </Link>
        <Link
          activeClass="active"
          to="background"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          <FaGraduationCap className="menuIcon" />
          Background
        </Link>
        <Link
          activeClass="active"
          to="milestones"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
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
          className="desktopMenuListItem"
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
          className="listItem"
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
          className="listItem"
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
          className="listItem"
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
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="background"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Background
        </Link>
        <Link
          activeClass="active"
          to="milestones"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
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
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
