import React from 'react';
import './Footer.css'; // Opsional, untuk CSS

function Footer() {
  return (
    <footer className="footer">
      <div className="contact-info">
        <p className="contact-text">Get In Touch With Us</p>
        <a href="mailto:info@aaronn.com" className="contact-email">
          info@aaronn.com
        </a>
      </div>

      <div className="footer-bottom">
        <div className="footer-brand">
          <span className="brand-name">AARONN</span>
        </div>
        <div className="footer-links">
          <p>Street Avenue 11, CA</p>
          <p>+1-555-555-5555</p>
          <div className="social-links">
            <a href="#">FB</a>
            <a href="#">IG</a>
            <a href="#">TW</a>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>© 2023. Ideaspeak. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;