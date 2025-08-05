import React from 'react';
import './WorkExperience.css';
import { MapPin, Calendar, CheckCircle } from 'lucide-react';

// Import logo dari assets
import logoTelkomsat from '/src/assets/Telkomsatlogo.png';
import logoTelkomsel from '/src/assets/Telkomsellogo.svg';
import logoSribaduga from '/src/assets/Purwakartalogo.png';
import logoBankBumi from '/src/assets/BBlogo.png';

// Import images dokumentasi
import telkomsatImg1 from '/src/assets/work/Telkomsat1.jpeg';
import telkomsatImg2 from '/src/assets/work/Telkomsat2.jpeg';
import telkomselImg1 from '/src/assets/work/Telkomsel1.jpeg';
import telkomselImg2 from '/src/assets/work/Telkomsel2.jpeg';
import sribadugaImg1 from '/src/assets/work/Sribaduga1.jpeg';
import sribadugaImg2 from '/src/assets/work/sribaduga2.jpg';
import bankBumiImg1 from '/src/assets/work/BB1.png';

// Fallback image jika gambar tidak ditemukan
import defaultImage from '/src/assets/work/Default.jpg';

const workExperiences = [
  {
    id: 1,
    company: "TELKOMSAT",
    position: "System Planning and Management Division",
    location: "Bogor",
    period: "2023",
    logo: logoTelkomsat, 
    responsibilities: [
      "Spearheaded strategic satellite system planning and management initiatives...",
      "Conducted in-depth system performance assessments...",
      "Collaborated effectively with cross-functional technical teams...",
      "Led the development of comprehensive technical reports..."
    ],
    images: [telkomsatImg1, telkomsatImg2]
  },
  {
    id: 2,
    company: "TELKOMSEL",
    position: "Network Operation and Productivity Division",
    location: "Telkomsel Branch Soreang",
    period: "2024",
    logo: logoTelkomsel,
    responsibilities: [
      "Orchestrated daily network operations management...",
      "Leveraged advanced analytical skills...",
      "Demonstrated exceptional problem-solving abilities...",
      "Fostered collaborative partnerships with field technical teams..."
    ],
    images: [telkomselImg1, telkomselImg2]
  },
  {
    id: 3,
    company: "Sribaduga Water Fountain",
    position: "Software Engineer",
    location: "Kabupaten Purwakarta",
    period: "2025",
    logo: logoSribaduga,
    responsibilities: [
      "Architected and developed sophisticated software solutions...",
      "Engineered robust communication bridges...",
      "Delivered clean, efficient, and thoroughly tested code...",
      "Collaborated strategically with engineering teams..."
    ],
    images: [sribadugaImg1, sribadugaImg2]
  },
  {
    id: 4,
    company: "Bank Bumi Indonesia",
    position: "Backend Developer",
    location: "Bandung",
    period: "2025",
    logo: logoBankBumi,
    responsibilities: [
      "Developed and maintained high-performance backend services...",
      "Utilized Laravel framework expertise...",
      "Designed comprehensive database schemas...",
      "Executed rigorous unit and integration testing protocols..."
    ],
    images: [bankBumiImg1]
  }
];

const App = () => {
  // Handler jika gambar gagal load
  const handleImageError = (e) => {
    e.target.src = defaultImage;
  };

  return (
    <div className="work-experience-section">
      <div className="work-experience-container">
        <h2 className="work-experience-title">Work Experience</h2>
        <div className="divider"></div>

        <div className="work-experience-grid">
          {workExperiences.map((job) => (
            <div key={job.id} className="work-experience-item">
              <div className="work-header-container">
                <img
                  src={job.logo || defaultImage}
                  alt={`${job.company} logo`}
                  className="work-logo"
                  onError={handleImageError}
                />
                <div className="work-info">
                  <h3 className="company-name">{job.company}</h3>
                  <p className="job-position">{job.position}</p>
                </div>
              </div>

              <div className="detail-row">
                <MapPin size={16} className="detail-icon" />
                <span className="detail-text">{job.location}</span>
              </div>
              <div className="detail-row">
                <Calendar size={16} className="detail-icon" />
                <span className="detail-text">{job.period}</span>
              </div>

              <h4 className="responsibilities-title">
                Key Responsibilities & Achievements
              </h4>
              <ul className="responsibilities-list">
                {job.responsibilities.map((item, index) => (
                  <li key={index} className="responsibility-item">
                    <CheckCircle size={16} className="check-icon" />
                    <p>{item}</p>
                  </li>
                ))}
              </ul>

              {/* Dokumentasi Gambar */}
              <div className="work-images-container">
                {job.images.map((img, index) => (
                  <img
                    key={index}
                    src={img || defaultImage}
                    alt={`Dokumentasi ${job.company} ${index + 1}`}
                    className="work-image"
                    onError={handleImageError}
                  />
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
