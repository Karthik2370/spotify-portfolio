// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Sidebar.css';

function Sidebar({ aboutMeRef, educationRef, experienceRef, projectsRef, certificationsRef }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleHomeClick = () => {
    navigate('/');
    setIsMenuOpen(false);
  };

  const handleSearchClick = () => {
    console.log('Search clicked - functionality to be implemented');
  };

  const handleSkillsClick = () => {
    navigate('/skills');
    setIsMenuOpen(false);
  };

  const handleScrollClick = (ref) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: ref } });
    } else {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button and Overlay - Only visible on mobile */}
      <button className="hamburger-menu" onClick={toggleMenu}>
        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>

      {/* Mobile Menu Content - Only visible on mobile */}
      <div className={`mobile-menu ${isMenuOpen ? 'mobile-open' : ''}`}>
        <div className="essential-links">
          <button 
            className="mobile-menu-link"
            onClick={handleHomeClick}
          >
            <i className="fas fa-home"></i>
            <span>Home</span>
          </button>
          <a 
            href="/resume.pdf" 
            download="Karthik_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleMenu}
          >
            <i className="fas fa-file-alt"></i>
            <span>Resume</span>
          </a>
          <button 
            className="mobile-menu-link"
            onClick={() => {
              handleSkillsClick();
              toggleMenu();
            }}
          >
            <i className="fas fa-tools"></i>
            <span>Skills</span>
          </button>
          <a 
            href="https://github.com/karthiknambiar" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={toggleMenu}
          >
            <i className="fab fa-github"></i>
            <span>GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/karthiknambiar/" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={toggleMenu}
          >
            <i className="fab fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
          <a 
            href="mailto:karthiknambiar@gmail.com"
            onClick={toggleMenu}
          >
            <i className="fas fa-envelope"></i>
            <span>Contact</span>
          </a>
        </div>
      </div>

      {/* Desktop Sidebar - Original unchanged */}
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
            <li>
              <a 
                href="/resume.pdf" 
                download="Karthik_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-file-alt"></i>
                <span>Resume</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="connect">
          <h3>Connect</h3>
          <ul>
            <li>
              <i className="fab fa-linkedin"></i>
              <a href="https://www.linkedin.com/in/karthik-nambiar-2ba03b216/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
            <li>
              <i className="fab fa-github"></i>
              <a href="https://github.com/Karthik2370" target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <a href="mailto:ramachandrankarthik7@gmail.com" className="sidebar-link">Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;