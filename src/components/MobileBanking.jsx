import React from "react";
import { FaShieldAlt, FaCheckCircle } from "react-icons/fa";
import googlePlay from "../assets/google-play.png"; // Import Google Play image
import appStore from "../assets/app-store.png"; // Import App Store image
import phoneImage from "../assets/apps.png"; // Import the phone mockup image
import "./MobileBanking.css";

const MobileBanking = () => {
  return (
    <section className="mobile-banking">
      {/* Left Side Content */}
      <div className="banking-text">
        {/* Shield Icon & Title */}
        <div className="banking-title">
          <FaShieldAlt className="shield-icon" />
          <h4>Banking at Your Fingertips</h4>
        </div>

        {/* Heading */}
        <h2>
          Your banking <br />
          experience anytime, <br />
          anywhere
        </h2>

        {/* Description */}
        <p>
          Get your money moving with our simple-to-use, accessible mobile app.
          As good as a bank branch within your phone!
        </p>

        {/* Features List */}
        <ul>
          <li>
            <FaCheckCircle className="check-icon" /> Bill Payments, Funds
            Transfer, QR payments
          </li>
          <li>
            <FaCheckCircle className="check-icon" /> Credit card payments and
            Order food
          </li>
        </ul>

        {/* Download Buttons */}
        <div className="download-buttons">
          <img src={googlePlay} alt="Google Play" />
          <img src={appStore} alt="App Store" />
        </div>
      </div>

      {/* Right Side Phone Image */}
      <div className="banking-image">
        <img src={phoneImage} alt="Banking App Mockup" />
      </div>
    </section>
  );
};

export default MobileBanking;
