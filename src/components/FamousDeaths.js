import React from 'react';
import { calculateWeekPosition } from '../utils/dateCalculations';
import '../styles/FamousDeaths.css';

const FamousDeaths = ({ deaths }) => {
  return (
    <div className="famous-deaths-overlay">
      {deaths.map((death, index) => {
        const { row, col } = calculateWeekPosition(death.week);
        return (
          <div
            key={index}
            className="famous-death-marker"
            style={{
              top: `${row * 100 / 90}%`,
              left: `${col * 100 / 52}%`
            }}
          >
            <span>{death.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default FamousDeaths;