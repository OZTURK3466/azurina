// components/HeroCarousel.js
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './HeroCarousel.css';

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const progressRef = useRef(0);
  const animationRef = useRef(null);
  const mainProgressBarRef = useRef(null);
  const postsProgressBarRefs = useRef([]);
  
  // Données des slides - adaptez selon votre contenu actuel
  const slides = [
    {
      id: 1,
      image: '/images/carousel1.jpg',
      tag: 'Résidentiel',
      title: 'Résidences d\'Exception',
      subtitle: 'Des propriétés uniques pour une clientèle exigeante',
      linkText: 'Découvrir nos propriétés',
      date: '16 Mars 2025'
    },
    {
      id: 2,
      image: '/images/carousel2.jpg',
      tag: 'Design',
      title: 'Design & Élégance',
      subtitle: 'L\'art de vivre à son apogée',
      linkText: 'Découvrir nos propriétés',
      date: '12 Mars 2025'
    },
  ];

  const updateProgress = () => {
    if (progressRef.current >= 100) {
      progressRef.current = 0;
      
      // Réinitialiser les barres de progression
      if (postsProgressBarRefs.current[activeIndex]) {
        postsProgressBarRefs.current[activeIndex].style.width = '0%';
      }
      if (mainProgressBarRef.current) {
        mainProgressBarRef.current.style.width = '0%';
      }
      
      // Passer au slide suivant
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    } else {
      progressRef.current += 0.1; // Vitesse réduite pour une progression plus lente
      
      // Mettre à jour les barres de progression
      if (postsProgressBarRefs.current[activeIndex]) {
        postsProgressBarRefs.current[activeIndex].style.width = `${progressRef.current}%`;
      }
      if (mainProgressBarRef.current) {
        mainProgressBarRef.current.style.width = `${progressRef.current}%`;
      }
    }
    
    animationRef.current = requestAnimationFrame(updateProgress);
  };

  useEffect(() => {
    // Démarrer l'animation
    animationRef.current = requestAnimationFrame(updateProgress);
    
    // Réinitialiser le compteur de progression lors du changement de slide
    progressRef.current = 0;
    
    // Nettoyer l'animation lorsque le composant est démonté
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [activeIndex]);

  const handlePostClick = (index) => {
    // Annuler l'animation en cours
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    // Réinitialiser le compteur de progression
    progressRef.current = 0;
    
    // Mettre à jour l'index actif
    setActiveIndex(index);
    
    // Désactiver les clics pendant un court instant pour éviter les clics multiples
    const posts = document.querySelectorAll('.post');
    posts.forEach((post) => {
      post.classList.add('post--disabled');
    });
    
    setTimeout(() => {
      posts.forEach((post) => {
        post.classList.remove('post--disabled');
      });
    }, 2500);
  };

  return (
    <div className="carousel fade-in-up" style={{ animationDelay: '0.4s' }}>
      <div className="progress-bar progress-bar--primary hide-on-desktop">
        <div className="progress-bar__fill" ref={mainProgressBarRef}></div>
      </div>

      <header className="main-post-wrapper">
        <div className="slides">
          {slides.map((slide, index) => (
            <article 
              key={slide.id} 
              className={`main-post ${index === activeIndex ? 'main-post--active' : 'main-post--not-active'}`}
            >
              <div className="main-post__image">
                <img src={slide.image} alt={slide.title} loading="lazy" />
              </div>
              <div className="main-post__content">
                <div className="main-post__tag-wrapper">
                  <span className="main-post__tag">{slide.tag}</span>
                </div>
                <h1 className="main-post__title">{slide.title}</h1>
                <p className="main-post__subtitle">{slide.subtitle}</p>
                <Link to="/projets" className="main-post__link">
                  <span className="main-post__link-text">{slide.linkText}</span>
                  <ArrowRight size={24} className="main-post__link-icon main-post__link-icon--arrow" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </header>

      <div className="posts-wrapper hide-on-mobile">
        {slides.map((slide, index) => (
          <article 
            key={slide.id} 
            className={`post ${index === activeIndex ? 'post--active' : ''}`}
            onClick={() => handlePostClick(index)}
          >
            <div className="progress-bar">
              <div 
                className="progress-bar__fill"
                ref={el => postsProgressBarRefs.current[index] = el}
              ></div>
            </div>
            <header className="post__header">
              <span className="post__tag">{slide.tag}</span>
              <p className="post__published">{slide.date}</p>
            </header>
            <h2 className="post__title">{slide.title}</h2>
          </article>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;