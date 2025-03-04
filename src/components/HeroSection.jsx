import React from "react";
import "./HeroSection.css";
import heroImage from "../assets/products.png"; // Update path as needed

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-subtitle">Build the future You See for Yourself</p>
          <h1 className="hero-title">Enjoy The Freedom To Dream Big</h1>
          <p className="hero-description">
            Fulfill your dreams with our loan products. Money shouldn’t just work
            for some of us. It should work for all of us.
          </p>
          <button className="hero-button">Apply Now</button>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Finance illustration" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
