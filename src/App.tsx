import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Sidebar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;