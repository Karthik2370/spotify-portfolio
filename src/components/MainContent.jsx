// src/components/MainContent.jsx
import React, { useState, useRef } from 'react';
import PlaylistCard from './PlaylistCard';
import Carousel from './Carousel';
import {
  aboutMeData,
  educationData,
  leadershipData,
  experienceData,
  projectData,
  certificationData
} from '../data';
import '../styles/MainContent.css';

function MainContent({ aboutMeRef, educationRef, experienceRef, projectsRef, certificationsRef }) {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Convert data to PlaylistCard components
  const experienceItems = experienceData.map(item => (
    <PlaylistCard
      key={item.id}
      id={item.id}
      title={item.title}
      description={item.description}
      details={item.details}
      isExpanded={expandedSection === item.id}
      onToggle={() => toggleSection(item.id)}
      isProject={false}
    />
  ));

  const projectItems = projectData.map(item => (
    <PlaylistCard
      key={item.id}
      id={item.id}
      title={item.title}
      description={item.description}
      details={item.details}
      isExpanded={expandedSection === item.id}
      onToggle={() => toggleSection(item.id)}
      isProject={true}
    />
  ));

  const certificationItems = certificationData.map(item => (
    <PlaylistCard
      key={item.id}
      id={item.id}
      title={item.title}
      description={item.description}
      details={item.details}
      isExpanded={expandedSection === item.id}
      onToggle={() => toggleSection(item.id)}
      isProject={false}
    />
  ));

  return (
    <div className="main-content">
      <section className="about-me" ref={aboutMeRef}>
        <div className="about-header">
          <div className="about-image">
            <i className="fas fa-user fa-5x"></i>
          </div>
          <div className="about-details">
            <h1>{aboutMeData.name}</h1>
            <p>{aboutMeData.location}</p>
            <p>{aboutMeData.education}</p>
            <p>{aboutMeData.roles}</p>
          </div>
        </div>
      </section>

      <section className="education-leadership" ref={educationRef}>
        <div className="book-view">
          <div className="book-left">
            <h2>Education</h2>
            <div className="education-list">
              {educationData.map((item, index) => (
                <div key={index} className="education-item">
                  <div className="education-date">{item.year}</div>
                  <div className="education-info">
                    <h3>{item.institution}</h3>
                    <p>{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="book-right">
            <h2>Leadership</h2>
            <div className="leadership-list">
              {leadershipData.map((item, index) => (
                <div key={index} className="leadership-item">
                  <div className="leadership-date">{item.year}</div>
                  <div className="leadership-info">
                    <h3>{item.organization}</h3>
                    <p>{item.role} • {item.location}</p>
                    <p>{item.period}</p>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="experience" ref={experienceRef}>
        <Carousel title="Experience" items={experienceItems} />
      </section>

      <section className="projects" ref={projectsRef}>
        <Carousel title="Projects" items={projectItems} />
      </section>

      <section className="certifications" ref={certificationsRef}>
        <Carousel title="Certifications" items={certificationItems} />
      </section>

      <footer className="footer">
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Karthik Nambiar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default MainContent;