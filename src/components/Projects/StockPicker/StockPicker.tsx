import React, {useState} from "react";
import './../../../index.css';
import link from './../link.png'

const StockPicker: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleHover = () => {
    setIsHovered(true);
   };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const skills = [
    'Python',
    'Pandas',
    'yFinance',
    'Financial Analysis',
    'Data Visualization',
    'OOP',
    'API Integration',
    'Error Handling'
  ];

  return (
    <>
      <div className={`stock-container ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
        <div className="formularow-two" >
          <div style={{ gridRow: "1", fontSize: "400%", position: "relative", marginLeft: "50%", marginRight: "45%", top: "10%" }}>
            📈
          </div>
          <div className="stock-name" style={{gridRow: "2", fontFamily: "Calibri, sans-serif", position: "relative", fontSize: "200%", fontWeight: "600"}}>
            Stock Picker
          </div>
        </div>
        <div className="androidrow-three">
          <div className="stock-name" style={{gridRow: "1", fontFamily: "Calibri, sans-serif", position: "relative", fontWeight: "600", color: "white"}}>
            Stock Picker is a Python-based tool for analyzing financial health and growth metrics of top tech companies. It uses real-time data from Yahoo Finance to calculate EPS, P/E ratio, ROE, revenue growth, and more, offering insights into both performance and long-term viability.
          </div>
          <a href="https://github.com/msaggu204/StockPicker">
          <img src={link} alt="link" className="stock-logo" style={{gridRow: "2", position: "relative", width: "42%", marginTop: "20%"}}/>
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

export default StockPicker;