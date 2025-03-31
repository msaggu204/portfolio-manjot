import React, { useEffect, useRef, useState } from "react";

const CRA: React.FC = () => {
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
    <>
      <div className="CRA-container" ref={containerRef}>
        <div className="CRA-name">Canada Revenue Agency</div>
        <div className="CRA-date">April 2018 - August 2020</div>
        <div className="CRA-position">Assessment & Benefits Processing Clerk</div>
        <ul className={`CRA-points calibri-text ${isVisible ? "visible" : ""}`}>
          <li>Verified, analysed, and assessed forms, documents, and claims; collaborated with a 20-
          person team to ensure case deadlines were met</li>
          <li>Identified and processed thousands of discrepancies each tax-filing season to ensure
          income tax claims and benefit returns were filed correctly</li>
          <li>Facilitated annual technical and communications training to 15+ new and current
          colleagues</li>
        </ul>
      </div>
    </>
  );
};

export default CRA;
