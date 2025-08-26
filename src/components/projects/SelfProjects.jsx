import React from 'react';
import { projects } from '../../data/projects';
import ProjectCard from '../ProjectCard';
import { motion } from 'framer-motion';
import './ProjectSection.css'; // File CSS untuk styling section

const SelfProjects = () => {
  // Filter proyek yang kategorinya 'Self Project'
  const selfProjects = projects.filter(project => project.category === 'Self Project');
  
  if (selfProjects.length === 0) {
    return null;
  }

  return (
    <motion.div 
      className="project-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="section-title">Self Project</h3>
      <div className="projects-grid">
        {selfProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </motion.div>
  );
};

export default SelfProjects;