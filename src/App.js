import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AboutWEB603 from './components/Web603';

import './App.css'; // Import global styles for the whole page

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <About />
        <AboutWEB603 />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
