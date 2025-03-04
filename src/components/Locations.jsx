import React from "react";
import "./Locations.css";
import mapImage from "../assets/map.png"; // Update path if needed
import { FaMapMarkerAlt } from "react-icons/fa"; // React Icons for location pins

const locations = [
  {
    id: 1,
    address: "2715 Ash Dr. San Jose, South Dakota 83475",
    style: { top: "20%", left: "25%" }, // Adjusted position
  },
  {
    id: 2,
    address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    style: { top: "50%", left: "75%" }, // Adjusted position
  },
  {
    id: 3,
    address: "8432 Winding Way, Austin, Texas 73301",
    style: { top: "80%", left: "40%" }, // Adjusted position
  },
  {
    id: 4,
    address: "455 Larkspur Dr. California Springs, California 92926",
    style: { top: "30%", left: "60%" }, // New location
  },
  {
    id: 5,
    address: "1702 West Dr. Atlanta, Georgia 30301",
    style: { top: "70%", left: "15%" }, // New location
  },
];

const Locations = () => {
  return (
    <section className="locations">
      <div className="locations-container">
        {/* Heading */}
        <h4 className="locations-subtitle">Our core values</h4>
        <h2 className="locations-title">
          Our values help us set the bar for <br />
          good banking high.
        </h2>
        <p className="locations-description">
          Our values define us. They guide us in building and improving our
          product, hiring teammates, and serving our customers.
        </p>

        {/* Map Section */}
        <div className="map-container">
          <img src={mapImage} alt="World Map" className="map-image" />

          {/* Location Markers */}
          {locations.map((location) => (
            <div className="location-marker" key={location.id} style={location.style}>
              <FaMapMarkerAlt className="marker-icon" />
              <div className="location-address">{location.address}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
