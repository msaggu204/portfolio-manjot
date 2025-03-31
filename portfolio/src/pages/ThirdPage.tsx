import React from 'react';
import './../index.css';
import CPU from '../components/Projects/CPU/CPU';
import AndroidApp from '../components/Projects/CMPUT301/CMPUT301';
import Website from '../components/Projects/Website/Website';
import FormulaSAE from '../components/Projects/FormulaSAE/ForumlaSAE';
import StockPicker from '../components/Projects/StockPicker/StockPicker';
import RogueWave from '../components/Projects/RogueWave/RogueWave';

const ThirdPage: React.FC = () => {
  return (
    <div id="projects" className="third-page">
      <div className="work-header">Featured Projects</div>
      <div className="project-container">
        <RogueWave />
        <FormulaSAE />
        <AndroidApp />
        <StockPicker />
        <CPU />
        <Website />
      </div>
    </div>
  );
};

export default ThirdPage;
