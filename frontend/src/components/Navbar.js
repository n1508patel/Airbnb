import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img
          
          alt="Airbnb Logo"
          className="logo-img"
        />
        <Link to="/" className="logo-text">
          Airbnb
        </Link>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-item">
            <span className="icon">🏠</span>
            <span className="text">Home</span>
          </Link>
        </li>
        <li>
          <Link to="/experience" className="nav-item">
            <span className="icon">🌄</span>
            <span className="text">Experience</span>
          </Link>
        </li>
        <li>
          <Link to="/services" className="nav-item">
            <span className="icon">🛎️</span>
            <span className="text">Services</span>
          </Link>
        </li>
        <li>
          <Link to="/login" className="nav-item">
            <span className="icon">🔐</span>
            <span className="text">Login</span>
          </Link>
        </li>
        <li>
          <Link to="/signup" className="signup-btn">
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
}
