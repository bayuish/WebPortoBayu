// src/pages/HomePage.jsx

import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ProjectHighlight from '../components/home/ProjectHighlight'; 
import Testimonial from '../components/home/Testimonial';
// Import Header dan Footer dihapus dari sini

function HomePage() {
  return (
    <div>
      {/* <Header /> telah dihapus */}
      <HeroSection /> 
      <ProjectHighlight /> 
      <Testimonial />
      {/* <Footer /> telah dihapus */}
    </div>
  );
}

export default HomePage;