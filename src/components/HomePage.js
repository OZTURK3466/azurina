// components/HomePage.js
import React from 'react';
import HeroCarousel from './HeroCarousel';
import ProjectsSection from './ProjectsSection';

const HomePage = () => {
  return (
    <>
      <HeroCarousel />
      <ProjectsSection />
      {/* Vous pouvez ajouter d'autres sections de votre page d'accueil ici */}
    </>
  );
};

export default HomePage;