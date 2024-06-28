import React, { useState } from 'react';
import WeeksChart from './components/WeeksChart';
import BirthdateForm from './components/BirthdateForm';
import ComparisonSelector from './components/ComparisonSelector';
import { famousDeaths } from './data/famousDeaths';
import { typicalAmerican } from './data/typicalAmerican';
import './App.css';

function App() {
  const [birthdate, setBirthdate] = useState('');
  const [comparison, setComparison] = useState('basic');

  return (
    <div className="App">
    <title>Your Life in Weeks</title>
    <h1 className="chart-title">
    <span className="blue">Hidup itu </span>
    <span className="red">Singkat</span>
    </h1>
      <BirthdateForm onBirthdateChange={setBirthdate} />
      <ComparisonSelector onComparisonChange={setComparison} />
      {birthdate && (
        <WeeksChart 
          birthdate={birthdate} 
          comparison={comparison}
          famousDeaths={famousDeaths}
          typicalAmerican={typicalAmerican}
        />
      )}
      <footer className="App-footer">
    <p>Based on famous <a href="https://waitbutwhy.com/2014/05/life-weeks.html" target="_blank" rel="noopener noreferrer">Your Life in Weeks</a> Article by <a href="https://waitbutwhy.com" target="_blank" rel="noopener noreferrer">Wait but Why</a>
</p>
        <p>
          This app still under development, check out the code on <a href="https://github.com/nescatfe/Your-Life-in-Weeks" target="_blank" rel="noopener noreferrer">Github</a> by <a href="https://ubur.my.id" target="_blank" rel="noopener noreferrer">Malvi</a>
        </p>
      </footer>
    </div>
  );
}

export default App;