import React from "react";
import "./Values.css";
import { FaUser, FaHeart, FaHandshake } from "react-icons/fa"; // Using React Icons

const Values = () => {
  return (
    <section className="values">
      <div className="values-container">
        {/* Heading Section */}
        <h4 className="values-subtitle">Our core values</h4>
        <h2 className="values-title">
          Our values help us set the bar for <br />
          good banking high.
        </h2>
        <p className="values-description">
          Our values define us. They guide us in building and improving our
          product, hiring teammates, <br />
          and serving our customers.
        </p>

        {/* Values Section */}
        <div className="values-grid">
          {/* Value 1 */}
          <div className="value-card">
            <div className="value-icon">
              <FaUser />
            </div>
            <h3>Customer First</h3>
            <p>
              We aim to provide our customers with top-notch service that helps
              them grow their business and put their best foot forward.
            </p>
          </div>

          {/* Value 2 */}
          <div className="value-card">
            <div className="value-icon">
              <FaHeart />
            </div>
            <h3>Passion over Pedigree</h3>
            <p>
              We hire for passion because passionate people can overcome any
              obstacle and acquire any knowledge necessary.
            </p>
          </div>

          {/* Value 3 */}
          <div className="value-card">
            <div className="value-icon">
              <FaHandshake />
            </div>
            <h3>Commitment</h3>
            <p>
              Our first priority is to keep your money safe and secure. Every
              single aspect of our service is optimized to protect and grow your
              funds!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
