import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Testimonials.css";

// Import Images
import img1 from "../assets/testimonial1.png";
import img2 from "../assets/testimonial2.png";
import img3 from "../assets/testimonial3.png";
import img4 from "../assets/testimonial4.png";

const testimonials = [
  {
    id: 1,
    name: "Sophie Moore",
    country: "United Kingdom",
    quote: "I love Bankio, they're the best",
    feedback:
      "It's been 2 years since I found Bankio, and it’s such a relief as a small business owner to not worry about unnecessary fees. I lost my credit card once, and the service was so prompt that I was back to work the next day!",
    image: img1,
  },
  {
    id: 2,
    name: "John Doe",
    country: "USA",
    quote: "Bankio made my life easier",
    feedback:
      "Bankio has transformed the way I manage my finances. Their customer support is fantastic, and I feel more confident about my financial future.",
    image: img2,
  },
  {
    id: 3,
    name: "Emma Johnson",
    country: "Canada",
    quote: "Best financial service ever",
    feedback:
      "From day one, Bankio has been a game-changer for me. The ease of transactions and support system is remarkable.",
    image: img3,
  },
  {
    id: 4,
    name: "Michael Smith",
    country: "Australia",
    quote: "Reliable and trustworthy",
    feedback:
      "I have been using Bankio for my personal and business finances, and I couldn't be happier. Everything is seamless and transparent.",
    image: img4,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(""); // Controls animation direction

  const nextTestimonial = () => {
    setSlideDirection("slide-right");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 200);
  };

  const prevTestimonial = () => {
    setSlideDirection("slide-left");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }, 200);
  };

  return (
    <div className="testimonial-section">
      <h4 className="testimonial-header">Testimonials</h4>
      <h2 className="testimonial-title">
        Don’t take our word for it, <span>take theirs</span>
      </h2>
      <p className="testimonial-subtext">
        Take a look at our past customers' success stories. Our goal is to help you grow.
      </p>

      <div className="testimonial-container">
        <div className={`testimonial-slide ${slideDirection}`}>
          <div className="testimonial-image">
            <img src={testimonials[currentIndex].image} alt="Customer" />
          </div>
          <div className="testimonial-content">
            <h3 className="quote-icon">❝</h3>
            <h3 className="quote">{testimonials[currentIndex].quote}</h3>
            <p className="feedback">{testimonials[currentIndex].feedback}</p>
            <h4 className="customer-name">{testimonials[currentIndex].name}</h4>
            <p className="customer-location">{testimonials[currentIndex].country}</p>
          </div>
        </div>

        <div className="testimonial-navigation">
          <button className="nav-button" onClick={prevTestimonial}>
            <FaChevronLeft />
          </button>
          <div className="dots">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`dot ${currentIndex === index ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
          <button className="nav-button" onClick={nextTestimonial}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
