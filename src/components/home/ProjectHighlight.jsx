import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Perbaikan: Jalur impor ke data/projects
import { projects } from '../../data/projects'; 

// Perbaikan: Jalur impor ke komponen ProjectCard
import ProjectCard from '../ProjectCard2'; 

import './ProjectHighlight.css';

function ProjectHighlight() {
  // Menggunakan slice(0, 3) untuk mengambil 3 proyek pertama
  const featuredProjects = projects.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="project-highlight-section">
      <div className="highlight-header">
        <motion.h2
          className="highlight-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          My Projects Highlight
        </motion.h2>
        <Link to="/projects" className="view-all-button">
          View All →
        </Link>
      </div>

      <motion.div
        className="highlight-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {featuredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  );
}

export default ProjectHighlight;