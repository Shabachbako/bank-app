import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Navbar
import Footer from "./components/Footer"; // Footer
import Home from "./components/Home";
import Notifications from "./components/Notifications";
import Invest from "./components/Invest";
import BusinessSolutions from "./components/BusinessSolutions";
import MobileBanking from "./components/MobileBanking";
import LeapSection from "./components/LeapSection";
import FinancialPlanning from "./components/FinancialPlanning";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import AboutPages from "./components/AboutPages"; // Import AboutPages
import ContactPage from "./components/ContactPage";
import ProductPage from "./components/ProductPage";

function App() {
  return (
    <Router>
      <Navbar /> {/* ✅ Navbar always visible */}

      <Routes>
        {/* ✅ Landing Page - all sections */}
        <Route
          path="/"
          element={
            <>
              <main>
                <section id="home"><Home /></section>
                <section id="notifications"><Notifications /></section>
                <section id="invest"><Invest /></section>
                <section id="business-solutions"><BusinessSolutions /></section>
                <section id="mobile-banking"><MobileBanking /></section>
                <section id="leap-section"><LeapSection /></section>
                <section id="financial-planning"><FinancialPlanning /></section>
                <section id="testimonials"><Testimonials /></section>
                <section id="faq"><FAQ /></section>
              </main>
            </>
          }
        />

        {/* ✅ About Page */}
        <Route path="/about" element={<AboutPages />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>

      <Footer /> {/* ✅ Footer always visible */}
    </Router>
  );
}

export default App;
