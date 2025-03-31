import React from 'react';
import './../../index.css';

const comp: React.FC = () => {
  return (
    <>
      <div className="comp-container">
        <div className="mentor-position">Competitions and Sporting Coordinator</div>
        <div className="mentor-date">August 2021 - April 2022</div>
        <div className="mentor-club">Engineering Students' Society</div>
        <ul className="mentor-points">
            <li>Facilitated a programming challenge for the University of Alberta Engineering
            Competition, in which 8 teams create a coding program to solve a presented problem</li>
            <li>Scheduled, budgeted, and coordinated the yearly engineering students’ ski trip for ∼50
            students</li>
        </ul>
      </div>
    </>
  );
};

export default comp;
