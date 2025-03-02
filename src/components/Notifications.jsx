import React from "react";
import "./Notifications.css";
import { FaBell, FaCheckCircle } from "react-icons/fa";
import notificationImage from "../assets/featureitem.png"; // Adjust path based on your structure

const Notifications = () => {
  return (
    <section className="notifications">
      {/* Left Content */}
      <div className="notifications-content">
        {/* Bell Icon and Title */}
        <div className="title">
          <FaBell className="bell-icon" />
          <h4>Smart Banking</h4>
        </div>

        {/* Heading */}
        <h2>Real-time <span>Notifications</span></h2>

        {/* Paragraph */}
        <p>
          Your customer stays informed in real time with everything happening in their
          account: payments, transfers, and advice. Get visibility on your customers’ flows
          to anticipate their needs.
        </p>

        {/* Benefits List */}
        <ul>
          <li>
            <FaCheckCircle className="check-icon" /> Cards that work all across the world.
          </li>
          <li>
            <FaCheckCircle className="check-icon" /> No ATM fees. No minimum balance. No overdrafts.
          </li>
        </ul>
      </div>

      {/* Right Image */}
      <div className="notifications-image">
        <img src={notificationImage} alt="Notifications Alert" />
      </div>
    </section>
  );
};

export default Notifications;
