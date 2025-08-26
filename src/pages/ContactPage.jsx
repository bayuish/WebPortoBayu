// src/pages/Contact.jsx
import React, { useRef } from 'react';
import './Contact.css';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Linkedin, Github } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'; // ✅ Import SweetAlert2

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_y5i5wzh',       // Service ID
      'template_l7kzm3q',      // Template ID
      form.current,            // Form reference
      'XVwmWURwlPm0qfzO7'      // Public Key
    ).then(
      () => {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Thank you, I will reply as soon as possible.',
          confirmButtonColor: '#ffd700',
          background: '#1e1e1e',
          color: '#fff'
        });
        form.current.reset();
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Failed to Send!',
          text: 'Please try again later.',
          confirmButtonColor: '#ffd700',
          background: '#1e1e1e',
          color: '#fff'
        });
      }
    );
  };

  return (
    <section className="contact-section">
      <motion.h2 
        className="contact-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get in Touch
      </motion.h2>

      <div className="contact-container">

        {/* Left Panel */}
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="contact-description">
            Have a question, proposal, or just want to say hi?  
            Feel free to reach out using the form or through my contact info below.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <Mail size={20} className="contact-icon" />
              <span>bayul769@gmail.com</span>
            </div>
            <div className="contact-detail">
              <MapPin size={20} className="contact-icon" />
              <span>Bandung, Indonesia</span>
            </div>
            <div className="contact-detail">
              <Phone size={20} className="contact-icon" />
              <span>+62 812-3007-9225</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="contact-social-icons">
            <motion.a href="https://www.linkedin.com/in/Bayuish/" target="_blank" whileHover={{ scale: 1.2 }} className="contact-social-link">
              <Linkedin size={28} />
            </motion.a>
            <motion.a href="https://github.com/bayuish" target="_blank" whileHover={{ scale: 1.2 }} className="contact-social-link">
              <Github size={28} />
            </motion.a>
            <motion.a href="mailto:bayul769@gmail.com" whileHover={{ scale: 1.2 }} className="contact-social-link">
              <Mail size={28} />
            </motion.a>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form 
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="title" placeholder="Subject (Optional)" />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <motion.button 
            type="submit"
            className="contact-submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>

      </div>
    </section>
  );
}

export default Contact;
