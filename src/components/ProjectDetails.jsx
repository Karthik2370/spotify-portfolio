import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projectData } from '../data';
import '../styles/ProjectDetails.css';

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project Not Found</h2>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

  return (
    <div className="project-details">
      <div className="project-header">
        <button className="back-button" onClick={() => navigate('/')}>
          <i className="fas fa-arrow-left"></i> Back
        </button>
        <h1>{project.title}</h1>
        <p className="project-date">{project.description}</p>
      </div>

      <div className="project-content">
        <div className="project-image">
          <img src={project.imageUrl} alt={project.title} />
        </div>

        <div className="project-info">
          <h2>About the Project</h2>
          <p>{project.longDescription}</p>

          <h3>Tech Stack</h3>
          <div className="tech-stack">
            {project.techStack.map((tech, index) => (
              <span key={index} className="tech-item">{tech}</span>
            ))}
          </div>

          <div className="project-links">
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                <i className="fab fa-github"></i> View on GitHub
              </a>
            )}
            {project.hostedLink && (
              <a href={project.hostedLink} target="_blank" rel="noopener noreferrer" className="live-link">
                <i className="fas fa-external-link-alt"></i> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails; 