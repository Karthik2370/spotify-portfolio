// src/App.jsx
import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Player from './components/Player';
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <MainContent />
      <Player />
    </div>
  );
}

export default App;