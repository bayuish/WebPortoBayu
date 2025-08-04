// src/components/home/Header.jsx

import React from 'react';
// Import Link dan useLocation dari react-router-dom
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation(); // Mendapatkan objek lokasi saat ini

  return (
    <header className="header">
      <div className="header-container">
        <nav>
          <div className="logo">Bayu Lesmana</div>
          <ul>
            <li>
              {/* Tambahkan kelas 'active' jika path saat ini adalah '/' */}
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
            </li>
            <li>
              {/* Tambahkan kelas 'active' jika path saat ini adalah '/about' */}
              <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
            </li>
            <li>
             {/* Tambahkan kelas 'active' jika path saat ini adalah '/projects' */}
              <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;