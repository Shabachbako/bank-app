import React from "react";
import "./Footer.css";
import logo from "../assets/bankio-image.png"; // Import the Bankio logo
import leftImage from "../assets/footer-left.png"; // Import the left illustration
import rightImage from "../assets/footer-right.png"; // Import the right illustration
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Illustration */}
        <img src={leftImage} alt="Woman reading a book" className="footer-left-img" />

        {/* Center Content */}
        <div className="footer-content">
          {/* Subscription Section */}
          <div className="subscribe-section">
            <h3>Subscribe</h3>
            <div className="subscribe-input">
              <input type="email" placeholder="Enter Your Email address" />
              <button>Subscribe</button>
            </div>
            <p>Get the latest updates via email. Anytime you may unsubscribe</p>
          </div>

          {/* Links Section */}
          <div className="footer-links">
            <div>
              <h4>Support</h4>
              <ul>
                <li><a href="#">Support@bankio</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4>Useful Links</h4>
              <ul>
                <li><a href="#">Products</a></li>
                <li><a href="#">Business Loan</a></li>
                <li><a href="#">Affiliate Program</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Awards</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
          </div>

          {/* Company Description */}
          <div className="company-info">
            <img src={logo} alt="Bankio Logo" className="footer-logo" />
            <p>A modern, technology-first bank built for you and your growing business</p>
            <div className="social-icons">
              <FaInstagram />
              <FaTwitter />
              <FaFacebookF />
            </div>
          </div>
        </div>

        {/* Right Illustration */}
        <img src={rightImage} alt="Financial growth illustration" className="footer-right-img" />
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>Terms & Condition | Privacy</p>
        <p>PIXELAXIS Copyright © Bankio | Designed by</p>
      </div>
    </footer>
  );
};

export default Footer;
