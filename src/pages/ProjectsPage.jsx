import React from 'react';
import './ProjectsPage.css';
import { projects } from '../data/projects.js';

// Component untuk menangani berbagai layout gambar
const ProjectImages = ({ images, title, projectId }) => {
  // Validasi dan normalisasi data images
  let imageArray = [];
  
  if (!images) return null;
  
  // Handle jika images adalah string (single image)
  if (typeof images === 'string') {
    imageArray = [images];
  }
  // Handle jika images adalah array
  else if (Array.isArray(images)) {
    imageArray = images;
  }
  // Handle jika tidak ada images yang valid
  else {
    return null;
  }

  // Jika array kosong, return null
  if (imageArray.length === 0) return null;

  // Layout untuk satu gambar
  if (imageArray.length === 1) {
    return (
      <div className="project-images">
        <div className="images-single">
          <img src={imageArray[0]} alt={title} />
          <div className="image-overlay"></div>
        </div>
      </div>
    );
  }

  // Layout untuk dua gambar
  if (imageArray.length === 2) {
    return (
      <div className="project-images">
        <div className="images-double">
          {imageArray.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image} alt={`${title} - Image ${index + 1}`} />
              <div className="image-overlay"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Layout untuk tiga gambar
  if (imageArray.length === 3) {
    return (
      <div className="project-images">
        <div className="images-multiple">
          <div className="image-item main-image">
            <img src={imageArray[0]} alt={`${title} - Main`} />
            <div className="image-overlay"></div>
          </div>
          {imageArray.slice(1, 3).map((image, index) => (
            <div key={index} className="image-item secondary-image">
              <img src={image} alt={`${title} - Image ${index + 2}`} />
              <div className="image-overlay"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Layout khusus untuk 4 gambar (Final Project)
  if (imageArray.length === 4) {
    return (
      <div className="project-images">
        <div className="images-four">
          {/* Gambar 1 - Full width di atas */}
          <div className="image-item main-image-four">
            <img src={imageArray[0]} alt={`${title} - Image 1`} />
            <div className="image-overlay"></div>
          </div>
          
          {/* Gambar 2 dan 3 - Side by side di tengah */}
          <div className="secondary-images-container">
            <div className="image-item secondary-image-four">
              <img src={imageArray[1]} alt={`${title} - Image 2`} />
              <div className="image-overlay"></div>
            </div>
            <div className="image-item secondary-image-four">
              <img src={imageArray[2]} alt={`${title} - Image 3`} />
              <div className="image-overlay"></div>
            </div>
          </div>
          
          {/* Gambar 4 - Full width di bawah */}
          <div className="image-item bottom-image-four">
            <img src={imageArray[3]} alt={`${title} - Image 4`} />
            <div className="image-overlay"></div>
          </div>
        </div>
      </div>
    );
  }

  // Layout untuk lebih dari 4 gambar (fallback)
  return (
    <div className="project-images">
      <div className="images-multiple">
        <div className="image-item main-image">
          <img src={imageArray[0]} alt={`${title} - Main`} />
          <div className="image-overlay"></div>
        </div>
        {imageArray.slice(1, 3).map((image, index) => (
          <div key={index} className="image-item secondary-image">
            <img src={image} alt={`${title} - Image ${index + 2}`} />
            <div className="image-overlay"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Component untuk external link icon
const ExternalLinkIcon = () => (
  <svg 
    className="project-link-icon" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
    />
  </svg>
);

// Main Projects Page Component
const ProjectsPage = () => {
  // Debug: Log projects data untuk memastikan struktur data
  console.log('Projects data:', projects);

  return (
    <div className="projects-page">
      <div className="projects-container">
        {/* Header Section */}
        <div className="header-section">
          <h1 className="main-title">My Work</h1>
          <p className="main-subtitle">
            A collection of my projects, ranging from professional to personal endeavors.
          </p>
        </div>

        {/* Projects List */}
        <div className="projects-list">
          {projects && projects.length > 0 ? (
            projects.map((project, index) => {
              // Debug: Log setiap project untuk memastikan struktur data
              console.log(`Project ${index + 1}:`, project);
              
              return (
                <div key={project.id || index} className="project">
                  {/* Category Header */}
                  <div className="category-header">
                    <h2 className="category-title">
                      {project.category || 'Uncategorized'}
                    </h2>
                  </div>

                  {/* Project Content */}
                  <div className={`project-content ${index % 2 === 1 ? 'reverse' : ''}`}>
                    {/* Project Information */}
                    <div className="project-info">
                      <h3 className="project-title">
                        {project.title || 'Untitled Project'}
                      </h3>
                      
                      <p className="project-description">
                        {project.description || 'No description available.'}
                      </p>
                      
                      {/* Tech Stack */}
                      <div className="tech-stack">
                        {project.technologies && project.technologies.length > 0 ? (
                          project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="tech-badge">
                              {tech}
                            </span>
                          ))
                        ) : (
                          <span className="tech-badge">No technologies listed</span>
                        )}
                      </div>
                      
                      {/* Project Link */}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <span>View Project</span>
                          <ExternalLinkIcon />
                        </a>
                      )}
                    </div>

                    {/* Project Images */}
                    <ProjectImages 
                      images={project.images || project.image} 
                      title={project.title || 'Project'}
                      projectId={project.id}
                    />
                  </div>

                  {/* Divider between projects */}
                  {index < projects.length - 1 && (
                    <hr className="project-divider" />
                  )}
                </div>
              );
            })
          ) : (
            <div className="no-projects">
              <h3>No projects found</h3>
              <p>Please check your projects data structure.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;