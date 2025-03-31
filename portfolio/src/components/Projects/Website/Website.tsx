import React, {useState} from "react";
import './../../../index.css';
import link from './../link.png'
import logo from './manjot1.png';

const Website: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleHover = () => {
    setIsHovered(true);
   };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const skills = [
    'Astro',
    'React',
    'TypeScript',
    'CSS Modules',
    'Responsive Design',
    'GitHub Pages',
    'Accessibility',
    'Animations'
  ];

  return (
    <>
      <div className={`website-container ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
        <div className="formularow-two" >
        <img src={logo} alt="formula logo" style={{gridRow: "1", position: "relative", width: "30%"}} />
          <div className="website-name" style={{gridRow: "2", fontFamily: "Calibri, sans-serif", position: "relative", fontSize: "200%", fontWeight: "600"}}>
            Personal Website
          </div>
        </div>
        <div className="androidrow-three">
          <div className="formula-name" style={{gridRow: "1", fontFamily: "Calibri, sans-serif", position: "relative", fontSize: "83%", fontWeight: "600", color: "white"}}>
            A responsive personal portfolio website built with Astro and React to showcase engineering projects, technical skills, and experiences. Designed for clarity, accessibility, and performance, the site features smooth animations, custom styling, and project-based content.
          </div>
          <a href="https://msaggu204.github.io/portfolio-manjot/">
          <img src={link} alt="link" className="website-logo" style={{gridRow: "2", position: "relative", width: "42%"}}/>
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

export default Website;