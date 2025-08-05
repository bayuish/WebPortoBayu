// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Import semua halaman
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage'; // <-- Tambah ContactPage

// Import komponen global
import Header from './components/home/Header';
import Footer from './components/home/Footer';

function App() {
  return (
    <>
      <Header />

      <main className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} /> {/* <-- Tambah Route */}
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
