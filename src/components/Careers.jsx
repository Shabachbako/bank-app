import React from "react";
import "./Careers.css";

const jobListings = [
  {
    category: "Management",
    title: "Office Manager",
    description: "Proin sed eros ac libero auctor egestas. Duis maximus imperdiet ultricies. Donec finibus diam risus",
  },
  {
    category: "Developer",
    title: "Senior Backend Developer",
    description: "Proin sed eros ac libero auctor egestas. Duis maximus imperdiet ultricies. Donec finibus diam risus",
  },
  {
    category: "Developer",
    title: "Jr Frontend Developer",
    description: "Proin sed eros ac libero auctor egestas. Duis maximus imperdiet ultricies. Donec finibus diam risus",
  },
  {
    category: "Design",
    title: "UI/UX and Product Designer",
    description: "Proin sed eros ac libero auctor egestas. Duis maximus imperdiet ultricies. Donec finibus diam risus",
  },
];

const Careers = () => {
  return (
    <section className="careers">
      <div className="careers-container">
        {/* Section Header */}
        <h4 className="careers-subtitle">Current Positions</h4>
        <h2 className="careers-title">Unlock Your Career at Bankio</h2>
        <p className="careers-description">
          Grow with us and take your professional life to the next level.
        </p>

        {/* Job Cards Grid */}
        <div className="job-listings">
          {jobListings.map((job, index) => (
            <div className="job-card" key={index}>
              <span className="job-category">{job.category}</span>
              <h3 className="job-title">{job.title}</h3>
              <p className="job-description">{job.description}</p>
              <button className="apply-button">Apply Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Careers;
