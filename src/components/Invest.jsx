import React from "react";
import "./Invest.css";
import { FaShieldAlt, FaCheckCircle } from "react-icons/fa";
import investImage from "../assets/investt.png"; // Adjust path based on your structure

const Invest = () => {
  return (
    <section className="invest">
      {/* Left Image */}
      <div className="invest-image">
        <img src={investImage} alt="Save & Invest" />
      </div>

      {/* Right Content */}
      <div className="invest-content">
        {/* Security Icon and Title */}
        <div className="title">
          <FaShieldAlt className="shield-icon" />
          <h4>Safe Investments</h4>
        </div>

        {/* Heading */}
        <h2>The Better Way to <span>Save & Invest</span></h2>

        {/* Paragraph */}
        <p>
          Bankio helps over 2 million customers achieve their financial goals by helping
          them save and invest with ease. Put that extra cash to use without putting it at risk with Bankio.
        </p>

        {/* Benefits List */}
        <ul>
          <li>
            <FaCheckCircle className="check-icon" /> <strong>Profitable to invest and Handy to manage</strong>
          </li>
          <li>
            <FaCheckCircle className="check-icon" /> <strong>Highest Returns on your investments</strong>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Invest;
