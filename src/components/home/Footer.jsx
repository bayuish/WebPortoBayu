import React from 'react';
import './Footer.css';
import { Linkedin, Github, Mail, Phone, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        <div className="footer-brand">
          <h2 className="brand-name">Bayu Lesmana</h2>
          <p className="brand-tagline">Available for new opportunities.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Info</h4>
          <p><Mail size={16} /> bayul769@gmail.com</p>
          <p><Phone size={16} /> +62 812-3007-9225</p>
        </div>

        <div className="footer-social">
          <h4>Follow Me</h4>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/Bayuish/" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
            <a href="https://github.com/bayuish" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
            <a href="mailto:bayul769@gmail.com"><Mail size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Bayu Lesmana. All rights reserved.</p>
        <button className="back-to-top" onClick={scrollToTop}>
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}

export default Footer;