import React, { useState, useEffect } from 'react';
import './App.css';
import Splash from './components/Splash/Splash';
import GridHeader from './components/GridHeader';
import Hero from './components/Hero/Hero';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import FourthPage from './pages/FourthPage';
import ContactSection from './components/Contact/ContactSection';
import Footer from './components/Footer';
import NoPage from './pages/NoPage';

function scrollToHash() {
  const hash = window.location.hash;
  if (hash) {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}

function getPath() {
  const path = window.location.pathname.replace('/portfolio-manjot', '') || '/';
  return path + window.location.hash;
}

const VALID_PATHS = new Set([
  '/',
  '/#home',
  '/#workexperience',
  '/#projects',
  '/#volunteering',
  '/#contact',
  '/portfolio-manjot/',
  '/portfolio-manjot/#home',
  '/portfolio-manjot/#workexperience',
  '/portfolio-manjot/#projects',
  '/portfolio-manjot/#volunteering',
  '/portfolio-manjot/#contact',
]);

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
    return <NoPage />;
  }

  return (
    <div className="App">
      <Splash />
      <GridHeader />
      <Hero />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
