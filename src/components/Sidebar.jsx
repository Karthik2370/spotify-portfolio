// src/components/Sidebar.jsx
import React from 'react';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <i className="fas fa-address-card fa-2x"></i>
        <h2>Karthik's Portfolio</h2>
      </div>
      <div className="library">
        <h3>Portfolio</h3>
        <ul>
          <li>
            <i className="fas fa-address-book"></i>
            <span>About Me</span>
          </li>
          <li>
            <i className="fas fa-school"></i>
            <span>Education</span>
          </li>
          <li>
            <i className="fas fa-suitcase"></i>
            <span>Experience</span>
          </li>
          <li>
            <i className="fas fa-code"></i>
            <span>Projects</span>
          </li>
          <li>
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