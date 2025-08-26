import React from 'react';
import { projects } from '../../data/projects'; // Mengimpor data proyek
import ProjectCard from '../ProjectCard'; // Mengimpor komponen ProjectCard
import { motion } from 'framer-motion'; // Mengimpor motion dari framer-motion untuk animasi
import './ProjectSection.css'; // Mengimpor CSS untuk styling bagian proyek

const FinalProjects = () => {
  // Memfilter array 'projects' untuk mendapatkan hanya proyek dengan kategori 'Final Project'
  const finalProjects = projects.filter(project => project.category === 'Final Project');
  
  // Jika tidak ada proyek dalam kategori ini, komponen tidak akan merender apa pun
  if (finalProjects.length === 0) {
    return null;
  }

  return (
    // Menggunakan motion.div untuk animasi saat komponen masuk ke tampilan
    <motion.div 
      className="project-section"
      initial={{ opacity: 0, y: 50 }} // Posisi awal: transparan dan sedikit di bawah
      whileInView={{ opacity: 1, y: 0 }} // Animasi saat terlihat: memudar masuk dan naik ke posisi normal
      viewport={{ once: true, amount: 0.2 }} // Animasi hanya berjalan sekali, terpicu saat 20% komponen terlihat
      transition={{ duration: 0.6 }} // Durasi animasi
    >
      <h3 className="section-title">Final Project</h3> {/* Judul kategori */}
      <div className="projects-grid">
        {/* Melakukan iterasi pada array finalProjects dan merender ProjectCard untuk setiap proyek */}
        {finalProjects.map((project, index) => (
          <ProjectCard key={index} project={project} /> // Menggunakan index sebagai key (lebih baik menggunakan project.id jika ada)
        ))}
      </div>
    </motion.div>
  );
};

export default FinalProjects;