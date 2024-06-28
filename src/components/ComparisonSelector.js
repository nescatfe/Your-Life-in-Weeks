import React from 'react';
import '../styles/ComparisonSelector.css';

const ComparisonSelector = ({ onComparisonChange }) => {
  return (
    <div className="comparison-container">
    <h2 className="chart-title">
    <span className="red">A 90-Year </span>
    <span className="blue">Human Life in Chart:</span>
    </h2>
      <select 
        className="comparison-selector"
        onChange={(e) => onComparisonChange(e.target.value)}
      >
        <option value="basic">Basic Chart</option>
        <option value="famousDeaths">Famous Person Deaths Chart</option>
        <option value="typicalAmerican">Typical American Life Chart</option>
      </select>
    </div>
  );
};

export default ComparisonSelector;