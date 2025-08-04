import React from 'react';
import projects from '../../data/projects'; // Pastikan path benar
import './ProjectHighlight.css';

function ProjectHighlight() {
  return (
    <section className="project-highlight">
      <h2>My Projects Highlight</h2>
      {/* Anda bisa tambahkan tombol "View All" di sini jika perlu */}
      <button className="view-all-button">View All →</button>

      <div className="project-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectHighlight;