// components/ProjectsSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Villa Tulipe',
      location: 'Mougins',
      description: 'Test.',
      image: '/images/villa2/photo5.jpg',
      status: 'Disponible',
      slug: 'villa-mougins'
    },
    {
      id: 2,
      title: 'Villa Cystes',
      location: 'Mandelieu-La-Napoule',
      description: 'Te havre de luxe méditerranéen où élégance contemporaine et vues panoramiques sur la mer se rencontrent à Mandelieu-La Napoule.',
      image: '/images/cytes/photo1.jpg',
      status: 'Disponible',
      slug: 'villa-cytes'
    },
    {
      id: 1,
      title: 'Villa Picasso',
      location: 'Mougins',
      description: 'Te havre de luxe méditerranéen où élégance contemporaine et vues panoramiques sur la mer se rencontrent à Mandelieu-La Napoule.',
      image: '/images/picasso/picasso1.jpg',
      status: 'Disponible',
      slug: 'villa-picasso'
    },
  ];

  return (
    <section id="projets" className="projects-section fade-in-up" style={{ animationDelay: '0.6s' }}>
      <div className="section-header">
        <h2>Nos Projets d'Exception</h2>
        <div className="separator"></div>
        <p>Des résidences exclusives sélectionnées pour une clientèle exigeante</p>
      </div>
      
      <div className="featured-projects">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className={`featured-project fade-in-up ${index === 0 ? 'first-project' : 'second-project'}`} 
            style={{ animationDelay: `${0.8 + index * 0.2}s` }}
          >
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-status">{project.status}</div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p className="project-location">{project.location}</p>
              <div className="project-separator"></div>
              <p className="project-description">{project.description}</p>
              <Link to={`/projet/${project.slug}`} className="project-details-btn">Découvrir</Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="projects-cta fade-in-up" style={{ animationDelay: '1.2s' }}>
        <Link to="/projets" className="see-all-btn">Voir tous nos projets</Link>
      </div>
    </section>
  );
};

export default ProjectsSection;