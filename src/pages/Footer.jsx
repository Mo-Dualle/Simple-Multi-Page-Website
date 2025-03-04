import React from "react";
import "./styles/Footer.css";
import { FaEnvelope, FaCopyright } from "react-icons/fa"; // Import FontAwesome icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>
          <FaCopyright /> 2024 My Website. All rights reserved.
        </p>
        <p>
          <FaEnvelope /> Contact: <a href="mailto:support@example.com">support@example.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;