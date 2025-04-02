// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-about">
          <img src="/images/logo.png" alt="Logo" className="footer-logo" />
          <p className="footer-description">
            Notre entreprise se spécialise dans la promotion immobilière de luxe, 
            offrant des résidences d'exception pour une clientèle exigeante à la 
            recherche d'élégance et de raffinement.
          </p>
          <div className="footer-social">
            <a href="https://www.instagram.com/azurina06?igsh=cHp0c200c3h6dHhj" className="social-icon">
              <Instagram size={20} color="white" />
            </a>
            <a href="#" className="social-icon">
              <Facebook size={20} color="white" />
            </a>
            <a href="#" className="social-icon">
              <Linkedin size={20} color="white" />
            </a>
          </div>
        </div>

        <div className="footer-links-section">
          <h3 className="footer-heading">Liens Rapides</h3>
          <ul className="footer-links">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/projets">Nos Projets</Link></li>
            <li><a href="/#a-propos">À Propos</a></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-projects">
          <h3 className="footer-heading">Projets Récents</h3>
          <ul className="footer-links">
            <li><Link to="/projet/villa-mougins">Villa Tulipe</Link></li>
            <li><Link to="/projet/villa-cytes">Villa Cystes</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3 className="footer-heading">Contact</h3>
          <div className="contact-info">
            <div className="contact-item">
              <MapPin size={18} />
              <p>4 Rue Etienne Astegiano, 06150 Cannes </p>
            </div>
            <div className="contact-item">
              <Phone size={18} />
              <p>+33 6 63 70 84 88</p>
            </div>
            <div className="contact-item">
              <Phone size={18} />
              <p>+33 6 86 16 64 09</p>
            </div>
            <div className="contact-item">
              <Mail size={18} />
              <p>contact@azurina.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        &copy; {new Date().getFullYear()} Azurina. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;