import React from "react";
import "./SolutionSection.css";
import solutionImage from "../assets/solutions.png"; // Update the path to match your project structure

const SolutionSection = () => {
  return (
    <section className="solution">
      <div className="solution-container">
        {/* Left Side - Image */}
        <div className="solution-image">
          <img src={solutionImage} alt="Personalized Solution" />
        </div>

        {/* Right Side - Content */}
        <div className="solution-content">
          <h2>Need a Personalized Solution?</h2>
          <p>All your needs covered with a full range of credit and debit cards.</p>
          <button className="primary-btn">Apply for a loan</button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
