import React from 'react';
import AboutIntro from '../components/about/AboutIntro';
import Education from '../components/about/Education';
import Certifications from '../components/about/Certifications.jsx';

function AboutPage() {
  return (
    <div className="about-page">
      <AboutIntro />
      <Education />
      <Certifications />
    </div>
  );
}

export default AboutPage;