import React from "react";
import "./LeapSection.css";

const LeapSection = () => {
  return (
    <section className="leap-container">
      <div className="leap-content">
        <h2>
          <span>Ready to make the leap?</span>
          <br />
          <strong>Let us help you.</strong>
        </h2>
        <div className="leap-buttons">
          <button className="btn-primary">Open Account</button>
          <button className="btn-secondary">Get in touch</button>
        </div>
      </div>
    </section>
  );
};

export default LeapSection;
