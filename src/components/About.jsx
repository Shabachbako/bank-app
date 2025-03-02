import React from "react";
import "./About.css";
import aboutBg from "../assets/about.png"; // Ensure the correct image path

const About = () => {
  return (
    <section className="about-section">
      {/* Left Side: Title & Breadcrumb */}
      <div className="about-text">
        <h1>About Us</h1>
        <p>Home → <span>About Us</span></p>
      </div>

      {/* Right Side: Image */}
      <div className="about-image">
        <img src={aboutBg} alt="About Background" />
      </div>
    </section>
  );
};

export default About;
