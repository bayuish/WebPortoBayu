import React from 'react';
import './Education.css';

function Education() {
  return (
    <section className="education-section">
      <h2>Education</h2>
      <div className="education-list">
        <div className="education-item">
          {/* Teks petunjuk baru yang transparan */}
          <div className="hover-prompt">
            Click me to show information
          </div>
          
          <div className="education-header">
            <h3>Universitas Telkom</h3>
            <span className="gpa">GPA: 3.27/4.00</span>
          </div>
          <p className="degree">S1 Teknik Telekomunikasi</p>
          <p className="period">2021 - 2025</p>
          
          <div className="thesis-section">
            <h4>Final Project:</h4>
            <p className="thesis-title">
              "Design and Development of Sediment Image Scanning Tool Based on IoT (Internet of Things)"
            </p>
            {/* Mengubah urutan: deskripsi di atas, foto di bawah */}
            <div className="brin-project-info">
              <p className="thesis-description">
                This project was conducted in collaboration with BRIN (Badan Riset dan Inovasi Nasional) and was fully funded by the state. I developed an IoT-based system for automated sediment analysis using image processing technology, combining hardware integration with network connectivity for real-time environmental monitoring.
              </p>
              <img 
                src="/src/assets/TALogo2.png"
                alt="Foto Proyek BRIN" 
                className="brin-logo" 
              />
            </div>
          </div>
        </div>
        {/* Tambahkan item edukasi lainnya di sini jika diperlukan */}
      </div>
    </section>
  );
}

export default Education;
