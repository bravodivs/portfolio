import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/newSidebar.css";
import profile2 from '../assets/profile2.jpg';

export default function NewSidebar() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(true); // expand on page load
    const timer = setTimeout(() => setExpanded(false), 5000); // collapse after 5 sec
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="circle-container">
      <div className="expandable-pill">
        <img
          src={profile2}
          alt="Profile"
          className="profile-image"
        />
        <div className="links-container">
          <ul>
            <li>
              <a href="#home" className="nav-link">Dashboard</a>
            </li>
            <li>
              <a href="#about" className="nav-link">About</a>
            </li>
            <li>
              <a href="#experience" className="nav-link">Experience</a>
            </li>
            <li>
              <a href="#projects" className="nav-link">Projects</a>
            </li>
            <li>
              <a href="#gallery" className="nav-link">Gallery</a>
            </li>
            <li>
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
