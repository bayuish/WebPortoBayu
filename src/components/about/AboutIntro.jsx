import React from 'react';
import './AboutIntro.css';
import { motion } from 'framer-motion';
import { ChevronDown, Linkedin, Mail, Github, Phone } from 'lucide-react';
import bayuImage from '/src/assets/Bayu2.png';

function AboutIntro() {
  return (
    <section className="about-intro">
      
      {/* Left Panel */}
      <div className="left-panel">
        <div className="text-content">
          <motion.h1 
            className="title"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            I'm Bayu Lesmana a,
            <br />
            Telecomunication
            <br />
            Engineering
          </motion.h1>

          <motion.div 
            className="quote-container"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <blockquote className="quote">
              <em>
                "The destiny of technology is not determined by the technology itself, 
                but by how we use that technology."
              </em>
              <cite> - Neil Postman</cite>
            </blockquote>
          </motion.div>

          <motion.p 
            className="description"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            This philosophy drives everything I do. I'm Bayu Lesmana, and I see 
            technology as a bridge—connecting ideas to reality, problems to solutions, 
            and people to possibilities. As a fresh Telecommunication Engineering 
            graduate, I'm excited to turn this vision into impactful innovations.
          </motion.p>

          <motion.button 
            className="scroll-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronDown size={24} />
          </motion.button>
        </div>
      </div>
      
      {/* Center Image */}
      <motion.div 
        className="center-image"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={bayuImage} alt="Bayu Lesmana" />
      </motion.div>

      {/* Right Panel */}
      <div className="right-panel">
        {/* Lingkaran besar dengan animasi rotasi */}
        <motion.div 
          className="big-circle"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        ></motion.div>

        {/* Ikon sosial terpisah */}
        <div className="social-icons">
          <motion.div 
            className="social-icon-wrapper top linkedin"
            whileHover={{ scale: 1.2, rotate: 10 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <a 
              href="https://www.linkedin.com/in/Bayuish/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link" 
              aria-label="LinkedIn"
            >
              <Linkedin size={30} />
            </a>
          </motion.div>

          <motion.div 
            className="social-icon-wrapper second github"
            whileHover={{ scale: 1.2, rotate: 10 }}
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
          >
            <a 
              href="https://github.com/bayuish" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link" 
              aria-label="GitHub"
            >
              <Github size={30} />
            </a>
          </motion.div>

          <motion.div 
            className="social-icon-wrapper third email"
            whileHover={{ scale: 1.2, rotate: 10 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 1 }}
          >
            <a 
              href="mailto:bayul769@gmail.com" 
              className="social-link" 
              aria-label="Email"
            >
              <Mail size={30} />
            </a>
          </motion.div>

          <motion.div 
            className="social-icon-wrapper bottom whatsapp"
            whileHover={{ scale: 1.2, rotate: 10 }}
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 1.5 }}
          >
            <a 
              href="https://wa.me/6281230079225" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link" 
              aria-label="WhatsApp"
            >
              <Phone size={30} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutIntro;
