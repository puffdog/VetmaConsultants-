import React, { useState } from 'react';
import './Header.css';
import logo from './VETNAM_080843.png'; // Adjusted path to the logo

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu open/close
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Vetma Consultants Logo" className="logo-image" />
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isMenuOpen ? 'active' : ''}`}></div>
        <div className={`line ${isMenuOpen ? 'active' : ''}`}></div>
        <div className={`line ${isMenuOpen ? 'active' : ''}`}></div>
      </div>
      <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
        <ul className="d-flex list-unstyled">
          <li className="mx-3"><a href="#home" className="text-white">Home</a></li>
          <li className="mx-3"><a href="#about" className="text-white">Company</a></li>
          <li className="dropdown mx-3">
            <a href="#services" className="text-white dropdown-toggle">Services</a>
            <ul className="dropdown-menu">
              <li><a href="#web-development" className="dropdown-item">Website Development</a></li>
              <li><a href="#app-development" className="dropdown-item">App Development</a></li>
              <li><a href="#digital-marketing" className="dropdown-item">Digital Marketing</a></li>
              <li><a href="#it-solutions" className="dropdown-item">IT Solutions</a></li>
              <li><a href="#business-development" className="dropdown-item">Business Development</a></li>
              <li><a href="#communication-solutions" className="dropdown-item">Communication Solutions</a></li>
            </ul>
          </li>
          <li className="mx-3"><a href="#shop" className="text-white">Shop</a></li>
          <li className="mx-3"><a href="#ai" className="text-white">AI</a></li>
          <li className="mx-3"><a href="#blog" className="text-white">Blog</a></li>
          <li className="mx-3"><a href="#contact" className="text-white">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
