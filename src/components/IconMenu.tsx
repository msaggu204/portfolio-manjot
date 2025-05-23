import React from "react";
import gitlogo from "./Logos/github.svg";
import linkedin from "./Logos/linkedin.svg";
import email from "./Logos/email.svg";
import cv from "./Logos/cv.svg"

const IconMenu: React.FC = () => {
  return (
    <>
      <div className="icon-menu">
        <a href="https://github.com/msaggu204">
          <img src={gitlogo} className="gitlogo glow-on-hover scale-on-hover click-effect" alt="githublogo"/>
        </a>
        <a href="https://www.linkedin.com/in/manjotsaggu/">
          <img src={linkedin} className="linkedinlogo glow-on-hover scale-on-hover click-effect" alt="linkedinlogo" />
        </a>
        <a href="mailto:msaggu@ualberta.ca">
          <img src={email} className="emaillogo glow-on-hover scale-on-hover click-effect" alt="emaillogo" />
        </a>
        <a href={`${process.env.PUBLIC_URL}/resume.html`} target="_blank" rel="noreferrer">
          <img src={cv} className="cvlogo glow-on-hover scale-on-hover click-effect" alt="cvlogo" />
        </a>
      </div>
    </>
  );
};

export default IconMenu;
