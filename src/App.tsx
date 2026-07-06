import React, { useState, useEffect } from 'react';
import './App.css';
import Splash from './components/Splash/Splash';
import Nav from './components/Nav/Nav';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import Hero from './components/Hero/Hero';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import VenturesSection from './sections/VenturesSection';
import InvolvementSection from './sections/InvolvementSection';
import ContactSection from './components/Contact/ContactSection';
import Footer from './components/Footer';
import NotFound from './sections/NotFound';
import { sections } from './data/sections';

/** Old anchor names still shared in links → their new section ids. */
const LEGACY_HASHES: Record<string, string> = {
  '#workexperience': '#experience',
  '#volunteering': '#involvement',
};

function scrollToHash() {
  const hash = LEGACY_HASHES[window.location.hash] ?? window.location.hash;
  if (hash) {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}

function getPath() {
  const path = window.location.pathname.replace('/portfolio-manjot', '') || '/';
  return path + window.location.hash;
}

const HASHES = [
  '',
  '#home',
  ...sections.map((s) => `#${s.id}`),
  // legacy anchors from previously shared links
  '#workexperience',
  '#volunteering',
];

const VALID_PATHS = new Set(
  ['/', '/portfolio-manjot/'].flatMap((base) => HASHES.map((h) => base + h)),
);

function App() {
  const [currentPath, setCurrentPath] = useState(getPath);

  useEffect(() => {
    const handlePathChange = () => setCurrentPath(getPath());
    window.addEventListener('popstate', handlePathChange);
    window.addEventListener('hashchange', scrollToHash);
    return () => {
      window.removeEventListener('popstate', handlePathChange);
      window.removeEventListener('hashchange', scrollToHash);
    };
  }, []);

  if (!VALID_PATHS.has(currentPath)) {
    return <NotFound />;
  }

  return (
    <div className="App">
      <Splash />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <VenturesSection />
        <InvolvementSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
