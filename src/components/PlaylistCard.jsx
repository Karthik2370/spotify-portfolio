// src/components/PlaylistCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/PlaylistCard.css';

function PlaylistCard({ title, description, details, isExpanded, onToggle }) {
  return (
    <motion.div
      className="playlist-card"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="card-image">
        <motion.div
          className="play-button"
          onClick={onToggle}
          whileHover={{ scale: 1.2 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <i className={isExpanded ? 'fas fa-pause' : 'fas fa-play'}></i>
        </motion.div>
      </div>
      <h3>{title}</h3>
      <p className="description">{description}</p>
      {isExpanded && details.length > 0 && (
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </motion.ul>
      )}
    </motion.div>
  );
}

export default PlaylistCard;