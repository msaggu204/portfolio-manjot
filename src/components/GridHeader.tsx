import React, { useState, useEffect } from "react";
import "./../index.css";
import Hamburger from "hamburger-react";

const GridHeader: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
      if (newWidth > 550 && isOpen) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const desktopNav = (
    <>
      <a href="#home"><div className="name_navbar">Manjot Saggu</div></a>
      <a href="#workexperience"><div className="work_navbar">Work Experience</div></a>
      <a href="#projects"><div className="projects_navbar">Projects</div></a>
      <a href="#volunteering"><div className="volunteering_navbar">Leadership & Involvement</div></a>
    </>
  );

  const mobileNav = (
    <>
      <div className={`name_navbar_hamburger ${isOpen ? "open" : ""}`}>
        <a href="#home">Manjot Saggu</a>
        {isOpen && (
          <>
            <a href="#workexperience"><div className="work_navbar_hamburger open">Work Experience</div></a>
            <a href="#projects"><div className="projects_navbar_hamburger open">Projects</div></a>
            <a href="#volunteering"><div className="volunteering_navbar_hamburger open">Leadership & Involvement</div></a>
          </>
        )}
      </div>
      <div className={`hamburger-position ${isOpen ? "open" : ""}`}>
        <Hamburger color="white" size={16} toggled={isOpen} toggle={setOpen} />
      </div>
    </>
  );

  return (
    <div className={`wrapper ${isOpen ? "open" : ""}`}>
      {width > 550 ? desktopNav : mobileNav}
    </div>
  );
};

export default GridHeader;
