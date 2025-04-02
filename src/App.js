// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import ProjectDetail from './components/ProjectDetail';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';  // Import de la nouvelle page
import Loader from './components/Loader';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    // Précharger les images principales
    const imageUrls = [
      '/images/logo.png',
      '/images/carousel1.jpg',
      '/images/carousel2.jpg',
      '/images/villa2/photo4.jpg' // Image pour la page contact
    ];
    
    // Préchargement des images
    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
    
    // Préparer le contenu pendant le chargement
    const contentReadyTimer = setTimeout(() => {
      setContentReady(true);
    }, 1500);
    
    // Temps de chargement pour l'animation du loader
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(contentReadyTimer);
    };
  }, []);

  return (
    <Router>
      <div className="app">
        {/* Loader de démarrage */}
        <Loader isLoading={loading} />
        
        <div className={`site-content ${contentReady ? 'ready' : ''} ${!loading ? 'visible' : ''}`}>
          <Header scrolled={scrolled} />
          
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projets" element={<ProjectsPage />} />
              <Route path="/projet/:slug" element={<ProjectDetail />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/a-propos" element={<AboutPage />} />
              {/* Ajoutez d'autres routes au besoin */}
            </Routes>
          </main>
          
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;