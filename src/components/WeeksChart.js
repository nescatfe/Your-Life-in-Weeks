import React from 'react';
import FamousDeaths from './FamousDeaths';
import TypicalAmerican from './TypicalAmerican';
import { calculateAgeInWeeks } from '../utils/dateCalculations';
import '../styles/WeeksChart.css';

const WeeksChart = ({ birthdate, comparison, famousDeaths, typicalAmerican }) => {
  const totalWeeks = 90 * 52;
  const ageInWeeks = calculateAgeInWeeks(birthdate);
  
  const renderNumbers = () => {
    const numbers = [];
    for (let i = 0; i <= 90; i += 5) {
      // Vertical numbers
      numbers.push(
        <div key={`v-${i}`} className="number vertical" style={{ top: `${i * 100 / 90}%` }}>
        {i}
        </div>
      );
      // Horizontal numbers
      if (i <= 50) {
        numbers.push(
          <div key={`h-${i}`} className="number horizontal" style={{ left: `${i * 100 / 52}%` }}>
          {i}
          </div>
        );
      }
    }
    return numbers;
  };

  const getWeekClass = (index) => {
    let classes = ['week'];
    if (index < ageInWeeks) classes.push('filled');
    return classes.join(' ');
  };
  
  const renderYouAreHere = () => {
    if (ageInWeeks > 0 && ageInWeeks <= totalWeeks) {
      const row = Math.floor(ageInWeeks / 52);
      const column = ageInWeeks % 52;
      return (
        <div 
        className="you-are-here" 
        style={{ 
          top: `${(row * 100 / 90) + (100 / 90 / 2)}%`,
          left: `${(column * 100 / 52) + (100 / 52)}%`
        }}
        >
        You are here.
        </div>
      );
    }
    return null;
  };
  
  return (
    <div className="chart-container">
    <div className="axis-label vertical">
    Human Age
    <span className="arrow down"></span>
    </div>
    <div className="axis-label horizontal">
    Week of the year
    <span className="arrow right"></span>
    </div>
    <div className="weeks-chart">
    {renderNumbers()}
    {[...Array(totalWeeks)].map((_, index) => (
      <div key={index} className={getWeekClass(index)} />
    ))}
    {renderYouAreHere()}
    {comparison === 'famousDeaths' && <FamousDeaths deaths={famousDeaths} />}
    {comparison === 'typicalAmerican' && <TypicalAmerican events={typicalAmerican} />}
    </div>
    </div>
  );
};

export default WeeksChart;