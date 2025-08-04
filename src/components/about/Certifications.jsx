import React from 'react';
import './Certifications.css';

function Certifications() {
  return (
    <section className="certifications-section">
      <h2>Sertifikasi</h2>
      <div className="certifications-list">
        <div className="certification-item">
          <h3>Sertifikasi Cisco CCNA</h3>
          <p>Cisco Systems, Inc. | 2022</p>
        </div>
        {/* Tambahkan item sertifikasi lainnya di sini */}
      </div>
    </section>
  );
}

export default Certifications;