import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png"; // Adjust the path to match your local setup
import signupIcon from "../assets/log-in.png"; // Adjust accordingly

const Navbar = () => {
  return (
    <nav className="navbar">
     <div className="navbar-logo">
  <img src={logo} alt="Integra Magna Logo" />
  <div className="brand-name">
    <span className="integra">Integra</span>
    <span className="magna">Magna</span>
  </div>
</div>
      <ul className="navbar-menu">
        <li><a href="#services">SERVICES</a></li>
        <li><a href="#about-us">ABOUT US</a></li>
        <li><a href="#cases">CASES</a></li>
      </ul>
      <div className="navbar-signup">
        <a href="#signup">SIGN UP</a>
        <img src={signupIcon} alt="Sign Up Icon" className="signup-icon" />
      </div>
      
    </nav>
  );
};

export default Navbar;