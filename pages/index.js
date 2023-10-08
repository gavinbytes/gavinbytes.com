import React, { useState, useEffect } from 'react';
import Intro from '../components/Intro';
import About from '../components/About';
import Header from '../components/Header';
import Skills from '../components/Skills';
import Projects from '../components/Projects';


function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries, options) => {
      entries.forEach(entry => {
        entry.target.classList.toggle('visible', entry.isIntersecting);
      });
    });
    observer.observe(document.querySelector('div.skills-container'));
    observer.observe(document.querySelector('div.projects-container'));
    document.querySelectorAll('section').forEach(elem => {
      observer.observe(elem);
    });
  }, []);

  return (
    <main>
      <Header />
      <Intro />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}

export default HomePage;
