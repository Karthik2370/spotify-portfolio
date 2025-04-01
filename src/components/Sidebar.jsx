// src/components/Sidebar.jsx
import React from 'react';
import '../styles/Sidebar.css';

function Sidebar({ aboutMeRef, educationRef, experienceRef, projectsRef, certificationsRef }) {
  return (
    <div className="sidebar">
      <div className="library">
        <h3>Portfolio</h3>
        <ul>
          <li onClick={() => aboutMeRef.current.scrollIntoView({ behavior: 'smooth' })}>
            <i className="fas fa-address-book"></i>
            <span>About Me</span>
          </li>
          <li onClick={() => educationRef.current.scrollIntoView({ behavior: 'smooth' })}>
            <i className="fas fa-school"></i>
            <span>Education</span>
          </li>
          <li onClick={() => experienceRef.current.scrollIntoView({ behavior: 'smooth' })}>
            <i className="fas fa-suitcase"></i>
            <span>Experience</span>
          </li>
          <li onClick={() => projectsRef.current.scrollIntoView({ behavior: 'smooth' })}>
            <i className="fas fa-code"></i>
            <span>Projects</span>
          </li>
          <li onClick={() => certificationsRef.current.scrollIntoView({ behavior: 'smooth' })}>
            <i className="fas fa-award"></i>
            <span>Certifications</span>
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