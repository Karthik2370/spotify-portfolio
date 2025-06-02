// src/components/NowPlayingWidget.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NowPlayingWidget.css';

function NowPlayingWidget() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);

  const handlePlayClick = () => {
    navigate('/skills'); // Navigate to the Skills page
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="now-playing-widget">
      <button className="widget-close" onClick={handleClose} aria-label="Close widget">
        <i className="fas fa-times"></i>
      </button>
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