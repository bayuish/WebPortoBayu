import React from 'react';
import './Certifications.css';
import { Calendar, ExternalLink } from 'lucide-react';

// Logo Penerbit
import logoRakamin from '/src/assets/cert/logo_rakamin.png';
import logoDicoding from '/src/assets/cert/logo_dicoding.png';
import logoUiPath from '/src/assets/cert/logo_uipath.png';
import logoGoogle from '/src/assets/cert/logo_google.png';
import logoIBM from '/src/assets/cert/logo_ibm.png';
import logoAgile from '/src/assets/cert/logo_mind.png';

// Logo Skill
import skillPython from '/src/assets/skills/python.png';
import skillMysql from '/src/assets/skills/mysql.png';
import skillGit from '/src/assets/skills/git.png';
import skillDocker from '/src/assets/skills/docker.png';
import skillCiCd from '/src/assets/skills/cicd.png';
import skillUiPath from '/src/assets/skills/uipath.png';
import skillRpa from '/src/assets/skills/rpa.png';
import skillCyber from '/src/assets/skills/cyber.png';
import skillSIEM from '/src/assets/skills/siem.png';
import skillLinux from '/src/assets/skills/linux.svg';
import skillBash from '/src/assets/skills/bash.png';
import skillScrum from '/src/assets/skills/scrum.png';
import skillAgile from '/src/assets/skills/agile.svg';

// Sertifikat Image
import certRakamin from '/src/assets/certificates/rakamin.png';
import certDicoding from '/src/assets/certificates/dicoding.png';
import certUiPath from '/src/assets/certificates/uipath.png';
import certGoogle from '/src/assets/certificates/google.png';
import certIBM from '/src/assets/certificates/ibm.png';
import certAgileScrum from '/src/assets/certificates/agile.png';

const certifications = [
  {
    id: 1,
    title: "Kimia Farma Big Data Analytics",
    issuer: "Rakamin Academy",
    period: "Feb 2024 – Feb 2026",
    logoIssuer: logoRakamin,
    description: "Pelatihan analisis Big Data menggunakan Python dan MySQL, mencakup data cleaning, wrangling, eksplorasi, dan visualisasi data.",
    skills: [skillPython, skillMysql],
    credentialLink: "https://drive.google.com/file/d/1FB2vXOfKWbL7oqhJ_BLIAndGc5txnj6S/view",
    certImage: certRakamin
  },
  {
    id: 2,
    title: "Belajar Dasar-Dasar DevOps",
    issuer: "Dicoding (Indosat Ooredoo Hutchison Digital Camp)",
    period: "Jul 2023 – Jul 2026",
    logoIssuer: logoDicoding,
    description: "Mempelajari konsep DevOps, CI/CD pipeline, Git, dan Docker untuk integrasi pengembangan dan operasi.",
    skills: [skillGit, skillDocker, skillCiCd],
    credentialLink: "https://www.dicoding.com/certificates/1OP8NDVVLXQK",
    certImage: certDicoding
  },
  {
    id: 3,
    title: "Automation Developer Associate Training (v2023.10)",
    issuer: "UiPath Academy",
    period: "Mei 2025",
    logoIssuer: logoUiPath,
    description: "Pengembangan otomatisasi menggunakan UiPath Studio, workflow, integrasi API, dan RPA.",
    skills: [skillUiPath, skillRpa],
    credentialLink: "https://drive.google.com/drive/folders/1BvGPH-ycrXejotIdwdtPfynRqCq7XWAL?usp=drive_link",
    certImage: certUiPath
  },
  {
    id: 4,
    title: "Foundation of Cybersecurity",
    issuer: "Google (Coursera)",
    period: "2025",
    logoIssuer: logoGoogle,
    description: "Prinsip keamanan siber, CIA Triad, SIEM, dan strategi pertahanan dari ancaman siber.",
    skills: [skillCyber, skillSIEM],
    credentialLink: "https://www.coursera.org/account/accomplishments/certificate/LVSNA2QTZJWR",
    certImage: certGoogle
  },
  {
    id: 5,
    title: "Hands-on Introduction to Linux Commands and Shell Scripting",
    issuer: "IBM (Coursera)",
    period: "2025",
    logoIssuer: logoIBM,
    description: "Dasar Linux command line, shell scripting, automasi task dengan Bash, dan pengelolaan sistem.",
    skills: [skillLinux, skillBash],
    credentialLink: "https://coursera.org/share/f295f3914f477ef4731b94e3756e2ef0",
    certImage: certIBM
  },
  {
    id: 6,
    title: "Agile Scrum Fundamental (ASF)",
    issuer: "MindMagine’s Partner: Multimatics",
    period: "2025",
    logoIssuer: logoAgile,
    description: "Memahami framework Agile dan metodologi Scrum, termasuk roles, events, dan artifacts.",
    skills: [skillAgile, skillScrum],
    credentialLink: "#",
    certImage: certAgileScrum
  }
];

const Certifications = () => {
  return (
    <div className="certifications-section">
      <div className="certifications-container">
        <h2 className="certifications-title">Certifications</h2>
        <div className="divider"></div>

        <div className="certifications-grid">
          {certifications.map(cert => (
            <div key={cert.id} className="cert-card">
              <div className="cert-header">
                <img src={cert.logoIssuer} alt={`${cert.issuer} logo`} className="cert-logo" />
                <div className="cert-info">
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>
              </div>

              <div className="cert-details">
                <Calendar size={14} className="cert-icon" />
                <span>{cert.period}</span>
              </div>

              <p className="cert-description">{cert.description}</p>

              <div className="cert-skills">
                {cert.skills.map((skill, idx) => (
                  <img key={idx} src={skill} alt="Skill logo" className="skill-badge" />
                ))}
              </div>

              <div className="cert-link">
                <a href={cert.credentialLink} target="_blank" rel="noopener noreferrer">
                  View Credential <ExternalLink size={14} />
                </a>
              </div>

              <div className="cert-image-container">
                <img src={cert.certImage} alt={`${cert.title} Certificate`} className="cert-image" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
