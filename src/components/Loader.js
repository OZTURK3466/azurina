// components/Loader.js
import React from 'react';
import './Loader.css';

const Loader = ({ isLoading }) => {
  return (
    <div className={`loader-container ${!isLoading ? 'fade-out' : ''}`}>
      <div className="loader">
        <img src="/images/logo.png" alt="Logo Azurina" className="logo-spin" />
      </div>
    </div>
  );
};

export default Loader;