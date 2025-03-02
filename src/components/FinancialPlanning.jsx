import React from "react";
import { FaHome, FaCar, FaGraduationCap, FaBriefcase, FaCheckCircle } from "react-icons/fa";
import "./FinancialPlanning.css";

const FinancialPlanning = () => {
  const loanOptions = [
    {
      id: 1,
      icon: <FaHome className="loan-icon" />,
      title: "Home Loans",
      benefits: ["Lowest interest rates", "Fast Loan Processing"],
    },
    {
      id: 2,
      icon: <FaCar className="loan-icon" />,
      title: "Car Loans",
      benefits: ["Competitive rates", "Quick Easy"],
    },
    {
      id: 3,
      icon: <FaGraduationCap className="loan-icon" />,
      title: "Education Loans",
      benefits: ["Pay back conveniently", "Fast Loan Processing"],
    },
    {
      id: 4,
      icon: <FaBriefcase className="loan-icon" />,
      title: "Business Loans",
      benefits: ["Easy Approvals", "Full Assistance"],
    },
  ];

  return (
    <section className="financial-planning">
      {/* Left Content */}
      <div className="financial-content">
        <h4>Financial Planning</h4>
        <h2>
          Let’s plan your finances <br />
          <span>the right way</span>
        </h2>
        <p>
          Lending that doesn’t weigh you down. We know how hard it is to start something 
          new, that’s why we have the perfect plan for you.
        </p>
        <button className="apply-button">Apply for a loan</button>
      </div>

      {/* Right Cards Section */}
      <div className="loan-options">
        {loanOptions.map((loan) => (
          <div key={loan.id} className="loan-card">
            <div className="icon-container">{loan.icon}</div>
            <h3>{loan.title}</h3>
            <ul>
              {loan.benefits.map((benefit, index) => (
                <li key={index}>
                  <FaCheckCircle className="check-icon" /> {benefit}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FinancialPlanning;
