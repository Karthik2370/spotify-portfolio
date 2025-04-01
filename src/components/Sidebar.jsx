// src/components/Sidebar.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Sidebar.css';

function Sidebar({ aboutMeRef, educationRef, experienceRef, projectsRef, certificationsRef }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = () => {
    navigate('/'); // Navigate to the main page
  };

  const handleSearchClick = () => {
    // Placeholder for future search functionality
    console.log('Search clicked - functionality to be implemented');
  };

  const handleSkillsClick = () => {
    navigate('/skills'); // Navigate to the Skills page
  };

  const handleScrollClick = (ref) => {
    if (location.pathname !== '/') {
      // If not on the main page, navigate to the main page first
      navigate('/', { state: { scrollTo: ref } });
    } else {
      // If already on the main page, just scroll
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sidebar">
      <div className="navigation">
        <ul>
          <li onClick={handleHomeClick}>
            <i className="fas fa-home"></i>
            <span>Home</span>
          </li>
          <li onClick={handleSearchClick}>
            <i className="fas fa-search"></i>
            <span>Search</span>
          </li>
        </ul>
      </div>
      <div className="divider"></div>
      <div className="library">
        <h3>Portfolio</h3>
        <ul>
          <li onClick={() => handleScrollClick(aboutMeRef)}>
            <i className="fas fa-address-book"></i>
            <span>About Me</span>
          </li>
          <li onClick={() => handleScrollClick(educationRef)}>
            <i className="fas fa-school"></i>
            <span>Education</span>
          </li>
          <li onClick={() => handleScrollClick(experienceRef)}>
            <i className="fas fa-suitcase"></i>
            <span>Experience</span>
          </li>
          <li onClick={() => handleScrollClick(projectsRef)}>
            <i className="fas fa-code"></i>
            <span>Projects</span>
          </li>
          <li onClick={() => handleScrollClick(certificationsRef)}>
            <i className="fas fa-award"></i>
            <span>Certifications</span>
          </li>
          <li onClick={handleSkillsClick}>
            <i className="fas fa-tools"></i>
            <span>Skills</span>
          </li>
        </ul>
      </div>
      <div className="connect">
        <h3>Connect</h3>
        <ul>
          <li>
            <i className="fab fa-linkedin"></i>
            <a href="https://linkedin.com/in/karthik-nambiar" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li>
            <i className="fab fa-github"></i>
            <a href="https://github.com/Karthik2370" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
        </ul>
      </div>
      <div className="profile">
        <div className="profile-image"></div>
        <span>Karthik Nambiar</span>
      </div>
    </div>
  );
}

export default Sidebar;