import React, { useEffect } from 'react';
import './../index.css';
import Mentor from '../components/Volunteering/Mentor';
import Comp from '../components/Volunteering/Comp';
import VP from '../components/Volunteering/VP';
import Tax from '../components/Volunteering/Tax';

const experiences = [
  { Component: Mentor, circleClass: 'circle-container' },
  { Component: Comp, circleClass: 'circle2-container' },
  { Component: VP, circleClass: 'circle3-container' },
  { Component: Tax, circleClass: 'circle4-container' },
];

const FourthPage: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const targets = document.querySelectorAll(
      ".mentor-points, .comp-points, .vp-points, .tax-points"
    );
    targets.forEach(target => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <div id="volunteering" className="fourth-page">
      <div className="volunteering-header-container">
        <div className="volunteering-header">Leadership & Involvement</div>
      </div>
      <div className="volunteering-container">
        {experiences.map(({ Component, circleClass }, index) => (
          <React.Fragment key={index}>
            <div className={circleClass}>
              <div className="first-circle" style={{ zIndex: 2 }} />
            </div>
            <Component />
          </React.Fragment>
        ))}
        <div className="footer">
          Ⓒ 2025 Manjot Saggu. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default FourthPage;
