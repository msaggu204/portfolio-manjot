import React, {useState} from "react";
import './../../../index.css';
import link from './../link.png'
import logo from './android.png'

const AndroidApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleHover = () => {
    setIsHovered(true);
   };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const skills = [
    'Java',
    'Android Studio',
    'UML',
    'OOP',
    'QR Code Integration',
    'Unit Testing',
    'Git',
    'Team Collaboration',
    'UI/UX Design'
  ];

  return (
    <>
      <div className={`android-container ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
        <div className="formularow-two" >
          <div className="formula-logo" style={{gridRow: "1", fontFamily: "Oswald", fontSize:"300%", color: "#FF8928", position: "relative"}}>
            <img src={logo} alt="Android logo" style={{height: "100px"}}/>
          </div>
          <div className="android-name" style={{gridRow: "2", fontFamily: "Calibri, sans-serif", position: "relative", fontSize: "200%", fontWeight: "600"}}>
            EventSync
          </div>
        </div>
        <div className="androidrow-three">
          <div className="android-name" style={{gridRow: "1", fontFamily: "Calibri, sans-serif", position: "relative", fontWeight: "600", color: "white"}}>
            EventSync is an Android app for managing event check-ins and notifications. It supports multiple user roles—admins, owners, and guests—allowing owners to create events and send alerts, while guests can check in using QR codes and stay updated through in-app notifications. Designed with object-oriented principles and UML-driven architecture to ensure maintainability and scalability.
          </div>
          <a href="https://github.com/CMPUT301W24T26/OOPs-I-Pushed-To-Main">
          <img src={link} alt="link" className="android-logo" style={{gridRow: "2", position: "relative", width: "42%"}}/>
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

export default AndroidApp;