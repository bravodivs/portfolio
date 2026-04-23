import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../Sidebar.css";
import profile2 from '../assets/profile2.jpg';

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  
  useEffect(() => {
    // Expand on page entry, collapse after 5s
    setExpanded(true);
    const timer = setTimeout(() => setExpanded(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const expand = () => setExpanded(true);
  const notExpand = () => setExpanded(false);

  return (
    <motion.div
      className="sidebar-container"
      animate={{
        width: expanded ? 100 : 70,
        height: expanded ? 340 : 70,
        borderRadius: expanded ? "50px" : "50%",
      }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      onHoverStart={expand}
      onHoverEnd={notExpand}
    >
      {/* Avatar stays fixed at top */}
      <div className="profile-bubble">
        <img src={profile2} alt="profile picture" />
      </div>

      {/* Links appear below the image */}
      <AnimatePresence>
        {expanded && (
          <motion.ul
            className="nav-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
          >
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#experience">Experience</a></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Sidebar;