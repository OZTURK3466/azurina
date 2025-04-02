// components/ContactPage.js
import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Copy, Check } from 'lucide-react';
import './ContactPage.css';

const ContactPage = () => {
  const [animateItems, setAnimateItems] = useState(false);
  const [copied, setCopied] = useState({
    email: false,
    phone: false
  });

  useEffect(() => {
    // Animation à l'entrée
    setAnimateItems(true);
    
    // Scroll vers le haut de la page
    window.scrollTo(0, 0);
  }, []);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    
    setCopied({
      ...copied,
      [type]: true
    });
    
    setTimeout(() => {
      setCopied({
        ...copied,
        [type]: false
      });
    }, 2000);
  };

  return (
    <div className="contact-page">
      {/* En-tête de la page */}
      <div className="contact-page-hero">
        <div className="hero-content">
          <h1 className={`hero-title ${animateItems ? 'animate' : ''}`}>Contact</h1>
          <div className={`hero-separator ${animateItems ? 'animate' : ''}`}></div>
          <p className={`hero-subtitle ${animateItems ? 'animate' : ''}`}>
            Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans votre projet immobilier
          </p>
        </div>
      </div>
      
      {/* Contenu principal */}
      <div className="contact-container">
        <div className="contact-info-section">
          <div className={`contact-info-card ${animateItems ? 'animate' : ''}`} style={{ animationDelay: '0.2s' }}>
            <div className="card-icon">
              <MapPin size={24} />
            </div>
            <h3>Adresse</h3>
            <p>4 Boulevard Etienne Astegiano</p>
            <p>06150 Cannes, France</p>
          </div>

          <div className={`contact-info-card ${animateItems ? 'animate' : ''}`} style={{ animationDelay: '0.3s' }}>
            <div className="card-icon">
              <Phone size={24} />
            </div>
            <h3>Téléphone</h3>
            <p className="copyable">
              +33 6 63 70 84 88
              <button 
                className="copy-button"
                onClick={() => handleCopy('+33686166409', 'phone')}
                aria-label="Copier le numéro de téléphone"
              >
                {copied.phone ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </p>
            <span className="copy-confirmation">{copied.phone ? 'Copié !' : ''}</span>

            <p className="copyable">
              +33 6 86 16 64 09
              <button 
                className="copy-button"
                onClick={() => handleCopy('+33686166409', 'phone')}
                aria-label="Copier le numéro de téléphone"
              >
                {copied.phone ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </p>
            <span className="copy-confirmation">{copied.phone ? 'Copié !' : ''}</span>
          </div>

          <div className={`contact-info-card ${animateItems ? 'animate' : ''}`} style={{ animationDelay: '0.4s' }}>
            <div className="card-icon">
              <Mail size={24} />
            </div>
            <h3>Email</h3>
            <p className="copyable">
              contact@azurina.com
              <button 
                className="copy-button"
                onClick={() => handleCopy('contact@azurina.com', 'email')}
                aria-label="Copier l'adresse email"
              >
                {copied.email ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </p>
            <span className="copy-confirmation">{copied.email ? 'Copié !' : ''}</span>
          </div>

          <div className={`contact-info-card ${animateItems ? 'animate' : ''}`} style={{ animationDelay: '0.5s' }}>
            <div className="card-icon">
              <Clock size={24} />
            </div>
            <h3>Horaires</h3>
            <p>Lundi - Vendredi: 9h - 18h</p>
            <p>Samedi: 10h - 16h (sur rendez-vous)</p>
            <p>Dimanche: Fermé</p>
          </div>
        </div>
        
        <div className={`map-section ${animateItems ? 'animate' : ''}`} style={{ animationDelay: '0.6s' }}>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.6276169210504!2d7.0049275!3d43.560405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ce81b34b8b28bd%3A0x991c33c9f058b3cc!2s4%20Bd%20Etienne%20Ast%C3%A9giano%2C%2006150%20Cannes%2C%20France!5e0!3m2!1sfr!2sfr!4v1712169550158!5m2!1sfr!2sfr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              title="Carte localisation"
            ></iframe>
          </div>
        </div>

        <div className={`additional-info ${animateItems ? 'animate' : ''}`} style={{ animationDelay: '0.7s' }}>
          <h2>Comment pouvons-nous vous aider?</h2>
          <div className="info-separator"></div>
          <div className="help-options">
            <div className="help-option">
              <h3>Découvrir nos propriétés</h3>
              <p>Vous êtes à la recherche d'une résidence d'exception? Notre équipe peut vous présenter notre collection de propriétés prestigieuses.</p>
            </div>
            
            <div className="help-option">
              <h3>Vendre votre bien</h3>
              <p>Vous souhaitez vendre votre propriété? Nous vous accompagnons tout au long du processus avec notre expertise du marché de luxe.</p>
            </div>
            
            <div className="help-option">
              <h3>Projets sur mesure</h3>
              <p>Vous avez un projet immobilier spécifique? Nous pouvons vous aider à le concrétiser selon vos exigences et votre vision.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Section CTA */}
      <div className={`contact-cta ${animateItems ? 'animate' : ''}`} style={{ animationDelay: '0.8s' }}>
        <h2>Restez informé</h2>
        <p>Suivez-nous sur les réseaux sociaux pour découvrir nos nouvelles propriétés et actualités</p>
        <div className="social-links">
          <a href="https://www.instagram.com/azurina06?igsh=cHp0c200c3h6dHhj" className="social-link">
            <div className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </div>
            <span>Instagram</span>
          </a>
          <a href="#" className="social-link">
            <div className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </div>
            <span>Facebook</span>
          </a>
          <a href="#" className="social-link">
            <div className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </div>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;