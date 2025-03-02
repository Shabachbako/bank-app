import React from "react";
import "./HelpSection.css";
import { FaHandshake, FaHeadset, FaNewspaper } from "react-icons/fa"; // Import icons

const HelpSection = () => {
  return (
    <section className="help-section">
      {/* Heading */}
      <div className="help-header">
        <p className="subtitle">You can reach out to us for all your</p>
        <h2>Need More Help?</h2>
        <p className="description">
          Queries, complaints and feedback. We will be happy to serve you.
        </p>
      </div>

      {/* Help Options */}
      <div className="help-cards">
        <div className="help-card">
          <div className="icon-container">
            <FaHandshake className="help-icon" />
          </div>
          <h3>Sales</h3>
          <p>sales@bankio.com</p>
        </div>

        <div className="help-card">
          <div className="icon-container">
            <FaHeadset className="help-icon" />
          </div>
          <h3>Help & Support</h3>
          <p>supports@bankio.com</p>
        </div>

        <div className="help-card">
          <div className="icon-container">
            <FaNewspaper className="help-icon" />
          </div>
          <h3>Media & Press</h3>
          <p>media@bankio.com</p>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
