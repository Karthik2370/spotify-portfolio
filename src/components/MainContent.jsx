// src/components/MainContent.jsx
import React, { useState, useRef } from 'react';
import PlaylistCard from './PlaylistCard';
import '../styles/MainContent.css';

function MainContent({ aboutMeRef, educationRef, experienceRef, projectsRef, certificationsRef }) {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="main-content">
      <section className="about-me" ref={aboutMeRef}>
        <div className="about-header">
          <div className="about-image">
            <i className="fas fa-user fa-5x"></i>
          </div>
          <div className="about-details">
            <h1>Karthik Nambiar</h1>
            <p>Mumbai, India</p>
            <p>B Tech in Computer Engineering</p>
            <p>Frontend Developer • UI/UX Designer • Data Scientist</p>
          </div>
        </div>
      </section>

      <section className="education-leadership" ref={educationRef}>
        <div className="book-view">
          <div className="book-left">
            <h2>Education</h2>
  <div className="education-list">
              <div className="education-item">
                <div className="education-date">2024</div>
                <div className="education-info">
                  <h3>Ramrao Adik Institute of Technology</h3>
                  <p>B.Tech in Computer Engineering (Major: Data Science) • CGPA: 9.42/10</p>
                </div>
              </div>
              <div className="education-item">
                <div className="education-date">2021</div>
                <div className="education-info">
                  <h3>Pace Junior Science College</h3>
                  <p>12th Grade • Percentage: 90%</p>
                </div>
              </div>
              <div className="education-item">
                <div className="education-date">2019</div>
                <div className="education-info">
                  <h3>Bunt Sanghas S M Shetty High School</h3>
                  <p>10th Grade • Percentage: 82.40%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="book-right">
            <h2>Leadership</h2>
            <div className="leadership-list">
              <div className="leadership-item">
                <div className="leadership-date">2022</div> {/* Updated to 2022 */}
                <div className="leadership-info">
                  <h3>CSI-RAIT</h3>
                  <p>Technical Team • Navi Mumbai, India</p>
                  <p>June 2022 – February 2023</p>
                  <p>Managed essential tasks including handling workshops and events in college.</p>
                </div>
              </div>
              <div className="leadership-item">
                <div className="leadership-date">2021</div>
                <div className="leadership-info">
                  <h3>ISA-RAIT</h3>
                  <p>Event Head • Navi Mumbai, India</p>
                  <p>June 2021 – December 2021</p>
                  <p>Managed an Educational event for Techfest 2021 which was awarded the most creative event of Techfest 2021.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="experience" ref={experienceRef}>
        <h2 className="section-heading">Experience</h2>
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

      <section className="projects" ref={projectsRef}>
        <h2 className="section-heading">Projects</h2>
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

      <section className="certifications" ref={certificationsRef}>
        <h2 className="section-heading">Certifications</h2>
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