// components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = ({ scrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} fade-in-up`} style={{ animationDelay: '0.2s' }}>
      <div className="header-container">
        <div className="logo-container">
          <Link to="/">
            <img src="/images/logo.png" alt="Logo Entreprise de Luxe" className="logo" />
          </Link>
        </div>
        
        <nav className={`nav-desktop ${menuOpen ? 'show' : ''}`}>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/projets">Nos Projets</Link></li>
            <li><Link to="/a-propos">À Propos</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;