
import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer>
      <div className="footer-section about-us">
        <h4>About Us</h4>
        <ul>
          <li><a href="/our-story">Our Story</a></li>
          <li><a href="/blog">Travel Blog & Tips</a></li>
          <li><a href="/careers">Working With Us</a></li>
        </ul>
      </div>
      <div className="footer-section support">
        <h4>Support</h4>
        <ul>
          <li><a href="/customer-support">Customer Support</a></li>
          <li><a href="/privacy-policy">Privacy & Policy</a></li>
          <li><a href="/contact">Contact Channels</a></li>
        </ul>
      </div>
      <div className="footer-section contact-us">
        <h4>Contact Us</h4>
        <address>
          Mirembe Heights, Oloika Valley Close, off Oloika Road, Nairobi<br />
          <a href="tel:+254702694237">+254 702 694 237</a> | <a href="tel:+256746938746">+256 746 938 746</a><br />
          <a href="mailto:mambo@owchartravels.com">mambo@owchartravels.com</a>
        </address>
      </div>
      <div className="footer-section social-media">
        <h4>Follow Us</h4>
        <ul>
          <li><a href="https://www.facebook.com"><i className="icon-facebook"></i> Facebook</a></li>
          <li><a href="https://twitter.com"><i className="icon-twitter"></i> Twitter</a></li>
          <li><a href="https://www.instagram.com"><i className="icon-instagram"></i> Instagram</a></li>
          <li><a href="https://www.linkedin.com"><i className="icon-linkedin"></i> LinkedIn</a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>We operate ‘In Harmony with Nature’ and on ‘Carbon Neutral footprint’, working with clients to preserve the environment through our go-green endeavors. All clients are encouraged to plant at least a tree in any of the destinations in untamed Africa.</p>
        <p>&copy; 2024 Owchar Travels All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
