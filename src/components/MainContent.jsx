// src/components/MainContent.jsx
import React, { useState } from 'react';
import PlaylistCard from './PlaylistCard';
import '../styles/MainContent.css';

function MainContent() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="main-content">
      <section className="about-me">
        <div className="about-header">
          <div className="about-image"></div>
          <div className="about-details">
            <h1>About Me</h1>
            <p>Karthik Nambiar • Mumbai, India</p>
            <p>Computer Engineering • Data Science Enthusiast</p>
            <p>Creative problem solver passionate about technology and innovation.</p>
          </div>
        </div>
      </section>

      <section className="education">
        <h2>Education</h2>
        <div className="tour-dates">
          <div className="tour-item">
            <div className="tour-date">June 2024 - Present</div>
            <div className="tour-info">
              <h3>Ramrao Adik Institute of Technology</h3>
              <p>B.Tech in Computer Engineering (Major: Data Science), CGPA: 9.42/10</p>
              <p>Navi Mumbai, India</p>
            </div>
          </div>
          <div className="tour-item">
            <div className="tour-date">May 2019 - July 2021</div>
            <div className="tour-info">
              <h3>Pace Junior Science College</h3>
              <p>12th Grade, Percentage: 90%</p>
              <p>IIT Powai, India</p>
            </div>
          </div>
          <div className="tour-item">
            <div className="tour-date">May 2014 - April 2019</div>
            <div className="tour-info">
              <h3>Bunt Sanghas S M Shetty High School</h3>
              <p>10th Grade, Percentage: 82.40%</p>
              <p>Powai, India</p>
            </div>
          </div>
        </div>
      </section>

      <section className="experience">
        <h2>Experience</h2>
        <div className="grid">
          <PlaylistCard
            title="Immensphere"
            description="Web Developer Intern • May 2022 - July 2022"
            details={['Built weather integration with OpenWeather API', 'Improved website reliability']}
            isExpanded={expandedSection === 'immensphere'}
            onToggle={() => toggleSection('immensphere')}
          />
          <PlaylistCard
            title="Cognifyz Technologies"
            description="Data Science Intern • May 2022 - July 2022"
            details={['Analyzed restaurant datasets with Python', 'Presented insightful trends']}
            isExpanded={expandedSection === 'cognifyz'}
            onToggle={() => toggleSection('cognifyz')}
          />
          <PlaylistCard
            title="CodSoft"
            description="UI/UX Designer"
            details={['Designed e-commerce UI with Figma', 'Focused on user experience']}
            isExpanded={expandedSection === 'codsoft'}
            onToggle={() => toggleSection('codsoft')}
          />
        </div>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="grid">
          <PlaylistCard
            title="DeTOUR Website"
            description="Jan 2023"
            details={['Tourist guide web app with HTML/CSS', 'Helps plan short trips']}
            isExpanded={expandedSection === 'detour'}
            onToggle={() => toggleSection('detour')}
          />
          <PlaylistCard
            title="Pneumonia Detection Machine"
            description="June 2024 - July 2024"
            details={['ML model using TensorFlow & CNN', 'Built on Google Colab']}
            isExpanded={expandedSection === 'pneumonia'}
            onToggle={() => toggleSection('pneumonia')}
          />
          <PlaylistCard
            title="Stock Prediction"
            description="NLP-based Analysis"
            details={['Predicts stock growth using news headlines', 'Used Random Forest Classifier']}
            isExpanded={expandedSection === 'stock'}
            onToggle={() => toggleSection('stock')}
          />
        </div>
      </section>

      <section className="certifications">
        <h2>Certifications</h2>
        <div className="grid">
          <PlaylistCard
            title="Harvard Business School"
            description="Business Analytics"
            details={[]}
            isExpanded={expandedSection === 'harvard'}
            onToggle={() => toggleSection('harvard')}
          />
          <PlaylistCard
            title="Udemy"
            description="Master AIML Projects • UI/UX Designing"
            details={[]}
            isExpanded={expandedSection === 'udemy'}
            onToggle={() => toggleSection('udemy')}
          />
          <PlaylistCard
            title="Cisco"
            description="Networking & Cybersecurity"
            details={[]}
            isExpanded={expandedSection === 'cisco'}
            onToggle={() => toggleSection('cisco')}
          />
        </div>
      </section>
    </div>
  );
}

export default MainContent;