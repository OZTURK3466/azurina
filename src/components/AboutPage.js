// components/AboutPage.js
import React, { useState, useEffect } from 'react';
import { MapPin, Award, Users, Clock, Check } from 'lucide-react';
import './AboutPage.css';

const AboutPage = () => {
  const [animateItems, setAnimateItems] = useState(false);
  
  useEffect(() => {
    // Animation à l'entrée
    setAnimateItems(true);
    
    // Scroll vers le haut de la page
    window.scrollTo(0, 0);
  }, []);

  // Données pour la section équipe
  const teamMembers = [
    {
      id: 1,
      name: 'SANA MOHAMAD',
      position: 'Directrice Générale',
      image: '/api/placeholder/300/300',
    },
    {
      id: 2,
      name: 'Raymond Expert',
      position: 'Directeur Projets',
      image: '/api/placeholder/300/300',
    },
    {
      id: 3,
      name: 'Marie Conseil',
      position: 'Responsable Commerciale',
      image: '/api/placeholder/300/300',
    }
  ];

  // Données pour la section valeurs
  const values = [
    {
      id: 1,
      title: 'Excellence',
      description: 'Chaque projet reflète notre engagement envers les plus hauts standards de qualité, du choix des matériaux à la finition minutieuse.',
      icon: <Award size={40} />
    },
    {
      id: 2,
      title: 'Authenticité',
      description: 'Nous cultivons des relations transparentes et sincères avec nos clients, basées sur la confiance et l\'intégrité.',
      icon: <Users size={40} />
    },
    {
      id: 3,
      title: 'Innovation',
      description: 'Notre approche avant-gardiste nous permet d\'intégrer les dernières tendances et technologies dans chacune de nos créations.',
      icon: <Clock size={40} />
    }
  ];

  // Jalons de l'entreprise
  const milestones = [
    { year: '2020', event: 'Création d\'Azurina par SAMRA' },
    { year: '2021', event: 'Premier projet résidentiel de luxe à Mougins' },
    { year: '2022', event: 'Expansion des activités sur la Côte d\'Azur' },
    { year: '2023', event: 'Lancement de la Villa Cystes à Mandelieu-La-Napoule' },
    { year: '2024', event: 'Développement de nouveaux projets prestigieux' }
  ];

  return (
    <div className="about-page">
      {/* En-tête de la page */}
      <div className="about-page-hero">
        <div className="hero-content">
          <h1 className={`hero-title ${animateItems ? 'animate' : ''}`}>À Propos</h1>
          <div className={`hero-separator ${animateItems ? 'animate' : ''}`}></div>
          <p className={`hero-subtitle ${animateItems ? 'animate' : ''}`}>
            Azurina, l'art de créer des résidences d'exception sur la Côte d'Azur
          </p>
        </div>
      </div>
      
      {/* Contenu principal */}
      <div className="about-container">
        {/* Section histoire */}
        <section className={`about-section history-section ${animateItems ? 'animate' : ''}`}>
          <div className="section-content">
            <div className="section-text">
              <h2>Notre Histoire</h2>
              <div className="content-separator"></div>
              <p>
                Fondée en 2020 par la société SAMRA, Azurina est née d'une vision : créer des espaces de vie d'exception qui incarnent l'élégance et le raffinement de l'art de vivre méditerranéen.
              </p>
              <p>
                Notre entreprise s'est rapidement imposée comme un acteur incontournable de l'immobilier de prestige sur la Côte d'Azur, en développant des propriétés exclusives qui allient architecture contemporaine, matériaux nobles et emplacements privilégiés.
              </p>
              <p>
                Basée à Cannes, au cœur de l'un des marchés immobiliers les plus prisés au monde, Azurina bénéficie d'une connaissance approfondie de la région et d'un réseau d'experts locaux qui nous permettent d'identifier les opportunités les plus prometteuses.
              </p>
            </div>
            <div className="section-image">
              <img src="/api/placeholder/600/400" alt="Siège Azurina à Cannes" />
            </div>
          </div>
        </section>
        
        {/* Section mission et vision */}
        <section className={`about-section vision-section ${animateItems ? 'animate' : ''}`}>
          <div className="section-header">
            <h2>Notre Mission & Vision</h2>
            <div className="content-separator"></div>
          </div>
          <div className="vision-content">
            <div className="vision-card">
              <h3>Mission</h3>
              <p>
                Nous nous engageons à concevoir et réaliser des résidences d'exception qui transcendent les attentes de nos clients les plus exigeants, en créant des espaces où le luxe rencontre l'art de vivre méditerranéen.
              </p>
            </div>
            <div className="vision-card">
              <h3>Vision</h3>
              <p>
                Devenir la référence incontestée de l'immobilier de prestige sur la Côte d'Azur, en proposant des propriétés uniques qui allient innovation architecturale, intégration harmonieuse dans leur environnement et excellence dans chaque détail.
              </p>
            </div>
          </div>
        </section>
        
        {/* Section valeurs */}
        <section className={`about-section values-section ${animateItems ? 'animate' : ''}`}>
          <div className="section-header">
            <h2>Nos Valeurs</h2>
            <div className="content-separator"></div>
          </div>
          <div className="values-grid">
            {values.map((value) => (
              <div className="value-card" key={value.id}>
                <div className="value-icon">
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Section timeline */}
        <section className={`about-section timeline-section ${animateItems ? 'animate' : ''}`}>
          <div className="section-header">
            <h2>Notre Parcours</h2>
            <div className="content-separator"></div>
          </div>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>{milestone.year}</h3>
                  <p>{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Section équipe */}
        <section className={`about-section team-section ${animateItems ? 'animate' : ''}`}>
          <div className="section-header">
            <h2>Notre Équipe</h2>
            <div className="content-separator"></div>
            <p className="section-description">
              Des professionnels passionnés et expérimentés, dédiés à l'excellence dans chaque projet
            </p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div className="team-card" key={member.id}>
                <div className="team-photo">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p className="team-position">{member.position}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Section approche */}
        <section className={`about-section approach-section ${animateItems ? 'animate' : ''}`}>
          <div className="section-content reverse">
            <div className="section-text">
              <h2>Notre Approche</h2>
              <div className="content-separator"></div>
              <p>
                Azurina se distingue par son approche personnalisée et attentive à chaque projet. Notre philosophie repose sur plusieurs piliers essentiels :
              </p>
              <ul className="approach-list">
                <li>
                  <Check size={20} className="check-icon" />
                  <span>Une sélection rigoureuse des emplacements les plus prisés</span>
                </li>
                <li>
                  <Check size={20} className="check-icon" />
                  <span>Une collaboration avec des architectes et designers de renom</span>
                </li>
                <li>
                  <Check size={20} className="check-icon" />
                  <span>L'utilisation exclusive de matériaux nobles et durables</span>
                </li>
                <li>
                  <Check size={20} className="check-icon" />
                  <span>Une attention méticuleuse portée à chaque détail</span>
                </li>
                <li>
                  <Check size={20} className="check-icon" />
                  <span>Un accompagnement personnalisé de nos clients</span>
                </li>
              </ul>
            </div>
            <div className="section-image">
              <img src="/images/carousel2.jpg" alt="Approche Azurina" />
            </div>
          </div>
        </section>
        
        {/* Section Partenaires */}
        <section className={`about-section partners-section ${animateItems ? 'animate' : ''}`}>
          <div className="section-header">
            <h2>Nos Partenaires</h2>
            <div className="content-separator"></div>
            <p className="section-description">
              Nous collaborons avec les meilleurs experts pour garantir l'excellence de nos réalisations
            </p>
          </div>
          <div className="partners-grid">
            <div className="partner-logo">
              <img src="/api/placeholder/200/100" alt="Partner 1" />
            </div>
            <div className="partner-logo">
              <img src="/api/placeholder/200/100" alt="Partner 2" />
            </div>
            <div className="partner-logo">
              <img src="/api/placeholder/200/100" alt="Partner 3" />
            </div>
            <div className="partner-logo">
              <img src="/api/placeholder/200/100" alt="Partner 4" />
            </div>
          </div>
        </section>
      </div>
      
      {/* Section CTA */}
      <div className={`about-cta ${animateItems ? 'animate' : ''}`}>
        <h2>Prêt à découvrir l'excellence immobilière?</h2>
        <p>Contactez-nous pour en savoir plus sur nos services et nos projets en cours.</p>
        <a href="/contact" className="cta-button">Nous Contacter</a>
      </div>
    </div>
  );
};

export default AboutPage;