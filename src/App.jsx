// src/App.jsx
import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import NowPlayingWidget from './components/NowPlayingWidget';
import SkillsPage from './components/SkillsPage';
import './App.css';

// A wrapper component to handle scroll after navigation
function MainContentWrapper(props) {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      location.state.scrollTo.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return <MainContent {...props} />;
}

// A wrapper component to conditionally render the NowPlayingWidget
function AppWrapper() {
  const location = useLocation();
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
      <Routes>
        <Route
          path="/"
          element={
            <MainContentWrapper
              aboutMeRef={aboutMeRef}
              educationRef={educationRef}
              experienceRef={experienceRef}
              projectsRef={projectsRef}
              certificationsRef={certificationsRef}
            />
          }
        />
        <Route path="/skills" element={<SkillsPage />} />
      </Routes>
      {location.pathname !== '/skills' && <NowPlayingWidget />} {/* Conditionally render the widget */}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;