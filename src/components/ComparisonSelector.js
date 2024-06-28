import React from 'react';
import '../styles/ComparisonSelector.css';

const ComparisonSelector = ({ onComparisonChange }) => {
  return (
    <div className="comparison-container">
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