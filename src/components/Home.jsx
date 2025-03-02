import React from "react";
import "./Home.css"; 
import bankImage from "../assets/lifeeeee.png"; // Adjust the path if needed

const Home = () => {
  return (
    <section className="home">
      <div className="home-container">
        {/* Text Content */}
        <div className="home-content">
          <h3>
            <span className="highlight">Simple.</span>{" "}
            <span className="highlight">Transparent.</span>{" "}
            <span className="highlight">Secure</span>
          </h3>
          <h1>Banking Solutions</h1>
          <p>
            Products and services designed to help you reach your financial goals.
          </p>

          {/* Buttons */}
          <div className="buttons">
            <button className="primary-btn">Open Account</button>
            <button className="secondary-btn">Get in touch</button>
          </div>
        </div>

        {/* Right Image */}
        <div className="home-image">
          <img src={bankImage} alt="Banking Solutions" />
        </div>
      </div>
    </section>
  );
};

export default Home;
