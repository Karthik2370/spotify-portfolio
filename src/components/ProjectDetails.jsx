import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projectData } from '../data';
import '../styles/ProjectDetails.css';

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentIndex = projectData.findIndex(p => p.id === id);
  const project = projectData[currentIndex];
  const nextProject = projectData[(currentIndex + 1) % projectData.length];
  const prevProject = projectData[(currentIndex - 1 + projectData.length) % projectData.length];

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
        <div className="project-navigation">
          {prevProject && (
            <button 
              className="prev-project-button" 
              onClick={() => navigate(`/project/${prevProject.id}`)}
              aria-label={`View ${prevProject.title}`}
            >
              <i className="fas fa-chevron-left"></i>
              <span>{prevProject.title}</span>
            </button>
          )}
          <h1>{project.title}</h1>
          {nextProject && (
            <button 
              className="next-project-button" 
              onClick={() => navigate(`/project/${nextProject.id}`)}
              aria-label={`View ${nextProject.title}`}
            >
              <span>{nextProject.title}</span>
              <i className="fas fa-chevron-right"></i>
            </button>
          )}
        </div>
      </div>

      <div className="project-content">
        <div className="project-image">
          <div className="project-date-overlay">{project.description}</div>
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
            {project.githubLink && project.githubLink !== '#' && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                <i className="fab fa-github"></i> View on GitHub
              </a>
            )}
            {project.hostedLink && project.hostedLink !== '#' && (
              <a href={`https://${project.hostedLink}`} target="_blank" rel="noopener noreferrer" className="live-link">
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