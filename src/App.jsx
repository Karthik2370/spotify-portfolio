// src/App.jsx
import React, { useRef } from 'react';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  const aboutMeRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const certificationsRef = useRef(null);

  return (
    <div className="app">
      <Sidebar
        aboutMeRef={aboutMeRef}
        educationRef={educationRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
        certificationsRef={certificationsRef}
      />
      <MainContent
        aboutMeRef={aboutMeRef}
        educationRef={educationRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
        certificationsRef={certificationsRef}
      />
    </div>
  );
}

export default App;