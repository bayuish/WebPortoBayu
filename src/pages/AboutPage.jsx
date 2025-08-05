import React from 'react';
import AboutIntro from '../components/about/AboutIntro';
import Education from '../components/about/Education';
import Organization from '../components/about/Organization'; // Import komponen Organization
import Certifications from '../components/about/Certifications';
import WorkExperience from '../components/about/WorkExperience'; // Import komponen WorkExperience

function AboutPage() {
  return (
    <div className="about-page">
      <AboutIntro />
      <Education />
      <Organization /> {/* Tambahkan komponen Organization di sini */}
      <WorkExperience /> {/* Tambahkan komponen WorkExperience di sini */}
      <Certifications />
    </div>
  ); 
}

export default AboutPage;
