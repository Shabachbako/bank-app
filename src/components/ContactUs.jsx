import React from "react";
import "./ContactUs.css";
import contactImage from "../assets/contacttt.png"; // Ensure correct path

const ContactUs = () => {
  return (
    <section className="contact-us">
      {/* Left Side: Heading & Breadcrumb */}
      <div className="contact-text">
        <h1>Contact Us</h1>
        <p>Home → <span>Contact Us</span></p>
      </div>

      {/* Right Side: Image */}
      <div className="contact-image">
        <img src={contactImage} alt="Customer Support" />
      </div>
    </section>
  );
};

export default ContactUs;
