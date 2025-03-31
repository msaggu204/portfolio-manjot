import React, { useEffect, useRef, useState } from "react";

const HCL: React.FC = () => {
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
    <div className="HCL-container" ref={containerRef}>
      <div className="HCL-name">
        Meta (Contingent Worker via HCL Technologies)
      </div>
      <div className="HCL-date Calibri, sans-serif">
        June 2024 - December 2024
      </div>
      <div className="HCL-position Calibri, sans-serif">
        Software Engineer Intern
      </div>
      <ul className={`HCL-points calibri-text ${isVisible ? "visible" : ""}`}>
        <li>Improved silicon test accuracy by implementing log-level validation with Python, enhancing detection of
        hidden errors in logs with zero-return codes and reducing false positives by 20%</li>
        <li>Optimized AutoVal’s randomization and concurrency testing frameworks for PCIe and memory test plans,
        improving scalability and stability by 10% through Agile collaboration and Git/Sapling version control</li>
        <li>Developed deep learning algorithms and automated silicon workflows using Python in Linux, boosting
        efficiency by 5% and throughput by 8% through improved logging and categorization</li>
        <li>Designed and validated next-gen silicon systems by enhancing infrastructure readiness and triaging
        tools, reducing pre-silicon validation time by 10%</li>
      </ul>
    </div>
  );
};

export default HCL;
