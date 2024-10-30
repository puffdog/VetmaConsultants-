import React from 'react';
import './Header.css';
import logo from './IMG-20240626-WA0105.jpg'; // Adjusted path to the logo

const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center p-3 bg-dark text-white">
      <div className="logo">
        <img src={logo} alt="Vetma Consultants Logo" className="logo-image" />
      </div>
      <nav>
        <ul className="d-flex list-unstyled">
          <li className="mx-3"><a href="#home" className="text-white">Home</a></li>
          <li className="mx-3"><a href="#about" className="text-white">Company</a></li>
          <li className="mx-3"><a href="#services" className="text-white">Services</a></li>
          <li className="mx-3"><a href="#shop" className="text-white">Shop</a></li>
          <li className="mx-3"><a href="#ai" className="text-white">AI</a></li>
          <li className="mx-3"><a href="#blog" className="text-white">Blog</a></li>
          <li className="mx-3"><a href="#contact" className="btn btn-outline-light">Get In Touch</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
