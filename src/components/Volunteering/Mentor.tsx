import React from 'react';
import './../../index.css';

const mentor: React.FC = () => {
  return (
    <>
      <div className="mentor-container">
        <div className="mentor-position">Peer Mentor</div>
        <div className="mentor-date">January 2024 - May 2025</div>
        <div className="mentor-club">Engineering Students' Society - Academic Guidance Program</div>
        <ul className="mentor-points">
            <li>Provided academic guidance and mentorship to first- and second-year engineering students through the ESS Academic Guidance Program.</li>
            <li>Offered one-on-one support with study strategies, course selection, and university life adaptation.</li>
            <li>Collaborated with fellow mentors to host group workshops and Q&A sessions addressing common academic challenges.</li>
            <li>Actively promoted a supportive, inclusive environment that encourages student engagement and success.</li>
        </ul>
      </div>
    </>
  );
};

export default mentor;
