import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="text-center p-4 bg-dark text-white">
      <div>
        <a href="#home" className="text-white mx-3">Home</a>
        <a href="#about" className="text-white mx-3">Company</a>
        <a href="#services" className="text-white mx-3">Services</a>
        <a href="#blog" className="text-white mx-3">Blog</a>
        <a href="#shop" className="text-white mx-3">Shop</a>
        <a href="#ai" className="text-white mx-3">AI</a>
        <a href="#contact" className="text-white mx-3">Contact Us</a>
      </div>
      <div className="mt-3">
        &copy; {new Date().getFullYear()} Vetma Consultants. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
