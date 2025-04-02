// components/ProjectDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Home, Maximize2, Check } from 'lucide-react';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { slug } = useParams();
  const [animate, setAnimate] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  
  // Base de données des projets
  const projectsData = {
    'villa-mougins': {
      id: 1,
      title: 'Villa Mougins',
      location: 'Mougins',
      address: 'Mougins, Alpes-Maritimes',
      completion: 'Disponible immédiatement',
      status: 'Disponible',
      surface: '350 m²',
      description: 'Luxe contemporain et vues panoramiques dans un écrin de verdure provençal.\n\nCette villa d\'exception offre un cadre de vie idyllique, alliant architecture moderne et environnement naturel préservé. Située dans l\'un des villages les plus prisés de la Côte d\'Azur, cette propriété bénéficie d\'un emplacement privilégié, proche des plages et du dynamisme de Cannes.',
      features: [
        'Architecture contemporaine',
        'Vues panoramiques',
        'Piscine à débordement',
        'Jardin paysager méditerranéen',
        'Domotique intégrée',
        'Garage pour plusieurs véhicules'
      ],
      images: [
        '/images/villa2/photo5.jpg',
        '/images/villa2/photo2.jpg',
        '/images/villa2/photo3.jpg',
        '/images/villa2/photo4.jpg'
      ]
    },
    'villa-cytes': {
      id: 2,
      title: 'Villa Cytes',
      location: 'Mandelieu-La-Napoule',
      address: 'Mandelieu-La-Napoule, Alpes-Maritimes',
      completion: 'Disponible immédiatement',
      status: 'Disponible',
      surface: '400 m²',
      description: 'Un havre de luxe méditerranéen où élégance contemporaine et vues panoramiques sur la mer se rencontrent à Mandelieu-La Napoule.\n\nCette villa d\'exception représente le summum du luxe méditerranéen. Dominant la baie de Cannes, elle offre une vue imprenable sur la mer et les îles de Lérins. L\'architecture contemporaine s\'intègre harmonieusement dans son environnement, créant un équilibre parfait entre intérieur et extérieur.',
      features: [
        'Vue panoramique sur la mer',
        'Terrasses spacieuses',
        'Piscine à débordement chauffée',
        'Cuisine d\'été équipée',
        'Système de sécurité haut de gamme',
        'Finitions et matériaux nobles'
      ],
      images: [
        '/images/cytes/photo1.jpg',
        '/images/cytes/photo2.jpg',
        '/images/cytes/photo3.jpg',
        '/images/cytes/photo4.jpg'
      ]
    }
  };
  
  const project = projectsData[slug];
  
  useEffect(() => {
    // Animation à l'entrée
    setTimeout(() => {
      setAnimate(true);
    }, 100);
    
    // Scroll vers le haut de la page
    window.scrollTo(0, 0);
  }, [slug]);
  
  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Projet non trouvé</h2>
        <p>Le projet que vous recherchez n'existe pas ou a été déplacé.</p>
        <Link to="/projets" className="back-btn">Retour à tous les projets</Link>
      </div>
    );
  }
  
  return (
    <div className="project-detail-page">
      {/* Galerie d'images */}
      <div className="project-gallery">
        <div className="main-image-container">
          <img 
            src={project.images[activeImage]} 
            alt={project.title} 
            className="main-image"
          />
          <div className="image-overlay"></div>
          <h1 className={`project-title ${animate ? 'animate' : ''}`}>{project.title}</h1>
          <div className={`project-location-badge ${animate ? 'animate' : ''}`}>
            <MapPin size={16} />
            <span>{project.location}</span>
          </div>
        </div>
        
        <div className="thumbnails-container">
          {project.images.map((image, index) => (
            <div 
              key={index}
              className={`thumbnail ${index === activeImage ? 'active' : ''} ${animate ? 'animate' : ''}`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              onClick={() => setActiveImage(index)}
            >
              <img src={image} alt={`${project.title} - Vue ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Contenu principal */}
      <div className="project-content-container">
        <div className="back-link-container">
          <Link to="/projets" className="back-link">
            <ArrowLeft size={16} />
            <span>Retour à tous les projets</span>
          </Link>
        </div>
        
        <div className="project-content">
          <div className="project-main-content">
            <div className={`project-description ${animate ? 'animate' : ''}`}>
              <h2>À propos de cette propriété</h2>
              <div className="content-separator"></div>
              {project.description.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            
            <div className={`project-features ${animate ? 'animate' : ''}`}>
              <h2>Caractéristiques</h2>
              <div className="content-separator"></div>
              <ul className="features-list">
                {project.features.map((feature, index) => (
                  <li key={index}>
                    <Check size={18} className="feature-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="project-sidebar">
            <div className={`project-info-card ${animate ? 'animate' : ''}`}>
              <div className="info-card-item">
                <MapPin size={20} />
                <div>
                  <h4>Emplacement</h4>
                  <p>{project.address}</p>
                </div>
              </div>
              
              <div className="info-card-item">
                <Home size={20} />
                <div>
                  <h4>Type</h4>
                  <p>Résidence de luxe</p>
                </div>
              </div>
              
              <div className="info-card-item">
                <Maximize2 size={20} />
                <div>
                  <h4>Surface</h4>
                  <p>{project.surface}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;