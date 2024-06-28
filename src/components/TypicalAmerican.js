import React from 'react';
import { calculateWeekPosition } from '../utils/dateCalculations';
import '../styles/TypicalAmerican.css';

const TypicalAmerican = ({ events }) => {
  return (
    <div className="typical-american-overlay">
      {events.map((event, index) => {
        const start = calculateWeekPosition(event.startWeek);
        const end = calculateWeekPosition(event.endWeek);
        return (
          <div
            key={index}
            className={`life-stage ${event.class}`}
            style={{
              top: `${start.row * 100 / 90}%`,
              height: `${(end.row - start.row + 1) * 100 / 90}%`
            }}
          >
            {event.name}
          </div>
        );
      })}
    </div>
  );
};

export default TypicalAmerican;