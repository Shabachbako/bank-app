import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./FAQ.css";

const faqs = [
  {
    question: "How do I locate the nearest branch or ATM?",
    answer:
      "You can locate the nearest branch or ATM by using our branch locator on the website or through our mobile banking app.",
  },
  {
    question: "What do I do if I lose my card or it gets stolen?",
    answer:
      "Immediately report the loss via our customer service helpline or use the app to block your card and request a replacement.",
  },
  {
    question: "What is your customer service number?",
    answer:
      "Our customer service number is available 24/7. Please check our contact page for the latest details.",
  },
  {
    question: "How do I reset my pin?",
    answer:
      "You can reset your PIN through online banking, mobile banking, or by visiting a branch with proper identification.",
  },
  {
    question: "What is required to use Digital Banking?",
    answer:
      "To use digital banking, you need to register online with your account number and a secure password.",
  },
  {
    question: "Is digital banking secure?",
    answer:
      "Yes, we use advanced encryption and security protocols to keep your data and transactions safe.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      {/* FAQ Intro Section */}
      <div className="faq-intro">
        <h4 className="faq-header">If you have a question, we have an answer</h4>
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtext">
          Get answers to all questions you have and boost your knowledge so you can save, 
          invest and spend smarter.{" "}
          <a href="#" className="faq-link">See all questions here!</a>
        </p>
      </div>

      {/* FAQ List */}
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h3>{faq.question}</h3>
              <button className="faq-toggle">
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </button>
            </div>
            <div
              className={`faq-answer ${openIndex === index ? "open" : ""}`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
