// src/components/Player.jsx
import React from 'react';
import '../styles/Player.css';

function Player() {
  return (
    <div className="player">
      <div className="track-info">
        <div className="track-image"></div>
        <div className="track-details">
          <h4>Technical Skills</h4>
          <p>Languages: C, C++, HTML/CSS, Python • Frameworks: TensorFlow, Bootstrap • Tools: Git, SQL, Figma, Canva</p>
        </div>
      </div>
      <div className="controls">
        <i className="fas fa-backward"></i>
        <i className="fas fa-play"></i>
        <i className="fas fa-forward"></i>
      </div>
    </div>
  );
}

export default Player;