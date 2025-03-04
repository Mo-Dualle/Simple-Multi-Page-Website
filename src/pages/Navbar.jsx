import React from "react";
import { Link } from "react-router-dom";
import "./styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">🚀 My Website</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/post">Post</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
