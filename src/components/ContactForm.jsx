import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <section className="contact-section">
      {/* Heading */}
      <div className="contact-header">
        <h2>Get in touch with us.</h2>
        <p>Fill up the form and our team will get back to you within 24 hours</p>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <form>
          <div className="input-group">
            <div className="input-box">
              <label>Your Company Name</label>
              <input type="text" placeholder="Enter Your Company Name" />
            </div>
            <div className="input-box">
              <label>Phone Number</label>
              <input type="text" placeholder="Enter Your Phone Number" />
            </div>
          </div>

          <div className="input-group">
            <div className="input-box">
              <label>Your Email</label>
              <input type="email" placeholder="Enter Your Email" />
            </div>
            <div className="input-box">
              <label>Your Subject</label>
              <input type="text" placeholder="Enter Your Subject" />
            </div>
          </div>

          <div className="input-box">
            <label>Your Message</label>
            <textarea placeholder="Enter Your Message"></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
