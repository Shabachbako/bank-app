import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/bankio.png";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get current path

  // Toggle menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to smoothly scroll to a section
  const scrollToSection = (id) => {
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Bank Logo" />
      </div>

      {/* Hamburger Menu (Mobile) */}
      <button className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Desktop Navigation */}
      <ul className="nav-links">
        <li>
          {location.pathname === "/" ? (
            <a href="#home" onClick={() => scrollToSection("home")}>Home</a>
          ) : (
            <NavLink to="/" onClick={() => scrollToSection("home")}>Home</NavLink>
          )}
        </li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/product">Product</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
      </ul>

      {/* Open Account Button (Desktop) */}
      <button className="open-account-btn">Open Account</button>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>
            {location.pathname === "/" ? (
              <a href="#home" onClick={() => { scrollToSection("home"); toggleMenu(); }}>Home</a>
            ) : (
              <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
            )}
          </li>
          <li><NavLink to="/about" onClick={toggleMenu}>About Us</NavLink></li>
          <li><NavLink to="/product" onClick={toggleMenu}>Product</NavLink></li>
          <li><NavLink to="/contact" onClick={toggleMenu}>Contact Us</NavLink></li>
        </ul>

        {/* Open Account Button (Mobile) */}
        <button className="open-account-btn">Open Account</button>
      </div>
    </nav>
  );
};

export default Navbar;
