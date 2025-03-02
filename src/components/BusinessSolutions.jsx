import React from "react";
import { FaPiggyBank, FaBriefcase, FaMoneyCheckAlt } from "react-icons/fa";
import "./BusinessSolutions.css";

const BusinessSolutions = () => {
  return (
    <section className="business-solutions">
      {/* Header Content */}
      <div className="business-header">
        <h4>Open your account from anywhere in the world</h4>
        <h2>
          Solutions for Every <br /> <span>Business Need.</span>
        </h2>
        <p>
          Power up your business with a full-stack online bank account that fits
          your needs.
        </p>
      </div>

      {/* Account Options */}
      <div className="account-options">
        {/* Checking Account */}
        <div className="account-card">
          <div className="account-icon">
            <FaMoneyCheckAlt />
          </div>
          <h3>Checking Account</h3>
          <p>
            Choose from our checking options that allow you to earn interest,
            avoid fees, and easily manage your account.
          </p>
          <a href="#">Open Account →</a>
        </div>

        {/* Savings Account */}
        <div className="account-card">
          <div className="account-icon">
            <FaPiggyBank />
          </div>
          <h3>Savings Accounts</h3>
          <p>
            Save for your goals and watch your money grow with a CD, a money
            market account, a savings account. Your future starts now.
          </p>
          <a href="#">Start Saving →</a>
        </div>

        {/* Business Account */}
        <div className="account-card">
          <div className="account-icon">
            <FaBriefcase />
          </div>
          <h3>Business Account</h3>
          <p>
            Take charge of your business banking with a business bank account.
            Services including virtual cards, team management and more.
          </p>
          <a href="#">Open Account →</a>
        </div>
      </div>
    </section>
  );
};

export default BusinessSolutions;
