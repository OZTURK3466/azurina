// components/ProjectsPage.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ProjectsPage.css';

const ProjectsPage = () => {
  const [animateItems, setAnimateItems] = useState(false);
  const navigate = useNavigate();
  
  // Données des projets
  const projects = [
    {
      id: 1,
      title: 'Villa Mougins',
      location: 'Mougins',
      description: 'Luxe contemporain et vues panoramiques dans un écrin de verdure provençal.',
      mainImage: '/images/villa2/photo5.jpg',
      status: 'Disponible',
      slug: 'villa-mougins'
    },
    {
      id: 2,
      title: 'Villa Cytes',
      location: 'Mandelieu-La-Napoule',
      description: 'Un havre de luxe méditerranéen où élégance contemporaine et vues panoramiques sur la mer se rencontrent à Mandelieu-La Napoule.',
      mainImage: '/images/cytes/photo1.jpg',
      status: 'Disponible',
      slug: 'villa-cytes'
    }
  ];
  
  // Liste des projets à venir
  const upcomingProjects = [
    { name: "Villa Picasso 1" },
    { name: "Villa Picasso 2" },
    { name: "Villa Fassum" },
    { name: "Villa Romarin" }
  ];

  useEffect(() => {
    // Animation à l'entrée
    setAnimateItems(true);
    
    // Scroll vers le haut de la page
    window.scrollTo(0, 0);
  }, []);

  const handleProjectClick = (slug) => {
    navigate(`/projet/${slug}`);
  };

  return (
    <div className="projects-page">
      {/* En-tête de la page */}
      <div className="projects-page-hero">
        <div className="hero-content">
          <h1 className={`hero-title ${animateItems ? 'animate' : ''}`}>Nos Projets d'Exception</h1>
          <div className={`hero-separator ${animateItems ? 'animate' : ''}`}></div>
          <p className={`hero-subtitle ${animateItems ? 'animate' : ''}`}>
            Découvrez notre collection de propriétés exceptionnelles, chacune incarnant notre vision de l'excellence immobilière
          </p>
        </div>
      </div>
      
      {/* Filtres - à activer quand vous aurez plus de projets */}
      {/* <div className="projects-filters">
        <button className="filter-btn active">Tous</button>
        <button className="filter-btn">Disponibles</button>
        <button className="filter-btn">En construction</button>
        <button className="filter-btn">Paris</button>
        <button className="filter-btn">Côte d'Azur</button>
      </div> */}
      
      {/* Grille de projets */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className={`project-card ${animateItems ? 'animate' : ''}`}
            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            onClick={() => handleProjectClick(project.slug)}
          >
            <div className="project-image-wrapper">
              <img src={project.mainImage} alt={project.title} />
              <div className="project-status">{project.status}</div>
              <div className="project-overlay">
                <span>Voir le projet</span>
              </div>
            </div>
            <div className="project-card-content">
              <h3>{project.title}</h3>
              <p className="project-location">{project.location}</p>
              <div className="card-separator"></div>
              <p className="project-excerpt">{project.description}</p>
            </div>
          </div>
        ))}
        
        {/* Nouvelle carte pour les projets à venir */}
        <div 
          className={`project-card upcoming-projects-card ${animateItems ? 'animate' : ''}`}
          style={{ animationDelay: `${0.2 + projects.length * 0.1}s` }}
        >
          <div className="upcoming-card-header">
            <h3>Projets à venir</h3>
            <div className="card-separator"></div>
          </div>
          <ul className="upcoming-projects-list">
            {upcomingProjects.map((project, index) => (
              <li key={index} className="upcoming-project-item">
                <span>{project.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;