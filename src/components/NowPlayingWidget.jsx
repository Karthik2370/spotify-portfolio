// src/components/NowPlayingWidget.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NowPlayingWidget.css';

function NowPlayingWidget() {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate('/skills'); // Navigate to the Skills page
  };

  return (
    <div className="now-playing-widget">
      <div className="widget-image">
        <i className="fas fa-code fa-2x"></i> {/* Icon as a placeholder for album art */}
      </div>
      <div className="widget-details">
        <h4>Technical Skills</h4>
        <div className="progress-bar">
          <div className="progress"></div> {/* Progress bar */}
        </div>
      </div>
      <div className="widget-controls">
        <i className="fas fa-play" onClick={handlePlayClick}></i> {/* Play button */}
      </div>
    </div>
  );
}

export default NowPlayingWidget;