// src/components/PlaylistCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/PlaylistCard.css';

function PlaylistCard({ title, description, isExpanded, onToggle, isProject, id, techStack, details }) {
  const navigate = useNavigate();

  // Extract date from description based on section type
  let date, role, location;
  if (isProject) {
    date = description; // Projects just have the date
  } else if (description.includes('•')) {
    // For experience and certifications
    const parts = description.split(' • ');
    if (parts.length === 3) {
      // Experience format: "Role • Date • Location"
      [role, date, location] = parts;
    } else {
      // Certification format: "Certification • Date"
      [role, date] = parts;
    }
  } else {
    date = description;
  }

  const handleClick = () => {
    if (isProject) {
      navigate(`/project/${id}`);
    } else {
      onToggle();
    }
  };

  return (
    <div className={`playlist-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="card-image">
        <div className="date-overlay">{date}</div>
        <button className="play-button" onClick={handleClick}>
          <i className={`fas ${isExpanded ? 'fa-pause' : 'fa-play'}`}></i>
        </button>
      </div>
      <h3>{title}</h3>
      {!isProject && role && (
        <p className="description">{role}</p>
      )}
      {!isProject && isExpanded && (
        <div className="tech-tags">
          {techStack ? (
            // For experience cards
            techStack.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))
          ) : (
            // For certification cards
            details && details.map((detail, index) => (
              <span key={index} className="tech-tag">{detail}</span>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default PlaylistCard;