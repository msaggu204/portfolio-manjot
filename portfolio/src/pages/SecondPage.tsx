import React from "react";
import MetaxHCL from "../components/Experience/MetaxHCL";
import ATCO from "../components/Experience/ATCO";
import University from "../components/Experience/University";
import CRA from "../components/Experience/CRA";

const SecondPage: React.FC = () => {
  return (
    <>
      <div id="workexperience" className="second-page">
        <div className="work-header-container">
          <div className="work-header">Work Experience</div>
        </div>
        <div className="workexperience-container">
          <MetaxHCL />
          <div className='circle-container'><div className='first-circle' /></div>
          <ATCO />
          <div className='circle2-container'><div className='first-circle' /></div>
          <University />
          <div className='circle3-container'><div className='first-circle' /></div>
          <CRA />
          <div className='circle4-container'><div className='first-circle' /></div>
          <div className='footer'>Ⓒ 2025 Manjot Saggu. All Rights Reserved.</div>
        </div>
      </div>
    </>
  );
};

export default SecondPage;
