import React from "react";
import "./Locations.css";
import mapImage from "../assets/map.png"; // Import the map image
import { FaMapMarkerAlt } from "react-icons/fa"; // React Icons for location pins

const locations = [
  {
    id: 1,
    address: "2715 Ash Dr. San Jose, South Dakota 83475",
    style: { top: "60%", left: "30%" }, // Adjust position for correct placement
  },
  {
    id: 2,
    address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    style: { top: "40%", left: "65%" }, // Adjust position for correct placement
  },
  {
    id: 3,
    address: "2715 Ash Dr. San Jose, South Dakota 83475",
    style: { top: "75%", left: "50%" }, // Adjust position for correct placement
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
