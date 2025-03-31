import React, { useState, useEffect } from "react";
import "./../index.css";
import Hamburger from "hamburger-react";

interface ScreenSizeState {
  width: number;
}

const GridHeader: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [screenSize, setScreenSize] = useState<ScreenSizeState>({
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setScreenSize({
        width: newWidth,
      });

      // Close the hamburger menu if screen size is greater than 550
      if (newWidth > 550 && isOpen) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]); // Add isOpen as a dependency to avoid stale closure

  return (
    <div className={`wrapper ${isOpen ? "open" : ""}`}>
      {screenSize.width > 550 ? (
        <>
          <a href="#home">
          <div className="name_navbar">Manjot Saggu</div>
          </a>
          <a href="#workexperience">
          <div className="work_navbar">Work Experience</div>
          </a>
          <a href="#projects">
            <div className="projects_navbar">Projects</div>
          </a>
          <a href="#volunteering">
          <div className="volunteering_navbar">Leadership & Involvement</div>
          </a>
        </>
      ) : (
        <>
          <div className={`name_navbar_hamburger ${isOpen ? "open" : ""}`}>
          <a href="#home">Muhammad Umer Fiaz</a>
            {isOpen ? (
              <>
              <a href="#workexperience">
                <div
                  className={`work_navbar_hamburger ${isOpen ? "open" : ""}`}
                >
                  Work Experience
                </div>
                </a>
                <a href="#projects">
                <div
                  className={`projects_navbar_hamburger ${isOpen ? "open" : ""}`}
                >
                  Projects
                </div>
                </a>
                <a href="#volunteering">
                <div
                  className={`volunteering_navbar_hamburger ${isOpen ? "open" : ""}`}
                >
                  Leadership & Involvement
                </div>
                </a>
              </>
            ) : null}
          </div>
          <div className={`hamburger-position ${isOpen ? "open" : ""}`}>
            <Hamburger
              color="white"
              size={16}
              toggled={isOpen}
              toggle={setOpen}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default GridHeader;
