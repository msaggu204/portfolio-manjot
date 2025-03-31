import React, { useEffect, useRef, useState } from "react";

const University: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const current = containerRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div className="uofa-container" ref={containerRef}>
      <div className="uofa-name">University of Alberta</div>
      <div className="uofa-date Calibri, sans-serif">September 2021 - April 2022</div>
      <div className="uofa-position">Engineering Academic Cohort Leader</div>
      <ul className={`uofa-points calibri-text ${isVisible ? "visible" : ""}`}>
        <li>Developed and led academic resources for 105 first year and upper year University of
        Alberta engineering students living in on-campus residence</li>
        <li>Promoted and tracked student success through coordinating instructor-led study
        sessions, faculty-specific resources, and mental health initiatives</li>
        <li>Implemented and managed peer mentorship program to foster a collaborative
        environment through supportive communication and developing study skills</li>
      </ul>
    </div>
  );
};

export default University;
