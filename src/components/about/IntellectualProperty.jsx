import React from 'react';
import './IntellectualProperty.css';
import { Award, ExternalLink } from 'lucide-react';

// Gambar Sertifikat HAKI
import hakiAlat1Hal1 from '/src/assets/certificates/haki_alat1_hal1.jpg';
import hakiAlat1Hal2 from '/src/assets/certificates/haki_alat1_hal2.jpg'; // Anda perlu menyediakan gambar halaman kedua
import hakiAlat2Hal1 from '/src/assets/certificates/haki_alat2_hal1.jpg';
import hakiAlat2Hal2 from '/src/assets/certificates/haki_alat2_hal2.jpg'; // Anda perlu menyediakan gambar halaman kedua

// Data HAKI
const intellectualProperties = [
  {
    id: 1,
    title: "Program Komputer pada Alat SEDIMTRACK-IoT",
    issuer: "Kementerian Hukum dan HAM Republik Indonesia",
    type: "Hak Cipta",
    registrationNumber: "EC002025116789",
    period: "Agustus 2025",
    description: "Hak cipta atas program komputer yang diaplikasikan pada alat SEDIMTRACK-IoT untuk melakukan pemantauan endapan sedimen secara otomatis menggunakan teknologi IoT.",
    credentialLink: "https://hakcipta.dgip.go.id/legal/c/YjliNWQ0OWQ5YzdkNDViMjYwZTk4OGJkNDViOTA1ODI=", // Ganti dengan link Google Drive Anda
    certImage: hakiAlat1Hal1, 
    certImageHover: hakiAlat1Hal2 // Gambar halaman 2 (muncul saat hover)
  },
  {
    id: 2,
    title: "Aplikasi pada Alat SEDIMTRACK IoT",
    issuer: "Kementerian Hukum dan HAM Republik Indonesia",
    type: "Hak Cipta",
    registrationNumber: "000957208", // Nomor Pencatatan
    period: "Agustus 2025",
    description: "Hak cipta atas aplikasi yang digunakan pada alat SEDIMTRACK IoT, mencakup konsep dasar, alur kerja, dan implementasi untuk pengumpulan data sedimen.",
    credentialLink: "https://hakcipta.dgip.go.id/legal/c/YThmNWUyZDQwNDVlOTMxMDMzZGI1MGM2ODNhZGQ0MWI=", // Ganti dengan link Google Drive Anda
    certImage: hakiAlat2Hal1,
    certImageHover: hakiAlat2Hal2 // Gambar halaman 2 (muncul saat hover)
  }
];

const IntellectualProperty = () => {
  return (
    <div className="ip-section">
      <div className="ip-container">
        <h2 className="ip-title">Intellectual Property</h2>
        <div className="divider"></div>

        <div className="ip-grid">
          {intellectualProperties.map(prop => (
            <div key={prop.id} className="ip-card">
              <div className="ip-header">
                <Award size={24} className="ip-icon-award" />
                <div className="ip-info">
                  <h3 className="ip-title-card">{prop.title}</h3>
                  <p className="ip-issuer-card">{prop.issuer}</p>
                </div>
              </div>

              <div className="ip-details">
                <span>**{prop.type}**</span> | <span>No. {prop.registrationNumber}</span>
                <span className="ip-period">{prop.period}</span>
              </div>

              <p className="ip-description">{prop.description}</p>

              <div className="ip-link">
                <a href={prop.credentialLink} target="_blank" rel="noopener noreferrer">
                  View Document <ExternalLink size={14} />
                </a>
              </div>

              <div className="ip-image-container">
                <img src={prop.certImage} alt={`${prop.title} Document Page 1`} className="ip-image" />
                <img src={prop.certImageHover} alt={`${prop.title} Document Page 2`} className="ip-image-hover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntellectualProperty;