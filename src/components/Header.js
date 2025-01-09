// src/Header.js
import React from 'react';
import './Header.css'; // Import the corresponding CSS file

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="../images/logoo.png" alt="Owchar Travels Logo" />
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/tours">Tours</a></li>
          <li><a href="/destinations">Our Destinations</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </nav>
      <div className="contact-info">
        <a href="tel:+254702694237">+254 702 694 237</a>
        <a href="mailto:mambo@owchartravels.com">mambo@owchartravels.com</a>
      </div>
    </header>
  );
};

export default Header;
