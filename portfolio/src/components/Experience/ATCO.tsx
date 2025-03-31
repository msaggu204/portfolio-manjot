import React, { useEffect, useRef, useState } from "react";

const Atco: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    const refCurrent = containerRef.current;
    if (refCurrent) observer.observe(refCurrent);

    return () => {
      if (refCurrent) observer.unobserve(refCurrent);
    };
  }, []);

  return (
    <>
      <div className={`ATCO-container ${isVisible ? "visible" : ""}`} ref={containerRef}>
        <div className="ATCO-name">ATCO</div>
        <div className="ATCO-date Calibri, sans-serif">January 2023 - August 2023</div>
        <div className="ATCO-position">Natural Gas Engineering Intern</div>
        <ul className={`ATCO-points calibri-text ${isVisible ? "visible" : ""}`}>
          <li> Managed and executed 3 Integrity pipeline projects with a total value of $360K, delivering on-time
          completion and within budget, ensuring compliance with safety regulations and reducing leak risks by 75%</li>
          <li>Ensured successful completion of Integrity pipeline projects, worth $1.25M, utilizing software for in-depth
          analysis, data-driven decision-making, and cross-functional team collaboration for risk mitigation</li>
          <li>Developed and implemented a streamlined communication plan to convey technical information to
          multi-disciplinary teams, resulting in a 15% reduction in project delays</li>
          <li>Implemented a comprehensive file and database management system for engineering projects, utilizing
          SQL and Python programming, resulting in a 30% increase in data accuracy and efficiency</li>
        </ul>
      </div>
    </>
  );
};

export default Atco;
