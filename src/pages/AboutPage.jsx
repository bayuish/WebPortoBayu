import React from 'react';
import AboutIntro from '../components/about/AboutIntro';
import Education from '../components/about/Education';
import Organization from '../components/about/Organization';
import Certifications from '../components/about/Certifications';
import WorkExperience from '../components/about/WorkExperience';
import IntellectualProperty from '../components/about/IntellectualProperty'; // Import komponen baru

function AboutPage() {
  return (
    <div className="about-page">
      <AboutIntro />
      
      <Education />
      <Organization />
      <WorkExperience />
      <IntellectualProperty /> {/* Letakkan di sini, setelah pengalaman kerja dan sebelum sertifikasi */}
      <Certifications />
    </div>
  ); 
}

export default AboutPage;