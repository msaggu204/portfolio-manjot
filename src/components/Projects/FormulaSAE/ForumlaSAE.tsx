import React, {useState} from "react";
import './../../../index.css';
import logo from './formulaSAE.png'
import link from './../link.png'

const FormulaSAE: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleHover = () => {
    setIsHovered(true);
   };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const skills = [
    'Electrical Systems',
    'EV Design',
    'PCB Debugging',
    'Performance Testing',
    'SharePoint Development',
    'UI/UX Design',
    'Team Collaboration',
    'Project Coordination',
    'Python'
  ];

  return (
    <>
      <div className={`formula-container ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
        <div className="formularow-two">
        <img src={logo} alt="formula logo" style={{ gridRow: "1", position: "relative", height: "75px" }} />
          <div className="formula-name" style={{gridRow: "2", fontFamily: "Calibri, sans-serif", position: "relative", fontSize: "200%", fontWeight: "600"}}>
            Formula SAE
          </div>
        </div>
        <div className="androidrow-three">
          <div className="formula-name" style={{gridRow: "1", fontFamily: "Calibri, sans-serif", position: "relative", fontSize: "83%", fontWeight: "600", color: "white"}}>
          Supported electrical system upgrades and helped lead the team’s transition to electric vehicle design. Contributed to testing and performance improvements, and developed an internal SharePoint interface to streamline communications and team operations.
          </div>
          <a href="#" title="Coming soon" onClick={(e) => e.preventDefault()}>
            <img src={link} alt="link" className= "formula-logo" style={{gridRow: "2", position: "relative", width: "42%"}}/>
          </a>
        </div>
        <div className="formularow-four">
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

export default FormulaSAE;