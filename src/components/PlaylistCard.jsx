// src/components/PlaylistCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/PlaylistCard.css';

function PlaylistCard({ title, description, details, isExpanded, onToggle, isProject, id }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (isProject) {
      // Navigate to project details page using the project ID
      navigate(`/project/${id}`);
    } else {
      // Toggle expansion for non-project cards
      onToggle();
    }
  };

  return (
    <div className={`playlist-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="card-image">
        <button className="play-button" onClick={handleClick}>
          <i className={`fas ${isExpanded ? 'fa-pause' : 'fa-play'}`}></i>
        </button>
      </div>
      <h3>{title}</h3>
      <p className="description">{description}</p>
      {!isProject && isExpanded && (
        <ul>
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PlaylistCard;