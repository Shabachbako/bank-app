import React from "react";
import "./Aboutt.css";
import person1 from "../assets/person1.png"; // Replace with actual paths
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";

const Aboutt = () => {
  return (
    <section className="about">
      <div className="about-content">
        {/* Left Section */}
        <div className="about-text">
          <h4 className="about-subtitle">About Us</h4>
          <h2 className="about-title">
            Your ally in achieving <br /> ambition beyond <br /> borders
          </h2>
          <p className="about-description">
            We understand that with global ambition, comes global challenges, 
            and we are here to bridge the gap by offering seamless cross-border 
            financial services. Consider us your friendly digital guide to all 
            things finance, helping you make the most of your money.
          </p>

          {/* Statistics Cards */}
          <div className="stats">
            <div className="stat-card">
              <h3>18%</h3>
              <p>Customer satisfaction</p>
            </div>
            <div className="stat-card">
              <h3>47M</h3>
              <p>Monthly active users</p>
            </div>
            <div className="stat-card">
              <h3>18K</h3>
              <p>New Users per week</p>
            </div>
          </div>
        </div>

        {/* Right Section (Images) */}
        <div className="about-images">
          <img src={person1} alt="Person smiling" className="image image1" />
          <img src={person2} alt="Happy family" className="image image2" />
          <img src={person3} alt="Excited woman" className="image image3" />
        </div>
      </div>
    </section>
  );
};

export default Aboutt;
