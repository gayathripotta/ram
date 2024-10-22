import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <h2>Services</h2>
      <div className="app-links">
        {['App Store', 'Google Play', 'Desktop', 'Windows Store', 'Chrome', 'APK', 'Screen Saver'].map(link => (
          <a href="#" key={link}>{link}</a>
        ))}
      </div>
      <div className="copyright">©️ All rights reserved</div>
      <div className="footer-links">
        {['Help', 'User Agreement', 'Privacy Policy'].map(link => (
          <a href="#" key={link}>{link}</a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
