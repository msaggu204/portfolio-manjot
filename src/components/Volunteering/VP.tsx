import React from 'react';
import './../../index.css';

const vp: React.FC = () => {
  return (
    <>
      <div className="vp-container">
        <div className="mentor-position">Vice President of Public Relations</div>
        <div className="mentor-date">February 2019 - August 2020</div>
        <div className="mentor-club">Toastmasters International</div>
        <ul className="mentor-points">
            <li>Developed and directed the publicity and recruitment program, which informed
            members and the public about Toastmasters International through email newsletters,
            posters, professional guest speakers, and open house events</li>
            <li>Coordinated the development and opening of a second Toastmasters club to
            accommodate membership increase from 8 to 25 active members</li>
            <li>Facilitated weekly club meetings and recruitment events</li>
        </ul>
      </div>
    </>
  );
};

export default vp;
