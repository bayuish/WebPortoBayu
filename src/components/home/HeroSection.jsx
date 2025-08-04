import React from 'react';
import { motion } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground.jsx';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ 
            color: "#ffd700", 
            textShadow: "0 0 2px #ffd700" 
          }}
        >
          Connecting the World, Compile the code
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          I'm <motion.span 
                  className="name-highlight"
                  // Hapus properti whileHover dan style cursor karena efek akan selalu ada
                >
                  Bayu Lesmana
                </motion.span>, a Telecommunication Engineering graduate with core expertise in network infrastructure, radio frequency systems, and server administration. Beyond my telecommunications foundation, I've expanded my skillset as a Full-stack Developer, creating both Android applications and web solutions. My comprehensive technical background also includes electronics fundamentals, IoT implementation, and microcontroller programming, enabling me to deliver end-to-end solutions from network infrastructure to user applications
        </motion.p>

        <motion.button
          className="cta-button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Discover More About Me
        </motion.button>
      </div>

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      >
        <ParticlesBackground />
        <img src="/src/assets/Bayu1.png" alt="Bayu" />
      </motion.div>
    </section>
  );
}

export default HeroSection;