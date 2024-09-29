import React, { useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Credentials from './components/Credentials';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  useEffect(() => {
    // Scroll animation trigger (same as in script.js)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in-view');
        }
      });
    });

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="App">
      <Header />
      <About />
      <Credentials />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
