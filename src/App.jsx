// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'; // Global CSS Anda

// Import semua halaman
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';

// Import komponen yang dipakai di seluruh aplikasi
import Header from './components/home/Header';
import Footer from './components/home/Footer';

function App() {
  return (
    <> {/* Gunakan React Fragment untuk menghindari div tambahan */}
      <Header />

      {/* Konten halaman akan ditampilkan di sini berdasarkan URL */}
      <main className="app-container"> {/* Hanya main yang dibatasi dan terpusat */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* Tambahkan rute untuk halaman lain di sini */}
        </Routes>
      </main>

      {/* Footer juga akan selalu tampil di semua halaman */}
      <Footer />
    </>
  );
}

export default App;