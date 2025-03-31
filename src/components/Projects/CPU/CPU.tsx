import React, {useState} from "react";
import './../../../index.css';
import link from './../link.png'

const CPU: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleHover = () => {
    setIsHovered(true);
   };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const skills = [
    'VHDL',
    'FSM Design',
    'Datapath & Control',
    'Zybo Z7-10',
    'Testbenches',
    'Digital Logic',
    'Simulation',
    'Modular Design',
  ];

  return (
    <>
      <div className={`albertaloop-container ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
        <div className="formularow-two" >
        <div style={{ gridRow: "1", fontSize: "450%", position: "relative" }}>
          🖥️
        </div>
          <div className="albertaloop-name" style={{gridRow: "2", fontFamily: "Calibri, sans-serif", position: "relative", fontSize: "200%", fontWeight: "600"}}>
            8-bit CPU
          </div>
        </div>
        <div className="androidrow-three">
          <div className="formula-name" style={{gridRow: "1", fontFamily: "Calibri, sans-serif", position: "relative", fontSize: "83%", fontWeight: "600", color: "white"}}>
          Designed and implemented an 8-bit CPU in VHDL using a controller-datapath architecture on a Zybo Z7 board. Integrated components structurally and executed custom instructions through a finite state machine. Verified logic through simulation and real-time board interaction.
          </div>
          <a href="https://github.com/msaggu204/8-bit-CPU/tree/main">
          <img src={link} alt="link" className= "alberta-logo" style={{gridRow: "2", position: "relative", width: "42%", marginTop: "20%"}}/>
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

export default CPU;