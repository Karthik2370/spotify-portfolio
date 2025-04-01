// src/components/SkillsPage.jsx
import React, { useEffect, useRef } from 'react';
import ProgressBar from 'progressbar.js';
import '../styles/SkillsPage.css';

function SkillsPage() {
  const skillsData = {
    Languages: [
      { name: 'C', proficiency: 9 },
      { name: 'C++', proficiency: 9 },
      { name: 'HTML/CSS', proficiency: 9 },
      { name: 'Python', proficiency: 7 },
      { name: 'React', proficiency: 7.5 },
      { name: 'NodeJS', proficiency: 7 },
      { name: 'Appscript', proficiency: 8 },
      { name: 'SQL', proficiency: 8.5 },
    ],
    Frameworks: [
      { name: 'TensorFlow', proficiency: 6.5 },
      { name: 'Tailwind.css', proficiency: 7 },
      { name: 'Bootstrap', proficiency: 9 },
      { name: 'Tesseract OCR', proficiency: 8 },
      { name: 'Streamlit', proficiency: 9 },
    ],
    Tools: [
      { name: 'Git', proficiency: 9.5 },
      { name: 'Figma', proficiency: 9.5 },
      { name: 'Canva', proficiency: 9.5 },
      { name: 'Vite', proficiency: 8 },
      { name: 'Vercel', proficiency: 9 },
      { name: 'Framer', proficiency: 9.5 },
      { name: 'Spline', proficiency: 9.5 },
    ],
  };

  // Create refs for each progress bar
  const progressBarRefs = useRef({});

  useEffect(() => {
    // Initialize progress bars for each skill
    Object.keys(skillsData).forEach((category) => {
      skillsData[category].forEach((skill, idx) => {
        const refKey = `${category}-${idx}`;
        const container = progressBarRefs.current[refKey];
        if (container) {
          // Clear any existing progress bar
          while (container.firstChild) {
            container.removeChild(container.firstChild);
          }
          // Create a new progress bar
          const bar = new ProgressBar.Line(container, {
            strokeWidth: 4,
            easing: 'easeInOut',
            duration: 1400,
            color: '#1DB954', // Spotify green
            trailColor: '#333333', // Dark gray (almost black)
            trailWidth: 4,
            svgStyle: { width: '100%', height: '100%' },
          });
          // Animate to the proficiency level (convert to 0-1 scale)
          bar.animate(skill.proficiency / 10);
        }
      });
    });

    // Cleanup on unmount
    return () => {
      Object.keys(progressBarRefs.current).forEach((key) => {
        const container = progressBarRefs.current[key];
        if (container) {
          while (container.firstChild) {
            container.removeChild(container.firstChild);
          }
        }
      });
    };
  }, []);

  return (
    <div className="skills-page">
      <div className="skills-header">
        <div className="header-content">
          <h1>Technical Skills</h1>
          <p>A playlist showcasing my current skills and their proficiency levels.</p>
        </div>
      </div>
      <div className="play-button-container">
        <button className="play-button">
          <i className="fas fa-play"></i>
        </button>
      </div>
      <div className="skills-content">
        {Object.keys(skillsData).map((category, index) => (
          <div key={index} className="skill-playlist">
            <div className="playlist-header">
              <div className="playlist-image">
                <i className="fas fa-music"></i>
              </div>
              <h2>{category}</h2>
            </div>
            <div className="tracklist">
              {skillsData[category].map((skill, idx) => (
                <div key={idx} className="track">
                  <div className="track-info">
                    <span className="track-number">{idx + 1}</span>
                    <span className="track-name">{skill.name}</span>
                  </div>
                  <div className="track-progress">
                    <div
                      className="progress-container"
                      ref={(el) => (progressBarRefs.current[`${category}-${idx}`] = el)}
                    ></div>
                    <span className="proficiency-label">{skill.proficiency}/10</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsPage;