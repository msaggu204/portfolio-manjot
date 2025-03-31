import React, {useState} from "react";
import './../../../index.css';
import link from './../link.png';
import rwcLogo from './RWC.png';

const RogueWave: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleHover = () => {
    setIsHovered(true);
   };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const skills = [
    'PyTorch',
    'Embedded Systems',
    'Raspberry Pi',
    'Data Analysis',
    'Sensors',
    'Python',
    'UI/UX',
    'Microcontrollers',
    'Client Work'
  ];

  return (
    <>
      <div className={`rogue-container ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
        <div className="formularow-two" >
          <img src={rwcLogo} alt="Rogue Wave Coffee logo" style={{ gridRow: "1", position: "relative", height: "100px" }} />
          <div className="rogue-name" style={{gridRow: "2", fontFamily: "Calibri, sans-serif", position: "relative", fontSize: "200%", fontWeight: "600"}}>
            Rogue Wave Coffee
          </div>
        </div>
        <div className="formularow-three">
          <div className="formula-name" style={{gridRow: "1", fontFamily: "Calibri, sans-serif", position: "relative", fontSize: "83%", fontWeight: "600", color: "white"}}>
          An embedded system built for Rogue Wave Coffee to automate and optimize the roasting process using a PyTorch-based ML model. The system collects and analyzes real-time data to deliver consistent roasting results, reducing variability by 15%. It features a web-based dashboard for remote monitoring and smart, ML-driven recommendations with a 5-second response time.
          </div>
          <a href="#" title="Coming soon" onClick={(e) => e.preventDefault()}>
            <img src={link} alt="link" className= "rogue-logo" style={{gridRow: "2", position: "relative", width: "42%"}}/>
          </a>
        </div>
        <div className="androidrow-four">
          {skills.map((skill) => (
            <div>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RogueWave;