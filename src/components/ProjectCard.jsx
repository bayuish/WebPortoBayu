import React from 'react';
import './ProjectCard.css';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div
      className="project-card"
      variants={itemVariants}
    >
      <div className="project-image-container">
        {Array.isArray(project.image) ? (
          // RENDER MULTIPLE IMAGES IF IT'S AN ARRAY
          project.image.map((imgSrc, index) => (
            <img key={index} src={imgSrc} alt={`${project.title} - ${index}`} className="project-image" />
          ))
        ) : (
          // RENDER A SINGLE IMAGE IF IT'S NOT AN ARRAY
          <img src={project.image} alt={project.title} className="project-image" />
        )}
      </div>
      <div className="project-details">
        <h4 className="project-category">{project.category}</h4>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-techs">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
          View Project <ExternalLink size={14} />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;