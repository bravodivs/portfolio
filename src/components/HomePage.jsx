import React from "react";
import Sidebar from "../components/Sidebar";
import "../HomePage.css";

const HomePage = () => (
  <div className="home">
    <Sidebar />

    <section id="hero" className="section hero">
      <h1>Hi, I’m <span>Devanshu</span></h1>
      <p>Full-Stack Developer crafting meaningful digital experiences.</p>
    </section>

    <section id="about" className="section">
      <h2>About</h2>
      <p>I love designing and developing full-stack solutions that blend aesthetics with logic.</p>
    </section>

    <section id="projects" className="section">
      <h2>Projects</h2>
      <p>Here are some of my works and experiments.</p>
    </section>

    <section id="contact" className="section">
      <h2>Contact</h2>
      <p>Reach me at <a href="mailto:devanshu@example.com">devanshu@example.com</a></p>
    </section>
  </div>
);

export default HomePage;
